(this["webpackJsonpbeta-code-js"]=this["webpackJsonpbeta-code-js"]||[]).push([[0],{16:function(e,t,a){e.exports={main:"App_main__w13HL",container:"App_container__16xz_"}},29:function(e,t,a){e.exports=a(46)},43:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(11),r=a.n(c),l=a(13),i=a(12),s=a(5),d=a(21),m=Object(d.createI18n)(["en"],{en:{header:{title:"Greek Beta Code Converter"},converter:{title:"Greek Beta Code Converter",betacode:"Beta Code",unicode:"Greek Unicode",smallScreenUnicode:"Unicode",copy:"Copy to Clipboard",placeholderUnicode:"\u03bc\u1fc6\u03bd\u03b9\u03bd \u1f04\u03b5\u03b9\u03b4\u03b5 \u03b8\u03b5\u1f70 ...",placeholderBetacode:"mh=nin a)/eide qea ..."}}}),u=a(16),h=a.n(u),b=a(24),p=a(25),v=a(27),f=a(26),g=a(8),E=a(28),w=a(17),C=a(18),k=a.n(C),N=a(9),x=a.n(N),j=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(v.a)(this,Object(f.a)(t).call(this,e))).state={beta:"",unicode:""},a.handleBetaChange=a.handleBetaChange.bind(Object(g.a)(a)),a.handleUnicodeChange=a.handleUnicodeChange.bind(Object(g.a)(a)),a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"handleBetaChange",value:function(e){var t=e.target.value;this.setState({beta:t,unicode:Object(w.betaCodeToGreek)(t)})}},{key:"handleUnicodeChange",value:function(e){var t=e.target.value;this.setState({beta:Object(w.greekToBetaCode)(t),unicode:t})}},{key:"render",value:function(){var e=this.state,t=e.beta,a=e.unicode,n=this.props.location;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row pt-4 mb-3"},o.a.createElement("div",{className:"col-12 text-center"},o.a.createElement("h1",{className:"h3 font-weight-normal"},o.a.createElement(m,{t:"converter.title"})))),o.a.createElement("div",{className:"row ".concat(x.a.row)},o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:"d-block d-sm-none"},o.a.createElement("h4",{className:"text-center"},o.a.createElement(m,{t:"converter.smallScreenUnicode"}))),o.a.createElement("div",{className:"d-none d-sm-block"},o.a.createElement("h4",{className:"text-center"},o.a.createElement(m,{t:"converter.unicode"}))),o.a.createElement("textarea",{className:"".concat(x.a.textarea," form-control input-lg clipboard-target-unicode"),type:"text",placeholder:m.getTranslation(n,"converter.placeholderUnicode"),autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",onChange:this.handleUnicodeChange,value:a})),o.a.createElement("div",{className:"col-6"},o.a.createElement("h4",{className:"text-center"},o.a.createElement(m,{t:"converter.betacode"})),o.a.createElement("textarea",{className:"".concat(x.a.textarea," form-control input-lg clipboard-target-betacode"),type:"text",placeholder:m.getTranslation(n,"converter.placeholderBetacode"),autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",onChange:this.handleBetaChange,value:t}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-6"},o.a.createElement(k.a,{"button-type":"button",className:"btn btn-block btn-success mb-4 mt-2","data-clipboard-target":".clipboard-target-unicode"},o.a.createElement(m,{t:"converter.copy"}))),o.a.createElement("div",{className:"col-6"},o.a.createElement(k.a,{"button-type":"button",className:"btn btn-block btn-success mb-4 mt-2","data-clipboard-target":".clipboard-target-betacode"},o.a.createElement(m,{t:"converter.copy"})))))}}]),t}(n.Component),y=function(){return o.a.createElement(i.BrowserRouter,{basename:"/beta-code"},o.a.createElement(o.a.Fragment,null,o.a.createElement(l.PerseidsHeader,null,o.a.createElement(m,{t:"header.title"})),o.a.createElement("main",{role:"main",className:h.a.main},o.a.createElement("div",{className:"container ".concat(h.a.container)},o.a.createElement(s.g,null,o.a.createElement(s.d,{exact:!0,path:"/",component:j})))),o.a.createElement(l.PerseidsFooter,{report:"https://github.com/perseids-project/beta-code-js",github:"https://github.com/perseids-project/beta-code-js/issues"})))},B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(42),a(43),a(44),a(45);r.a.render(o.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/beta-code",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/beta-code","/service-worker.js");B?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):U(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")}))):U(t,e)}))}}()},9:function(e,t,a){e.exports={row:"Converter_row__2MmxD",textarea:"Converter_textarea__Yz5Gt"}}},[[29,1,2]]]);
//# sourceMappingURL=main.f553bb7f.chunk.js.map