<template>
    <main id="site-main" class="site-main outer">
        <div class="inner">
            <article class="post-full post no-image">
                <header class="post-full-header">
                    <section class="post-full-meta">
                        <time class="post-full-meta-date" >{{post.published_at | formatDate}}</time>
                    </section>
                    <h1 class="post-full-title">{{post.title}}</h1>
                </header>
                <section class="post-full-content" >
                    <div class="post-content" v-html="post.html"> 
                    </div> 
                </section>
            
            </article>
        </div>
    </main>
</template>
<script>
import 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';

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
        await context.store.dispatch("getPost",context.params.postId);
        return { project: 'nuxt' }
    },
    mounted(){
        Prism.highlightAll();
    }
}
</script>
<style>
.post-full-content pre{
    background:unset;
}
.code-toolbar{
    width:100%;
}
</style>
