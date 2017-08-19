import Vue from 'vue'
import axios from 'axios'
const state = {
	orderList:[],
	param:{}
}
const getters = {
	orderList:state =>{
		return state.orderList;
	}
}
const actions = {
	fetchOrderList ({commit,state}){
		axios.get('/getOrderList',state.param)
		.then((res) => {
			console.log(res);
			commit('changeOrderList',res.data.list)
		}, (err) =>{
				
	 })
		
	}
}
const mutations = {
	changeOrderList(state,orderList){
		state.orderList = orderList;
	},
	updateParam(state,{key,val}){
		state.param[key]= val;
		console.log(state.param);
	}
}
export default{
	state,
	getters,
	actions,
	mutations
}
