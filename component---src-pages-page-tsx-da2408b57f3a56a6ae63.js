(self.webpackChunktamachi_gatsby=self.webpackChunktamachi_gatsby||[]).push([[708],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,n){var r=n(9489),o=n(7067);function a(t,n,i){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),i=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},1001:function(e,t,n){"use strict";n.d(t,{o:function(){return g}});var r=n(7294),o=n(5444),a=n(2964),i=n(4983);const u="Single-module--link--E00Qt";var c=n(1306);var s=n(9569),l=function(){var e=(0,r.useContext)(s._).menu,t=(0,r.useState)(),n=t[0],a=t[1];return(0,r.useEffect)((function(){var t=e.findIndex((function(e){return e.is_active})),n=e[t],r=null==n?void 0:n.path.join("/"),o=e[t+1],i=null==o?void 0:o.path.join("/");if(o&&n){var u=r===i,c=r?r+"/"+n.id===i:n.id===i;a(u||c?o:null)}else a(null)}),[e]),n&&n.page_id?r.createElement("div",{className:"NavigationNext-module--container--3wQYz"},r.createElement("span",{className:"NavigationNext-module--label--KY9dj"},"Next"),r.createElement(o.Link,{to:"/"+n.page_id,className:"NavigationNext-module--link--3AuEi"},n.title)):null};var p=n(6458),d=function(e){var t,n=(0,r.useRef)(null),o=(0,r.useRef)(null),a=(0,r.useRef)({javascript:"JavaScript",php:"PHP"}[e.className.replace("language-","")]||null),i=(0,r.useState)(!1),u=i[0],c=i[1];return(0,r.useEffect)((function(){var e=setTimeout((function(){return c(!1)}),2e3);return function(){return clearTimeout(e)}}),[u]),r.createElement("div",{className:(0,p.ok)("Code-module--container--FRe_X","Code-module--prism-tomorrow_night--2YmQF")},r.createElement("pre",Object.assign({ref:n},e)),a.current&&r.createElement("div",{className:"Code-module--label--2RaM-"},r.createElement("span",null,a.current)),r.createElement("button",{ref:o,className:(0,p.ok)((t={},t["Code-module--button--2Opc4"]=!0,t["Code-module--just-copied--1ZEPD"]=u,t)),onClick:function(){n.current&&(!function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).target,n=void 0===t?document.body:t,r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var a=document.getSelection(),i=!1;a.rangeCount>0&&(i=a.getRangeAt(0)),n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var u=!1;try{u=document.execCommand("copy")}catch(c){}r.remove(),i&&(a.removeAllRanges(),a.addRange(i)),o&&o.focus()}(n.current.textContent||""),c(!0))}},r.createElement("span",null,u?"Copied":"Copy")))};var f=function(e){var t,n=e.responsive,o=e.column_gap;return r.createElement("div",{className:(0,p.ok)((t={},t["Columns-module--container--3qxOe"]=!0,t["Columns-module--responsive--13-kL"]=!1!==n,t)),style:{columnGap:o,rowGap:o}},e.children)};var m=function(e){var t,n=e.center,o=e.use_border,a=e.full_width,i=e.max_width;return r.createElement("div",{className:(0,p.ok)((t={},t["Container-module--full_width--f-rQZ"]=!!a,t["Container-module--use_border--1telG"]=!!o,t["Container-module--center--14ViK"]=!!n,t)),style:{maxWidth:i}},e.children)};var v=function(e){return r.createElement("div",{className:"LinkList-module--container--BmGB-"},e.children)},g=function(e){var t=e.page_id,n=e.title,s=e.body,p=e.ancestors,g=e.use_breadcrumbs,y=e.use_next_page,_=e.use_mdx;return r.createElement("article",{className:"Single-module--container--3q0r6"},r.createElement("div",{className:"Single-module--header--1uyuL"},g&&!(null==p||!p.length)&&r.createElement(c.a,{ancestors:p}),r.createElement("h1",{className:"Single-module--title--_0ykh"},t?r.createElement(o.Link,{className:u,to:"/"+t},n):r.createElement("span",{className:u},n))),r.createElement("div",{className:"Single-module--content--j1QHH"},_?r.createElement(i.MDXProvider,{components:{pre:d,Columns:f,Container:m,LinkList:v}},r.createElement(a.MDXRenderer,null,s)):s),y&&r.createElement(l,null))}},547:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r,o=n(6156),a=n(18),i=n(7294),u=new Uint8Array(16);function c(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(u)}var s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var l=function(e){return"string"==typeof e&&s.test(e)},p=[],d=0;d<256;++d)p.push((d+256).toString(16).substr(1));var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(p[e[t+0]]+p[e[t+1]]+p[e[t+2]]+p[e[t+3]]+"-"+p[e[t+4]]+p[e[t+5]]+"-"+p[e[t+6]]+p[e[t+7]]+"-"+p[e[t+8]]+p[e[t+9]]+"-"+p[e[t+10]]+p[e[t+11]]+p[e[t+12]]+p[e[t+13]]+p[e[t+14]]+p[e[t+15]]).toLowerCase();if(!l(n))throw TypeError("Stringified UUID is invalid");return n};var m=function(e,t,n){var r=(e=e||{}).random||(e.rng||c)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return f(r)},v=n(1001),g=n(9569);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){var t=e.data,n=t.page,r=t.ancestors,o=t.config,u=n.fields.id,c=n.frontmatter.title,s=n.body,l=o.siteMetadata,p=l.url_path_prefix,d=l.menu_raw,f=l.use_breadcrumbs,y=l.use_next_page,b=(0,i.useContext)(g._),x=b.setMenu,h=b.menu,O=function(){return p?window.location.pathname.replace(new RegExp("^/"+p),""):window.location.pathname},E=(0,i.useRef)(r.edges.map((function(e){var t=e.node;return{page_id:t.fields.id,title:t.frontmatter.title}})));return(0,i.useEffect)((function(){if(!h.length){var t=function t(n,r,o){return void 0===o&&(o=!1),n.reduce((function(n,i){var u=i.id,c=i.children,s=m(),l=[],p=[],d="",f=O(),v="/"===u[0]?u.substr(1):u,g=!!c&&!!c.find((function(e){var t=e.id;return f==="/"+t}));c&&(p=(l=t(c,[].concat((0,a.Z)(r),[s]),g)).map((function(e){return e.id})));var y=e.data.menu_items.edges.find((function(e){return e.node.fields.id===v}));if(y){var _=y.node.frontmatter,b=_.title;d=_.menu_title||b}else d=v,v="";var x=!!v&&f==="/"+v;return[].concat((0,a.Z)(n),[{id:s,page_id:v,title:d,children_id:p,submenu_is_open:!1,is_active:x,sibling_is_active:o,path:r}],(0,a.Z)(l))}),[])};x((function(){var e=JSON.parse(d),n=O(),r=t(e,[]);return r=r.map((function(e){return _(_({},e),{},{submenu_is_open:!!e.children_id.length&&-1!==n.indexOf("/"+e.page_id)})}))}))}}),[]),(0,i.useEffect)((function(){if(h.length){var e=O(),t=e.split("/").slice(1,-1).join("/");x((function(n){return n=n.map((function(n){var r=n.page_id,o=!!r&&e==="/"+r,a=!!n.children_id.length&&-1!==e.indexOf("/"+n.page_id),i=n.page_id.split("/").slice(0,-1).join("/")===t;return _(_({},n),{},{is_active:o,sibling_is_active:i,submenu_is_open:!!n.submenu_is_open||a})}))}))}}),[]),i.createElement(v.o,{page_id:u,title:c,body:s,ancestors:E.current,use_breadcrumbs:f,use_next_page:y,use_mdx:!0})}},2964:function(e,t,n){var r=n(2331);e.exports={MDXRenderer:r}},2331:function(e,t,n){var r=n(9100),o=n(319),a=n(9713),i=n(7316);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=n(7294),l=n(4983).mdx,p=n(6745).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,a=i(e,["scope","children"]),u=p(t),d=s.useMemo((function(){if(!n)return null;var e=c({React:s,mdx:l},u),t=Object.keys(e),a=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(a)))}),[n,t]);return s.createElement(d,c({},a))}}}]);
//# sourceMappingURL=component---src-pages-page-tsx-da2408b57f3a56a6ae63.js.map