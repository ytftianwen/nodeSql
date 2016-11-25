<template>
    <div>
        <h1>{{msg}}</h1>
        <add_user></add_user>
        <show_user></show_user>
    </div>
</template>
<style>
    body{
    }

</style>
<script>
    import add_user from '../nodeForm/input.vue';
    import show_user from '../nodeForm/viewShow.vue';
    export default{
        data(){
            return{
                msg:'Hello vue,This is app'
            }
        },
        components:{
            add_user,
            show_user
        },

    }

</script>
