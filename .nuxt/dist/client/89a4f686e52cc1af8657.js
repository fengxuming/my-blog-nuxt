(window.webpackJsonp=window.webpackJsonp||[]).push([[3,6],{352:function(t,e,s){var n=s(361);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,s(19).default)("08bb49d4",n,!0,{})},355:function(t,e,s){"use strict";s.r(e),s.d(e,"formatDate",function(){return n});s(238),s(50);function n(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var s={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var n in s)if(new RegExp("(".concat(n,")")).test(e)){var r=s[n]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?r:a(r))}return e}function a(t){return("00"+t).substr(t.length)}},360:function(t,e,s){"use strict";var n=s(352);s.n(n).a},361:function(t,e,s){(t.exports=s(18)(!1)).push([t.i,".code-toolbar{width:100%}",""])},369:function(t,e,s){"use strict";s.r(e);s(36);var n=s(5),a=s.n(n),r=s(355),o={data:function(){},filters:{formatDate:function(t){var e=new Date(t);return Object(r.formatDate)(e,"yyyy-MM-dd hh:mm:ss")}},computed:{post:function(){return this.$store.state.postDetail}},asyncData:function(){var t=a()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.store.dispatch("getPost",e.params.postId);case 2:return t.abrupt("return",{project:"nuxt"});case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),mounted:function(){}},i=(s(360),s(13)),c=Object(i.a)(o,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"site-main outer",staticStyle:{background:"#f2f2f2f2"},attrs:{id:"site-main"}},[s("div",{staticClass:"inner"},[s("article",{staticClass:"post-full post no-image",staticStyle:{"max-width":"1000px",margin:"0 auto",background:"#ffffff",padding:"25px","min-height":"1200px"}},[s("header",{staticClass:"post-full-header",staticStyle:{"text-align":"center"}},[s("section",{staticClass:"post-full-meta"},[s("time",{staticClass:"post-full-meta-date"},[t._v(t._s(t._f("formatDate")(t.post.dateCreated)))])]),t._v(" "),s("h1",{staticClass:"post-full-title",staticStyle:{"font-size":"30px"}},[t._v(t._s(t.post.title))])]),t._v(" "),s("section",{staticClass:"post-full-content"},[s("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.post.markdown)}})])])])])},[],!1,null,null,null);c.options.__file="_postId.vue";e.default=c.exports}}]);