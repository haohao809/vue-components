<template>
  <div id="app" @click="globalEvent">
   	<div class="app-head">
   		<div class="app-head-line">
   			<img src="./assets/logo.png" />
   		</div>
   	</div>
   	<div class="container">
    <router-view></router-view>
    </div>
    <div class="app-foot">
    	<p>Copyright © 1999-2017 vueComponenets</p>
    </div>
  </div>
</template>

<script>
	import  bus  from './bus/bus'
export default {
	
  name: 'app',
   methods:{
  	globalEvent(){
  		bus.$emit('globalClick');
  	}
  },
}
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.app-head{
	width:100%;
	height: 90px;
	line-height: 90px;
	background: #363636;
	color: #b2b2b2;
}
.app-head-line img{
	height: 80px;
	vertical-align: middle;
	margin-left: 20px;
}
.container{
	width: 1300px;
	margin: 0 auto;
}
.app-foot{
	width:100%;
	height: 70px;
	line-height: 70px;
	background: #DCDCDC;
	text-align: center;
	font-size: 12px;
	margin-top: 30px;
}
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
