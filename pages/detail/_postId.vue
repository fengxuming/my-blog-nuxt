<template>
    <main id="site-main" class="site-main outer" style="background: #f2f2f2f2;">
        <div class="inner">
            <article class="post-full post no-image" style="max-width: 1000px;margin: 0 auto;background: #ffffff;padding: 25px;">
                <header class="post-full-header" style="text-align: center;">
                    <section class="post-full-meta">
                     
                        <time class="post-full-meta-date" >{{post.dateCreated | formatDate}}</time>
                    </section>
                    <h1 class="post-full-title" style="font-size: 30px;">{{post.title}}</h1>
                </header>
                <section class="post-full-content" >
                   
                    <div class="markdown-body" v-html="post.markdown">
                       
                    </div>
                    
                </section>
            
            </article>
        </div>
    </main>
</template>
<script>


//时间格式化
import {formatDate} from '../util/formatTime.js';
export default {
    data(){

    },
    filters:{
        formatDate(time) {
            let date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
        }
    },
    computed:{
        post(){
            return this.$store.state.postDetail;
        }
    },
    async asyncData (context) {
        
        //context.params.postId
        await context.store.dispatch("getPost",context.params.postId);
        return { project: 'nuxt' }
    },
    mounted(){
        
    }
}
</script>
<style>

.code-toolbar{
    width:100%;
}
</style>
