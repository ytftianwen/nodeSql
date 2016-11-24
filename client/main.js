/**
 * Created by yangtaofeng on 2016/11/23.
 */
import Vue from 'vue';
import App from './components/app/app.vue'

Vue.config.debug = true;

new Vue({
    el:'body',
    components:{
        app:App
    }
});