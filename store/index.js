import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    //博文总数
    postTotalNumber:0,
    //博文列表
    posts:[],
    //博文详情
    postDetail:{}
  },
  mutations: {
    //设置博文总数
    setPostTotalNumber(state,totalNumber){
      state.postTotalNumber = totalNumber;
    },
    //设置博文列表
    setPosts(state,posts){
      state.posts = posts;
    },
    //设置博文详情
    setPostDetail(state,post){
      state.postDetail = post;
    }
  },
  actions:{
      //获取博文列表
      async getPosts(context,pageNumber){
        let res = await axios.get("https://berlindiary.info:3003/posts/",{
          params:{
            
            maxSize:9,
            offset:(pageNumber-1)*9
          }
        });
        context.commit('setPosts',res.data.datas)
        context.commit("setPostTotalNumber",res.data.totalRecords);
          
      },
      //获取博文详情
      async getPost(context,postId){
        
        let res = await axios.get("https://berlindiary.info:3003/posts/"+postId,{
          params:{
            client_id:"ghost-frontend",
            client_secret:"51cc83e1250f",
            formats:"html,plaintext",
            
          }
        });
        context.commit('setPostDetail',res.data)
          
      },

  }
})

export default store