<template>
    <div style="display:flex;justify-content: center; min-height:1000px;align-items: center;">
       
        <form action="/sp/resume" method="POST">
       
            <div style="color:red;" v-if="codeIsOk">请输入正确的查看码</div>
            <div>请输入查看码</div>
            <a-input v-model="code" name="code" placeholder="请输入查看码" style="margin-top:20px;"/>
            <a-button
                type="primary"
                html-type="submit"
                style="margin-top:20px;"
                
            >
                提交
            </a-button>
             
        </form>

    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            code:""
        }
    },
    computed:{
        codeIsOk(){
            return this.$store.state.codeIsOk;
        }
    },
    methods:{
        
    },
    asyncData (context) {
        // console.log(context.query)
        context.store.commit("setCodeIsOk",context.query.isOk);
    }
}
</script>

