(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{65:function(e,a,t){e.exports=t(93)},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},91:function(e,a,t){},93:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(13),l=t.n(r),o=(t(70),t(71),t(46)),i=(t(72),t(64));var s=function(e){var a=e.setFiles,t=Object(n.useCallback)((function(e){console.log(e),a(e)}),[a]),r=Object(i.a)({onDrop:t,accept:"video/*"}),l=r.getRootProps,o=r.getInputProps,s=r.isDragActive;return c.a.createElement("section",{className:"container"},c.a.createElement("div",l({className:"videodropzone back"}),c.a.createElement("input",o()),c.a.createElement("i",{className:"fas fa-file-video",style:{fontSize:100}}),s?c.a.createElement("p",null,"Drop the files here ..."):c.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files")))},m=t(47),u=t.n(m),d=t(59),f=t(23),p=t(61),E=t(60),v=t(58),g=t(40),h=t(34);var b=function(e){var a=e.img;return c.a.createElement(v.a,null,c.a.createElement(h.a,{className:"card",src:a.imagefile}))},y=(t(91),function(e){var a=e.images.map((function(e){return c.a.createElement(d.a.Item,{key:e.id},c.a.createElement(b,{className:"card",img:e}))}));return c.a.createElement(d.a,{horizontal:!0,className:"justify-content-md-center listgroup"},a)});var k=function(e){var a=e.images,t=function(e,a){return e.reduce((function(e,t){var n=t[a];return e[n]||(e[n]=[]),e[n].push(t),e}),{})};return c.a.createElement("div",null,function(e){var a=t(e,"classification_label"),n=Object.keys(a).map((function(e){return c.a.createElement(E.a,{key:e,className:"Accordion"},c.a.createElement(v.a,null,c.a.createElement(v.a.Body,null,c.a.createElement(E.a.Toggle,{as:f.a,variant:"outline-secondary",eventKey:"0"},e))),c.a.createElement(g.a,{eventKey:"0"},c.a.createElement(y,{images:a[e],key:e})))}));return c.a.createElement(d.a,null," ",n," ")}(a))},N=t(63),j=t.n(N),w=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)([]),i=Object(o.a)(l,2),m=i[0],E=i[1],v=Object(n.useState)(!1),g=Object(o.a)(v,2),h=g[0],b=g[1],y=function(e){return u.a.get("http://127.0.0.1:8000/indexedvideos/".concat(e.data.id,"/images"),{headers:{accept:"application/json"}})};return c.a.createElement("div",null,c.a.createElement(s,{setFiles:r}),c.a.createElement("div",{className:"mb-3"},function(e){return c.a.createElement(d.a,null,e.map((function(e){return c.a.createElement(d.a.Item,{key:j()()}," file: ",e.name)})))}(t)),t.length>0&&!h&&c.a.createElement(f.a,{variant:"secondary",size:"lg",className:"mt-3",onClick:function(){return function(e){var a=new FormData;b(!0),a.append("videofile",e[0],e[0].name),a.append("title",e[0].name),u.a.post("http://127.0.0.1:8000/indexedvideos/",a,{header:{accept:"application/json","content-type":"multipart/form-data"}}).then((function(e){y(e).then((function(e){console.log(e.data),E(e.data)}))})).catch((function(e){return console.log(e)})).then((function(){b(!1)}))}(t)}}," Index Video "),h&&c.a.createElement(p.a,{animation:"border",role:"status",className:"mt-10"},c.a.createElement("span",{className:"sr-only"}," Loading... ")),c.a.createElement(k,{images:m}))},O=t(32).Navbar,B=function(){return c.a.createElement(O,{bg:"secondary"},c.a.createElement(O.Brand,{href:"/"},c.a.createElement("i",{className:"d-inline-block align-top fas fa-battery-full fa-lg",alt:"React Bootstrap logo"})))};var D=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(B,null),c.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.34c8731f.chunk.js.map