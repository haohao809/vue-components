<template>
	<div class="choose">
		<ul>
			<li v-for='(item,index) in chooseversion' :class="{active:nowIndexs.indexOf(index)!=-1}" @click="choose(index)">{{item.label}}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:{
			chooseversion:{
				type:Array,
				default:[{
				  label:'test',
				  value:0
				}]
			}
		},
		data(){
			return{
				nowIndexs:[0],
			}
		},
		methods:{
			choose(index){
				if(this.nowIndexs.indexOf(index)==-1)
					this.nowIndexs.push(index);
				else
				 {
				 	let i = this.nowIndexs.indexOf(index);
				    this.nowIndexs.splice(i,1);
				 	
				 }
//				 console.log(this.nowIndexs); 
				this.$emit('on-change',this.nowIndexs);	
				
			}
		}
		
	}
</script>

<style scoped>
	.choose{
		position: absolute;
		top: 7px;
	}
	li{
		width: 80px;
		height: 25px;
		border: 1px solid #e3e3e3;
		float: left;
		border-radius: 2px;
		margin-right: 10px;
		text-align: center;
		line-height: 25px;
	}
	li:hover{
		cursor: pointer;
	}
	.active{
		border-color: #4fc08d;
		background: #4fc08d;
		color: #fff;
	}
</style>