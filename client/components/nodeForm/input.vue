<template>
    <div class="editUser">
        <input type="text" v-model="username" placeholder="输入用户名">
        <input type="text" v-model="userAge" placeholder="输入用户年龄">
        <button id="add" @click="addUser">添加用户</button>
    </div>
</template>
<style>
    .editUser{
        padding-top: 10px;
        padding-bottom: 15px;
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
                userAge: null
            }
        },
        methods: {
            addUser(){
                let params = {
                    name: this.username,
                    age: this.userAge
                };

                this.$http.post(url.urlAddUser, params).then((data) => {
                    store.commit('updateUserData',data.body)
                })
            }
        }
    }

</script>
