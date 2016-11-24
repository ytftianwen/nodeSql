<template>
    <div>
        <h1>{{msg}}</h1>
        <node_form></node_form>
    </div>
</template>
<style>
    body{
    }

</style>
<script>
    import nodeForm from '../nodeForm/view.vue'
    export default{
        data(){
            return{
                msg:'hello vue,this is app'
            }
        },
        components:{
            node_form:nodeForm
        },

    }

</script>
