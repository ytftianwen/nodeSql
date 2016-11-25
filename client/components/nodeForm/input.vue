<template>
    <div id="editUser">
        <input type="text" v-model="username" placeholder="输入用户名">
        <input type="text" v-model="userAge" placeholder="输入用户年龄">
        <button id="add" @click="addUser">添加用户</button>
    </div>
</template>
<style>
    body {

    }

</style>
<script>
    import Vue from 'vue';
    import vueResource from 'vue-resource';
    import store from '../store/userInfo'
    import url from '../urlConfig';

    Vue.use(vueResource);

    export default{
        data(){
            return {
                username: '',
                age: 0
            }
        },
        created: function () {
            this.$http.get(url.urlQueryUser).then((data) => {
                console.log('data=',JSON.stringify(data.body,null,2));
                store.commit('updateUserData',data.body)
            })
        },
        methods: {
            addUser(){
                let params = {
                    name: this.username,
                    age: this.age
                };

                this.$http.post(url.addUser, params).then((data) => {
                    store.updateUserData(data);
                })
            }
        }
    }

</script>
