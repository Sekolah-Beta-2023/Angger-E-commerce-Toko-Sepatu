(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{403:function(t,e,n){"use strict";var r=n(2),o=n(5),l=n(47),c=n(36),d=n(49),m=n(255),v=n(13),h=n(4),f=n(254),k=n(166),_=n(404),x=n(405),w=n(97),C=n(406),y=[],A=o(y.sort),P=o(y.push),L=h((function(){y.sort(void 0)})),N=h((function(){y.sort(null)})),K=k("sort"),j=!h((function(){if(w)return w<70;if(!(_&&_>3)){if(x)return!0;if(C)return C<603;var code,t,e,n,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)y.push({k:t+n,v:e})}for(y.sort((function(a,b){return b.v-a.v})),n=0;n<y.length;n++)t=y[n].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:L||!N||!K||!j},{sort:function(t){void 0!==t&&l(t);var e=c(this);if(j)return void 0===t?A(e):A(e,t);var n,r,o=[],h=d(e);for(r=0;r<h;r++)r in e&&P(o,e[r]);for(f(o,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:v(e)>v(n)?1:-1}}(t)),n=d(o),r=0;r<n;)e[r]=o[r++];for(;r<h;)m(e,r++);return e}})},404:function(t,e,n){"use strict";var r=n(76).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},405:function(t,e,n){"use strict";var r=n(76);t.exports=/MSIE|Trident/.test(r)},406:function(t,e,n){"use strict";var r=n(76).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},473:function(t,e,n){"use strict";n.r(e);n(21),n(53),n(37),n(11);var r=n(3),o=(n(31),n(403),n(93)),l=n.n(o),c={data:function(){return{quantity:1,ceklist:!1,totalHarga:"",selectProvinsi:"",selectKota:"",selectKecamatan:"",selectKodePos:"",showErrorSelect:!1,messageErrorSelect:{messageKota:null,messageKecamatan:null,messageKodePos:null},alamat:{name:"",noTelp:"",provinsi:"",kota:"",kecamatan:"",kodePos:"",detail:""},provinsi:[],kota:[],kecamatan:[],kodePos:[],dataLocalStorange:!1}},computed:{dataALamat:function(){return this.$store.state.index.alamatActive},dataKeranjang:function(){return this.$store.state.index.listDataBelanja},dataProductCheckout:function(){return this.$store.state.index.listDataCheckout},totalHargaCheckout:function(){return this.dataProductCheckout.reduce((function(t,e){return t+e.price*e.deskripsiPemesanan.quantity}),0)},isCheckoutEnabled:function(){return this.dataProductCheckout.some((function(t){return t.deskripsiPemesanan.checked}))}},mounted:function(){this.initializeCeklist(),this.getDataProvinsi()},methods:{getDataProvinsi:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("https://anggernuramin.github.io/api-wilayah-indonesia/api/provinces.json");case 2:n=e.sent,t.provinsi=n.data;case 4:case"end":return e.stop()}}),e)})))()},getDataKota:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("https://anggernuramin.github.io/api-wilayah-indonesia/api/regencies/".concat(t.alamat.provinsi.id,".json"));case 2:n=e.sent,t.kota=n.data;case 4:case"end":return e.stop()}}),e)})))()},getDataKecamatan:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("https://anggernuramin.github.io/api-wilayah-indonesia/api/districts/".concat(t.alamat.kota.id,".json"));case 2:n=e.sent,t.kecamatan=n.data;case 4:case"end":return e.stop()}}),e)})))()},addAlamat:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,data,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$supabase.from("address").insert([t.alamat]);case 3:if(n=e.sent,r=n.error,t.$notify({group:"notifAlamat",type:"success",text:"Succes Add Alamat."}),!r){e.next=8;break}throw r;case 8:return e.prev=8,e.next=11,t.$supabase.from("address").select("*");case 11:if(o=e.sent,data=o.data,l=o.error,data&&(console.log("data sekarang",data),data.sort((function(a,b){return b.id-a.id})),c=data.length>0?data[0].id:null,localStorage.setItem("userAlamatId",c),console.log(c)),!l){e.next=17;break}throw l;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(8),console.error("Error fetching data alamat:",e.t0);case 22:t.$router.push("/checkout"),e.next=28;break;case 25:e.prev=25,e.t1=e.catch(0),console.log(e.t1.message);case 28:t.alamat={name:"",noTelp:"",provinsi:"",kota:"",kecamatan:"",kodePos:"",detail:""};case 29:case"end":return e.stop()}}),e,null,[[0,25],[8,19]])})))()},checkOut:function(){var t=localStorage.getItem("userAlamatId");t?(this.dataLocalStorange=!0,this.$store.dispatch("index/addAlamat",t)):this.dataLocalStorange=!1,this.$refs.dialogAlamat.showModal()},initializeCeklist:function(){this.dataKeranjang.every((function(t){return t.deskripsiPemesanan.checked}))&&(this.ceklist=!0)},checkoutProduct:function(){this.$router.push("/checkout")},toggleProductCheckout:function(t){this.$store.commit("index/CHECK_PRODUCT",t);var e=this.dataKeranjang.every((function(t){return t.deskripsiPemesanan.checked}));this.ceklist=!!e},decrementQuantity:function(t){if(t.deskripsiPemesanan.quantity>1){var e=t.deskripsiPemesanan.quantity-1;this.$store.commit("index/UPDATE_QUANTITY",{productId:t.id,quantity:e})}},incrementQuantity:function(t){var e=t.deskripsiPemesanan.quantity+1;this.$store.commit("index/UPDATE_QUANTITY",{productId:t.id,quantity:e})},deleteProduct:function(t){this.$store.commit("index/REMOVE_KERANJANG",t)},allCeklist:function(){this.dataKeranjang.every((function(t){return t.deskripsiPemesanan.checked}))?this.ceklist=!1:this.ceklist=!0,this.$store.commit("index/CHECK_ALL_PRODUCT",this.ceklist)}}},d=n(17),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"wish-list"}},[e("div",{staticClass:"pt-[130px] pb-5 container w-[75%] text-slate-900"},[e("div",{staticClass:"text-sm breadcrumbs"},[e("ul",[e("li",[e("nuxt-link",{staticClass:"text-primary text-md font-normal",attrs:{to:"/"}},[t._v("Beranda")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"text-primary text-md font-normal",attrs:{to:"/products"}},[t._v("Produk")])],1),t._v(" "),e("li",[t._v("Keranjang Belanja")])])]),t._v(" "),t.dataKeranjang.length>0?e("div",[e("div",{staticClass:"overflow-x-auto bg-white min-h-screen"},[e("table",{staticClass:"table"},[t._m(0),t._v(" "),e("tbody",t._l(t.dataKeranjang,(function(n){return e("tr",{key:n.id},[e("th",[e("label",[e("input",{staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:n.deskripsiPemesanan.checked},on:{click:function(e){return t.toggleProductCheckout(n.id)}}})])]),t._v(" "),e("td",[e("div",{staticClass:"flex items-center space-x-3"},[e("div",{staticClass:"avatar"},[e("div",{staticClass:"mask mask-squircle w-12 h-12"},[e("img",{attrs:{src:n.image,alt:n.title}})])]),t._v(" "),e("div",[e("div",{staticClass:"font-bold"},[t._v(t._s(n.title))]),t._v(" "),e("div",{staticClass:"text-sm opacity-50"},[t._v("\n                      "+t._s(n.category)+"\n                    ")])])])]),t._v(" "),e("td",[t._v("\n                "+t._s(n.price.toLocaleString("id-ID",{style:"currency",currency:"IDR"}))+"\n              ")]),t._v(" "),e("td",[e("div",{staticClass:"inline-flex items-center me-3"},[e("button",{staticClass:"text-black px-2 py-1 border hover:bg-slate-200 cursor-pointer",on:{click:function(e){return t.decrementQuantity(n)}}},[t._v("\n                    -\n                  ")]),t._v(" "),e("span",{staticClass:"border border-x-0 px-4 py-1"},[t._v("\n                    "+t._s(n.deskripsiPemesanan.quantity))]),t._v(" "),e("button",{staticClass:"text-black px-2 py-1 border hover:bg-slate-200 cursor-pointer",on:{click:function(e){return t.incrementQuantity(n)}}},[t._v("\n                    +\n                  ")])])]),t._v(" "),e("td",[t._v("\n                "+t._s((n.deskripsiPemesanan.quantity*n.price).toLocaleString("id-ID",{style:"currency",currency:"IDR"}))+"\n              ")]),t._v(" "),e("th",[e("button",{staticClass:"btn btn-error btn-xs",on:{click:function(e){return t.deleteProduct(n.id)}}},[t._v("\n                  Hapus\n                ")])])])})),0)])]),t._v(" "),e("div",{staticClass:"wrapper-checkout fixed bottom-0 left-0 right-0 shadow-lg bg-white border-t-4 border-btnColor"},[e("div",{staticClass:"overflow-x-auto w-[75%] m-auto"},[e("table",{staticClass:"table border-slate-400"},[t._m(1),t._v(" "),e("tbody",[t._m(2),t._v(" "),e("tr",[e("td",{staticClass:"w-"},[e("label",{staticClass:"flex justify-center items-center gap-2"},[e("input",{staticClass:"checkbox border-red-600",attrs:{type:"checkbox"},domProps:{checked:t.ceklist},on:{click:t.allCeklist}}),t._v(" "),e("span",[t._v("Pilih semua")])])]),t._v(" "),e("td",{staticClass:"text-red-600"},[t._v("Checklist product untuk checkout")]),t._v(" "),e("td",[t._v("Total Produk ("+t._s(t.dataProductCheckout.length)+"):")]),t._v(" "),e("td",[t._v("\n                  Rp.\n                  "),e("span",{staticClass:"text-red-600 text-2xl"},[t._v("\n                    "+t._s(t.totalHargaCheckout)+".000\n                  ")])]),t._v(" "),e("td",{staticClass:"border-0"},[t.dataLocalStorange?e("div",[e("dialog",{ref:"dialogAlamat",staticClass:"modal",attrs:{id:"my_modal_1"}},[e("div",{staticClass:"modal-box bg-white"},[e("h3",{staticClass:"font-bold text-2xl"},[t._v("Alamat Aktif")]),t._v(" "),e("p",{staticClass:"py-1 border-b-2 pb-2"},[t._v("\n                          Alamat aktif untuk pengiriman\n                        ")]),t._v(" "),e("div",{staticClass:"relative"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.checkoutProduct.apply(null,arguments)}}},[e("div",{staticClass:"flex items-center flex-col gap-2"},[e("div",{staticClass:"mt-4 flex justify-between items-center w-full gap-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.dataALamat.name,expression:"dataALamat.name"}],staticClass:"input input-bordered input-sm w-[50%] bg-white rounded-sm",attrs:{id:"userName",readonly:"",name:"userName",type:"text",placeholder:"Nama Lengkap"},domProps:{value:t.dataALamat.name},on:{input:function(e){e.target.composing||t.$set(t.dataALamat,"name",e.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.dataALamat.noTelp,expression:"dataALamat.noTelp"}],staticClass:"input input-bordered input-sm w-[50%] bg-white rounded-sm",attrs:{id:"userName",readonly:"",name:"userName",type:"tel",placeholder:"No. Telepon"},domProps:{value:t.dataALamat.noTelp},on:{input:function(e){e.target.composing||t.$set(t.dataALamat,"noTelp",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"flex justify-between items-center w-full gap-4"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.dataALamat.provinsi,expression:"dataALamat.provinsi"}],staticClass:"bg-white w-[50%] p-2 border-2",attrs:{id:"provinsi",name:"provinsi"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.dataALamat,"provinsi",e.target.multiple?n:n[0])},function(e){return t.getUpdateKota()}]}},[e("option",{attrs:{disabled:"",selected:""},domProps:{value:t.dataALamat.provinsi}},[t._v("\n                                    "+t._s(t.dataALamat.provinsi)+"\n                                  ")])]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.dataALamat.kota,expression:"dataALamat.kota"}],staticClass:"bg-white w-[50%] p-2 border-2",attrs:{id:"kota",name:"kota.Nama"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.dataALamat,"kota",e.target.multiple?n:n[0])}}},[e("option",{attrs:{disabled:"",selected:""},domProps:{value:t.dataALamat.kota}},[t._v("\n                                    "+t._s(t.dataALamat.kota)+"\n                                  ")])])]),t._v(" "),e("div",{staticClass:"flex justify-between items-center w-full gap-4"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.dataALamat.kecamatan,expression:"dataALamat.kecamatan"}],staticClass:"bg-white w-[50%] p-2 border-2",attrs:{id:"kecamatan",name:"kecamatan"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.dataALamat,"kecamatan",e.target.multiple?n:n[0])}}},[e("option",{attrs:{disabled:"",selected:""},domProps:{value:t.dataALamat.kecamatan}},[t._v("\n                                    "+t._s(t.dataALamat.kecamatan)+"\n                                  ")])]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.dataALamat.kodePos,expression:"dataALamat.kodePos"}],staticClass:"bg-white w-[50%] p-2 border-2",attrs:{id:"kodepos",name:"kodepos"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.dataALamat,"kodePos",e.target.multiple?n:n[0])}}},[e("option",{attrs:{disabled:"",selected:""},domProps:{value:t.dataALamat.kodePos}},[t._v("\n                                    "+t._s(t.dataALamat.kodePos)+"\n                                  ")])])]),t._v(" "),e("div",{staticClass:"form-control w-full mb-14"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.dataALamat.detail,expression:"dataALamat.detail"}],attrs:{readonly:"",name:"",placeholder:"Nama Jalan, Gedung, No.Rumah",cols:"30",rows:"10",required:""},domProps:{value:t.dataALamat.detail},on:{input:function(e){e.target.composing||t.$set(t.dataALamat,"detail",e.target.value)}}})])]),t._v(" "),e("button",{staticClass:"text-white font-semibold hovert:text-white py-3 px-7 bg-btnColor hover:btn-warning rounded-md absolute right-0 bottom-0"},[t._v("\n                              Ok\n                            ")])]),t._v(" "),t._m(3)])])])]):e("div",[e("dialog",{ref:"dialogAlamat",staticClass:"modal",attrs:{id:"my_modal_1"}},[e("div",{staticClass:"modal-box bg-white"},[e("h3",{staticClass:"font-bold text-2xl"},[t._v("\n                          Masukkan Alamat Baru\n                        ")]),t._v(" "),e("div",{staticClass:"relative"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.addAlamat.apply(null,arguments)}}},[e("div",{staticClass:"flex items-center flex-col gap-4"},[e("div",{staticClass:"mt-4 flex justify-between items-center w-full gap-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.alamat.name,expression:"alamat.name"}],staticClass:"input input-bordered input-sm w-[50%] bg-white rounded-sm",attrs:{id:"userName",name:"userName",type:"text",placeholder:"Nama Lengkap",required:""},domProps:{value:t.alamat.name},on:{input:function(e){e.target.composing||t.$set(t.alamat,"name",e.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.alamat.noTelp,expression:"alamat.noTelp"}],staticClass:"input input-bordered input-sm w-[50%] bg-white rounded-sm",attrs:{id:"noTelp",name:"noTelp",type:"tel",placeholder:"No. Telepon",required:""},domProps:{value:t.alamat.noTelp},on:{input:function(e){e.target.composing||t.$set(t.alamat,"noTelp",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"flex justify-between items-center w-full gap-4"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.alamat.provinsi,expression:"alamat.provinsi"}],staticClass:"bg-white w-[50%] p-2 border-2",attrs:{id:"provinsi",name:"provinsi",required:""},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.alamat,"provinsi",e.target.multiple?n:n[0])},function(e){return t.getDataKota()}]}},[e("option",{attrs:{value:"",disabled:""}},[t._v("Provinsi")]),t._v(" "),t._l(t.provinsi,(function(n){return e("option",{key:n.id,domProps:{value:n}},[t._v("\n                                    "+t._s(n.name)+"\n                                  ")])}))],2),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.alamat.kota,expression:"alamat.kota"}],staticClass:"bg-white w-[50%] p-2 border-2",attrs:{id:"kota",name:"kota",required:""},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.alamat,"kota",e.target.multiple?n:n[0])},function(e){return t.getDataKecamatan()}]}},[e("option",{attrs:{value:"",disabled:""}},[t._v("\n                                    Kota / Kabupaten\n                                  ")]),t._v(" "),t._l(t.kota,(function(n){return e("option",{key:n.id,domProps:{value:n}},[t._v("\n                                    "+t._s(n.name)+"\n                                  ")])}))],2)]),t._v(" "),e("div",{staticClass:"flex justify-between items-center w-full gap-4"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.alamat.kecamatan,expression:"alamat.kecamatan"}],staticClass:"bg-white w-[50%] p-2 border-2",attrs:{id:"kecamatan",name:"kecamatan",required:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.alamat,"kecamatan",e.target.multiple?n:n[0])}}},[e("option",{attrs:{value:"",disabled:""}},[t._v("Kecamatan")]),t._v(" "),t._l(t.kecamatan,(function(n){return e("option",{key:n.id,domProps:{value:n}},[t._v("\n                                    "+t._s(n.name)+"\n                                  ")])}))],2),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.alamat.kodePos,expression:"alamat.kodePos"}],staticClass:"bg-white w-[50%] p-2 border-2",attrs:{id:"kodepos",name:"kodepos",required:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.alamat,"kodePos",e.target.multiple?n:n[0])}}},[e("option",{attrs:{value:"",disabled:""}},[t._v("Kode Pos")]),t._v(" "),t._l(t.kecamatan,(function(n){return e("option",{key:n.id,domProps:{value:n}},[t._v("\n                                    "+t._s(n.id)+"\n                                  ")])}))],2)]),t._v(" "),e("div",{staticClass:"form-control w-full mb-14"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.alamat.detail,expression:"alamat.detail"}],attrs:{name:"",placeholder:"Nama Jalan, Gedung, No.Rumah",cols:"30",rows:"10",required:""},domProps:{value:t.alamat.detail},on:{input:function(e){e.target.composing||t.$set(t.alamat,"detail",e.target.value)}}})])]),t._v(" "),e("button",{staticClass:"text-white font-semibold hovert:text-white py-3 px-7 bg-btnColor hover:btn-warning rounded-md absolute right-0 bottom-0"},[t._v("\n                              Ok\n                            ")])]),t._v(" "),t._m(4)])])])]),t._v(" "),e("button",{staticClass:"btn btn-warning w-full",class:{disabled:!t.isCheckoutEnabled},attrs:{disabled:!t.isCheckoutEnabled},on:{click:t.checkOut}},[t._v("\n                    Checkout\n                  ")])])])])])])])]):e("div",[e("div",{staticClass:"hero min-h-[450px]"},[e("div",{staticClass:"hero-content text-center"},[e("div",{staticClass:"max-w-lg"},[e("h1",{staticClass:"text-5xl font-bold"},[t._v("Keranjang Belanja Anda Kosong")]),t._v(" "),e("p",{staticClass:"py-6"},[t._v("\n              Isi keranjang Anda dengan berbagai produk terbaru dan terbaik\n              yang kami tawarkan. Temukan gaya yang sesuai dengan kebutuhan\n              Anda dan nikmati kenyamanan berbelanja online dengan kami.\n            ")]),t._v(" "),e("nuxt-link",{attrs:{to:"/products"}},[e("button",{staticClass:"border-2 border-transparent outline-none bg-btnColor py-2 px-8 text-base cursor-pointer transition font-bold rounded-sm hover:bg-transparent hover:border-btnColor"},[t._v("\n                Belanja Sekarang\n              ")])])],1)])])])])])}),[function(){var t=this,e=t._self._c;return e("thead",{staticClass:"text-slate-500"},[e("tr",[e("th"),t._v(" "),e("th",[t._v("Produk")]),t._v(" "),e("th",[t._v("Harga Satuan")]),t._v(" "),e("th",[t._v("Kuantitas")]),t._v(" "),e("th",[t._v("Total harga")]),t._v(" "),e("th",[t._v("Aksi")])])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th"),t._v(" "),e("th"),t._v(" "),e("th"),t._v(" "),e("th"),t._v(" "),e("th",{staticClass:"text-slate-800 text-base font-normal"},[t._v("\n                  Gunakan / Masukkan kode\n                ")])])])},function(){var t=this,e=t._self._c;return e("tr",[e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("input",{staticClass:"bg-white w-full h-[45px] rounded-md border text-xl p-5",attrs:{type:"text"}})])])},function(){var t=this._self._c;return t("form",{attrs:{method:"dialog"}},[t("button",{staticClass:"text-white font-semibold hovert:text-white py-3 px-6 rounded-md hover:bg-slate-600 bg-slate-500 absolute right-20 bottom-0"},[this._v("\n                              Batal\n                            ")])])},function(){var t=this._self._c;return t("form",{attrs:{method:"dialog"}},[t("button",{staticClass:"text-white font-semibold hovert:text-white py-3 px-6 rounded-md hover:bg-slate-600 bg-slate-500 absolute right-20 bottom-0"},[this._v("\n                              Batal\n                            ")])])}],!1,null,null,null);e.default=component.exports}}]);