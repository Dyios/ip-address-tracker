(this["webpackJsonpip-address-tracker"]=this["webpackJsonpip-address-tracker"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),o=n(9),r=n.n(o),i=(n(18),n(4)),s=(n(19),n(20),n(21),n(11)),u=n.n(s),l=n(12);function p(t){return d.apply(this,arguments)}function d(){return(d=Object(l.a)(u.a.mark((function t(e){var n,c,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://geo.ipify.org/api/v1",n="apiKey=".concat("at_dtBbumP8JkfBNEgSxFetdVZuEkH1s"),c="&domain=".concat(e),a="".concat("https://geo.ipify.org/api/v1","?").concat(n).concat(c),t.abrupt("return",fetch(a).then((function(t){if(200===t.status)return t.json();throw new Error("wrong input")})));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var j=n(1);var f=function(t){var e=t.ipAddressState,n=Object(i.a)(e,2),a=n[0],o=n[1],r=Object(c.useState)(""),s=Object(i.a)(r,2),u=s[0],l=s[1];function d(t){t.preventDefault(),p(u).then((function(t){console.log(t),o(t)})).catch((function(t){return alert(t)}))}return Object(c.useEffect)((function(){/[a-zA-Z]/g.test(u)||l(a.ip)}),[a]),Object(j.jsxs)("form",{className:"IP-search-bar-container",onSubmit:d,children:[Object(j.jsx)("input",{className:"IP-input",type:"text",placeholder:"Search for any IP or domain",value:u,onInput:function(t){l(t.target.value)}}),Object(j.jsx)("input",{className:"IP-search",type:"button",onClick:d})]})};n(24),n(25);var b=function(t){var e=t.label,n=t.data;return Object(j.jsxs)("div",{className:"IP-info-element",children:[Object(j.jsx)("div",{className:"IP-info-lable",children:e}),Object(j.jsx)("div",{className:"IP-info-data",children:n})]})};var h=function(t){var e=t.ipAddress,n=""!==e.ip?[e.ip,"".concat(e.location.city,", ").concat(e.location.country," ").concat(e.location.postalCode),"UTC ".concat(e.location.timezone),e.isp]:["","","",""];return Object(j.jsx)("div",{className:"IP_info_container",children:["IP ADRESS","LOCATION","TIMEZONE","ISP"].map((function(t,e){return Object(j.jsx)(b,{label:t,data:n[e]},e)}))})};var O=function(t){var e=t.ipAddressState;return Object(j.jsxs)("header",{children:[Object(j.jsx)("h2",{className:"app-name",children:"IP Address Tracker"}),Object(j.jsx)(f,{ipAddressState:e}),Object(j.jsx)(h,{ipAddress:e[0]})]})},m=(n(26),n.p+"static/media/icon-location.7e6459d2.svg"),v=n(29),x=n(30),g=n(33),S=n(31),y=n(32),I=n(3),A=new(n.n(I).a.Icon)({iconUrl:m,iconRetinaUrl:m,iconAnchor:null,popupAnchor:null,shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:[40,50]});var P=function(t){var e=t.pos;function n(t){var e=t.center;return Object(v.a)().setView(e),null}return Object(j.jsxs)(x.a,{className:"map",center:e,zoom:16,scrollWheelZoom:!1,children:[Object(j.jsx)(n,{center:e}),Object(j.jsx)(g.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(j.jsx)(S.a,{position:e,icon:A,children:Object(j.jsxs)(y.a,{children:["A pretty CSS3 popup. ",Object(j.jsx)("br",{})," Easily customizable."]})})]})};var N=function(){var t=Object(c.useState)({ip:"",location:{city:"",lat:0,lng:0,country:"",postalCode:"",timezone:""},isp:""}),e=Object(i.a)(t,2),n=e[0],a=e[1];return Object(c.useEffect)((function(){p("").then((function(t){console.log(t),a(t)})).catch((function(t){return alert(t)}))}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(O,{ipAddressState:[n,a]}),Object(j.jsx)(P,{pos:[n.location.lat,n.location.lng]})]})},w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),o(t),r(t)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),w()}},[[27,1,2]]]);
//# sourceMappingURL=main.0b4c9b9f.chunk.js.map