<template>
    <div class="edit-blog">
        <div>
            <div class="title">
                <input v-model="title">
            </div>
            <div class="content">
                <textarea v-model="markdown">

                </textarea>
            </div>
            <div>
                <button @click="addPost()">增加</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            title:"",
            markdown:"",
        }
    },
    methods:{
        addPost(){
            // this.$localStorage.get('token');
            let token = this.$localStorage.get('token');
            axios({
                url:"https://berlindiary.info:3003/posts",
                headers: {'token':token},
                method:"post",
                data:{
                    title:this.title,
                    markdown:this.markdown
                }
            }).then((response)=>{
                console.log(response);
            })
        }
    }
}
</script>
<style>
.content textarea{
    width: 800px;
    height: 800px;
}
</style>

