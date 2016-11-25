/**
 * Created by yangtaofeng on 2016/11/24.
 */
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        userData: []
    },
    mutations: {
        updateUserData(state, data){
            state.userData = data;
        }
    }
});

export default store;