(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{774:function(e,t,n){"use strict";n.r(t),n.d(t,"formatDate",function(){return r});n(351),n(139);function r(e,t){/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var r in n)if(new RegExp("(".concat(r,")")).test(t)){var g=n[r]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?g:s(g))}return t}function s(e){return("00"+e).substr(e.length)}}}]);