<template>
	<div class="analsis">
		<div class="title">
			<h2>数据分析</h2>
			<p>
			数据分析是指用适当的统计分析方法对收集来的大量数据进行分析，提取有用信息和形成结论而对数据加以详细研究和概括总结的过程。这一过程也是质量管理体系的支持过程。在实用中，数据分析可帮助人们作出判断，以便采取适当行动。	
			</p>
		</div>
		<div class="components">
			<div class="saleNumber">
				<div class="salsename">
					购买数量 ：
				</div>
				<div class="saleComponent">
					<v-counter @on-change="changeNumber('buynum',$event)"></v-counter>
				</div>
			</div>
			<div class="productType">
				<div class="type">
					产品数量 ：
				</div>
				<div class="typeComponent">
					<v-select :selectoptions='buyTypes' @on-change="productNumber('buynum',$event)"></v-select>
				</div>
			</div>
			<div class="activeTime">
				<div class="time">
					有效时间 ：
				</div>
				<div class="timeComponent">
					<v-choose :choosetime = 'periodList' @on-change="activetime('time',$event)"></v-choose>
				</div>
			</div>
			<div class="productVersion">
				<div class="version">
					产品版本 ：
				</div>
				<div class="versionComponent">
					<v-multiply-choose :chooseversion = 'versionList' @on-change="chooseVersion('version',$event)"></v-multiply-choose>
				</div>
			</div>
			<div class="totalPrice">
				<div class="price">
					总价 ：
				</div>
				<div class="priceValue">
					{{price}} 元
				</div>
			</div>
			<div class="buyNow">
				<div class="buy">
					&nbsp;
				</div>
				<div class="buyValue" @click="openDialog">
					立即购买
				</div>
			</div>
		</div>
		<div class="desc">
			 <h2>产品说明</h2>
        <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

        <h3>用户行为指标</h3>
        <ul>
          <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
          <li>用户在网站的停留时间；</li>
          <li>用户来源网站（也叫“引导网站”）；</li>
          <li>用户所使用的搜索引擎及其关键词；</li>
          <li>在不同时段的用户访问量情况等。</li>
        </ul>

        <h3>浏览网站方式</h3>
        <ul>
          <li>用户上网设备类型</li>
          <li>用户浏览器的名称和版本</li>
          <li>访问者电脑分辨率显示模式</li>
          <li>用户所使用的操作系统名称和版本</li>
          <li>用户所在地理区域分布状况等</li>
        </ul>
		</div>
		<v-dialog :is-show="isShowPayDialog" @on-close="closeDialog">
			<table class="buyList">
				<tr>
					<th>购买数量</th>
		            <th>产品类型</th>
		            <th>有效时间</th>
		            <th>产品版本</th>
		            <th>总价</th>
				</tr>
				<tr>
					<td>{{number}}</td>
					<td>{{product.label}}</td>
					<td>{{period.label}}</td>
					<td>{{productversion}}</td>
					<td>{{price}}</td>
				</tr>
			</table>
			<h2 class="choosebank">请选择银行</h2>
		<v-bank ></v-bank>
		<div class="buyValue" @click="openbuy">
					确认购买
		</div>
		</v-dialog>
		<v-dialog :is-show="checkPay" @on-close="closeDialog">
			<p class="checkStatus">请检查你的支付状态
				<div class="paySuc" @click="paycomplete">支付成功</div>
				<div class="payErr">支付失败</div>
			</p>
		</v-dialog>
		<v-dialog :is-show="paycom" @on-close="closeDialogVouter">
			<p>已购买成功!</p>
		</v-dialog>
	</div>
</template>

