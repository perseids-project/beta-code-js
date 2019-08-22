(window["webpackJsonpbeta-code-js"]=window["webpackJsonpbeta-code-js"]||[]).push([[0],{13:function(e,t,a){e.exports={main:"App_main__w13HL",container:"App_container__16xz_"}},28:function(e,t,a){e.exports=a(45)},42:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(11),r=a.n(c),i=a(12),l=a(23),s=a(5),d=a(13),m=a.n(d),u=a(20),h=a(21),b=a(26),p=a(22),f=a(8),g=a(27),v=a(14),w=a(15),C=a.n(w),E=a(9),k=a.n(E),N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={beta:"",unicode:""},a.handleBetaChange=a.handleBetaChange.bind(Object(f.a)(a)),a.handleUnicodeChange=a.handleUnicodeChange.bind(Object(f.a)(a)),a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"handleBetaChange",value:function(e){var t=e.target.value;this.setState({beta:t,unicode:Object(v.betaCodeToGreek)(t)})}},{key:"handleUnicodeChange",value:function(e){var t=e.target.value;this.setState({beta:Object(v.greekToBetaCode)(t),unicode:t})}},{key:"render",value:function(){var e=this.state,t=e.beta,a=e.unicode;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row pt-4 mb-3"},o.a.createElement("div",{className:"col-12 text-center"},o.a.createElement("h1",{className:"h3 font-weight-normal"},"Greek Beta Code Converter"))),o.a.createElement("div",{className:"row ".concat(k.a.row)},o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:"d-block d-sm-none"},o.a.createElement("h4",{className:"text-center"},"Unicode")),o.a.createElement("div",{className:"d-none d-sm-block"},o.a.createElement("h4",{className:"text-center"},"Greek Unicode")),o.a.createElement("textarea",{className:"".concat(k.a.textarea," form-control input-lg clipboard-target-unicode"),type:"text",placeholder:"\u03bc\u1fc6\u03bd\u03b9\u03bd \u1f04\u03b5\u03b9\u03b4\u03b5 \u03b8\u03b5\u1f70 ...",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",onChange:this.handleUnicodeChange,value:a})),o.a.createElement("div",{className:"col-6"},o.a.createElement("h4",{className:"text-center"},"Beta Code"),o.a.createElement("textarea",{className:"".concat(k.a.textarea," form-control input-lg clipboard-target-betacode"),type:"text",placeholder:"mh=nin a)/eide qea\\ ...",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",onChange:this.handleBetaChange,value:t}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-6"},o.a.createElement(C.a,{"button-type":"button",className:"btn btn-block btn-success mb-4 mt-2","data-clipboard-target":".clipboard-target-unicode"},"Copy to Clipboard")),o.a.createElement("div",{className:"col-6"},o.a.createElement(C.a,{"button-type":"button",className:"btn btn-block btn-success mb-4 mt-2","data-clipboard-target":".clipboard-target-betacode"},"Copy to Clipboard"))))}}]),t}(n.Component),j=function(){return o.a.createElement(l.a,{basename:"/beta-code-js"},o.a.createElement(o.a.Fragment,null,o.a.createElement(i.PerseidsHeader,null,"Greek Beta Code Converter"),o.a.createElement("main",{role:"main",className:m.a.main},o.a.createElement("div",{className:"container ".concat(m.a.container)},o.a.createElement(s.c,null,o.a.createElement(s.a,{exact:!0,path:"/",component:N})))),o.a.createElement(i.PerseidsFooter,{report:"https://github.com/perseids-project/beta-code-js",github:"https://github.com/perseids-project/beta-code-js/issues"})))},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(41),a(42),a(43),a(44);r.a.render(o.a.createElement(j,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/beta-code-js",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/beta-code-js","/service-worker.js");x?(!function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):y(t,e)})}}()},9:function(e,t,a){e.exports={row:"Converter_row__2MmxD",textarea:"Converter_textarea__Yz5Gt"}}},[[28,1,2]]]);
//# sourceMappingURL=main.7a002c43.chunk.js.map