parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qelu":[function(require,module,exports) {
function n(n){var t=performance.now();requestAnimationFrame(function e(o){var r=(o-t)/n.duration;r>1&&(r=1);var i=n.timing(r);n.draw(i),r<1&&requestAnimationFrame(e)})}document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector(".uptop"),e=document.documentElement;window.addEventListener("scroll",function(){pageYOffset>=500&&t.classList.add("upview"),pageYOffset<500&&t.classList.remove("upview")}),t.onclick=function(){n({duration:700,timing:r,draw:function(n){return e.scrollTop=e.scrollTop*(1-n/7)}})};var o,r=(o=function(n){return 1-Math.sin(Math.acos(n>1?n=1:n))},function(n){return 1-o(1-n)})});
},{}]},{},["qelu"], null)
//# sourceMappingURL=/ddt-project-mynpmç/return-btn.cf145a6a.js.map