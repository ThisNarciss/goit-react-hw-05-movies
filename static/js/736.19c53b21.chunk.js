"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{83:function(n,t,e){e.d(t,{SU:function(){return a},bI:function(){return i},fU:function(){return f},l2:function(){return u},sv:function(){return s}});var r="https://api.themoviedb.org/3/",c="687f60735406ee0172c31461de2476ff",o=new URLSearchParams({api_key:c,language:"en-US"});function a(){return fetch("".concat(r,"trending/movie/day?").concat(o)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}function i(n){var t=new URLSearchParams({api_key:c,language:"en-US",query:n});return fetch("".concat(r,"search/movie?").concat(t)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}function u(n){return fetch("".concat(r,"movie/").concat(n,"?").concat(o)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}function f(n){return fetch("".concat(r,"movie/").concat(n,"/credits?").concat(o)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}function s(n){var t=new URLSearchParams({api_key:c,language:"en-US",page:1});return fetch("".concat(r,"movie/").concat(n,"/reviews?").concat(t)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}},736:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,c,o,a,i=e(439),u=e(83),f=e(791),s=e(689),h=e(168),p=e(444),l=p.ZP.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n\n  flex-wrap: wrap;\n  gap: 5px;\n"]))),m=p.ZP.li(c||(c=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  width: 100px;\n"]))),w=p.ZP.h2(o||(o=(0,h.Z)(["\n  font-size: 14px;\n  text-align: center;\n  margin-bottom: 5px;\n"]))),d=p.ZP.p(a||(a=(0,h.Z)(["\n  font-size: 10px;\n  text-align: center;\n"]))),g=e(184);function x(){var n=(0,s.TH)().state,t=(0,f.useState)([]),e=(0,i.Z)(t,2),r=e[0],c=e[1];return(0,f.useEffect)((function(){(0,u.fU)(n.id).then((function(n){var t=n.cast;return c(t)}))}),[n]),(0,g.jsx)(l,{children:r.map((function(n){var t=n.id,e=n.character,r=n.name,c=n.profile_path;return(0,g.jsxs)(m,{children:[(0,g.jsx)("img",{src:c?"https://image.tmdb.org/t/p/w500/".concat(c):"https://dummyimage.com/100x150/949494/fff.jpg",alt:r,width:"100"}),(0,g.jsx)(w,{children:r}),(0,g.jsx)(d,{children:e})]},t)}))})}}}]);
//# sourceMappingURL=736.19c53b21.chunk.js.map