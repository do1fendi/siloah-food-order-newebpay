(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{208:function(e,t,r){var content=r(212);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(47).default)("7c23ba6f",content,!0,{sourceMap:!1})},209:function(e,t,r){var content=r(214);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(47).default)("6759f5ab",content,!0,{sourceMap:!1})},210:function(e,t,r){e.exports=r.p+"img/4f2ab40.png"},211:function(e,t,r){"use strict";var o=r(208);r.n(o).a},212:function(e,t,r){(t=r(46)(!1)).push([e.i,".header{width:100%;text-align:center}.logo{width:40%}",""]),e.exports=t},213:function(e,t,r){"use strict";var o=r(209);r.n(o).a},214:function(e,t,r){(t=r(46)(!1)).push([e.i,".table-important{font-weight:800}.nav-tabs .nav-link.active{background-color:#089790;border-color:#089790}.btn-info{background-color:#dc8528;border-color:#dc8528}.btn-info:hover{background-color:#d15e00;border-color:#d15e00}.nav-tabs .nav-link.active{background-color:#17a2b8;border-color:#17a2b8;border-top-left-radius:.5rem;border-top-right-radius:.5rem;color:#fff}.nav-tabs{border-bottom:3px solid #17a2b8}.center{text-align:center}.tblreceipt{width:100%}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}.forInline{padding-left:0;padding-right:0}",""]),e.exports=t},215:function(e,t,r){"use strict";r.r(t);r(5),r(2),r(3),r(1),r(4),r(10),r(15),r(11),r(48);var o=r(17),n=r(0),c=r(95),l=r(59),m=r.n(l),f={},d=(r(211),r(43));function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={components:{Header:Object(d.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header"},[t("b-img",{staticClass:"logo mt-2",attrs:{src:r(210),fluid:"",alt:""}}),this._v(" "),t("hr",{staticClass:"my-4"})],1)}),[],!1,null,null,null).exports},data:function(){return{itemPrice:0,fields:["商品","數量","小計"],items:[{"商品":"","數量":0,"小計":0},{"商品":"總額","數量":"","小計":0,_cellVariants:{"小計":"important"}}],form:{productCode:"",productName:"",email:"",name:"",phone:"",mobile:"",cityCounty:"臺北市",district:"",address:"",NoOfItem:0,amt:0,receiveDate:"",context:null,receiveTime:"",receiptSelected:"個人",companyTitle:"",taxId:""},NoOfItemOpt:[],receiveTimeOpt:[],cityCountyOpt:[],districtOpt:[],show:!0}},computed:E(E({},Object(c.b)(["GET_ITEMNAME","GET_PRICE","GET_MINORDER","GET_MINMULTIPLE","GET_AVAILABLEORDER","GET_DELIVERYSTARTDATE","GET_DELIVERYENDDATE","GET_CITYCOUNTY","GET_DISTRICT"])),Object(c.c)(["SET_ITEMNAME","SET_PRICE","SET_MINORDER","SET_MINMULTIPLE","SET_AVAILABLEORDER","SET_DELIVERYSTARTDATE","SET_DELIVERYENDDATE"])),methods:{loaData:function(e){var t=this;console.log(e);var r=new Date;(function(){var n=Object(o.a)(regeneratorRuntime.mark((function o(){var n,c,l,i,m;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:for(t.$store.commit("SET_ITEMNAME",e.fieldData.name),t.$store.commit("SET_PRICE",e.fieldData.price_sales),t.$store.commit("SET_MINORDER",e.fieldData.min_per_order),t.$store.commit("SET_MINMULTIPLE",e.fieldData.min_multiple),t.$store.commit("SET_AVAILABLEORDER",e.fieldData.available_order),r.getHours()<12?(t.$store.commit("SET_DELIVERYSTARTDATE",e.fieldData.API_RESTAURANT_deliverable_date_start-1),t.$store.commit("SET_DELIVERYENDDATE",e.fieldData.API_RESTAURANT_deliverable_date_end+e.fieldData.API_RESTAURANT_deliverable_date_start-1)):(t.$store.commit("SET_DELIVERYSTARTDATE",e.fieldData.API_RESTAURANT_deliverable_date_start),t.$store.commit("SET_DELIVERYENDDATE",e.fieldData.API_RESTAURANT_deliverable_date_end+e.fieldData.API_RESTAURANT_deliverable_date_start)),n=t.GET_MINORDER,c=t.GET_AVAILABLEORDER,l=t.GET_MINMULTIPLE,i=n;i<c;i+=l)t.NoOfItemOpt.push({value:i,text:i});t.form.NoOfItem=n,t.items[0].商品=t.GET_ITEMNAME,t.items[0].數量=n,t.form.amt=t.GET_PRICE*n,t.cityCountyOpt=t.GET_CITYCOUNTY,t.districtOpt=t.GET_DISTRICT.臺北市,t.form.district=t.GET_DISTRICT.臺北市[0],m=JSON.parse(e.fieldData.deliverable_time_json),t.receiveTimeOpt=m.receiveTime,t.form.productCode=t.$route.query.code,t.form.productName=t.GET_ITEMNAME;case 21:case"end":return o.stop()}}),o)})));return function(){return n.apply(this,arguments)}})()(e).then(this.items[0].小計=this.GET_PRICE).then(this.itemPrice=this.GET_PRICE).then(this.items[1].小計=this.itemPrice*this.form.NoOfItem)},dateDisabled:function(e,t){var r=new Date,o=t.getDay(),n=t.getMonth(),c=t.getDate(),l=new Date(r.getFullYear(),r.getMonth(),0).getDate(),m=r.getDate()+parseInt(this.GET_DELIVERYSTARTDATE),f=r.getDate()+parseInt(this.GET_DELIVERYENDDATE);if(f<=l&&n==r.getMonth())return 0===o||6===o||c<m||c>f;if(f<=l&&n<r.getMonth())return c>0;if(f<=l&&n>r.getMonth())return c>0;if(f>l&&n<r.getMonth())return c>0;if(f>l&&n==r.getMonth())return 0===o||6===o||c<m;if(f>l&&n==r.getMonth()+1){var d=parseInt(this.GET_DELIVERYSTARTDATE)-(l-r.getDate()),v=parseInt(this.GET_DELIVERYENDDATE)-(l-r.getDate());return 0===o||6===o||c>=v||c<d}return f>l&&n>r.getMonth()+1?c>0:void 0},onChangeCityCounty:function(e){this.districtOpt=this.GET_DISTRICT[e],this.form.district=this.GET_DISTRICT[e][0]},onChangeNoOfItem:function(e){this.items[0].數量=e,this.form.amt=this.GET_PRICE*e,this.items[1].小計=this.form.amt},checkForm:function(e){var t=!1;""==this.form.email?(alert("please insert Email"),this.$refs.email.focus(),t=!0):""==this.form.name?(alert("please insert name"),this.$refs.name.focus(),t=!0):""==this.form.mobile?(alert("please insert mobile"),this.$refs.mobile.focus(),t=!0):""==this.form.address?(alert("please insert address"),this.$refs.address.focus(),t=!0):this.form.receiveDate?""==this.form.receiveTime?(alert("please insert receive Time"),this.$refs.receiveTime.focus(),t=!0):"公司"==this.form.receiptSelected&&""==this.form.companyTitle?(alert("please insert 公司抬頭"),this.$refs.companyTitle.focus(),t=!0):"公司"==this.form.receiptSelected&&""==this.form.taxId&&(alert("please insert 統編"),this.$refs.taxId.focus(),t=!0):(alert("please insert receive date"),this.$refs.receiveDate.focus(),t=!0),t&&e.preventDefault()}},mounted:function(){var e=this;m()({method:"POST",url:"https://ofc.taiwanviptravel.com/fmi/data/v1/databases/zonepo/sessions",headers:{Authorization:"Basic QVBJQUNDRVNTOkxmalk4ZF1lR1dyOUg=","Content-Type":"application/json"},data:{}}).then((function(e){return t(e.data.response.token)}));var t=function(t){var o={method:"POST",url:"https://ofc.taiwanviptravel.com/fmi/data/v1/databases/zonepo/layouts/API_CUISINE/_find",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"},data:JSON.stringify({query:[{product_code:e.$route.query.code}],sort:[{fieldName:"product_code",sortOrder:"ascend"}]})};m()(o).then((function(t){return e.loaData(r(t.data.response.data[0]))}))},r=function(e){var t=JSON.stringify(e).split("::").join("_").replace("\rt","");return JSON.parse(t)}}},T=(r(213),Object(d.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-container",[r("Header"),e._v(" "),r("div",[e.show?r("b-form",{attrs:{method:"post"},on:{submit:e.checkForm}},[r("b-form-group",{attrs:{id:"input-group-1",label:"Email:","label-for":"input-1",description:""}},[r("b-form-input",{ref:"email",attrs:{id:"email",name:"email",type:"email",required:"",placeholder:"Enter email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"input-group-2",label:"訂購人姓名:","label-for":"input-2"}},[r("b-form-input",{ref:"name",attrs:{id:"name",name:"name",required:"",placeholder:"Enter name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("b-container",{staticClass:"forInline"},[r("b-row",[r("b-col",{attrs:{col:"",sm:"12"}},[r("b-form-group",{attrs:{id:"input-group-3",label:"連絡電話:","label-for":"input-3"}},[r("b-form-input",{ref:"phone",attrs:{id:"phone",name:"phone",placeholder:"Enter phone"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1),e._v(" "),r("b-col",{attrs:{col:"",sm:"12"}},[r("b-form-group",{attrs:{id:"input-group-4",label:"行動電話:","label-for":"input-4"}},[r("b-form-input",{ref:"mobile",attrs:{id:"mobile",name:"mobile",required:"",placeholder:"Enter mobile"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1)],1)],1)],1),e._v(" "),r("b-form-group",{attrs:{label:"地址:"}},[r("b-form-row",{staticClass:"mb-2"},[r("b-col",[r("b-form-select",{attrs:{options:e.cityCountyOpt,name:"cityCounty",required:""},on:{change:function(t){return e.onChangeCityCounty(e.form.cityCounty)}},model:{value:e.form.cityCounty,callback:function(t){e.$set(e.form,"cityCounty",t)},expression:"form.cityCounty"}})],1),e._v(" "),r("b-col",[r("b-form-select",{attrs:{options:e.districtOpt,name:"district",required:""},model:{value:e.form.district,callback:function(t){e.$set(e.form,"district",t)},expression:"form.district"}})],1)],1),e._v(" "),r("b-form-input",{attrs:{id:"address",name:"address",required:"",placeholder:"Enter Address"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"input-group-6",label:"訂購數量:","label-for":"input-6",description:""}},[r("b-form-select",{attrs:{id:"NoOfItem",name:"NoOfItem",options:e.NoOfItemOpt,required:""},on:{change:function(t){return e.onChangeNoOfItem(e.form.NoOfItem)}},model:{value:e.form.NoOfItem,callback:function(t){e.$set(e.form,"NoOfItem",t)},expression:"form.NoOfItem"}})],1),e._v(" "),r("b-row",[r("b-col",{attrs:{col:"",sm:"6"}},[r("b-form-group",{attrs:{id:"input-group-7",label:"收餐日期:","label-for":"input-7",description:""}},[r("b-form-datepicker",{ref:"receiveDate",attrs:{"date-disabled-fn":e.dateDisabled,placeholder:"選日期",locale:"zh","hide-header":!0,id:"receiveDate",name:"receiveDate"},model:{value:e.form.receiveDate,callback:function(t){e.$set(e.form,"receiveDate",t)},expression:"form.receiveDate"}})],1)],1),e._v(" "),r("b-col",{attrs:{col:"",sm:"6"}},[r("b-form-group",{attrs:{id:"input-group-8",label:"收件時間:"}},[r("b-form-select",{ref:"receiveTime",attrs:{id:"receiveTime",name:"receiveTime",options:e.receiveTimeOpt,required:""},model:{value:e.form.receiveTime,callback:function(t){e.$set(e.form,"receiveTime",t)},expression:"form.receiveTime"}})],1)],1)],1),e._v(" "),r("div",[r("b-tabs",{attrs:{"active-nav-item-class":"font-weight-bold text-uppercase","active-tab-class":"font-weight-bold text-success","content-class":"mt-3"}},[r("b-tab",{attrs:{title:"商品明細",active:""}},[r("b-table",{attrs:{items:e.items,fields:e.fields,"caption-top":""}})],1)],1)],1),e._v(" "),r("div",[r("b-tabs",{attrs:{"active-nav-item-class":"font-weight-bold text-uppercase","active-tab-class":"font-weight-bold","content-class":"mt-3"}},[r("b-tab",{attrs:{title:"統一發票",active:""}},[r("div",[r("b-form-group",{attrs:{label:""}},[r("b-form-row",[r("b-col",[r("b-form-radio",{attrs:{name:"receiptSelected",value:"個人",required:""},model:{value:e.form.receiptSelected,callback:function(t){e.$set(e.form,"receiptSelected",t)},expression:"form.receiptSelected"}},[e._v("個人")])],1),e._v(" "),r("b-col",[r("b-form-radio",{attrs:{name:"receiptSelected",value:"公司",required:""},model:{value:e.form.receiptSelected,callback:function(t){e.$set(e.form,"receiptSelected",t)},expression:"form.receiptSelected"}},[e._v("公司")])],1),e._v(" "),r("b-col"),e._v(" "),r("b-col")],1)],1),e._v(" "),r("b-form-group",{attrs:{label:""}},[r("b-form-row",[r("b-col",[r("b-form-input",{ref:"companyTitle",attrs:{id:"companyTitle",name:"companyTitle",placeholder:"公司抬頭"},model:{value:e.form.companyTitle,callback:function(t){e.$set(e.form,"companyTitle",t)},expression:"form.companyTitle"}})],1),e._v(" "),r("b-col",[r("b-form-input",{ref:"taxId",attrs:{id:"taxId",name:"taxId",placeholder:"統編"},model:{value:e.form.taxId,callback:function(t){e.$set(e.form,"taxId",t)},expression:"form.taxId"}})],1),e._v(" "),r("b-form-input",{attrs:{name:"amt",hidden:""},model:{value:e.form.amt,callback:function(t){e.$set(e.form,"amt",t)},expression:"form.amt"}}),e._v(" "),r("b-form-input",{attrs:{name:"productCode",hidden:""},model:{value:e.form.productCode,callback:function(t){e.$set(e.form,"productCode",t)},expression:"form.productCode"}}),e._v(" "),r("b-form-input",{attrs:{name:"productName",hidden:""},model:{value:e.form.productName,callback:function(t){e.$set(e.form,"productName",t)},expression:"form.productName"}})],1)],1)],1)])],1)],1),e._v(" "),r("div",{staticClass:"mb-5"},[r("b-tabs",{attrs:{"active-nav-item-class":"font-weight-bold text-uppercase","active-tab-class":"font-weight-bold text-success","content-class":"mt-3"}},[r("b-tab",{attrs:{title:"付款方式",active:""}},[r("b-row",[r("b-col",{staticClass:"center",attrs:{col:"",sm:"6"}},[r("b-button",{attrs:{size:"lg",type:"submit",variant:"info btn-block",formaction:"https://www.taiwanviptravel.com/order/payment/credit.php"}},[e._v("信用卡付款")])],1),e._v(" "),r("b-col",{staticClass:"center",attrs:{col:"",sm:"6"}},[r("b-button",{attrs:{size:"lg",type:"submit",variant:"info btn-block",formaction:"https://www.taiwanviptravel.com/order/payment/atm.php"}},[e._v("ATM轉帳付款")])],1)],1)],1)],1)],1)],1):e._e()],1)],1)],1)}),[],!1,null,null,null));t.default=T.exports}}]);