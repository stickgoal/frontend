import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Hello from "./pages/Hello";
import List from "./pages/List";

//启动debug模式
Vue.config.debug = true;


Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {
      path:'/first',
      component:Hello
    },{
      path:'/second',
      component:List
    }
  ]
})


new Vue({
  router:router,
  // el: '#app',
  render: h => h(App)
}).$mount("#app")
