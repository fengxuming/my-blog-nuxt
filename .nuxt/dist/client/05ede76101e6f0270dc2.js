(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{560:function(t,e,n){var o=n(570);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(35).default)("7aed9dc2",o,!0,{})},569:function(t,e,n){"use strict";var o=n(560);n.n(o).a},570:function(t,e,n){(t.exports=n(34)(!1)).push([t.i,".content textarea{width:800px;height:800px}",""])},587:function(t,e,n){"use strict";n.r(e);var o=n(47),a=n.n(o),i={data:function(){return{title:"",markdown:""}},methods:{addPost:function(){var t=this.$localStorage.get("token");a()({url:"https://berlindiary.info:3003/posts",headers:{token:t},method:"post",data:{title:this.title,markdown:this.markdown}}).then(function(t){console.log(t)})}}},s=(n(569),n(27)),l=Object(s.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"edit-blog"},[n("div",[n("div",{staticClass:"title"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"content"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],domProps:{value:t.markdown},on:{input:function(e){e.target.composing||(t.markdown=e.target.value)}}})]),t._v(" "),n("div",[n("button",{on:{click:function(e){t.addPost()}}},[t._v("增加")])])])])},[],!1,null,null,null);l.options.__file="addBlog.vue";e.default=l.exports}}]);