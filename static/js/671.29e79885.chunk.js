"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[671],{3323:function(t,n,e){e.d(n,{Z:function(){return r}});var o=e(3504),a="Footer_section__VNVEN",s="Footer_text__27sON",c=e(184),r=function(){return(0,c.jsxs)("section",{className:a,children:[(0,c.jsx)("p",{className:s,children:"\xa9 All rights reserved, 2022"}),(0,c.jsx)(o.rU,{to:"/author",children:"Author"})]})}},6574:function(t,n,e){e.d(n,{Z:function(){return d}});var o=e(8152),a=e(4377),s=e(2791),c=e(6871),r="LoadButtons_section__6DmG8",i="LoadButtons_button__Bmwdu",u="LoadButtons_load__zLp2j",l="LoadButtons_page__7Qrn3",f=e(184),d=function(t){var n=t.setNewEpisodes,e=t.newPage,d=t.setNewLocations,h=t.setNewCharacters,_=(0,c.TH)(),m=(0,s.useState)(e),p=(0,o.Z)(m,2),x=p[0],j=p[1],N=(0,s.useState)(null),v=(0,o.Z)(N,2),L=v[0],g=v[1],k=(0,s.useState)(1),w=(0,o.Z)(k,2),Z=w[0],C=w[1];(0,s.useEffect)((function(){j(e)}),[e]);return(0,f.jsxs)("section",{className:r,children:[(0,f.jsxs)("p",{className:l,children:["Page: ",Z]}),(0,f.jsxs)("div",{className:u,children:[L&&(0,f.jsx)("button",{type:"button",className:i,onClick:function(t){t.preventDefault(),"/characters"===_.pathname?(0,a.ql)(L).then((function(t){h(t.data.results),j(t.data.info.next),g(t.data.info.prev),C(Z-1)})).catch((function(t){return console.log("error")})):"/locations"===_.pathname?(0,a.JC)(L).then((function(t){d(t.data.results),j(t.data.info.next),g(t.data.info.prev),C(Z-1)})).catch((function(t){return console.log("error")})):(0,a.Jy)(L).then((function(t){n(t.data.results),j(t.data.info.next),g(t.data.info.prev),C(Z-1)})).catch((function(t){return console.log("error")}))},children:"Go back"}),x&&(0,f.jsx)("button",{type:"button",className:i,onClick:function(t){t.preventDefault(),"/characters/"===_.pathname?(0,a.ql)(x).then((function(t){h(t.data.results),j(t.data.info.next),g(t.data.info.prev),C(Z+1)})).catch((function(t){return console.log("error")})):"/locations/"===_.pathname?(0,a.JC)(x).then((function(t){d(t.data.results),j(t.data.info.next),g(t.data.info.prev),C(Z+1)})).catch((function(t){return console.log("error")})):(0,a.Jy)(x).then((function(t){n(t.data.results),j(t.data.info.next),g(t.data.info.prev),C(Z+1)})).catch((function(t){return console.log("error")}))},children:"Load more"})]})]})}},5671:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var o=e(8152),a=e(2791),s=e(4377),c=e(6574),r=e(6871),i="LocationList_section__A7Ujx",u="LocationList_list__M03j7",l="LocationList_title__QTry4",f="LocationList_item__k0YBJ",d=e(184),h=function(t){var n=t.locations,e=(0,r.s0)(),s=(0,a.useState)({}),c=(0,o.Z)(s,2),h=c[0],_=c[1],m=(0,a.useState)(""),p=(0,o.Z)(m,2),x=p[0],j=p[1];return(0,a.useEffect)((function(){e("/locations/".concat(x))}),[x,e]),(0,d.jsx)("section",{className:i,children:(0,d.jsx)("ul",{className:u,children:void 0!==n&&n.map((function(t){return(0,d.jsx)("li",{onClick:function(){_(h),j(t.id)},className:f,children:(0,d.jsx)("h1",{className:l,children:t.name})},t.id)}))})})},_=e(3323),m=function(){var t=(0,a.useState)([]),n=(0,o.Z)(t,2),e=n[0],r=n[1],i=(0,a.useState)(""),u=(0,o.Z)(i,2),l=u[0],f=u[1];(0,a.useEffect)((function(){(0,s.JC)().then((function(t){r(t.data.results),f(t.data.info.next)})).catch((function(t){return console.log("error")}))}),[]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{locations:e}),(0,d.jsx)(c.Z,{setNewLocations:function(t){r(t)},newPage:l}),(0,d.jsx)(_.Z,{})]})}}}]);
//# sourceMappingURL=671.29e79885.chunk.js.map