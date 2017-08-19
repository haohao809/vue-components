<template>
	<div class="count">
		<div class="minus" @click="minus">
			-
		</div>
	   <div class="inputCounter">
			<input type="text" v-model="number" @keyup="inputNumber"/>
		</div>
		<div class="plus" @click="plus">
			+
		</div>

	</div>
</template>

<script>
	export default{
		props: {
		    max: {
		      type: Number,
		      default: 5
		    },
		    min: {
		      type: Number,
		      default: 1
		    }
		  },
		data(){
			return {
				number:this.min,				
			}
		},
		 watch: {
			    number () {
			      this.$emit('on-change', this.number)
			    }
			  },
		methods:{
			minus(){
				this.number = this.number-1;
				if(this.number<this.min){
					this.number = this.min;
				}
			},
			plus(){
				this.number = this.number+1;
				if(this.number>this.max){
					this.number = this.max;
				}
			},
			inputNumber(){
				if(this.number < this.min &&this.number!=''){
					this.number = this.min;
				}
				if(this.number>this.max){
					this.number = this.max;
				}
				if (typeof this.number === 'string') {
				       this.number = Number(this.number.replace(/\D/g, ''))
				  }
			}
		}
	}
</script>

<style scoped>
	.count{
		display: inline-block;
		width: 100px;
		position: absolute;
		top: 8px;
	}
	.inputCounter input{
		width: 23px;
		float: left;
		height: 23px;
		text-align: center;
		border: none;
		border-top: 1px solid #e3e3e3;
    	border-bottom: 1px solid #e3e3e3;
    	outline: none;
	}
	.plus,.minus{
		float: left;
		width: 25px;
		height: 25px;
		line-height: 25px;
		border: 1px solid #e3e3e3;	
		text-align: center;
  		cursor: pointer;	
	}
	.plus:hover,.minus:hover{
		 border-color: #4fc08d;
		 background: #4fc08d;
		 color: #fff;
	}
</style>