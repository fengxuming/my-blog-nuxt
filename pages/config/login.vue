<template>
    <div>
        <div>
            <div>用户名</div>
            <div class="username">
                <input v-model="username">
            </div>
        </div>
        <div>
            <div>密码</div>
            <div class="password">
                <input type="password" v-model="password">
            </div>
        </div>
        <div>
            <button @click="login()">登录</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            username:"",
            password:""
        }
    },
    methods:{
        login(){
            axios.post("https://berlindiary.info:3003/login",{
                username:this.username,
                password:this.password
            }).then((response)=>{
                console.log(response)
                if(response.data.success){
                    this.$localStorage.set('token', response.data.access_token);
                    this.$localStorage.set("username",response.data.user.username);
                    this.$localStorage.set("role",response.data.user.role);
                    this.username = response.data.user.username;
                    this.token = response.data.access_token;
                    
                    window.location.reload()
                }else{
                    
                }
            })
        }
    }
}
</script>
<style>

</style>
