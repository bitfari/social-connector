(this["webpackJsonpbitfari-sc"]=this["webpackJsonpbitfari-sc"]||[]).push([[31],{1080:function(e,t,r){"use strict";var n=r(1081).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},1081:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=a(r(0)),c=a(r(1082));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?p(e):t}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(e){function t(){var e,r;l(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return m(p(r=u(this,(e=b(t)).call.apply(e,[this].concat(o)))),"onClick",(function(e){var t=r.props,a=t.text,o=t.onCopy,s=t.children,i=t.options,l=n.default.Children.only(s),d=(0,c.default)(a,i);o&&o(a,d),l&&l.props&&"function"===typeof l.props.onClick&&l.props.onClick(e)})),r}var r,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,e),r=t,a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=i(e,["text","onCopy","options","children"]),c=n.default.Children.only(t);return n.default.cloneElement(c,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{onClick:this.onClick}))}}],a&&d(r.prototype,a),o&&d(r,o),t}(n.default.PureComponent);t.CopyToClipboard=f,m(f,"defaultProps",{onCopy:void 0,options:void 0})},1082:function(e,t,r){"use strict";var n=r(1083),c={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,a,o,s,i,l,d=!1;t||(t={}),r=t.debug||!1;try{if(o=n(),s=document.createRange(),i=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=c[t.format]||c.default;window.clipboardData.setData(a,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(l),s.selectNodeContents(l),i.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(u){r&&console.error("unable to copy using execCommand: ",u),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(u){r&&console.error("unable to copy using clipboardData: ",u),r&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{i&&("function"==typeof i.removeRange?i.removeRange(s):i.removeAllRanges()),l&&document.body.removeChild(l),o()}return d}},1083:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},1533:function(e,t,r){},1602:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(5),a=r.n(c),o=r(260),s=r(390),i=r(27),l=r(370),d=r(1080),u=r(891),b=r(890),p=r(13),j=(r(1533),r(3));const m=e=>{let{icon:t}=e;return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("div",{className:"toastify-header",children:Object(j.jsxs)("div",{className:"title-wrapper",children:[Object(j.jsx)(u.a,{size:"sm",color:"success",icon:Object(j.jsx)(s.a,{size:12})}),Object(j.jsx)("h6",{className:"toast-title",children:"Icon Name Copied! \ud83d\udccb"})]})}),Object(j.jsx)("div",{className:"toastify-body",children:Object(j.jsx)("span",{role:"img","aria-label":"toast-text",children:t})})]})};t.default=()=>{const e=[],[t,r]=Object(n.useState)([]),[c,s]=Object(n.useState)([]),[u,f]=Object(n.useState)(null);for(const n in i)e.push(n);return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)(b.a,{breadCrumbTitle:"Feather Icons",breadCrumbParent:"UI",breadCrumbActive:"Feather Icons"}),Object(j.jsx)(p.jb,{children:Object(j.jsx)(p.B,{sm:"12",children:Object(j.jsx)("div",{className:"icon-search-wrapper my-3 mx-auto",children:Object(j.jsxs)(p.M,{className:"input-group-merge mb-1",children:[Object(j.jsx)(p.N,{children:Object(j.jsx)(l.a,{size:14})}),Object(j.jsx)(p.L,{placeholder:"Search icons...",onChange:t=>{(t=>{const r=[];t.length&&e.filter((e=>{e.toLowerCase().includes(t.toLowerCase())&&r.push(e)})),s([...r])})(t.target.value),r(t.target.value)}})]})})})}),Object(j.jsx)("div",{className:"d-flex flex-wrap",id:"icons-container",children:(()=>{const r=t.length?c:e;return r.length?r.map((e=>{const t=i[e];return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)(d.CopyToClipboard,{text:"<".concat(e," />"),children:Object(j.jsx)(p.l,{id:e,className:a()("icon-card cursor-pointer text-center mb-2 mx-50",{active:u===e}),onClick:()=>(e=>{f(e),o.f.success(Object(j.jsx)(m,{icon:e}),{icon:!1,hideProgressBar:!0})})(e),children:Object(j.jsxs)(p.m,{children:[Object(j.jsx)("div",{className:"icon-wrapper",children:Object(j.jsx)(t,{})}),Object(j.jsx)("p",{className:"icon-name text-truncate mb-0 mt-1",children:e})]})})}),Object(j.jsx)(p.zb,{placement:"top",target:e,children:e.replace(/([A-Z])/g," $1").trim()})]},e)})):Object(j.jsx)("div",{className:"d-flex align-items-center justify-content-center w-100",children:Object(j.jsx)("h4",{className:"mb-0",children:"No Icons Found!"})})})()})]})}},890:function(e,t,r){"use strict";var n=r(34),c=r(425),a=r(389),o=r(443),s=r(439),i=r(385),l=r(13),d=r(3);t.a=e=>{const{breadCrumbTitle:t,breadCrumbParent:r,breadCrumbParent2:u,breadCrumbParent3:b,breadCrumbActive:p}=e;return Object(d.jsxs)("div",{className:"content-header row",children:[Object(d.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(d.jsx)("div",{className:"row breadcrumbs-top",children:Object(d.jsxs)("div",{className:"col-12",children:[t?Object(d.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(d.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(d.jsxs)(l.g,{children:[Object(d.jsx)(l.h,{tag:"li",children:Object(d.jsx)(n.b,{to:"/",children:"Home"})}),Object(d.jsx)(l.h,{tag:"li",className:"text-primary",children:r}),u?Object(d.jsx)(l.h,{tag:"li",className:"text-primary",children:u}):"",b?Object(d.jsx)(l.h,{tag:"li",className:"text-primary",children:b}):"",Object(d.jsx)(l.h,{tag:"li",active:!0,children:p})]})})]})})}),Object(d.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(d.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(d.jsxs)(l.ub,{children:[Object(d.jsx)(l.G,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(d.jsx)(c.a,{size:14})}),Object(d.jsxs)(l.F,{tag:"ul",end:!0,children:[Object(d.jsxs)(l.E,{tag:n.b,to:"/apps/focus",children:[Object(d.jsx)(a.a,{className:"me-1",size:14}),Object(d.jsx)("span",{className:"align-middle",children:"Focus"})]}),Object(d.jsxs)(l.E,{tag:n.b,to:"/apps/instafriend",children:[Object(d.jsx)(o.a,{className:"me-1",size:14}),Object(d.jsx)("span",{className:"align-middle",children:"Instafriend"})]}),Object(d.jsxs)(l.E,{tag:n.b,to:"/apps/tellfari",children:[Object(d.jsx)(s.a,{className:"me-1",size:14}),Object(d.jsx)("span",{className:"align-middle",children:"Tellfari"})]}),Object(d.jsxs)(l.E,{tag:n.b,to:"/apps/book",children:[Object(d.jsx)(i.a,{className:"me-1",size:14}),Object(d.jsx)("span",{className:"align-middle",children:"Book"})]})]})]})})})]})}},891:function(e,t,r){"use strict";var n=r(0),c=r(5),a=r.n(c),o=r(13),s=r(3);const i=Object(n.forwardRef)(((e,t)=>{const{img:r,size:n,icon:c,color:i,status:l,badgeUp:d,content:u,tag:b,initials:p,imgWidth:j,className:m,badgeText:f,imgHeight:h,badgeColor:y,imgClassName:O,contentStyles:x,...g}=e;return Object(s.jsxs)(b,{className:a()("avatar",{[m]:m,["bg-".concat(i)]:i,["avatar-".concat(n)]:n}),ref:t,...g,children:[!1===r||void 0===r?Object(s.jsxs)("span",{className:a()("avatar-content",{"position-relative":d}),style:x,children:[p?(e=>{const t=[];return e.split(" ").forEach((e=>{t.push(e[0])})),t.join("")})(u):u,c||null,d?Object(s.jsx)(o.f,{color:y||"primary",className:"badge-sm badge-up",pill:!0,children:f||"0"}):null]}):Object(s.jsx)("img",{className:a()({[O]:O}),src:r,alt:"avatarImg",height:h&&!n?h:32,width:j&&!n?j:32}),l?Object(s.jsx)("span",{className:a()({["avatar-status-".concat(l)]:l,["avatar-status-".concat(n)]:n})}):null]})}));t.a=i,i.defaultProps={tag:"div"}}}]);
//# sourceMappingURL=31.ab7b9fa1.chunk.js.map