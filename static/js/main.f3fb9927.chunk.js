(this["webpackJsonpbeta-code-converter-js"]=this["webpackJsonpbeta-code-converter-js"]||[]).push([[0],{15:function(e,t,a){e.exports={main:"App_main__w13HL",container:"App_container__16xz_"}},22:function(e,t,a){e.exports=a(39)},36:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(10),r=a.n(c),l=a(12),i=a(11),s=a(1),d=a(20);var m=Object(d.createI18n)(["en"],{en:{header:{title:"Greek Beta Code Converter"},converter:{title:"Greek Beta Code Converter",betacode:"Beta Code",unicode:"Greek Unicode",smallScreenUnicode:"Unicode",copy:"Copy to Clipboard",placeholderUnicode:"\u03bc\u1fc6\u03bd\u03b9\u03bd \u1f04\u03b5\u03b9\u03b4\u03b5 \u03b8\u03b5\u1f70 ...",placeholderBetacode:"mh=nin a)/eide qea ..."}}}),h=a(15),p=a.n(h),u=a(16),b=a(17),g=a.n(b),v=a(8),E=a.n(v);class f extends n.Component{constructor(e){super(e),this.state={beta:"",unicode:""},this.handleBetaChange=this.handleBetaChange.bind(this),this.handleUnicodeChange=this.handleUnicodeChange.bind(this)}handleBetaChange(e){const t=e.target.value;this.setState({beta:t,unicode:Object(u.betaCodeToGreek)(t)})}handleUnicodeChange(e){const t=e.target.value;this.setState({beta:Object(u.greekToBetaCode)(t),unicode:t})}render(){const e=this.state,t=e.beta,a=e.unicode,n=this.props.location;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row pt-4 mb-3"},o.a.createElement("div",{className:"col-12 text-center"},o.a.createElement("h1",{className:"h3 font-weight-normal"},o.a.createElement(m,{t:"converter.title"})))),o.a.createElement("div",{className:"row ".concat(E.a.row)},o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:"d-block d-sm-none"},o.a.createElement("h2",{className:"text-center h4"},o.a.createElement("label",{htmlFor:"greek-unicode-input",className:"mb-0"},o.a.createElement(m,{t:"converter.smallScreenUnicode"})))),o.a.createElement("div",{className:"d-none d-sm-block"},o.a.createElement("h2",{className:"text-center h4"},o.a.createElement("label",{htmlFor:"greek-unicode-input",className:"mb-0"},o.a.createElement(m,{t:"converter.unicode"})))),o.a.createElement("textarea",{className:"".concat(E.a.textarea," form-control input-lg clipboard-target-unicode"),id:"greek-unicode-input",type:"text",placeholder:m.getTranslation(n,"converter.placeholderUnicode"),autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",onChange:this.handleUnicodeChange,value:a})),o.a.createElement("div",{className:"col-6"},o.a.createElement("h2",{className:"text-center h4"},o.a.createElement("label",{htmlFor:"beta-code-input",className:"mb-0"},o.a.createElement(m,{t:"converter.betacode"}))),o.a.createElement("textarea",{className:"".concat(E.a.textarea," form-control input-lg clipboard-target-betacode"),id:"beta-code-input",type:"text",placeholder:m.getTranslation(n,"converter.placeholderBetacode"),autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",onChange:this.handleBetaChange,value:t}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-6"},o.a.createElement(g.a,{"button-type":"button",className:"btn btn-block btn-success mb-4 mt-2","data-clipboard-target":".clipboard-target-unicode"},o.a.createElement(m,{t:"converter.copy"}))),o.a.createElement("div",{className:"col-6"},o.a.createElement(g.a,{"button-type":"button",className:"btn btn-block btn-success mb-4 mt-2","data-clipboard-target":".clipboard-target-betacode"},o.a.createElement(m,{t:"converter.copy"})))))}}var w=f;var C=()=>o.a.createElement(i.BrowserRouter,{basename:"/beta-code"},o.a.createElement(o.a.Fragment,null,o.a.createElement(l.PerseidsHeader,null,o.a.createElement(m,{t:"header.title"})),o.a.createElement("main",{role:"main",className:p.a.main},o.a.createElement("div",{className:"container ".concat(p.a.container)},o.a.createElement(s.g,null,o.a.createElement(s.d,{exact:!0,path:"/",component:w})))),o.a.createElement(l.PerseidsFooter,{report:"https://github.com/perseids-project/beta-code-js",github:"https://github.com/perseids-project/beta-code-js/issues",doi:"10.5281/zenodo.3967309"})));const N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const a=e.installing;null!=a&&(a.onstatechange=()=>{"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}a(35),a(36),a(37),a(38);r.a.render(o.a.createElement(C,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/beta-code",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const t="".concat("/beta-code","/service-worker.js");N?(!function(e,t){fetch(e).then(a=>{const n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):k(e,t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):k(t,e)})}}()},8:function(e,t,a){e.exports={row:"Converter_row__2MmxD",textarea:"Converter_textarea__Yz5Gt"}}},[[22,1,2]]]);
//# sourceMappingURL=main.f3fb9927.chunk.js.map