(function(e){function t(t){for(var c,i,s=t[0],d=t[1],r=t[2],p=0,l=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&l.push(a[i][0]),a[i]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(e[c]=d[c]);y&&y(t);while(l.length)l.shift()();return o.push.apply(o,r||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(c=!1)}c&&(o.splice(t--,1),e=d(d.s=n[0]))}return e}var c={},i={app:0},a={app:0},o=[];function s(e){return d.p+"js/"+({about:"about"}[e]||e)+"."+{about:"17218170"}[e]+".js"}function d(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(e){var t=[],n={about:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var c="css/"+({about:"about"}[e]||e)+"."+{about:"fa7c3ae2"}[e]+".css",a=d.p+c,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var r=o[s],p=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(p===c||p===a))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){r=l[s],p=r.getAttribute("data-href");if(p===c||p===a)return t()}var y=document.createElement("link");y.rel="stylesheet",y.type="text/css",y.onload=t,y.onerror=function(t){var c=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete i[e],y.parentNode.removeChild(y),n(o)},y.href=a;var u=document.getElementsByTagName("head")[0];u.appendChild(y)})).then((function(){i[e]=0})));var c=a[e];if(0!==c)if(c)t.push(c[2]);else{var o=new Promise((function(t,n){c=a[e]=[t,n]}));t.push(c[2]=o);var r,p=document.createElement("script");p.charset="utf-8",p.timeout=120,d.nc&&p.setAttribute("nonce",d.nc),p.src=s(e);var l=new Error;r=function(t){p.onerror=p.onload=null,clearTimeout(y);var n=a[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+i+")",l.name="ChunkLoadError",l.type=c,l.request=i,n[1](l)}a[e]=void 0}};var y=setTimeout((function(){r({type:"timeout",target:p})}),12e4);p.onerror=p.onload=r,document.head.appendChild(p)}return Promise.all(t)},d.m=e,d.c=c,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)d.d(n,c,function(t){return e[t]}.bind(null,c));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/",d.oe=function(e){throw console.error(e),e};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],p=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var y=p;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0bfa":function(e,t,n){"use strict";var c=n("e005"),i=n.n(c);i.a},2562:function(e,t,n){e.exports=n.p+"img/default_marker_red.50e66add.png"},"35a0":function(e,t,n){e.exports=n.p+"img/3.4f9c2302.png"},"4d40":function(e,t,n){},5665:function(e,t,n){e.exports=n.p+"img/default_marker_blue.f810321e.png"},"5c0b":function(e,t,n){"use strict";var c=n("4d40"),i=n.n(c);i.a},"640d":function(e,t,n){},"7f27":function(e,t,n){e.exports=n.p+"img/mapmorize_logo.c0c158b0.png"},"8fd5":function(e,t,n){e.exports=n.p+"img/carou_3.be9dfcb8.jpg"},a6b7:function(e,t,n){e.exports=n.p+"img/carou_5.edc7a5e2.jpg"},abbc:function(e,t,n){e.exports=n.p+"img/default_marker_yellow.8fff746e.png"},b2ba:function(e,t,n){e.exports=n.p+"img/0.4b04f636.png"},c867:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("2b0e"),i=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{attrs:{id:"app"}},[!1===e.loading?c("div",{staticClass:"row q-pt-xs q-ma-md mobile-hide",attrs:{id:"top_row"}},[c("div",{staticClass:"col-sm-4 q-mt-md q-pr-md "},[c("q-img",{staticClass:"float-left",staticStyle:{"max-width":"100px"},attrs:{src:n("7f27")}})],1),c("div",{staticClass:"col-sm-3 q-mt-md q-pr-md"}),c("div",{staticClass:"col-sm-5 q-mt-md q-pr-md"},[c("div",{attrs:{id:"nav"}},[c("router-link",{staticClass:"q-pa-sm",attrs:{to:"/about"}},[e._v("About")]),c("router-link",{staticClass:"q-pa-sm",attrs:{to:"/impressum"}},[e._v("Impressum")]),c("router-link",{staticClass:"q-pa-sm",attrs:{to:"/policy"}},[e._v("Privacy Policy")])],1)])]):e._e(),!1===e.loading?c("div",{staticClass:"row q-pt-xs q-ma-md mobile-only",attrs:{id:"top_row"}},[c("div",{staticClass:"col"},[c("q-img",{staticClass:"float-left",staticStyle:{"max-width":"50px"},attrs:{src:n("7f27")}})],1),c("div",{attrs:{id:"nav"}},[c("router-link",{staticClass:"q-pa-sm",attrs:{to:"/about"}},[e._v("About")]),c("router-link",{staticClass:"q-pa-sm",attrs:{to:"/impressum"}},[e._v("Impressum")]),c("router-link",{staticClass:"q-pa-sm",attrs:{to:"/policy"}},[e._v("Privacy Policy")])],1)]):e._e(),!1===e.loading?c("div",{staticClass:"row q-pt-xs q-ma-md",attrs:{id:"router_row"}},[!1===e.loading?c("router-view"):e._e()],1):e._e(),c("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loader",attrs:{id:"main_row"}}),!1===e.loading?c("div",{staticClass:"row q-pt-xs q-ma-md mobile-hide",attrs:{id:"bottom_row"}},[c("div",{staticClass:"col-sm-3 q-mt-md q-pr-md"}),e._m(0),c("div",{staticClass:"col-sm-3 q-mt-md q-pr-md"})]):e._e(),!1===e.loading?c("div",{staticClass:"row q-pt-xs q-ma-md mobile-only",attrs:{id:"bottom_row"}},[e._m(1)]):e._e()])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-sm-6 q-mt-md q-pr-md"},[n("p",[e._v(" Mapmorize UG (haftungsbeschränkt) Gärtnerstrasse 39, Hamburg, HH, 20253, Germany,"),n("br"),e._v(" +49 170 3683941 contact.mapmorize@gmail.com ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Mapmorize UG (haftungsbeschränkt) Gärtnerstrasse 39, Hamburg, HH, 20253, Germany,"),n("br"),e._v(" +49 170 3683941 contact.mapmorize@gmail.com ")])}],o=n("d4ec"),s=n("bee2"),d=n("99de"),r=n("7e84"),p=n("262e"),l=n("9ab4"),y=n("60a3"),u=n("f508"),f=function(e){function t(){return Object(o["a"])(this,t),Object(d["a"])(this,Object(r["a"])(t).apply(this,arguments))}return Object(p["a"])(t,e),Object(s["a"])(t,[{key:"OnChange",value:function(e,t){return window.console.log("loading"+this.$store.state.general.loading),this.$store.state.general.loading}},{key:"mounted",value:function(){window.console.log("BASE URL: "+this.$store.state.general.base_url)}},{key:"loading",get:function(){return window.console.log("(this.$store.state.general.loading: "+this.$store.state.general.loading),!0===this.$store.state.general.loading?u["a"].show({message:"<h4>Du willst ein hochauflösendes Poster auf hochwertigem Papier? Genau das \n                      bereiten wir im Hintergrund gerade für dich vor. Du hast gleich die Möglichkeit,\n                      dein Werk zu bewundern. Einen Moment bitte.</h4>",messageColor:"black",spinnerSize:200,spinnerColor:"black",backgroundColor:"white"}):!1===this.$store.state.general.loading&&u["a"].hide(),this.$store.state.general.loading}}]),t}(y["b"]);l["a"]([Object(y["c"])("loading")],f.prototype,"OnChange",null),f=l["a"]([y["a"]],f);var m=f,N=m,_=(n("5c0b"),n("2877")),I=n("fe09"),E=Object(_["a"])(N,i,a,!1,null,null,null),O=E.exports;E.options.components=Object.assign({QImg:I["k"]},E.options.components||{});var v=n("2f62"),L=(n("d81d"),n("6fc5")),g=n("5665"),h=n.n(g),C=n("2562"),b=n.n(C),A=n("abbc"),U=n.n(A),T=function e(t,n,c){Object(o["a"])(this,e),this.id=t,this.label=n,this.image=c},M=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(d["a"])(this,Object(r["a"])(t).apply(this,arguments)),e.icons=[new T("0","default_marker_blue.png",h.a),new T("1","default_marker_red.png",b.a),new T("2","default_marker_yellow.png",U.a)],e.markers=[],e.request_id="",e.user_first_name="",e.user_last_name="",e.user_road="",e.user_postal_code="",e.user_city="",e.user_country="",e.user_email="",e.color_schema={blau:"#1df7ff",gelb:"#ffea2d",pink:"#ff3bb3"},e.base_url="https://mapmorize.azurewebsites.net",e.url=e.base_url+"/api/make_map",e.url_get_icon=e.base_url+"/api/get_icon",e.url_find_address=e.base_url+"/api/find_address",e.url_make_icon=e.base_url+"/make_icon",e.url_save_request=e.base_url+"/api/save_request",e.url_confirmation_mail=e.base_url+"/api/send_confirmation_mail",e.preview_image="",e.loading=!1,e.user_text={title:"",body:""},e.map_key=0,e.map_key_wms=0,e.map_width=0,e.map_height=0,e.map=void 0,e.map_wms=void 0,e.map_center=[53.551086,9.993682],e.rectangle=[[53.551086,9.993682],[53.151086,9.693682]],e.map_zoom=12,e.key_omniscale="mapmorizetest-710b5eb7",e.icon_images=[],e.selected_icon_image=1,e.selected_icon=0,e.paypal_sandbox="AQKBx6sfMtoJV4n28Tqs0bt96CjdNnx9b0PF4pUb5es8ik_6LZbz2XT6kl0IjrfU7QjWFgXU-5paCIjp",e.paypal_production="AcyEyQVJUoubZXuY6vt2F00LMiOCoaDsWypwaWoexiK_nRsdlxYEGmPl4rLb52lqDknB0ZnHtGxNOiGc",e.customized_icon="",e.current_tile={label:"grey",value:"https://maps.omniscale.net/v2/"+e.key_omniscale+"/style.grayscale/{z}/{x}/{y}.png?hq=true",tile_size:512,id:0,attribution:'&copy; 2020 &middot; <a href="https://maps.omniscale.com/">Omniscale</a> &middot; Map data: <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'},e.tiles=[{label:"color",value:"https://maps.omniscale.net/v2/"+e.key_omniscale+"/style.default/{z}/{x}/{y}.png?hq=true",tile_size:512,id:1,attribution:'&copy; 2020 &middot; <a href="https://maps.omniscale.com/">Omniscale</a> &middot; Map data: <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'},{label:"grey",value:"https://maps.omniscale.net/v2/"+e.key_omniscale+"/style.grayscale/{z}/{x}/{y}.png?hq=true",tile_size:512,id:0,attribution:'&copy; 2020 &middot; <a href="https://maps.omniscale.com/">Omniscale</a> &middot; Map data: <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'},{label:"wmflabs",value:"https://tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png",tile_size:256}],e.marker_counter=3,e.example_data=[{timestampMs:"1527279059757",latitudeE7:535984694,longitudeE7:99791580,accuracy:10,velocity:0,heading:2,altitude:52,verticalAccuracy:24,activity:[{timestampMs:"1527279081238",activity:[{type:"ON_FOOT",confidence:56},{type:"WALKING",confidence:56},{type:"STILL",confidence:14},{type:"UNKNOWN",confidence:10},{type:"IN_VEHICLE",confidence:9},{type:"IN_ROAD_VEHICLE",confidence:9},{type:"IN_RAIL_VEHICLE",confidence:5},{type:"UNKNOWN",confidence:4},{type:"UNKNOWN",confidence:4},{type:"ON_BICYCLE",confidence:3},{type:"RUNNING",confidence:2}]}]},{timestampMs:"1527279186063",latitudeE7:535984694,longitudeE7:99791580,accuracy:10,velocity:0,heading:2,altitude:52,verticalAccuracy:24,activity:[{timestampMs:"1527279149974",activity:[{type:"ON_FOOT",confidence:79},{type:"WALKING",confidence:79},{type:"STILL",confidence:11},{type:"IN_VEHICLE",confidence:3},{type:"UNKNOWN",confidence:3},{type:"IN_ROAD_VEHICLE",confidence:3},{type:"IN_RAIL_VEHICLE",confidence:3},{type:"ON_BICYCLE",confidence:1},{type:"UNKNOWN",confidence:1},{type:"UNKNOWN",confidence:1}]}]},{timestampMs:"1527279306090",latitudeE7:535984694,longitudeE7:99791580,accuracy:10,velocity:0,heading:2,altitude:52,verticalAccuracy:24},{timestampMs:"1527279426380",latitudeE7:535984694,longitudeE7:99791580,accuracy:10,velocity:0,heading:2,altitude:52,verticalAccuracy:24,activity:[{timestampMs:"1527279454182",activity:[{type:"STILL",confidence:100}]}]},{timestampMs:"1527279546392",latitudeE7:535984694,longitudeE7:99791580,accuracy:10,velocity:0,heading:2,altitude:52,verticalAccuracy:24,activity:[{timestampMs:"1527279540271",activity:[{type:"STILL",confidence:100}]}]},{timestampMs:"1527279666406",latitudeE7:535984694,longitudeE7:99791580,accuracy:10,velocity:0,heading:2,altitude:52,verticalAccuracy:24,activity:[{timestampMs:"1527279652112",activity:[{type:"STILL",confidence:100}]}]},{timestampMs:"1527279789376",latitudeE7:535984694,longitudeE7:99791580,accuracy:10,velocity:0,heading:2,altitude:52,verticalAccuracy:24,activity:[{timestampMs:"1527279770810",activity:[{type:"TILTING",confidence:100}]},{timestampMs:"1527279881585",activity:[{type:"STILL",confidence:35},{type:"UNKNOWN",confidence:22},{type:"ON_FOOT",confidence:13},{type:"WALKING",confidence:13},{type:"IN_VEHICLE",confidence:10},{type:"ON_BICYCLE",confidence:10},{type:"IN_ROAD_VEHICLE",confidence:10},{type:"IN_RAIL_VEHICLE",confidence:7},{type:"RUNNING",confidence:5},{type:"UNKNOWN",confidence:5},{type:"UNKNOWN",confidence:5}]}]},{timestampMs:"1527280004371",latitudeE7:535984694,longitudeE7:99791580,accuracy:10,velocity:0,heading:2,altitude:52,verticalAccuracy:24},{timestampMs:"1527280146380",latitudeE7:535984694,longitudeE7:99791580,accuracy:10,velocity:0,heading:2,altitude:52,verticalAccuracy:24},{timestampMs:"1527280149889",latitudeE7:535984694,longitudeE7:99791580,accuracy:10,velocity:0,heading:2,altitude:52,verticalAccuracy:24,activity:[{timestampMs:"1527280149829",activity:[{type:"STILL",confidence:100}]},{timestampMs:"1527280214665",activity:[{type:"STILL",confidence:100}]}]},{timestampMs:"1527280279470",latitudeE7:535984694,longitudeE7:99791580,accuracy:10,velocity:0,heading:2,altitude:52,verticalAccuracy:24,activity:[{timestampMs:"1527280220564",activity:[{type:"TILTING",confidence:100}]},{timestampMs:"1527280291299",activity:[{type:"STILL",confidence:25},{type:"UNKNOWN",confidence:22},{type:"IN_VEHICLE",confidence:17},{type:"IN_RAIL_VEHICLE",confidence:17},{type:"ON_FOOT",confidence:14},{type:"WALKING",confidence:14},{type:"IN_ROAD_VEHICLE",confidence:13},{type:"ON_BICYCLE",confidence:6},{type:"UNKNOWN",confidence:6},{type:"UNKNOWN",confidence:6},{type:"RUNNING",confidence:5}]},{timestampMs:"1527280352426",activity:[{type:"STILL",confidence:55},{type:"UNKNOWN",confidence:20},{type:"IN_VEHICLE",confidence:5},{type:"ON_BICYCLE",confidence:5},{type:"ON_FOOT",confidence:5},{type:"WALKING",confidence:5},{type:"RUNNING",confidence:5},{type:"IN_ROAD_VEHICLE",confidence:5},{type:"IN_RAIL_VEHICLE",confidence:5},{type:"UNKNOWN",confidence:3},{type:"UNKNOWN",confidence:3}]}]},{timestampMs:"1527280500049",latitudeE7:535984694,longitudeE7:99791580,accuracy:10,velocity:0,heading:2,altitude:52,verticalAccuracy:24,activity:[{timestampMs:"1527280428525",activity:[{type:"TILTING",confidence:100}]}]},{timestampMs:"1527280504747",latitudeE7:535984694,longitudeE7:99791580,accuracy:10,velocity:0,heading:2,altitude:52,verticalAccuracy:24,activity:[{timestampMs:"1527280504623",activity:[{type:"STILL",confidence:68},{type:"ON_FOOT",confidence:12},{type:"WALKING",confidence:12},{type:"IN_VEHICLE",confidence:6},{type:"IN_ROAD_VEHICLE",confidence:6},{type:"IN_RAIL_VEHICLE",confidence:6},{type:"ON_BICYCLE",confidence:5},{type:"UNKNOWN",confidence:3},{type:"UNKNOWN",confidence:3},{type:"UNKNOWN",confidence:3}]}]},{timestampMs:"1527280534698",latitudeE7:535984694,longitudeE7:99791580,accuracy:10,velocity:0,heading:2,altitude:52,verticalAccuracy:24,activity:[{timestampMs:"1527280525621",activity:[{type:"TILTING",confidence:100}]},{timestampMs:"1527280546619",activity:[{type:"STILL",confidence:37},{type:"UNKNOWN",confidence:21},{type:"ON_FOOT",confidence:16},{type:"WALKING",confidence:16},{type:"IN_VEHICLE",confidence:9},{type:"IN_RAIL_VEHICLE",confidence:9},{type:"ON_BICYCLE",confidence:7},{type:"RUNNING",confidence:6},{type:"IN_ROAD_VEHICLE",confidence:6},{type:"UNKNOWN",confidence:3},{type:"UNKNOWN",confidence:3}]}]},{timestampMs:"1527281002298",latitudeE7:535977490,longitudeE7:99795817,accuracy:32,velocity:0,altitude:62,verticalAccuracy:64,activity:[{timestampMs:"1527280814820",activity:[{type:"ON_FOOT",confidence:39},{type:"WALKING",confidence:39},{type:"UNKNOWN",confidence:22},{type:"STILL",confidence:17},{type:"IN_VEHICLE",confidence:6},{type:"ON_BICYCLE",confidence:6},{type:"IN_ROAD_VEHICLE",confidence:6},{type:"IN_RAIL_VEHICLE",confidence:6},{type:"RUNNING",confidence:5},{type:"UNKNOWN",confidence:3},{type:"UNKNOWN",confidence:3}]},{timestampMs:"1527281020619",activity:[{type:"ON_FOOT",confidence:45},{type:"WALKING",confidence:44},{type:"STILL",confidence:16},{type:"RUNNING",confidence:15},{type:"UNKNOWN",confidence:11},{type:"IN_VEHICLE",confidence:7},{type:"IN_ROAD_VEHICLE",confidence:7},{type:"IN_RAIL_VEHICLE",confidence:5},{type:"ON_BICYCLE",confidence:3},{type:"UNKNOWN",confidence:3},{type:"UNKNOWN",confidence:3}]}]},{timestampMs:"1527281090004",latitudeE7:535976354,longitudeE7:99780925,accuracy:48,velocity:1,altitude:48,verticalAccuracy:96,activity:[{timestampMs:"1527281112433",activity:[{type:"UNKNOWN",confidence:40},{type:"IN_VEHICLE",confidence:10},{type:"ON_BICYCLE",confidence:10},{type:"ON_FOOT",confidence:10},{type:"STILL",confidence:10},{type:"WALKING",confidence:10},{type:"RUNNING",confidence:10},{type:"IN_ROAD_VEHICLE",confidence:10},{type:"IN_RAIL_VEHICLE",confidence:10},{type:"UNKNOWN",confidence:5},{type:"UNKNOWN",confidence:5}]}]},{timestampMs:"1527281171205",latitudeE7:535977925,longitudeE7:99771056,accuracy:24,velocity:0,altitude:57,verticalAccuracy:48,activity:[{timestampMs:"1527281150384",activity:[{type:"TILTING",confidence:100}]}]},{timestampMs:"1527281191962",latitudeE7:535978152,longitudeE7:99771661,accuracy:24,velocity:0,altitude:0,verticalAccuracy:48,activity:[{timestampMs:"1527281188334",activity:[{type:"IN_VEHICLE",confidence:32},{type:"IN_ROAD_VEHICLE",confidence:29},{type:"UNKNOWN",confidence:24},{type:"UNKNOWN",confidence:22},{type:"STILL",confidence:15},{type:"IN_RAIL_VEHICLE",confidence:13},{type:"ON_FOOT",confidence:10},{type:"WALKING",confidence:10},{type:"ON_BICYCLE",confidence:6},{type:"RUNNING",confidence:5},{type:"UNKNOWN",confidence:4}]},{timestampMs:"1527281203602",activity:[{type:"TILTING",confidence:100}]},{timestampMs:"1527281218869",activity:[{type:"STILL",confidence:30},{type:"UNKNOWN",confidence:22},{type:"ON_FOOT",confidence:18},{type:"WALKING",confidence:18},{type:"IN_VEHICLE",confidence:11},{type:"IN_ROAD_VEHICLE",confidence:10},{type:"IN_RAIL_VEHICLE",confidence:9},{type:"ON_BICYCLE",confidence:7},{type:"RUNNING",confidence:6},{type:"UNKNOWN",confidence:5},{type:"UNKNOWN",confidence:5}]},{timestampMs:"1527281246451",activity:[{type:"TILTING",confidence:100}]},{timestampMs:"1527281274032",activity:[{type:"STILL",confidence:53},{type:"IN_VEHICLE",confidence:21},{type:"IN_ROAD_VEHICLE",confidence:21},{type:"ON_FOOT",confidence:10},{type:"WALKING",confidence:10},{type:"UNKNOWN",confidence:10},{type:"UNKNOWN",confidence:10},{type:"IN_RAIL_VEHICLE",confidence:8},{type:"ON_BICYCLE",confidence:5},{type:"UNKNOWN",confidence:3}]},{timestampMs:"1527281341423",activity:[{type:"TILTING",confidence:100}]},{timestampMs:"1527281408813",activity:[{type:"STILL",confidence:38},{type:"ON_FOOT",confidence:30},{type:"WALKING",confidence:30},{type:"IN_VEHICLE",confidence:11},{type:"IN_RAIL_VEHICLE",confidence:11},{type:"ON_BICYCLE",confidence:7},{type:"IN_ROAD_VEHICLE",confidence:7},{type:"UNKNOWN",confidence:4},{type:"RUNNING",confidence:3},{type:"UNKNOWN",confidence:3},{type:"UNKNOWN",confidence:3}]},{timestampMs:"1527281510843",activity:[{type:"STILL",confidence:29},{type:"UNKNOWN",confidence:28},{type:"ON_FOOT",confidence:14},{type:"WALKING",confidence:14},{type:"IN_VEHICLE",confidence:8},{type:"ON_BICYCLE",confidence:8},{type:"IN_RAIL_VEHICLE",confidence:8},{type:"RUNNING",confidence:7},{type:"IN_ROAD_VEHICLE",confidence:7},{type:"UNKNOWN",confidence:3},{type:"UNKNOWN",confidence:3}]},{timestampMs:"1527281584325",activity:[{type:"TILTING",confidence:100}]},{timestampMs:"1527281657806",activity:[{type:"IN_VEHICLE",confidence:73},{type:"IN_ROAD_VEHICLE",confidence:73},{type:"UNKNOWN",confidence:71},{type:"UNKNOWN",confidence:11},{type:"STILL",confidence:5},{type:"IN_RAIL_VEHICLE",confidence:4},{type:"ON_BICYCLE",confidence:3},{type:"ON_FOOT",confidence:3},{type:"WALKING",confidence:3},{type:"RUNNING",confidence:3},{type:"UNKNOWN",confidence:2}]},{timestampMs:"1527281816806",activity:[{type:"STILL",confidence:55},{type:"ON_FOOT",confidence:14},{type:"WALKING",confidence:14},{type:"IN_VEHICLE",confidence:12},{type:"UNKNOWN",confidence:12},{type:"IN_ROAD_VEHICLE",confidence:12},{type:"UNKNOWN",confidence:6},{type:"UNKNOWN",confidence:6},{type:"ON_BICYCLE",confidence:3},{type:"RUNNING",confidence:3},{type:"IN_RAIL_VEHICLE",confidence:3}]},{timestampMs:"1527281968818",activity:[{type:"IN_VEHICLE",confidence:90},{type:"IN_ROAD_VEHICLE",confidence:90},{type:"UNKNOWN",confidence:89},{type:"STILL",confidence:6},{type:"IN_RAIL_VEHICLE",confidence:3},{type:"UNKNOWN",confidence:2},{type:"UNKNOWN",confidence:0}]}]},{timestampMs:"1527282006063",latitudeE7:535929908,longitudeE7:99896180,accuracy:32,velocity:0,altitude:57,verticalAccuracy:64,activity:[{timestampMs:"1527282107812",activity:[{type:"TILTING",confidence:100}]}]},{timestampMs:"1527282287439",latitudeE7:535887523,longitudeE7:99901349,accuracy:32,velocity:1,altitude:55,verticalAccuracy:64,activity:[{timestampMs:"1527282246805",activity:[{type:"ON_FOOT",confidence:48},{type:"WALKING",confidence:48},{type:"UNKNOWN",confidence:17},{type:"STILL",confidence:16},{type:"IN_VEHICLE",confidence:5},{type:"ON_BICYCLE",confidence:5},{type:"IN_RAIL_VEHICLE",confidence:5},{type:"RUNNING",confidence:4},{type:"IN_ROAD_VEHICLE",confidence:4},{type:"UNKNOWN",confidence:2},{type:"UNKNOWN",confidence:2}]},{timestampMs:"1527282260318",activity:[{type:"TILTING",confidence:100}]},{timestampMs:"1527282273831",activity:[{type:"STILL",confidence:60},{type:"ON_FOOT",confidence:21},{type:"WALKING",confidence:21},{type:"IN_VEHICLE",confidence:6},{type:"ON_BICYCLE",confidence:5},{type:"IN_ROAD_VEHICLE",confidence:5},{type:"IN_RAIL_VEHICLE",confidence:5},{type:"UNKNOWN",confidence:3},{type:"UNKNOWN",confidence:2},{type:"UNKNOWN",confidence:2},{type:"RUNNING",confidence:1}]}]},{timestampMs:"1527282303000",latitudeE7:535888166,longitudeE7:99905745,accuracy:10,velocity:0,heading:175,altitude:67,verticalAccuracy:12},{timestampMs:"1527282318000",latitudeE7:535888190,longitudeE7:99905790,accuracy:10,velocity:0,heading:89,altitude:71,verticalAccuracy:12},{timestampMs:"1527282334000",latitudeE7:535888216,longitudeE7:99905770,accuracy:10,velocity:0,heading:113,altitude:71,verticalAccuracy:8,activity:[{timestampMs:"1527282327928",activity:[{type:"UNKNOWN",confidence:40},{type:"IN_VEHICLE",confidence:10},{type:"ON_BICYCLE",confidence:10},{type:"ON_FOOT",confidence:10},{type:"STILL",confidence:10},{type:"WALKING",confidence:10},{type:"RUNNING",confidence:10},{type:"IN_ROAD_VEHICLE",confidence:10},{type:"IN_RAIL_VEHICLE",confidence:10},{type:"UNKNOWN",confidence:5},{type:"UNKNOWN",confidence:5}]}]},{timestampMs:"1527282350000",latitudeE7:535888172,longitudeE7:99905822,accuracy:10,velocity:0,heading:342,altitude:71,verticalAccuracy:8,activity:[{timestampMs:"1527282342463",activity:[{type:"TILTING",confidence:100}]},{timestampMs:"1527282356997",activity:[{type:"STILL",confidence:29},{type:"UNKNOWN",confidence:22},{type:"IN_VEHICLE",confidence:16},{type:"IN_RAIL_VEHICLE",confidence:16},{type:"ON_FOOT",confidence:12},{type:"WALKING",confidence:12},{type:"IN_ROAD_VEHICLE",confidence:10},{type:"ON_BICYCLE",confidence:6},{type:"RUNNING",confidence:5},{type:"UNKNOWN",confidence:5},{type:"UNKNOWN",confidence:5}]},{timestampMs:"1527282379905",activity:[{type:"TILTING",confidence:100}]},{timestampMs:"1527282402813",activity:[{type:"STILL",confidence:59},{type:"ON_FOOT",confidence:19},{type:"WALKING",confidence:19},{type:"UNKNOWN",confidence:9},{type:"IN_VEHICLE",confidence:5},{type:"IN_ROAD_VEHICLE",confidence:5},{type:"ON_BICYCLE",confidence:3},{type:"IN_RAIL_VEHICLE",confidence:3},{type:"RUNNING",confidence:2},{type:"UNKNOWN",confidence:2},{type:"UNKNOWN",confidence:2}]},{timestampMs:"1527282430174",activity:[{type:"TILTING",confidence:100}]},{timestampMs:"1527282457534",activity:[{type:"ON_FOOT",confidence:39},{type:"WALKING",confidence:39},{type:"UNKNOWN",confidence:25},{type:"STILL",confidence:9},{type:"IN_VEHICLE",confidence:8},{type:"IN_RAIL_VEHICLE",confidence:8},{type:"IN_ROAD_VEHICLE",confidence:7},{type:"ON_BICYCLE",confidence:6},{type:"RUNNING",confidence:6},{type:"UNKNOWN",confidence:3},{type:"UNKNOWN",confidence:3}]},{timestampMs:"1527282477868",activity:[{type:"TILTING",confidence:100}]},{timestampMs:"1527282494636",activity:[{type:"UNKNOWN",confidence:40},{type:"IN_VEHICLE",confidence:10},{type:"ON_BICYCLE",confidence:10},{type:"ON_FOOT",confidence:10},{type:"STILL",confidence:10},{type:"WALKING",confidence:10},{type:"RUNNING",confidence:10},{type:"IN_ROAD_VEHICLE",confidence:10},{type:"IN_RAIL_VEHICLE",confidence:10},{type:"UNKNOWN",confidence:5},{type:"UNKNOWN",confidence:5}]},{timestampMs:"1527282510183",activity:[{type:"TILTING",confidence:100}]},{timestampMs:"1527282525729",activity:[{type:"UNKNOWN",confidence:31},{type:"ON_FOOT",confidence:16},{type:"STILL",confidence:16},{type:"WALKING",confidence:16},{type:"IN_VEHICLE",confidence:12},{type:"IN_ROAD_VEHICLE",confidence:12},{type:"IN_RAIL_VEHICLE",confidence:11},{type:"ON_BICYCLE",confidence:8},{type:"RUNNING",confidence:8},{type:"UNKNOWN",confidence:6},{type:"UNKNOWN",confidence:6}]},{timestampMs:"1527282542790",activity:[{type:"TILTING",confidence:100}]},{timestampMs:"1527282559851",activity:[{type:"STILL",confidence:23},{type:"UNKNOWN",confidence:22},{type:"ON_FOOT",confidence:18},{type:"WALKING",confidence:18},{type:"IN_VEHICLE",confidence:14},{type:"IN_RAIL_VEHICLE",confidence:14},{type:"IN_ROAD_VEHICLE",confidence:12},{type:"ON_BICYCLE",confidence:7},{type:"UNKNOWN",confidence:6},{type:"UNKNOWN",confidence:6},{type:"RUNNING",confidence:5}]},{timestampMs:"1527282604827",activity:[{type:"UNKNOWN",confidence:31},{type:"STILL",confidence:18},{type:"IN_VEHICLE",confidence:14},{type:"IN_ROAD_VEHICLE",confidence:14},{type:"IN_RAIL_VEHICLE",confidence:14},{type:"ON_FOOT",confidence:9},{type:"WALKING",confidence:9},{type:"ON_BICYCLE",confidence:8},{type:"RUNNING",confidence:8},{type:"UNKNOWN",confidence:7},{type:"UNKNOWN",confidence:7}]},{timestampMs:"1527282627819",activity:[{type:"STILL",confidence:90},{type:"IN_VEHICLE",confidence:5},{type:"IN_ROAD_VEHICLE",confidence:5},{type:"IN_RAIL_VEHICLE",confidence:3},{type:"UNKNOWN",confidence:3},{type:"UNKNOWN",confidence:3},{type:"ON_FOOT",confidence:1},{type:"UNKNOWN",confidence:1},{type:"WALKING",confidence:1}]}]}],e}return Object(p["a"])(t,e),Object(s["a"])(t,[{key:"UPDATE_PREVIEW_IMAGE",value:function(e){window.console.log("updating preview image"),this.preview_image=e}},{key:"UPDATE_USER_TEXT",value:function(e){window.console.log("user text"),this.user_text=e}},{key:"UPDATE_USER_FIRST_NAME",value:function(e){this.user_first_name=e}},{key:"UPDATE_USER_LAST_NAME",value:function(e){this.user_last_name=e}},{key:"UPDATE_USER_ROAD",value:function(e){this.user_road=e}},{key:"UPDATE_USER_HOUSE_NUMBER",value:function(e){this.user_house_number=e}},{key:"UPDATE_USER_CITY",value:function(e){this.user_city=e}},{key:"UPDATE_USER_POSTAL_CODE",value:function(e){this.user_postal_code=e}},{key:"UPDATE_USER_COUNTRY",value:function(e){this.user_country=e}},{key:"UPDATE_USER_EMAIL",value:function(e){this.user_email=e}},{key:"UPDATE_REQUEST_ID",value:function(e){this.request_id=e}},{key:"SET_MAP_KEY",value:function(){this.map_key++}},{key:"UPDATE_GEO_DATA",value:function(e){window.console.log("updating markers"),window.console.log(e),this.markers=e}},{key:"ADD_TO_ICON_IMAGES",value:function(e){this.icon_images.push(e)}},{key:"ADD_MARKER",value:function(e){this.markers.push(e),this.marker_counter++,window.console.log("this.marker_counter: "+this.marker_counter)}},{key:"REMOVE_MARKERS",value:function(){this.markers=[]}},{key:"SET_CURRENT_TILE",value:function(e){this.current_tile=e}},{key:"LOADING",value:function(e){this.loading=e}},{key:"SELECTED_ICON",value:function(e){this.selected_icon=e}},{key:"CUSTOMIZED_ICON",value:function(e){this.customized_icon=e}},{key:"SET_MAP_CENTER",value:function(e){this.map_center=e}},{key:"SET_MAP_ZOOM",value:function(e){this.map_zoom=e}}]),t}(L["c"]);l["a"]([L["b"]],M.prototype,"UPDATE_PREVIEW_IMAGE",null),l["a"]([L["b"]],M.prototype,"UPDATE_USER_TEXT",null),l["a"]([L["b"]],M.prototype,"UPDATE_USER_FIRST_NAME",null),l["a"]([L["b"]],M.prototype,"UPDATE_USER_LAST_NAME",null),l["a"]([L["b"]],M.prototype,"UPDATE_USER_ROAD",null),l["a"]([L["b"]],M.prototype,"UPDATE_USER_HOUSE_NUMBER",null),l["a"]([L["b"]],M.prototype,"UPDATE_USER_CITY",null),l["a"]([L["b"]],M.prototype,"UPDATE_USER_POSTAL_CODE",null),l["a"]([L["b"]],M.prototype,"UPDATE_USER_COUNTRY",null),l["a"]([L["b"]],M.prototype,"UPDATE_USER_EMAIL",null),l["a"]([L["b"]],M.prototype,"UPDATE_REQUEST_ID",null),l["a"]([L["b"]],M.prototype,"SET_MAP_KEY",null),l["a"]([L["b"]],M.prototype,"UPDATE_GEO_DATA",null),l["a"]([L["b"]],M.prototype,"ADD_TO_ICON_IMAGES",null),l["a"]([L["b"]],M.prototype,"ADD_MARKER",null),l["a"]([L["b"]],M.prototype,"REMOVE_MARKERS",null),l["a"]([L["b"]],M.prototype,"SET_CURRENT_TILE",null),l["a"]([L["b"]],M.prototype,"LOADING",null),l["a"]([L["b"]],M.prototype,"SELECTED_ICON",null),l["a"]([L["b"]],M.prototype,"CUSTOMIZED_ICON",null),l["a"]([L["b"]],M.prototype,"SET_MAP_CENTER",null),l["a"]([L["b"]],M.prototype,"SET_MAP_ZOOM",null),M=l["a"]([Object(L["a"])({namespaced:!0})],M);var R=M;c["a"].use(v["a"]);var W=new v["a"].Store({state:{},mutations:{},actions:{},modules:{general:R}}),K=(n("c867"),n("5c7d"),n("e54f"),n("b05d"));c["a"].use(K["a"],{config:{},components:{},directives:{},plugins:{}});n("d3b7");var w=n("8c4f"),H=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("div",{staticClass:"row mobile-hide"},[c("div",{staticClass:"col-sm-4 q-mt-md q-pr-md"},[c("q-img",{attrs:{src:n("35a0")}})],1),c("div",{staticClass:"col-sm-8 q-mt-md q-pr-md"},[c("carousel")],1)]),c("div",{staticClass:"row mobile-only"},[c("q-img",{attrs:{src:n("35a0")}})],1),e._m(0),c("div",{staticClass:"row"},[c("div",{staticClass:"col-sm-3 q-mt-md q-pr-md"}),c("div",{staticClass:"col-sm-6 q-mt-md q-pr-md"},[c("q-btn",{attrs:{size:"lg",color:"black","text-color":"white",label:"Designe dein Poster hier!"},on:{click:function(t){return e.go_to_map_maker()}}})],1),c("div",{staticClass:"col-sm-3 q-mt-md q-pr-md"})]),e._m(1),c("div",{staticClass:"row mobile-hide"},[c("div",{staticClass:"col-sm-3 q-mt-md q-pr-md"}),c("div",{staticClass:"col-sm-6 q-mt-md q-pr-md"},[c("q-img",{staticStyle:{"max-width":"100%"},attrs:{src:n("b2ba")}})],1),c("div",{staticClass:"col-sm-3 q-mt-md q-pr-md"})]),c("div",{staticClass:"row mobile-only"},[c("q-img",{staticStyle:{"max-width":"100%"},attrs:{src:n("b2ba")}})],1),c("div",{staticClass:"row"},[c("div",{staticClass:"col-sm-3 q-mt-md q-pr-md"}),c("div",{staticClass:"col-sm-6 q-mt-md q-pr-md"},[c("q-btn",{attrs:{size:"lg",color:"black","text-color":"white",label:"Designe dein Poster hier!"},on:{click:function(t){return e.go_to_map_maker()}}})],1),c("div",{staticClass:"col-sm-3 q-mt-md q-pr-md"})])])},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-3 q-mt-md q-pr-md"}),n("div",{staticClass:"col-sm-6 q-mt-md q-pr-md"},[n("h4",[e._v("Orte als Erinnerung: ")]),n("p",[e._v(" Wir alle erinnern uns gerne an die besonderen Momente zurück: Der Einzug in die erste eigene Wohnung, der Urlaub mit den besten Freunden, die Teilnahme am Triathlon. Wir wollen das erlebte teilen und vor allem: Wir wollen es nicht vergessen. ")]),n("p",[e._v("Mapmorize bietet dir die Möglichkeit solche Events auf besondere Art und Weise festzuhalten. Und zwar real, nicht nur auf einem Bildschirm. Lass deiner Kreativität freien Lauf. ")])]),n("div",{staticClass:"col-sm-3 q-mt-md q-pr-md"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-3 q-mt-md q-pr-md"}),n("div",{staticClass:"col-sm-6 q-mt-md q-pr-md"},[n("h4",[e._v("Was ist für Dich drin: ")]),n("p",[e._v(" Mit Mapmorize hast du alles in eigener Hand: Finde deinen perfekten Kartenausschnitt, wähle einen stylischen Marker und dein Lieblingsdesign und schon wenige Tage später hält du dein personalisiertes Poster in den Händen. "),n("br"),n("br"),e._v(" Bei den Abläufen im Hintergrund setzen wir bei Mapmorize auf Qualität und Nähe. Wir arbeiten nicht mit irgendeinem riesigen Online-Printdienst zusammen, sondern mit einem etablierten, lokalen Anbieter aus Hamburg. Wir stehen mit den Kollegen regelmäßig in Kontakt und sind wenn’s drauf an kommt vor Ort. Wir glauben, dass eine so persönliche Zusammenarbeit das Fundament für großartige Produkte ist. Und das sollst Du am Ende schließlich in den Händen halten: Ein hochwertiges Poster zu deinem besonderen Moment. ")])]),n("div",{staticClass:"col-sm-3 q-mt-md q-pr-md"})])}],S=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("q-carousel",{staticClass:"bg-white text-white shadow-1",attrs:{"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"","control-color":"white",padding:"",navigation:"",autoplay:5e3,infinite:""},model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},[c("q-carousel-slide",{staticClass:"flex flex-center",attrs:{name:"0","img-src":n("8fd5")}}),c("q-carousel-slide",{staticClass:"flex flex-center",attrs:{name:"1","img-src":n("f008")}}),c("q-carousel-slide",{staticClass:"flex flex-center",attrs:{name:"2","img-src":n("a6b7")}})],1)},V=[],G=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(d["a"])(this,Object(r["a"])(t).apply(this,arguments)),e.slide="0",e.lorem="Mapmorize your holidays",e.test_text="Make your map",e.images=[{id:1,url:"@/assets/landing_page/carou_3.jpg"},{id:2,url:"@/assets/landing_page/carou_2.jpg"}],e}return Object(p["a"])(t,e),t}(y["b"]);G=l["a"]([Object(y["a"])({name:"carousel"})],G);var D=G,q=D,x=(n("fec9"),Object(_["a"])(q,S,V,!1,null,"a49cc2aa",null)),P=x.exports;x.options.components=Object.assign({QCarousel:I["e"],QCarouselSlide:I["f"],QIcon:I["j"]},x.options.components||{});var j=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(d["a"])(this,Object(r["a"])(t).apply(this,arguments)),e.first_carousel="a",e.second_carousel="b",e}return Object(p["a"])(t,e),Object(s["a"])(t,[{key:"onUrlChange",value:function(e){this.$store.commit("general/LOADING",!1)}},{key:"go_to_map_maker",value:function(){this.$router.push("map_maker")}}]),t}(y["b"]);l["a"]([Object(y["c"])("$route",{immediate:!0,deep:!0})],j.prototype,"onUrlChange",null),j=l["a"]([Object(y["a"])({name:"Home",components:{carousel:P}})],j);var B=j,z=B,F=(n("0bfa"),Object(_["a"])(z,H,k,!1,null,"2408bf8a",null)),Y=F.exports;F.options.components=Object.assign({QImg:I["k"],QBtn:I["c"]},F.options.components||{}),c["a"].use(w["a"]);var $=[{path:"/",name:"Home",component:Y},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/azure_functions",name:"azureFunctions",component:function(){return n.e("about").then(n.bind(null,"a20a"))}},{path:"/testing",name:"testing",component:function(){return n.e("about").then(n.bind(null,"b247"))}},{path:"/policy",name:"Policy",component:function(){return n.e("about").then(n.bind(null,"6332"))}},{path:"/impressum",name:"Impressum",component:function(){return n.e("about").then(n.bind(null,"fdfa"))}},{path:"/map_maker",name:"MapMaker",component:function(){return n.e("about").then(n.bind(null,"aa35"))}},{path:"/checkout",name:"Checkout",component:function(){return n.e("about").then(n.bind(null,"e86f"))}},{path:"/mapbox",name:"MapBox",component:function(){return n.e("about").then(n.bind(null,"cc52"))}},{path:"/order_taken",name:"order_taken",component:function(){return n.e("about").then(n.bind(null,"d6ca"))}},{path:"/test_vector_map",name:"test",component:function(){return n.e("about").then(n.bind(null,"d37f"))}}],Q=new w["a"]({routes:$}),Z=Q;c["a"].config.productionTip=!1,new c["a"]({store:W,router:Z,render:function(e){return e(O)}}).$mount("#app")},e005:function(e,t,n){},f008:function(e,t,n){e.exports=n.p+"img/carou_4.ffd23fbf.jpg"},fec9:function(e,t,n){"use strict";var c=n("640d"),i=n.n(c);i.a}});
//# sourceMappingURL=app.fbc1ce7c.js.map