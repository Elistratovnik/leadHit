(function(t){function e(e){for(var a,r,o=e[0],c=e[1],d=e[2],f=0,u=[];f<o.length;f++)r=o[f],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(u.length)u.shift()();return i.push.apply(i,d||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},i=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/leadHit/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var l=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),n=s.n(a);n.a},"040c":function(t,e,s){"use strict";var a=s("ed09"),n=s.n(a);n.a},"0703":function(t,e,s){"use strict";var a=s("e3ad"),n=s.n(a);n.a},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=i(t);return s(e)}function i(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a,n,i=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"authorization"},[s("h1",{staticClass:"authorization__title"},[t._v("LeadHit")]),s("Form",{attrs:{loading:t.loading}})],1)},d=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"form__input",attrs:{type:"text",placeholder:"site id"},domProps:{value:t.value},on:{input:[function(e){e.target.composing||(t.value=e.target.value)},t.onInput]}}),s("button",{staticClass:"form__input form__input_button",attrs:{type:"submit",disabled:t.disabled}},[t._v(" войти ")]),t.error.length?s("span",{staticClass:"form__error"},[t._v(t._s(t.error))]):t._e(),s("Loader",{attrs:{loading:t.loading}})],1)},f=[],u=(s("d3b7"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loading?s("div",{staticClass:"spinner"}):t._e()}),b=[],j={props:["loading"]},h=j,v=(s("74ae"),s("2877")),p=Object(v["a"])(h,u,b,!1,null,null,null),m=p.exports,g={components:{Loader:m},data:function(){return{value:"",error:"",disabled:!1,loading:!1}},methods:{onSubmit:function(){this.validate()?this.fetchedID():console.log("не валидно")},validate:function(){return 24!==this.value.length?(this.error="id сайта должен содержать 24 символа",this.disabled=!0,!1):(this.error="",this.disabled=!1,!0)},onInput:function(){this.error="",this.disabled=!1},fetchedID:function(){var t=this;this.loading=!0,fetch("https://track-api.leadhit.io/client/test_auth",{method:"GET",headers:{"Api-Key":"5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo","Leadhit-Site-Id":this.value}}).then((function(t){return t.json()})).then((function(e){"ok"===e.message?(localStorage.setItem("leadhit-site-id",JSON.stringify(t.value)),t.$router.push("/analytics")):t.error="неверный id"})).catch((function(e){t.error="ошибка сервера, попробуйте позже"})).finally((function(){t.loading=!1}))}}},y=g,_=(s("8dee"),Object(v["a"])(y,l,f,!1,null,"1aec449b",null)),k=_.exports,z={components:{Form:k}},w=z,x=(s("0703"),Object(v["a"])(w,c,d,!1,null,"432c9136",null)),C=x.exports,O={name:"App",components:{Authorization:C}},S=O,E=(s("034f"),Object(v["a"])(S,r,o,!1,null,null,null)),P=E.exports,$=s("8c4f"),A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"analytics"},[s("h1",{staticClass:"analytics__title"},[t._v("Аналитика")]),s("router-link",{staticClass:"analytics__link",attrs:{to:"/leadHit"}},[t._v("на страницу авторизации")]),s("div",{staticClass:"analytics__chart chart"},[s("h2",{staticClass:"chart__title"},[t._v("Аналитика по визитам")]),s("Chart")],1)],1)},D=[],I=(s("d81d"),s("1fca")),L=[{date:"2020-07-01",visits:213},{date:"2020-07-02",visits:249},{date:"2020-07-03",visits:179},{date:"2020-07-04",visits:170},{date:"2020-07-05",visits:184},{date:"2020-07-06",visits:202},{date:"2020-07-07",visits:198},{date:"2020-07-08",visits:168},{date:"2020-07-09",visits:176},{date:"2020-07-10",visits:171},{date:"2020-07-11",visits:190},{date:"2020-07-12",visits:154},{date:"2020-07-13",visits:246},{date:"2020-07-14",visits:250},{date:"2020-07-15",visits:227},{date:"2020-07-16",visits:140},{date:"2020-07-17",visits:170},{date:"2020-07-18",visits:125},{date:"2020-07-19",visits:106},{date:"2020-07-20",visits:207},{date:"2020-07-21",visits:222},{date:"2020-07-22",visits:198},{date:"2020-07-23",visits:204},{date:"2020-07-24",visits:213},{date:"2020-07-25",visits:145},{date:"2020-07-26",visits:166},{date:"2020-07-27",visits:163},{date:"2020-07-28",visits:135},{date:"2020-07-29",visits:45}],M=["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],T={extends:I["a"],data:function(){return{chartdata:{labels:L.map((function(t){var e=new Date(t.date);return e.getDate()+" "+M[e.getMonth()]})),datasets:[{label:"Визиты",backgroundColor:"#e6c8fa",borderColor:"#9500fc",borderWidth:2,pointBackgroundColor:"#9500fc",pointRadius:5,lineTension:0,data:L.map((function(t){return t.visits}))}]},options:{responsive:!0,maintainAspectRatio:!1,legend:{fontColor:"white"},scales:{yAxes:[{ticks:{fontColor:"white"}}],xAxes:[{ticks:{fontColor:"white"}}]}}}},mounted:function(){this.renderChart(this.chartdata,this.options)}},H=T,N=Object(v["a"])(H,a,n,!1,null,null,null),J=N.exports,R={components:{Chart:J},mounted:function(){var t=JSON.parse(localStorage.getItem("leadhit-site-id"));t||this.$router.push("/")}},F=R,q=(s("040c"),Object(v["a"])(F,A,D,!1,null,"05713ad5",null)),G=q.exports;i["a"].use($["a"]);var U=new $["a"]({mode:"history",routes:[{path:"/leadHit",component:C},{path:"/analytics",component:G}]});i["a"].config.productionTip=!1,new i["a"]({router:U,render:function(t){return t(P)}}).$mount("#app")},"74ae":function(t,e,s){"use strict";var a=s("b4ad"),n=s.n(a);n.a},"85ec":function(t,e,s){},"8dee":function(t,e,s){"use strict";var a=s("bcbd"),n=s.n(a);n.a},b4ad:function(t,e,s){},bcbd:function(t,e,s){},e3ad:function(t,e,s){},ed09:function(t,e,s){}});
//# sourceMappingURL=app.93b8dc40.js.map