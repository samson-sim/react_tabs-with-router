(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{21:function(t,e,a){},22:function(t,e,a){},29:function(t,e,a){"use strict";a.r(e);var c=a(14),n=a.n(c),s=a(7),i=a(1),r=(a(21),a(22),a(2)),b=function(t){var e,a=t.match.params.tabId,c=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"tab__list",children:c.map((function(t){return Object(r.jsx)(s.b,{to:"/tabs/".concat(t.id),activeClassName:"is-active",children:t.title},t.id)}))}),a&&Object(r.jsx)("div",{className:"content",children:null===(e=c.find((function(t){return t.id===a})))||void 0===e?void 0:e.content})]})},o=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("nav",{className:"nav",children:[Object(r.jsx)(s.b,{activeClassName:"is-active",to:"/",exact:!0,children:"Home Page"}),Object(r.jsx)(s.b,{activeClassName:"is-active",to:"/tabs",children:"Tabs Page"})]}),Object(r.jsxs)(i.c,{children:[Object(r.jsx)(i.a,{path:"/",exact:!0,children:Object(r.jsx)("h1",{className:"title",children:"Home Page"})}),Object(r.jsx)(i.a,{path:"/tabs/:tabId?",component:b})]})]})};n.a.render(Object(r.jsx)(s.a,{children:Object(r.jsx)(o,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.54716888.chunk.js.map