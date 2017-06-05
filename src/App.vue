<template>
  <div id="app">
  <div class="row panel-header">
  	<div  class="container">
  		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
  			<div class="panel-heading">
  				<div class="app-image">
  		 			<img style="width:100px" src="./assets/logo.png">
  				</div>
  			<div class="app-header">
  				<h1 class="heading">{{ heading }}</h1>
  			</div>
  			</div>
  		</div>
  	</div>
  </div>
  	<dashboard></dashboard>
  </div>
</template>

<script>

import Vue from 'vue'
import Dashboard from '@/components/Dashboard'
Vue.component('dashboard', Dashboard)
export default {
  name: 'app',
  data () {
    return {
      heading: 'Dashboard'
    }
  }
}
</script>

<style>
.app-header{
	position: absolute;
    padding-left: 12px;
    top: 42px;
    display: inline-block;
    background: white;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

}
.app-image{
	padding: 8px;
    display: inline-block;
    background: white;
    /* margin-right: 14px; */
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

.panel-header {
	background: #19388A;
	    padding: 7px;
}
.panel-heading{ 
	background: white;
	    padding-top: 0px;
    padding-bottom: 0px;
    border-radius: 10px;
}
.heading{
	margin: 0px;
	font-family: "Helvetica";
    font-size: 40px;
    color: #193986;
}
</style>
