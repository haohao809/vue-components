<template>
	<div class="choose">
		<ul>
			<li v-for='(item,index) in choosetime' :class="{active:nowIndex==index}" @click="choose(index)">{{item.label}}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:{
			choosetime:{
				type:Array,
				default:[{
				  label:'test',
				  value:0
				}]
			}
		},
		data(){
			return{
				nowIndex:0,
			}
		},
		methods:{
			choose(index){
				this.nowIndex = index;
				this.$emit('on-change',this.choosetime[this.nowIndex]);
			}
		},
		
	}
</script>

<style scoped>
	.choose{
		position: absolute;
		top: 7px;
	}
	li{
		width: 40px;
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