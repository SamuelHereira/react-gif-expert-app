(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(7),i=n.n(r),s=n(2),o=n(9),u=n(0),j=function(t){var e=t.setCategories,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],i=a[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(o.a)(t))})),i(""))},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(t){i(t.target.value)}})})},d=n(10),l=function(t){t.id;var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsx)("p",{children:e})]})},b=n(6),p=n.n(b),f=n(8),O=function(){var t=Object(f.a)(p.a.mark((function t(e){var n,c,a,r,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"GGZNUmKbMUjVUG24XtAUBD7QTolYy24o",10,n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=").concat(10,"&api_key=").concat("GGZNUmKbMUjVUG24XtAUBD7QTolYy24o"),t.next=5,fetch(n);case 5:return c=t.sent,t.next=8,c.json();case 8:return a=t.sent,r=a.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),console.log(i),t.abrupt("return",i);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){O(t).then((function(t){r({data:t,loading:!1})}))}),[t]),a}(e),a=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:e}),r&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(u.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(u.jsx)(l,Object(d.a)({},t),t.id)}))})]})},m=function(t){var e=Object(c.useState)(["One Punch"]),n=Object(s.a)(e,2),a=n[0],r=n[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(j,{setCategories:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:a.map((function(t){return Object(u.jsx)(h,{category:t},t)}))})]})};n(17);i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a66ae0ef.chunk.js.map