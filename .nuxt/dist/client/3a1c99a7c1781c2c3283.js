(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{559:function(e,s,a){var t=a(568);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,a(35).default)("16bdbfe3",t,!0,{})},567:function(e,s,a){"use strict";var t=a(559);a.n(t).a},568:function(e,s,a){(e.exports=a(34)(!1)).push([e.i,"",""])},588:function(e,s,a){"use strict";a.r(s);var t=a(47),n=a.n(t),o={data:function(){return{username:"",password:""}},methods:{login:function(){var e=this;n.a.post("https://berlindiary.info:3003/login",{username:this.username,password:this.password}).then(function(s){console.log(s),s.data.success&&(e.$localStorage.set("token",s.data.access_token),e.$localStorage.set("username",s.data.user.username),e.$localStorage.set("role",s.data.user.role),e.username=s.data.user.username,e.token=s.data.access_token,window.location.reload())})}}},r=(a(567),a(27)),i=Object(r.a)(o,function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",[a("div",[a("div",[e._v("用户名")]),e._v(" "),a("div",{staticClass:"username"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],domProps:{value:e.username},on:{input:function(s){s.target.composing||(e.username=s.target.value)}}})])]),e._v(" "),a("div",[a("div",[e._v("密码")]),e._v(" "),a("div",{staticClass:"password"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}})])]),e._v(" "),a("div",[a("button",{on:{click:function(s){e.login()}}},[e._v("登录")])])])},[],!1,null,null,null);i.options.__file="login.vue";s.default=i.exports}}]);