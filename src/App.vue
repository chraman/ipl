<template>
  <div id="app">
  <div class="row panel-header">
  	<div  class="container">
  		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
  			<div class="app-panel-heading">
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
  <div v-if="tabs" class="row pt-20 bg-tabs">
    <div class="wrapper">
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 p-0">
      <ul class="form">
        <li v-on:click="selectedTab=tabs[0]" v-bind:class="selectedTab==tabs[0] ? 'selected':''"><a class="tab1"><router-link to="/">{{ tab1 }}</router-link></a></li>
        <li v-on:click="selectedTab=tabs[1]" v-bind:class="selectedTab==tabs[1] ? 'selected':''"><a class="tab2"><router-link to="/tab2">{{ tab2 }}</router-link></a></li>
        <li v-on:click="selectedTab=tabs[2]" v-bind:class="selectedTab==tabs[2] ? 'selected':''"><a class="tab3"><router-link to="/tab3">{{ tab3 }}</router-link></a></li>
        <li v-on:click="selectedTab=tabs[3]" v-bind:class="selectedTab==tabs[3] ? 'selected':''"><a class="tab4"><router-link to="/tab4">{{ tab4 }}</router-link></a></li>
      </ul>
      </div>
      <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 p-0">
        <div class="router-wrapper">
    	     <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

import Vue from 'vue'
import router from './router'
export default {
  name: 'app',
  data () {
    return {
      heading: 'Dashboard',
      tabs: [],
      selectedTab: '',
      tab1: 'Ipl Stats',
      tab2: 'Bowler Stats',
      tab3: 'Batsman Stats',
      tab4: 'Team Stats'
    }
  },
  mounted() {
    this.tabs = ["tab1","tab2","tab3","tab4"]
    this.selectedTab = router.history.current.name
  },
}
</script>

<style>
#app {
	min-width: 380px;
}
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
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
.panel-header {
    background-image: url('./assets/bgHead.jpg');
    padding: 7px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.app-panel-heading{ 
	background: white;
	    padding-top: 0px;
      width:333px;
    padding-bottom: 0px;
    border-radius: 10px;
}
.heading{
	margin: 0px;
	font-family: "Helvetica";
    font-size: 40px;
    color: #193986;
}
.pt-20{
  padding-top:20px;
}
.p-0{
  padding:0px !important;
}
.list-active{

}
.wrapper{
  padding: 20px;
}
ul.form {
    position:relative;
    background:#fff;
    width:100%;
    margin:auto;
    padding:0;
    list-style: none;
    overflow:hidden;
    border: 1px solid #ddd;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
@media screen and (min-width: 766px) {
    ul .form {
      border-radius: 5px;
    }
    .router-wrapper{
      border-right: 5px
    }
}
  .form li a {
    padding-left:8px;
    padding-top: 8px;
    padding-bottom: 8px;
    display:block;
    overflow:hidden;
    position:relative;
    text-decoration:none;
    text-transform:uppercase;
    font-size:14px;
    color:#686868;
    
    -webkit-transition:all 0.2s linear;
    -moz-transition:all 0.2s linear;
    -o-transition:all 0.2s linear;
    transition:all 0.2s linear;     
  }

  .form li a:hover {
    background:#efefef;
  }

  .form li a.tab1 {
    border-left:5px solid #008747;
  }

  .form li a.tab2 {
      border-left:5px solid #fecf54;
  }
    
  .form li a.tab3 {
      border-left:5px solid #cf2130;
  }

  .form li a.tab4 {
      border-left:5px solid #19388A;
  } 

  .form li:first-child a:hover, .form li:first-child a {
    -webkit-border-radius: 5px 5px 0 0;
    -moz-border-radius: 5px 5px 0 0;
    border-radius: 5px 5px 0 0;
  }

  .form li:last-child a:hover, .form li:last-child a {
    -webkit-border-radius: 0 0 5px 5px;
    -moz-border-radius: 0 0 5px 5px;
    border-radius: 0 0 5px 5px;
  }

  .form li a:hover i {
    color:#ea4f35;
  }

  .form i {
    margin-right:15px;
    
    -webkit-transition:all 0.2s linear;
    -moz-transition:all 0.2s linear;
    -o-transition:all 0.2s linear;
    transition:all 0.2s linear; 
  }


  .form li.selected a {
    background:#efefef;
  }
  .router-wrapper{
    position:relative;
    background:#fff;
    width:100%;
    margin:auto;
    padding:0;
    list-style: none;
    overflow:hidden;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: 1px solid #ddd;
    padding: 20px;
    border-right: 5px solid #19388A;
  }
  .bg-tabs{
    background-image: url('./assets/bgImage.png'),linear-gradient(0deg,rgba(0,0,0,.3),transparent);
    background-size: cover;
    background-position-y: bottom;
    background-color: #0d1b47;
  }
</style>
