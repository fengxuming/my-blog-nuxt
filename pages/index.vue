<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
     
      <div class="" style="width: 100%;
        height: 400px;
        background: #090a0b no-repeat 50%;
        background-size: cover;
        color: #fff;
        background-image: url(https://berlindiary.info:3001/public/images/acg-267c3ba67b269968a1a1c6f9e88ff8f6.jpg);"></div>
      <div class="title">
        <h2>柏林日记的博客</h2>
        <span>随笔，记录</span>
      </div>
       <a-menu
        v-model="current"
        mode="horizontal"
        class="nav" >
        <a-menu-item>
          <a href="https://berlindiary.info/" style="display: unset;
          color: #ffffff;
          padding: 0;font-weight: bold;">首页</a>
        </a-menu-item>
        <a-menu-item >
          <a href="https://berlindiary.info/resolve" style="display: unset;
          color: #ffffff;
          padding: 0;font-weight: bold;">新番速递</a>
        </a-menu-item>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">开源书籍</span>
          <a-menu-item ><a href="https://berlindiary.info/books/es6tutorial/">《ECMAScript 6 入门》</a></a-menu-item>
          <a-menu-item ><a href="https://berlindiary.info/books/docker_practice/">《docker从入门到实践》</a></a-menu-item>
        </a-sub-menu>
       
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 0px">
       <div style="padding:20px;padding-top: 0px;margin: 0 auto;
        max-width: 1200px;
        margin-top: -84px;
        width: 100%;">
         <a-row :gutter="30">
           <a-col class="post-item"  :sm="24" :md="12" :lg="8" v-for="post in posts" :key="post.id">
              <a :href="`/detail/`+post._id">
                <a-card :title="post.title" style="border-radius: 5px;box-shadow: 8px 14px 38px rgba(39,44,49,.06),1px 3px 8px rgba(39,44,49,.03);">
                    <!-- <p style="height:400px;overflow:hidden" >
                      {{post.markdown}}
                    </p> -->
                    <div class="markdown-body"  style="height:400px;overflow:hidden" v-html="post.markdown">
                       
                    </div>
                    
                </a-card>
              </a>
           </a-col>
          
           
         </a-row>
          
        <div style="margin-top:20px">
            <a-pagination showQuickJumper :defaultCurrent="1" :total="totalNumber" @change="onChange" :pageSize="9"/>
        </div>
      
      
    </div>
    </a-layout-content>
    
  </a-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  
  components: {
    Logo
  },
  data () {
    return {
      current: ['mail'],
    }
  },
  computed:{
    totalNumber(){
      return this.$store.state.postTotalNumber;
    },
    counter(){
      return this.$store.state.counter;
    },
    posts(){
      return this.$store.state.posts;
    }
  },
  mounted(){
    
  },
  methods:{
    onChange(pageNumber) {
      console.log('Page: ', pageNumber);
      this.$store.dispatch("getPosts",pageNumber);
    }
  },
  
  async asyncData (context) {
    
    await context.store.dispatch("getPosts",1);
  
    return { project: 'nuxt' }
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.ant-layout-header{
    background: #ffffff;
    margin: 0px;
    padding: 0;
    border-bottom: 1px solid #eeeeee;
}
.ant-card-hoverable:hover{
    box-shadow: 0 2px 8px rgba(0,0,0,.49);
    
}
.ant-card-hoverable{
    margin-top: 10px;
}
.post-item:hover{
    /* box-shadow: 8px 28px 50px rgba(39,44,49,.07),1px 6px 12px rgba(39,44,49,.04); */
    transition: all .4s ease;
    transform: translate3D(0,-1px,0) scale(1.02);
}
.post-item{
    margin-top: 30px;
    border-radius: 5px;
}
.ant-layout-header{
    height: 400px;
    position: relative;
}
.ant-menu-item{
    cursor: pointer;
    border-bottom: none;
}
.ant-menu-item:hover{
    border-bottom: none;
}
.ant-menu-submenu{
    border-bottom: none;
}
.ant-menu-submenu:hover{
    border-bottom: none;
}
.ant-pagination{
  text-align: right;
}

.nav{
    position: absolute;
    background: unset;
    border: none;
    color: #ffffff;
    left: 0;
    right: 0;
    top: 289px;
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    z-index: 999999;
}
.search-input{
    position: absolute;
    right: 64px;
    height: 45px;
}
.search-input input{
   height: 28px;
}

.title{
    position: absolute;
    top: 150px;
    left: calc(50% - 175px);
    color: #ffffff;
    width: 350px;
    text-align: center;
}
.title h2{
    color: #ffffff;
    font-weight: bold;
    font-size: 44px;
    margin-bottom: 0;
}

.title span{
    font-size: 28px;
    position: absolute;
    text-align: center;
    left: 0;
    right: 0;
}
nav li:visited, a:link {
  color: #607D8B;
}
nav li:hover {
  color: #039be5;
  background-color: #CFD8DC;
}
nav li.active {
  color: #039be5;
}
.post-full-content pre{
  
}
.ant-pagination-item{
  padding-left: 0;
}
.anticon{
  vertical-align: middle;
}
</style>
