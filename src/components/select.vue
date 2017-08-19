<template>
	<div class="select">
		<div class="select-show" @click="toggle">
			<span>{{selectoptions[nowIndex].label}}</span>
			<div class="arrow" ></div>
		</div>
		<div class="select-options" v-if="isDrop">
			<ul>
				<li v-for='(item,index) in selectoptions' @click="selectValue(item.value)">{{item.label}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import  bus  from '../bus/bus'
	export default{
		props:{
			selectoptions:{
				type:Array,
				default: [{
		        label: 'test',
		        value: 0
		      }]
			}
		},
		data(){
			return{
				isDrop:false,	
				nowIndex: 0
				
			}
			
		},
		methods:{
			toggle(event){
				bus.$emit('globalClick')
				this.isDrop = !this.isDrop					
				event.stopPropagation()
				
			},
			selectValue(value){
				this.nowIndex = value;
//				this.isDrop = false;
				this.$emit('on-change',this.selectoptions[this.nowIndex]);
			},

		},
		mounted(){
			bus.$on('globalClick',()=>{
				this.isDrop = false;
			})
		},
	}
</script>

<style scoped>
	.select-show{
		/*width: 65px;*/
		height: 17px;
		line-height: 17px;
		border: 1px solid #E3E3E3;
		cursor: pointer;
		padding: 5px 15px 5px 10px;
		position: absolute;
		top: 7px;
		background: #fff;
	}
	ul{
		border: 1px solid #E3E3E3;
		/*width: 73px;*/
		position: absolute;
		margin-top: 35px;
		z-index: 10;
		background: #FFFFFF;
	}
	li{
		line-height: 20px;
		cursor: pointer;
		padding: 5px 15px 5px 14px;
	}
	li:hover{
		background: #e3e3e3;
	}
	.arrow {
		 display: inline-block;
		 border-left: 4px solid transparent;
		 border-right: 4px solid transparent;
		 border-top: 5px solid #e3e3e3;
		 width: 0;
		 height: 0;
		 margin-top: -1px;
		 margin-left: 6px;
		 margin-right: -14px;
		 vertical-align: middle;
	}
</style>