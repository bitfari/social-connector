/*! For license information please see 35.77faf965.chunk.js.LICENSE.txt */
(this["webpackJsonpbitfari-sc"]=this["webpackJsonpbitfari-sc"]||[]).push([[35],{1412:function(e,t,s){e.exports=function(){"use strict";function e(){return e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},e.apply(this,arguments)}var t=window.Element.prototype.matches,s=function(e,t){return e.closest(t)},n=function(e,t){return new window.Event(e,t)},c=function(e,t){return new window.CustomEvent(e,t)};function i(){if(window.Element.prototype.matches||(t=window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector),window.Element.prototype.closest||(s=function(e,s){if(!document.documentElement.contains(e))return null;do{if(t.call(e,s))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}),window.Event&&"function"===typeof window.Event||(n=function(e,t){t=t||{};var s=document.createEvent("Event");return s.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),s}),"function"!==typeof window.CustomEvent){var e=window.Event.prototype.preventDefault;c=function(t,s){var n=document.createEvent("CustomEvent");return s=s||{bubbles:!1,cancelable:!1,detail:null},n.initCustomEvent(t,s.bubbles,s.cancelable,s.detail),n.preventDefault=function(){this.cancelable&&(e.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}))},n}}}i();var r=1e3,a={ACTIVE:"active",LINEAR:"linear",BLOCK:"dstepper-block",NONE:"dstepper-none",FADE:"fade",VERTICAL:"vertical"},l="transitionend",o="bsStepper",d=function(e,t,s,n){var i=e[o];if(!i._steps[t].classList.contains(a.ACTIVE)&&!i._stepsContents[t].classList.contains(a.ACTIVE)){var r=c("show.bs-stepper",{cancelable:!0,detail:{from:i._currentIndex,to:t,indexStep:t}});e.dispatchEvent(r);var l=i._steps.filter((function(e){return e.classList.contains(a.ACTIVE)})),d=i._stepsContents.filter((function(e){return e.classList.contains(a.ACTIVE)}));r.defaultPrevented||(l.length&&l[0].classList.remove(a.ACTIVE),d.length&&(d[0].classList.remove(a.ACTIVE),e.classList.contains(a.VERTICAL)||i.options.animation||d[0].classList.remove(a.BLOCK)),m(e,i._steps[t],i._steps,s),b(e,i._stepsContents[t],i._stepsContents,d,n))}},m=function(e,t,s,n){s.forEach((function(t){var s=t.querySelector(n.selectors.trigger);s.setAttribute("aria-selected","false"),e.classList.contains(a.LINEAR)&&s.setAttribute("disabled","disabled")})),t.classList.add(a.ACTIVE);var c=t.querySelector(n.selectors.trigger);c.setAttribute("aria-selected","true"),e.classList.contains(a.LINEAR)&&c.removeAttribute("disabled")},b=function(e,t,s,n,i){var r=e[o],d=s.indexOf(t),m=c("shown.bs-stepper",{cancelable:!0,detail:{from:r._currentIndex,to:d,indexStep:d}});function b(){t.classList.add(a.BLOCK),t.removeEventListener(l,b),e.dispatchEvent(m),i()}if(t.classList.contains(a.FADE)){t.classList.remove(a.NONE);var h=j(t);t.addEventListener(l,b),n.length&&n[0].classList.add(a.NONE),t.classList.add(a.ACTIVE),p(t,h)}else t.classList.add(a.ACTIVE),t.classList.add(a.BLOCK),e.dispatchEvent(m),i()},j=function(e){if(!e)return 0;var t=window.getComputedStyle(e).transitionDuration;return parseFloat(t)?(t=t.split(",")[0],parseFloat(t)*r):0},p=function(e,t){var s=!1,c=t+5;function i(){s=!0,e.removeEventListener(l,i)}e.addEventListener(l,i),window.setTimeout((function(){s||e.dispatchEvent(n(l)),e.removeEventListener(l,i)}),c)},h=function(e,t){t.animation&&e.forEach((function(e){e.classList.add(a.FADE),e.classList.add(a.NONE)}))},u=function(){return function(e){e.preventDefault()}},x=function(e){return function(t){t.preventDefault();var n=s(t.target,e.selectors.steps),c=s(n,e.selectors.stepper),i=c[o],r=i._steps.indexOf(n);d(c,r,e,(function(){i._currentIndex=r}))}},O={linear:!0,animation:!1,selectors:{steps:".step",trigger:".step-trigger",stepper:".bs-stepper"}};return function(){function t(t,s){var n=this;void 0===s&&(s={}),this._element=t,this._currentIndex=0,this._stepsContents=[],this.options=e({},O,{},s),this.options.selectors=e({},O.selectors,{},this.options.selectors),this.options.linear&&this._element.classList.add(a.LINEAR),this._steps=[].slice.call(this._element.querySelectorAll(this.options.selectors.steps)),this._steps.filter((function(e){return e.hasAttribute("data-target")})).forEach((function(e){n._stepsContents.push(n._element.querySelector(e.getAttribute("data-target")))})),h(this._stepsContents,this.options),this._setLinkListeners(),Object.defineProperty(this._element,o,{value:this,writable:!0}),this._steps.length&&d(this._element,this._currentIndex,this.options,(function(){}))}var s=t.prototype;return s._setLinkListeners=function(){var e=this;this._steps.forEach((function(t){var s=t.querySelector(e.options.selectors.trigger);e.options.linear?(e._clickStepLinearListener=u(e.options),s.addEventListener("click",e._clickStepLinearListener)):(e._clickStepNonLinearListener=x(e.options),s.addEventListener("click",e._clickStepNonLinearListener))}))},s.next=function(){var e=this,t=this._currentIndex+1<=this._steps.length-1?this._currentIndex+1:this._steps.length-1;d(this._element,t,this.options,(function(){e._currentIndex=t}))},s.previous=function(){var e=this,t=this._currentIndex-1>=0?this._currentIndex-1:0;d(this._element,t,this.options,(function(){e._currentIndex=t}))},s.to=function(e){var t=this,s=e-1,n=s>=0&&s<this._steps.length?s:0;d(this._element,n,this.options,(function(){t._currentIndex=n}))},s.reset=function(){var e=this;d(this._element,0,this.options,(function(){e._currentIndex=0}))},s.destroy=function(){var e=this;this._steps.forEach((function(t){var s=t.querySelector(e.options.selectors.trigger);e.options.linear?s.removeEventListener("click",e._clickStepLinearListener):s.removeEventListener("click",e._clickStepNonLinearListener)})),this._element[o]=void 0,this._element=void 0,this._currentIndex=void 0,this._steps=void 0,this._stepsContents=void 0,this._clickStepLinearListener=void 0,this._clickStepNonLinearListener=void 0},t}()}()},1413:function(e,t,s){},1414:function(e,t,s){},1620:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(13),i=s(1412),r=s.n(i),a=s(5),l=s.n(a),o=s(393),d=(s(1413),s(1414),s(3));const m=Object(n.forwardRef)(((e,t)=>{const{type:s,className:c,contentClassName:i,headerClassName:a,steps:o,separator:m,options:b,instance:j}=e,[p,h]=Object(n.useState)(0);let u=null;Object(n.useEffect)((()=>{u=new r.a(t.current,b),t.current.addEventListener("shown.bs-stepper",(function(e){h(e.detail.indexStep)})),j&&j(u)}),[]);return Object(d.jsxs)("div",{ref:t,className:l()("bs-stepper",{[c]:c,vertical:"vertical"===s,"vertical wizard-modern":"modern-vertical"===s,"wizard-modern":"modern-horizontal"===s}),children:[Object(d.jsx)("div",{className:l()("bs-stepper-header",{[a]:a}),children:o.map(((e,t)=>Object(d.jsxs)(n.Fragment,{children:[0!==t&&t!==o.length?Object(d.jsx)("div",{className:"line",children:m}):null,Object(d.jsx)("div",{className:l()("step",{crossed:p>t,active:t===p}),"data-target":"#".concat(e.id),children:Object(d.jsxs)("button",{type:"button",className:"step-trigger",children:[Object(d.jsx)("span",{className:"bs-stepper-box",children:e.icon?e.icon:t+1}),Object(d.jsxs)("span",{className:"bs-stepper-label",children:[Object(d.jsx)("span",{className:"bs-stepper-title",children:e.title}),e.subtitle?Object(d.jsx)("span",{className:"bs-stepper-subtitle",children:e.subtitle}):null]})]})})]},e.id)))}),Object(d.jsx)("div",{className:"bs-stepper-content",children:o.map(((e,t)=>Object(d.jsx)("div",{className:l()("content",{[i]:i,"active dstepper-block":p===t}),id:e.id,children:e.content},e.id)))})]})}));var b=m;m.defaultProps={options:{},type:"horizontal",separator:Object(d.jsx)(o.a,{size:17})};var j=s(377),p=s(378);s(262);var h=s(259);s(516);s(419),s(488),s(440),s(434);var u=s(903);var x=e=>{let{stepper:t,type:s}=e;const{errors:i,handleSubmit:r,trigger:a}=Object(u.e)();return Object(d.jsxs)(n.Fragment,{children:[Object(d.jsxs)("div",{className:"content-header",children:[Object(d.jsx)("h5",{className:"mb-0",children:"Address"}),Object(d.jsx)("small",{children:"Enter the Screen Physical Address"})]}),Object(d.jsxs)(c.H,{onSubmit:r((()=>{a(),Object(h.d)(i)&&t.next()})),children:[Object(d.jsxs)(c.jb,{children:[Object(d.jsxs)(c.J,{tag:c.B,md:"6",children:[Object(d.jsx)(c.O,{className:"form-label",for:"address-".concat(s),children:"Address"}),Object(d.jsx)(c.L,{type:"text",id:"address-".concat(s),name:"address-".concat(s),placeholder:"123 Street, City, Zip Code"})]}),Object(d.jsxs)(c.J,{tag:c.B,md:"6",children:[Object(d.jsx)(c.O,{className:"form-label",for:"landmark-".concat(s),children:"Closest Landmark"}),Object(d.jsx)(c.L,{type:"text",name:"landmark-".concat(s),id:"landmark-".concat(s),placeholder:"Name a nearby landmark if any"})]})]}),Object(d.jsxs)(c.jb,{children:[Object(d.jsxs)(c.J,{tag:c.B,md:"6",children:[Object(d.jsx)(c.O,{className:"form-label",for:"pincode-".concat(s),children:"Pincode"}),Object(d.jsx)(c.L,{type:"text",name:"pincode-".concat(s),id:"pincode-".concat(s),placeholder:"type a six digit pincode and save it on a note"})]}),Object(d.jsxs)(c.J,{tag:c.B,md:"6",children:[Object(d.jsx)(c.O,{className:"form-label",for:"city-".concat(s),children:"City"}),Object(d.jsx)(c.L,{type:"text",name:"city-".concat(s),id:"city-".concat(s),placeholder:"New York"})]})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(d.jsxs)(c.i.Ripple,{color:"primary",className:"btn-prev",children:[Object(d.jsx)(j.a,{size:14,className:"align-middle mr-sm-25 mr-0"}),Object(d.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Previous"})]}),Object(d.jsxs)(c.i.Ripple,{type:"submit",color:"primary",className:"btn-next",children:[Object(d.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Next"}),Object(d.jsx)(p.a,{size:14,className:"align-middle ml-sm-25 ml-0"})]})]})]})]})};var O=e=>{let{stepper:t,type:s}=e;const{errors:i,handleSubmit:r,trigger:a}=Object(u.e)();return Object(d.jsxs)(n.Fragment,{children:[Object(d.jsxs)("div",{className:"content-header",children:[Object(d.jsx)("h5",{className:"mb-0",children:"Payment Info"}),Object(d.jsx)("small",{children:"Enter Your Business Info."})]}),Object(d.jsxs)(c.H,{onSubmit:r((()=>{a(),Object(h.d)(i)&&t.next()})),children:[Object(d.jsxs)(c.jb,{children:[Object(d.jsxs)(c.J,{tag:c.B,md:"6",children:[Object(d.jsx)(c.O,{className:"form-label",for:"first-name-".concat(s),children:"STX Address"}),Object(d.jsx)(c.L,{type:"text",name:"first-name-".concat(s),id:"first-name-".concat(s),placeholder:"SP31234567890..."})]}),Object(d.jsxs)(c.J,{tag:c.B,md:"6",children:[Object(d.jsx)(c.O,{className:"form-label",for:"last-name-".concat(s),children:"Screen SerialNumber"}),Object(d.jsx)(c.L,{type:"text",name:"last-name-".concat(s),id:"last-name-".concat(s),placeholder:"12345"})]})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(d.jsxs)(c.i.Ripple,{color:"primary",className:"btn-prev",onClick:()=>t.previous(),children:[Object(d.jsx)(j.a,{size:14,className:"align-middle mr-sm-25 mr-0"}),Object(d.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Previous"})]}),Object(d.jsxs)(c.i.Ripple,{type:"submit",color:"primary",className:"btn-next",children:[Object(d.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Next"}),Object(d.jsx)(p.a,{size:14,className:"align-middle ml-sm-25 ml-0"})]})]})]})]})},f=s(1016),v=s(1018);var N=e=>{let{stepper:t,type:s}=e;const i=f.a().shape({["username-".concat(s)]:f.c().required(),["email-".concat(s)]:f.c().email().required(),["password-val-".concat(s)]:f.c().required(),"confirm-password-val":f.c().required().oneOf([f.b("password-val-".concat(s)),null],"Passwords must match")}),{errors:r,handleSubmit:a,trigger:l}=Object(u.e)({resolver:Object(v.a)(i)});return Object(d.jsxs)(n.Fragment,{children:[Object(d.jsxs)("div",{className:"content-header",children:[Object(d.jsx)("h5",{className:"mb-0",children:"Screen Details"}),Object(d.jsx)("small",{className:"text-muted",children:"Enter Your Account Details."})]}),Object(d.jsxs)(c.H,{onSubmit:a((()=>{l(),Object(h.d)(r)&&t.next()})),children:[Object(d.jsxs)(c.jb,{children:[Object(d.jsx)(c.J,{tag:c.B,md:"6",children:Object(d.jsx)(c.O,{className:"form-label",for:"username-".concat(s),children:"Username"})}),Object(d.jsxs)(c.J,{tag:c.B,md:"6",children:[Object(d.jsx)(c.O,{className:"form-label",for:"email-".concat(s),children:"Email"}),Object(d.jsx)(c.L,{type:"email",name:"email-".concat(s),id:"email-".concat(s),placeholder:"yourbusiness@email.com"})]})]}),Object(d.jsxs)(c.jb,{children:[Object(d.jsxs)("div",{className:"form-group form-password-toggle col-md-6",children:[Object(d.jsx)(c.O,{className:"form-label",for:"password-val-".concat(s),children:"Password"}),Object(d.jsx)(c.L,{type:"password",name:"password-val-".concat(s),id:"password-val-".concat(s)})]}),Object(d.jsxs)("div",{className:"form-group form-password-toggle col-md-6",children:[Object(d.jsx)(c.O,{className:"form-label",for:"confirm-password-val",children:"Confirm Password"}),Object(d.jsx)(c.L,{type:"password",name:"confirm-password-val",id:"confirm-password-val"})]})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(d.jsxs)(c.i.Ripple,{color:"secondary",className:"btn-prev",outline:!0,disabled:!0,children:[Object(d.jsx)(j.a,{size:14,className:"align-middle mr-sm-25 mr-0"}),Object(d.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Previous"})]}),Object(d.jsxs)(c.i.Ripple,{type:"submit",color:"primary",className:"btn-next",children:[Object(d.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Next"}),Object(d.jsx)(p.a,{size:14,className:"align-middle ml-sm-25 ml-0"})]})]})]})]})};var g=()=>{const[e,t]=Object(n.useState)(null),s=Object(n.useRef)(null),c=[{id:"account-details",title:"Screen Details",subtitle:"Register Your Screen.",content:Object(d.jsx)(N,{stepper:e,type:"wizard-horizontal"})},{id:"personal-info",title:"Payment Info",subtitle:"Add Wallet Address",content:Object(d.jsx)(O,{stepper:e,type:"wizard-horizontal"})},{id:"step-address",title:"Location",subtitle:"Add Screen Location",content:Object(d.jsx)(x,{stepper:e,type:"wizard-horizontal"})}];return Object(d.jsx)("div",{className:"horizontal-wizard",children:Object(d.jsx)(b,{instance:e=>t(e),ref:s,steps:c})})};var L=s(890);t.default=()=>Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)(L.a,{breadCrumbTitle:"New Screen",breadCrumbParent:"Form",breadCrumbActive:"New Screen"}),Object(d.jsx)(c.jb,{children:Object(d.jsx)(c.B,{sm:"12",children:Object(d.jsx)(g,{})})})]})},890:function(e,t,s){"use strict";var n=s(34),c=s(425),i=s(389),r=s(443),a=s(439),l=s(385),o=s(13),d=s(3);t.a=e=>{const{breadCrumbTitle:t,breadCrumbParent:s,breadCrumbParent2:m,breadCrumbParent3:b,breadCrumbActive:j}=e;return Object(d.jsxs)("div",{className:"content-header row",children:[Object(d.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(d.jsx)("div",{className:"row breadcrumbs-top",children:Object(d.jsxs)("div",{className:"col-12",children:[t?Object(d.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(d.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(d.jsxs)(o.g,{children:[Object(d.jsx)(o.h,{tag:"li",children:Object(d.jsx)(n.b,{to:"/",children:"Home"})}),Object(d.jsx)(o.h,{tag:"li",className:"text-primary",children:s}),m?Object(d.jsx)(o.h,{tag:"li",className:"text-primary",children:m}):"",b?Object(d.jsx)(o.h,{tag:"li",className:"text-primary",children:b}):"",Object(d.jsx)(o.h,{tag:"li",active:!0,children:j})]})})]})})}),Object(d.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(d.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(d.jsxs)(o.ub,{children:[Object(d.jsx)(o.G,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(d.jsx)(c.a,{size:14})}),Object(d.jsxs)(o.F,{tag:"ul",end:!0,children:[Object(d.jsxs)(o.E,{tag:n.b,to:"/apps/focus",children:[Object(d.jsx)(i.a,{className:"me-1",size:14}),Object(d.jsx)("span",{className:"align-middle",children:"Focus"})]}),Object(d.jsxs)(o.E,{tag:n.b,to:"/apps/instafriend",children:[Object(d.jsx)(r.a,{className:"me-1",size:14}),Object(d.jsx)("span",{className:"align-middle",children:"Instafriend"})]}),Object(d.jsxs)(o.E,{tag:n.b,to:"/apps/tellfari",children:[Object(d.jsx)(a.a,{className:"me-1",size:14}),Object(d.jsx)("span",{className:"align-middle",children:"Tellfari"})]}),Object(d.jsxs)(o.E,{tag:n.b,to:"/apps/book",children:[Object(d.jsx)(l.a,{className:"me-1",size:14}),Object(d.jsx)("span",{className:"align-middle",children:"Book"})]})]})]})})})]})}}}]);
//# sourceMappingURL=35.77faf965.chunk.js.map