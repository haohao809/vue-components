<template>
	<div class="orderList">
		<h2>您的产品</h2>
		<div class="select-data">
			<div class="select-product">
				选择产品:
			</div>
			<div class="peoductCom">
				<v-select :selectoptions="products" @on-change='prodectselect'></v-select>
			</div>
			<div class="startTime">
				开始日期:
			</div>
			<div class="stcom">
				<datepicker language="zh"></datepicker>
			</div>
			<div class="endTime">
				结束日期:
			</div>
			<div class="edcom">
				<datepicker language="zh"></datepicker>
			</div>
			<div class="keyword">
				关键词:
			</div>
			<input type="text" />
		</div>
		<div class="tableList">
			<table border="" cellspacing="" cellpadding="">
				<tr><th v-for="head in tableHeads" @click="orderBy(head)" :class="{active: head.active}">{{head.label}}</th></tr>
				<tr v-for="item in tableData">
					<td v-for="head in tableHeads">{{ item[head.key] }}</td>
				</tr>
			</table>
		</div>
		
	</div>
</template>

<script>
	import VSelect  from '../components/select';
	import Datepicker from 'vuejs-datepicker';
	export default{
		components:{
			VSelect,
			 Datepicker
		},
		methods :{
			prodectselect(val){
				this.$store.commit('updateParam',{
					key: 'productId',
					val: val.value
				});
				this.$store.dispatch('fetchOrderList');
			},
			orderBy(head){
				this.tableHeads.map((item) =>{
					if(item.active||item.active==undefined)
						this.$set(item,'active',false)
				})
				this.$set(head,'active',true);
			}
		},
		mounted(){
			this.$store.dispatch('fetchOrderList');
			
			console.log(this.$store);
		},
		computed:{
			tableData(){
				return this.$store.getters.orderList
			}
		},
		data(){
			return {
				 products: [
			        {
			          label: '数据统计',
			          value: 0
			        },
			        {
			          label: '数据预测',
			          value: 1
			        },
			        {
			          label: '流量分析',
			          value: 2
			        },
			        {
			          label: '广告发布',
			          value: 3
			        }
			      ],
			      tableHeads: [
			        {
			          label: '订单号',
			          key: 'orderId'
			        },
			        {
			          label: '购买产品',
			          key: 'product'
			        },
			        {
			          label: '版本类型',
			          key: 'version'
			        },
			        {
			          label: '有效时间',
			          key: 'period'
			        },
			        {
			          label: '购买日期',
			          key: 'date'
			        },
			        {
			          label: '数量',
			          key: 'buyNum'
			        },
			        {
			          label: '总价',
			          key: 'amount'
			        }
			      ],
//				tableData:[
//					{
//						amount: "500元",
//						buyNum: 2,
//						date:"2016-10-10",
//						orderId:"ddj123",
//						period:"1年",
//						product:"数据统计",
//						version:"高级版"
//					},
//					{
//						amount: "2200元",
//						buyNum: 1,
//						date:"2016-5-2",
//						orderId:"asd231",
//						period:"2年",
//						product:"流量分析",
//						version:"户外版"
//					},
//					{
//						amount: "7890元",
//						buyNum: 12,
//						date:"2016-8-3",
//						orderId:"a32231",
//						period:"2年",
//						product:"广告发布",
//						version:"商铺版"
//					},				
//				]
			}
		}
	}
</script>

<style scoped>
	.orderList{
		width: 1200px;
		min-height: 800px;
		margin: 20px auto;
		overflow: hidden;
		
	}
	h2{
		font-size: 20px;
		font-weight: bold;
		margin-bottom: 20px;
	}
	.select-product,.startTime,.endTime,.keyword{
		font-size: 16px;
		padding: 10px 20px;
		display: inline-block;
		width: 70px;
	}
	.peoductCom{
		display: inline-block;
		position: relative;
		width: 100px;
		height: 26px;
	}
	.stcom,.edcom{
		display: inline-block;
		position: relative;
		width: 160px;
		height: 26px;
		margin-right: 20px;
	}
	.tableList{
		margin-top: 20px;
	}
	table{
		width: 100%;
		background: #fff;
	}
	th{
		background: #4fc08d;
		color: #fff;
		cursor: pointer;
		border: 1px solid #4FC08D;
		text-align: center;
    	padding: 10px 0;
	}
	td{
		text-align: center;
    	padding: 10px 0;
    	border: 1px solid #e3e3e3;
	}
	.tableList th.active{
		background: #35495e;
	}
</style>