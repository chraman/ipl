// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueResource from 'vue-resource'
//import router from './router'
import Backbone from 'backbone'
Vue.use(VueResource);

var List = Backbone.Collection.extend({
    model: Item,

    url: "https://chraman.github.io/ipl/static/matches.json",

    parse: function(response) {
        return response.results;
    }
});

var list = new List();
list.fetch().then(
  (response)=>{
  console.log(response)
  },
  (error) => {
    console.log(error)
  })


Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
//  router,
beforeCreate: function() {
},
  template: '<App/>',
  components: { App }
})
