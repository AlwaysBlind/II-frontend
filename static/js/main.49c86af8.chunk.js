(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){},136:function(e,t,n){},159:function(e,t,n){},179:function(e,t,n){"use strict";n.r(t);var c=n(6),a=n(0),s=n.n(a),i=n(25),r=n.n(i),o=(n(131),n(51)),l=(n(132),n(35)),j=l.Navbar,d=l.Nav,b=function(){return Object(c.jsxs)(j,{bg:"secondary",children:[Object(c.jsx)(j.Brand,{href:"/",children:Object(c.jsx)("i",{className:"d-inline-block align-top fas fa-battery-full fa-lg",alt:"React Bootstrap logo"})}),Object(c.jsx)(d,{children:Object(c.jsx)(d.Link,{style:{color:"lightgray"},href:"/about",children:"About"})})]})},u=n(64),h=(n(136),n(125));var f=function(e){var t=e.setFiles,n=Object(a.useCallback)((function(e){console.log(e),t(e)}),[t]),s=Object(h.a)({onDrop:n,accept:"video/*",minSize:0,maxSize:15728640}),i=s.getRootProps,r=s.getInputProps,o=s.isDragActive;return Object(c.jsx)("section",{className:"container",children:Object(c.jsxs)("div",Object(u.a)(Object(u.a)({},i({className:"videodropzone back"})),{},{children:[Object(c.jsx)("input",Object(u.a)({},r())),Object(c.jsx)("i",{className:"fas fa-file-video",style:{fontSize:100}}),o?Object(c.jsx)("p",{children:"Drop the files here ..."}):Object(c.jsxs)("p",{children:["Upload a video file here",Object(c.jsx)("br",{})," Max 15 Mb"]})]}))})},m=function(e){e.files;var t=e.setFiles;return Object(c.jsx)("div",{className:"col-4",children:Object(c.jsx)(f,{setFiles:t})})},O=n(79),x=n(38),p=n(121);n(158);var v=function(e){var t=e.files,n=e.setFiles;return Object(a.useEffect)((function(){return console.log(t),function(){}}),[t]),Object(c.jsx)(O.a,{className:"col-2 mt-3",style:{height:"100%"},children:Object(c.jsxs)(O.a.Body,{children:[Object(c.jsx)(p.Player,{src:"/II-frontend/mug-test.mp4"}),Object(c.jsx)(x.a,{className:"mt-2",variant:"dark",onClick:function(){return fetch("https://alwaysblind.github.io/II-frontend/mug-test.mp4",{headers:{"Content-Type":"video/mp4"}}).then((function(e){return e.blob()})).then((function(e){console.log(e),n([new File([e],"ClassicFile")])}))},children:"Or test this video"})]})})},g=n(80),y=n(78),N=n(56),w=n(49);var k=function(e){var t=e.img;return Object(c.jsx)(O.a,{children:Object(c.jsx)(w.a,{className:"card",src:t.imagefile,style:{maxHeight:"10rem"}})})},I=(n(159),function(e){var t=e.images.map((function(e){return Object(c.jsx)(g.a.Item,{children:Object(c.jsx)(k,{className:"card",img:e})},e.id)}));return Object(c.jsx)(g.a,{horizontal:!0,className:"justify-content-md-center listgroup",children:t})}),F=function(e){var t=e.images,n=e.name;return Object(c.jsxs)(y.a,{className:"Accordion",children:[Object(c.jsx)(O.a,{children:Object(c.jsx)(O.a.Body,{children:Object(c.jsx)(y.a.Toggle,{as:x.a,variant:"outline-secondary",eventKey:"0",children:n})})}),Object(c.jsx)(N.a,{eventKey:"0",children:Object(c.jsx)(I,{images:t})})]})};var B=function(e){var t=e.images,n=function(e,t){return e.reduce((function(e,n){var c=n[t];return e[c]||(e[c]=[]),e[c].push(n),e}),{})};return Object(c.jsx)("div",{children:function(e){var t=n(e,"classification_label"),a=Object.keys(t).map((function(e){return Object(c.jsx)(F,{images:t[e],name:e},e)}));return Object(c.jsxs)(g.a,{children:[" ",a," "]})}(t)})},S=function(e){var t=e.files;return Object(c.jsx)(g.a,{children:t.map((function(e){return Object(c.jsxs)(g.a.Item,{children:[" file: ",e.name]},e.name)}))})},z=n(81),C=n(73),A=n.n(C),D=function(e){var t=e.files,n=e.setImages,s=Object(a.useState)(!1),i=Object(o.a)(s,2),r=i[0],l=i[1],j="https://neverblind.pythonanywhere.com/",d=function(e){return A.a.get("".concat(j,"indexedvideos/").concat(e.data.id,"/images"),{headers:{accept:"application/json"}})};return Object(c.jsxs)("div",{children:[t.length>0&&!r&&Object(c.jsx)(x.a,{variant:"secondary",size:"lg",className:"mt-3",onClick:function(){return function(e){var t=new FormData;l(!0),t.append("videofile",e[0],e[0].name),t.append("title",e[0].name),A.a.post("".concat(j,"indexedvideos/"),t,{header:{accept:"application/json","content-type":"multipart/form-data"}}).then((function(e){d(e).then((function(e){console.log(e.data),n(e.data)}))})).catch((function(e){return console.log(e)})).then((function(){l(!1)}))}(t)},children:" Index Video "}),r&&Object(c.jsx)(z.a,{animation:"border",role:"status",className:"mt-10",children:Object(c.jsx)("span",{className:"sr-only",children:" Loading... "})})]})},M=n(123),P=n(19);var T=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"This is AlwaysBlind on github "}),Object(c.jsx)("h1",{children:" Contact me at alwaysblindbusiness@gmail.com"})]})};var E=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)([]),r=Object(o.a)(i,2),l=r[0],j=r[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(b,{}),Object(c.jsx)(M.a,{children:Object(c.jsxs)(P.c,{children:[Object(c.jsx)(P.a,{exact:!0,path:"/",component:d}),Object(c.jsx)(P.a,{exact:!0,path:"/about",component:T}),Object(c.jsx)(P.a,{exact:!0,path:"*",component:d})]})})]});function d(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"d-flex flex-row justify-content-center mt-5 pt-5",children:[Object(c.jsx)(m,{setFiles:s,files:n}),Object(c.jsx)(v,{className:"pt-5",setFiles:s,files:n})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(S,{files:n}),Object(c.jsx)(D,{files:n,setImages:j}),Object(c.jsx)(B,{images:l})]})]})}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(E,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[179,1,2]]]);
//# sourceMappingURL=main.49c86af8.chunk.js.map