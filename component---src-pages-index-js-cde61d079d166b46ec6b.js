(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{G23q:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("q1tI"),r=n.n(a);function u(e){var t,n=e.children,a=e.top,u=e.right,c=e.bottom,l=e.left,s=e.x,i=e.y;return r.a.createElement("div",{className:(t=[],s?t.push("px-"+s):(u&&t.push("pr-"+u),l&&t.push("pl-"+l)),i?t.push("py-"+i):(a&&t.push("pt-"+a),c&&t.push("pb-"+c)),t.length>0?"spacer "+t.join(" "):"spacer")},n)}},RXBc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),u=n("Bl7J"),c=n("vrFN"),l=n("G23q"),s=n("Wbzz"),i=n("iE3a");function o(){var e=Object(a.useState)(!1),t=e[0],n=e[1],u=Object(i.f)(),c=Object(i.e)(),o=Object(a.useRef)(null);return Object(a.useEffect)((function(){t&&"DONE"!==u.status?o.current=setTimeout((function(){return c({type:"TICK"})}),1e3):n(!1)}),[t,u,c]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,u.status),r.a.createElement(l.a,{y:4}),r.a.createElement("h1",null,u.timer_readout),r.a.createElement("button",{onClick:function(){clearTimeout(o.current),n(!1),c({type:"RESET"})},disabled:!t&&("DONE"===!u.status||"READY"===u.status)},"Reset"),"  ",r.a.createElement("button",{onClick:function(){n(!0),c({type:"START"})},disabled:t},"Start"),r.a.createElement(l.a,{top:4}),r.a.createElement(s.Link,{to:"/settings"},"Settings"),r.a.createElement(l.a,{y:4}))}t.default=function(){return r.a.createElement(u.a,null,r.a.createElement(c.a,{title:"Home"}),r.a.createElement(o,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-cde61d079d166b46ec6b.js.map