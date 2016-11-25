<template>
    <div>
        <table>
            <tr>
                <th>姓名</th>
                <th>年龄</th>
                <th>id</th>
                <th>操作</th>
            </tr>
            <tr v-for="item in userData">
                <td v-text="item.name"></td>
                <td v-text="item.age"></td>
                <td v-text="item.id"></td>
                <td><a title="删除用户:{{item.name}}" @click="deleteUser(item.id)">×</a></td>
            </tr>
        </table>
    </div>
</template>
<style>
    body {

    }
</style>
<script>
    import Vue from 'vue';
    import vueResource from 'vue-resource';
    import store from '../store/userInfo';
    import url from '../urlConfig';


    Vue.use(vueResource);

    export default{
        data(){
            return {}
        },
        created: function () {
            this.$http.get(url.urlQueryUser).then((data) => {
                store.commit('updateUserData',data.body);
            })
        },
        computed: {
            userData(){
                return store.state.userData
            }
        },
        methods: {
            deleteUser(id){
                this.$http.post(url.urlDeleteUser, {id: id}).then((data) => {
                    store.updateUserData(data);
                })
            }
        }

    }
</script>
