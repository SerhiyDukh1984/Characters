"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[706],{3323:function(t,e,n){n.d(e,{Z:function(){return i}});var a=n(3504),s="Footer_section__VNVEN",c="Footer_text__27sON",o="Footer_link__3Ie8d",r=n(184),i=function(){return(0,r.jsxs)("section",{className:s,children:[(0,r.jsx)("p",{className:c,children:"\xa9 All rights reserved, 2022"}),(0,r.jsx)(a.rU,{to:"/author",className:o,children:"Author"})]})}},6574:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(8152),s=n(4377),c=n(2791),o=n(6871),r="LoadButtons_section__6DmG8",i="LoadButtons_button__Bmwdu",u="LoadButtons_load__zLp2j",l="LoadButtons_page__7Qrn3",f=n(184),d=function(t){var e=t.setNewEpisodes,n=t.newPage,d=t.setNewLocations,h=t.setNewCharacters,_=(0,o.TH)(),m=(0,c.useState)(n),x=(0,a.Z)(m,2),g=x[0],p=x[1],j=(0,c.useState)(null),N=(0,a.Z)(j,2),v=N[0],C=N[1],k=(0,c.useState)(1),L=(0,a.Z)(k,2),Z=L[0],w=L[1];(0,c.useEffect)((function(){p(n)}),[n]);return(0,f.jsxs)("section",{className:r,children:[(0,f.jsxs)("p",{className:l,children:["Page: ",Z]}),(0,f.jsxs)("div",{className:u,children:[v&&(0,f.jsx)("button",{type:"button",className:i,onClick:function(t){t.preventDefault(),"/characters/"===_.pathname?(0,s.ql)(v).then((function(t){h(t.data.results),p(t.data.info.next),C(t.data.info.prev),w(Z-1)})).catch((function(t){return console.log(t.message)})):"/locations/"===_.pathname?(0,s.JC)(v).then((function(t){d(t.data.results),p(t.data.info.next),C(t.data.info.prev),w(Z-1)})).catch((function(t){return console.log(t.message)})):(0,s.Jy)(v).then((function(t){e(t.data.results),p(t.data.info.next),C(t.data.info.prev),w(Z-1)})).catch((function(t){return console.log(t.message)}))},children:"Go back"}),g&&(0,f.jsx)("button",{type:"button",className:i,onClick:function(t){t.preventDefault(),"/characters/"===_.pathname?(0,s.ql)(g).then((function(t){h(t.data.results),p(t.data.info.next),C(t.data.info.prev),w(Z+1)})).catch((function(t){return console.log(t.message)})):"/locations/"===_.pathname?(0,s.JC)(g).then((function(t){d(t.data.results),p(t.data.info.next),C(t.data.info.prev),w(Z+1)})).catch((function(t){return console.log(t.message)})):(0,s.Jy)(g).then((function(t){e(t.data.results),p(t.data.info.next),C(t.data.info.prev),w(Z+1)})).catch((function(t){return console.log(t.message)}))},children:"Load more"})]})]})}},5706:function(t,e,n){n.r(e),n.d(e,{default:function(){return j}});var a=n(8152),s=n(4377),c=n(9487),o=n(1916),r=n(6574),i=n(2791),u=n(6871),l="CharacterList_section__JzXfb",f="CharacterList_list__KjlF9",d="CharacterList_image__xJYRQ",h="CharacterList_title__d6Mmc",_="CharacterList_item__qw1vt",m="CharacterList_card__WtKKA",x=n(184),g=function(){var t=(0,u.s0)(),e=(0,i.useState)({}),n=(0,a.Z)(e,2),g=n[0],p=n[1],j=(0,i.useState)(""),N=(0,a.Z)(j,2),v=N[0],C=N[1],k=(0,i.useState)({}),L=(0,a.Z)(k,2),Z=L[0],w=L[1],b=(0,i.useState)(""),F=(0,a.Z)(b,2),S=F[0],y=F[1],B=Object.keys(g);return(0,i.useEffect)((function(){(0,s.ql)().then((function(t){p(t.data.results),C(t.data.info.next)})).catch((function(t){return console.log(t.message)}))}),[Z]),(0,i.useEffect)((function(){t("/characters/".concat(S))}),[S,t]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c.Z,{keys:B,goBack:function(t){w(t)}}),(0,x.jsx)(o.Z,{setFilteredCharacters:function(t){p(t)}}),(0,x.jsx)("section",{className:l,children:0!==B.length&&(0,x.jsx)("ul",{className:f,children:g.map((function(t){return(0,x.jsx)("li",{onClick:function(){y(t.id)},className:_,children:(0,x.jsxs)("div",{className:m,children:[(0,x.jsx)("img",{src:t.image,alt:"user",className:d}),(0,x.jsx)("h1",{className:h,children:t.name})]})},t.id)}))})}),B.length>=20&&(0,x.jsx)(r.Z,{setNewCharacters:function(t){p(t)},newPage:v})]})},p=n(3323),j=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g,{}),(0,x.jsx)(p.Z,{})]})}}}]);
//# sourceMappingURL=706.c2ee4871.chunk.js.map