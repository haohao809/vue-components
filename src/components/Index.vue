<template>
  <div class="detail" >
		<div class="left">
			<div class="list">
				<img :src="prodectIcon"/>
				<ul>
					<router-link v-for="(item,index) in products" tag="li" :to="{ path : item.path }">{{item.name}}</router-link>
				</ul>
			</div>
		</div>
		<div class="right">
			<keep-alive>
        <router-view></router-view>
      </keep-alive>
		</div>
  </div>
</template>

<script>
	
export default {
  name: 'detail',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      products: [
        {
          name: '数据统计',
          path: 'count',
          icon: require('../assets/images/1.png'),
          active: false
        },
        {
          name: '数据预测',
          path: 'forecast',
          active: false
        },
        {
          name: '流量分析',
          path: 'analysis',
          active: false
        },
        {
          name: '广告发布',
          path: 'publish',
          active: false
        }
      ],
       imgMap: {
        '/count': require("../assets/images/1.png"),
        '/forecast': require("../assets/images/2.png"),
        '/analysis': require("../assets/images/3.png"),
        '/publish': require("../assets/images/4.png")
      },
    }
  },
computed:{
	prodectIcon (){
		return this.imgMap[this.$route.path];
	}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.detail{
	width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 20px;
}
.left{
	width: 200px;
	float: left;
	text-align: center;
}
.right{
	float: left;
  width: 980px;
  margin-left: 20px;
}
.list{
	background: #fff;
  padding: 20px 0;
}
.list li{
	text-align: left;
  padding: 10px 15px;
  cursor: pointer;
}
</style>
