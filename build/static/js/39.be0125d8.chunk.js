(this["webpackJsonpbitfari-sc"]=this["webpackJsonpbitfari-sc"]||[]).push([[39],{1080:function(e,t,o){"use strict";var n=o(1081).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},1081:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=a(o(0)),r=a(o(1082));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?b(e):t}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function y(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var m=function(e){function t(){var e,o;l(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return y(b(o=p(this,(e=f(t)).call.apply(e,[this].concat(c)))),"onClick",(function(e){var t=o.props,a=t.text,c=t.onCopy,i=t.children,s=t.options,l=n.default.Children.only(i),u=(0,r.default)(a,s);c&&c(a,u),l&&l.props&&"function"===typeof l.props.onClick&&l.props.onClick(e)})),o}var o,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),o=t,a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),o=s(e,["text","onCopy","options","children"]),r=n.default.Children.only(t);return n.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(o,!0).forEach((function(t){y(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},o,{onClick:this.onClick}))}}],a&&u(o.prototype,a),c&&u(o,c),t}(n.default.PureComponent);t.CopyToClipboard=m,y(m,"defaultProps",{onCopy:void 0,options:void 0})},1082:function(e,t,o){"use strict";var n=o(1083),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var o,a,c,i,s,l,u=!1;t||(t={}),o=t.debug||!1;try{if(c=n(),i=document.createRange(),s=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(l),i.selectNodeContents(l),s.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){o&&console.error("unable to copy using execCommand: ",p),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){o&&console.error("unable to copy using clipboardData: ",p),o&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(i):s.removeAllRanges()),l&&document.body.removeChild(l),c()}return u}},1083:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},1604:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o(390),a=o(260),c=o(1080),i=o(891),s=o(894),l=o(13),u=o(3);const p=()=>Object(u.jsx)(n.Fragment,{children:Object(u.jsx)("div",{className:"toastify-header pb-0",children:Object(u.jsxs)("div",{className:"title-wrapper",children:[Object(u.jsx)(i.a,{size:"sm",color:"success",icon:Object(u.jsx)(r.a,{})}),Object(u.jsx)("h6",{className:"toast-title",children:"Copied To Clipboard !"})]})})});t.default=()=>{const[e,t]=Object(n.useState)("Copy Me!"),[o,r]=Object(n.useState)(!1);return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(s.a,{title:"React Copy To Clipboard",subTitle:"Copy to clipboard React component",link:"https://github.com/nkbt/react-copy-to-clipboard"}),Object(u.jsx)(l.jb,{children:Object(u.jsx)(l.B,{sm:"12",children:Object(u.jsxs)(l.l,{children:[Object(u.jsx)(l.p,{children:Object(u.jsx)(l.v,{tag:"h4",children:"Clipboard"})}),Object(u.jsx)(l.m,{children:Object(u.jsxs)(l.jb,{children:[Object(u.jsx)(l.B,{xl:"3",md:"4",sm:"6",className:"pe-sm-0 mb-md-0 mb-1",children:Object(u.jsx)(l.L,{value:e,onChange:e=>{let{target:{value:n}}=e;t(n),o&&r(!1)}})}),Object(u.jsx)(l.B,{md:"2",sm:"12",children:Object(u.jsx)(c.CopyToClipboard,{onCopy:()=>{r(!0),a.f.success(Object(u.jsx)(p,{}),{icon:!1,autoClose:3e3,hideProgressBar:!0,closeButton:!1})},text:e,children:Object(u.jsx)(l.i,{color:"primary",outline:!0,children:"Copy!"})})})]})})]})})})]})}},891:function(e,t,o){"use strict";var n=o(0),r=o(5),a=o.n(r),c=o(13),i=o(3);const s=Object(n.forwardRef)(((e,t)=>{const{img:o,size:n,icon:r,color:s,status:l,badgeUp:u,content:p,tag:f,initials:b,imgWidth:d,className:y,badgeText:m,imgHeight:j,badgeColor:h,imgClassName:g,contentStyles:O,...v}=e;return Object(i.jsxs)(f,{className:a()("avatar",{[y]:y,["bg-".concat(s)]:s,["avatar-".concat(n)]:n}),ref:t,...v,children:[!1===o||void 0===o?Object(i.jsxs)("span",{className:a()("avatar-content",{"position-relative":u}),style:O,children:[b?(e=>{const t=[];return e.split(" ").forEach((e=>{t.push(e[0])})),t.join("")})(p):p,r||null,u?Object(i.jsx)(c.f,{color:h||"primary",className:"badge-sm badge-up",pill:!0,children:m||"0"}):null]}):Object(i.jsx)("img",{className:a()({[g]:g}),src:o,alt:"avatarImg",height:j&&!n?j:32,width:d&&!n?d:32}),l?Object(i.jsx)("span",{className:a()({["avatar-status-".concat(l)]:l,["avatar-status-".concat(n)]:n})}):null]})}));t.a=s,s.defaultProps={tag:"div"}},894:function(e,t,o){"use strict";var n=o(13),r=o(3);t.a=e=>Object(r.jsx)(n.jb,{className:"mb-2",children:Object(r.jsxs)(n.B,{sm:"12",className:"ms-50",children:[Object(r.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(r.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(r.jsx)("p",{className:"text-primary",children:e.subTitle})]})})}}]);
//# sourceMappingURL=39.be0125d8.chunk.js.map