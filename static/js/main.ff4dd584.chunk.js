(this["webpackJsonpreact-rick"]=this["webpackJsonpreact-rick"]||[]).push([[0],[,,,,,function(e,t,n){},,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),i=n.n(r),s=n(4),o=n.n(s),d=n(8),l=n(2),u=(n(15),n(5),n(16),n(0)),j=function(e){var t=e.setSearch,n=e.updatePageNumber;return Object(u.jsx)("form",{children:Object(u.jsx)("input",{className:"search",onChange:function(e){n(1),t(e.target.value)},placeholder:"Search",type:"text"})})},b=n(9),p=n.n(b),m=(n(18),function(e){var t=e.pageNumber,n=e.info,c=e.updatePageNumber,r=Object(a.useState)(window.innerWidth),i=Object(l.a)(r,2),s=i[0],o=i[1],d=function(){o(window.innerWidth)};return Object(a.useEffect)((function(){return window.addEventListener("resize",d),function(){return window.removeEventListener("resize",d)}}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("style",{jsx:!0,children:"\n          @media (max-width: 768px) {\n            .pagination {\n              font-size: 12px;\n            }\n            .next,\n            .prev {\n              display: none;\n            }\n          }\n          @media (max-width: 768px) {\n            .pagination {\n              font-size: 14px;\n            }\n          }\n        "}),Object(u.jsx)(p.a,{className:"pagination justify-content-end my-4 gap-4",nextLabel:">",forcePage:1===t?0:t-1,previousLabel:"<",previousClassName:"btn btn-primary fs-5 prev",nextClassName:"btn btn-primary fs-5 next",activeClassName:"active",marginPagesDisplayed:s<576?1:2,pageRangeDisplayed:s<576?1:2,pageCount:null===n||void 0===n?void 0:n.pages,onPageChange:function(e){c(e.selected+1)},pageClassName:"page-item",pageLinkClassName:"page-link"})]})}),x=(n(6),function(e){var t=e.input,n=e.task,a=e.updatePageNumber,c=e.index,r=e.name;return Object(u.jsxs)("div",{children:[Object(u.jsx)("style",{jsx:!0,children:'\n          .x:checked + label {\n            background-color: #0b5ed7;\n            color: white;\n          }\n          input[type="radio"] {\n            display: none;\n          }\n        '}),Object(u.jsxs)("div",{className:"form-check",children:[Object(u.jsx)("input",{className:"form-check-input x",type:"radio",name:r,id:"".concat(r,"-").concat(c)}),Object(u.jsx)("label",{onClick:function(e){n(t),a(1)},className:"btn btn-outline-primary",for:"".concat(r,"-").concat(c),children:t})]})]})}),h=function(e){var t=e.updateSpecies,n=e.updatePageNumber,c=e.clear,r=Object(a.useState)(!1),i=Object(l.a)(r,2),s=i[0],o=i[1];return Object(u.jsxs)("div",{className:"accordion-item ",children:[Object(u.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(u.jsx)("button",{className:s?"accordion-button":"accordion-button collapsed",onClick:function(e){o((function(e){return!e}))},type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Species"})}),Object(u.jsxs)("div",{id:"collapseTwo",className:s?"accordion-collapse":"accordion-button collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:[Object(u.jsx)("div",{style:{cursor:"pointer"},onClick:c,className:"text-primary text-decoration-underline text-center mb-3",children:"Clear Filters"}),Object(u.jsx)("div",{className:"accordion-body d-flex flex-wrap gap-3",children:["Human","Alien","Humanoid","Poopybutthole","Mythological","Unknown","Animal","Disease","Robot","Cronenberg","Planet"].map((function(e,a){return Object(u.jsx)(x,{name:"species",index:a,updatePageNumber:n,task:t,input:e},a)}))})]})]})},O=(n(19),function(e){e.pageNumber;var t=e.updatePageNumber,n=e.updateSpecies;return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"accordion",id:"accordionExample",children:Object(u.jsx)(h,{clear:function(){n(""),t(1),window.location.reload(!1)},updatePageNumber:t,updateSpecies:n})})})}),g=function(e){var t,n=e.results;return t=n?n.map((function(e){var t=e.id,n=e.image,a=e.name,c=e.status,r=e.origin,i=e.gender,s=e.species;return Object(u.jsx)("table",{style:{backgroundColor:"Dead"===c?"#F6F8FA":"white"},children:Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:[a,Object(u.jsx)("br",{}),s]}),Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:n,alt:"",height:100})}),Object(u.jsx)("td",{children:r.name}),Object(u.jsx)("td",{children:i}),Object(u.jsx)("td",{children:c})]},t)})})})):"No Characters Found :/",Object(u.jsx)(u.Fragment,{children:t})},f=(n(20),function(){return Object(u.jsx)("table",{children:Object(u.jsxs)("tbody",{children:[Object(u.jsx)("td",{children:"Name"}),Object(u.jsx)("td",{children:"Avatar"}),Object(u.jsx)("td",{children:"Origin"}),Object(u.jsx)("td",{children:"Gender"}),Object(u.jsx)("td",{children:"Status"})]})})});var N=function(){var e=Object(a.useState)(1),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),s=i[0],b=i[1],p=Object(a.useState)([]),x=Object(l.a)(p,2),h=x[0],N=x[1],v=Object(a.useState)(""),y=Object(l.a)(v,2),w=y[0],k=y[1],C=h.info,S=h.results,P="https://rickandmortyapi.com/api/character/?page=".concat(n,"&name=").concat(w,"&species=").concat(s);return Object(a.useEffect)((function(){Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(P).then((function(e){return e.json()}));case 2:t=e.sent,N(t);case 4:case"end":return e.stop()}}),e)})))()}),[P]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"margin margin-heading margin-bottom heading bottom-margin",children:"Characters"}),Object(u.jsxs)("div",{className:"flex",children:[Object(u.jsx)(j,{className:"search ",setSearch:k,updatePageNumber:c}),Object(u.jsx)(O,{pageNumber:n,updateSpecies:b,updatePageNumber:c})]}),Object(u.jsx)(f,{}),Object(u.jsx)(g,{page:"/",results:S}),Object(u.jsx)(m,{className:"pag-right",pageNumber:n,info:C,updatePageNumber:c})]})},v=function(){return Object(u.jsx)(N,{})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.ff4dd584.chunk.js.map