<script>
	import VCounter from '../components/counter'
	import VSelect  from '../components/select'
	import VChoose  from '../components/choose'
	import VMultiplyChoose  from '../components/multiplychoose'
	import vDialog from '../components/dialog'
	import VBank from '../components/banker'
	export default{
		components:{
			VCounter,
			VSelect,
			VChoose,
			VMultiplyChoose,
			vDialog:vDialog,
			VBank
		},
		data(){
			return{
				isShowPayDialog :false,
				checkPay:false,
				paycom:false,
				buyTypes: [
			        {
			          label: '入门版',
			          value: 0
			        },
			        {
			          label: '中级版',
			          value: 1
			        },
			        {
			          label: '高级版',
			          value: 2
			        }
			      ],
			      periodList: [
			        {
			          label: '半年',
			          value: 0
			        },
			        {
			          label: '一年',
			          value: 1
			        },
			        {
			          label: '三年',
			          value: 2
			        }
			      ],
			      versionList: [
			        {
			          label: '客户版',
			          value: 0
			        },
			        {
			          label: '代理商版',
			          value: 1
			        },
			        {
			          label: '专家版',
			          value: 2
			        }
			      ],
			      price: 678,
			      number : 1,
			      product: {},
			      period: {},
			     version:[],
				 productversion:{}
			}
		},
		methods:{
			openDialog(){
			
				this.isShowPayDialog = true;
			},
			closeDialog(){
				this.isShowPayDialog = false;
				this.checkPay = false;
				this.paycom = false;
				
			},
			closeDialogVouter(){
				this.paycom = false;
				this.$router.push({path:'/OrderList'});
			},
			changeNumber(attr,val) {
///				console.log(attr);
//				console.log(val);
				this.number = val;
			},
			productNumber(attr,val) {
//				console.log(val);
				this.product = val;
			},
			activetime(attr,val) {
				console.log(val);
				this.period = val;
			},
			chooseVersion(attr,val){
				console.log(val);
				this.version = [];
				for(var i=0;i<val.length;i++){
					this.version.push(this.versionList[val[i]].label);
				}
				console.log(this.version);
				this.productversion = this.version.join();
			},
			openbuy(){
				this.isShowPayDialog = false;
				this.checkPay = true;
			},
			paycomplete(){
				this.checkPay = false;
				this.paycom = true;
			}
		},
		mounted () {
			this.product = this.buyTypes[0];
			this.period = this.periodList[0];
			this.productversion = this.versionList[0].label;
		}
	}
</script>

<style scoped>
.title ,.components{
	background: #FFFFFF;
}
h2,h3{
	font-size: 20px;
	padding: 20px;
}
.title p{
	background: #f7fcff;
	color: #999;
	padding: 10px 20px;
	line-height: 25px;
}
.desc{
	width: 100%;
	background: #FFFFFF;
	margin-top: 30px;
}
.desc p{
	padding: 10px 20px;
	line-height: 25px;
}
h3{
	font-weight: bold;
}
.desc li{
	padding: 5px 20px;
	line-height: 10px;
}
.components{
	padding-top: 20px;
}
.saleNumber,.productType,.activeTime.productVersion,.totalPrice,.buyNow{
	padding-bottom: 15px;
}
.salsename,.type,.time,.version,.price,.buy{
	font-size: 16px;
	padding: 10px 20px;
	display: inline-block;
	width: 100px;
}
.saleComponent,.typeComponent,.timeComponent,.versionComponent,.priceValue,.buyValue{
	display: inline-block;
	position: relative;
	width: 300px;
	height: 26px;
}
.buyValue,.paySuc,.payErr{
	width: 80px;
	height: 20px;
	padding: 10px;
	background: #4fc08d;
	color: #fff;
	text-align: center;
	line-height: 20px;
	margin-bottom: 10px;
	cursor: pointer;
}
.buyList{
	margin-top: 20px;
	width: 100%;
}
.buyList th{
	background: #4FC08D;
	color: #fff;
	border: 1px solid #4FC08D;
	padding: 5px 0;
}
.buyList td{
	padding: 10px;
	text-align: center;
	border: 1px solid #e3e3e3;
}
.choosebank{
	font-size: 16px;
	font-weight: bold;
}
.checkStatus{
	font-size: 16px;
	font-weight: bold;
	padding: 10px;
}
</style>