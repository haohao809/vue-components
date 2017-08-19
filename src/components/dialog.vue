<template>
	<div class="dialog-wrap">
		<div class="cover" v-if="isShow">
			
		</div>
		<transition name="dropDown">
		<div class="dialog-content" v-if="isShow">
			<p class="close" @click="closeDialog">
				x
			</p>
			<slot></slot>
		</div>
		</transition>
	</div>
</template>

<script>
	export default{
		props:{
			isShow :{
				type:Boolean,
				default:false,
			
			}
		
		},
		methods:{
			closeDialog (){
//				this.isShow =false;  //内部组件修改外部属性值，会报错
				this.$emit('on-close'); //使用事件处理
				
			}
		
		}
	
	
	}
</script>

<style scoped>
	.dropDown-enter-active{
		transition: all .3s ease;
	}
	.dropDown-leave-cative{
		transition: all .3s ease;
	}
	.dropDown-enter{
		transform: translateY(-900px);
	}
	.dropDown-leave{
		transform: translateY(-900px);
	}
	
	.dialog-wrap{
		width: 100%;
		height: 100%;
		position: fixed;
	}
	.dialog-content{
		width: 50%;
		max-height: 50%;
		left: 50%;
		position: fixed;
		top: 20%;
		background: #fff;
		margin-left: -25%;
		padding: 1%;
		z-index: 10;
		overflow: auto;
	}
	.cover{
		width: 100%;
		height: 100%;
		background: #000;
		opacity: .3;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 5;	
	}
	.close{
		padding: 1px;
		float: right;
		cursor: pointer;
	}
	
</style>