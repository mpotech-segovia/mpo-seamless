(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05567d9e"],{"08cf":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"memo"},[i("v-container",[i("div",{staticClass:"memo__wrapper"},[i("v-row",[i("v-col",{attrs:{xl:"9",lg:"8",md:"8",sm:"12",cols:"12"}},[t.createMemo?t._e():i("div",{staticClass:"memo-panel"},[t.emptyMemo?i("div",{staticClass:"memo-empty"},[i("v-icon",{staticClass:"mb-3",attrs:{"x-large":""}},[t._v("fas fa-inbox")]),i("h1",[t._v("Your List is Empty")]),i("h4",[t._v("No memo in your list, yet! Relax and enjoy the moment!")])],1):t._e(),t.emptyMemo?t._e():i("MemoList")],1),t.createMemo?i("div",{staticClass:"memo-panel"},[i("MemoCreate")],1):t._e()]),i("v-col",{attrs:{xl:"3",lg:"4",md:"4",sm:"12",cols:"12"}},[i("div",{staticClass:"memo-tab"},[i("v-btn",{staticClass:"mb-3",class:{active:t.isAllMemoActive},attrs:{block:"",depressed:"",large:"",disabled:t.isAllMemoActive},on:{click:function(e){return t.showAllMemo()}}},[i("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("fas fa-list-alt")]),t._v(" All Memo ")],1),i("v-btn",{class:{active:t.isCreateMemoActive},attrs:{block:"",depressed:"",large:"",disabled:t.isCreateMemoActive},on:{click:function(e){return t.showCreateMemo()}}},[i("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("fas fa-edit")]),t._v(" Create Memo ")],1)],1)])],1)],1)])],1)},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"memo-content"},[t.viewMemo?t._e():i("div",{staticClass:"memo-list"},[i("v-list",{attrs:{"two-line":""}},[i("v-list-item-group",{attrs:{multiple:""}},[t._l(t.memoList,(function(e,a){return[i("v-list-item",{key:e.title,on:{click:function(e){t.viewMemo=!0}}},[[i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.memoSubject)}}),i("v-list-item-subtitle",{staticClass:"memo-user",domProps:{textContent:t._s(e.memoUser)}}),i("v-list-item-subtitle",{staticClass:"memo-content",domProps:{textContent:t._s(e.memoContent)}})],1),i("v-list-item-action",[i("v-list-item-action-text",{domProps:{textContent:t._s(e.time)}}),i("v-list-item-action-text",[i("v-chip",{class:e.status,attrs:{"x-small":"",label:""}},[t._v(t._s(e.status))])],1)],1)]],2),a<e.length-1?i("v-divider",{key:a}):t._e()]}))],2)],1)],1),t.viewMemo?i("MemoView"):t._e()],1)},n=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"memo-view"},[i("div",{staticClass:"view-header"},[t._m(0),i("div",{staticClass:"back-to-list"},[i("v-btn",{attrs:{fab:"","x-small":"",depressed:""},on:{click:function(e){t.viewMemo=!1}}},[i("v-icon",{attrs:{"x-small":""}},[t._v("fas fa-arrow-left")])],1)],1)]),t._m(1),t.replyMemo?i("div",{staticClass:"view-reply"},[i("div",{staticClass:"reply-header"},[i("div",{staticClass:"header-avatar"},[i("v-icon",{attrs:{small:""}},[t._v("fas fa-user-alt")])],1),i("div",{staticClass:"header-info"},[i("h5",[t._v("mpo_player_001")]),i("h6",[i("v-icon",{attrs:{"x-small":""}},[t._v("far fa-clock")]),t._v(" Nov 5, 2021, 4:02 PM (4 days ago)")],1)])]),t._m(2)]):t._e(),i("div",{staticClass:"view-form"},[i("v-textarea",{attrs:{solo:"",flat:"","hide-details":"auto",label:"Type here..."}}),i("div",{staticClass:"form-captcha"},[i("h5",[t._v("Code Verification")]),i("div",{staticClass:"img-holder"},[t._m(3),i("div",{staticClass:"captcha-refresh"},[i("v-btn",{attrs:{small:"",block:"",depressed:""}},[i("v-icon",{attrs:{"x-small":""}},[t._v("fas fa-sync-alt")])],1)],1)]),i("div",{staticClass:"sent-holder"},[i("div",{staticClass:"captcha-input"},[i("v-text-field",{attrs:{label:"Kode Verifikasi",solo:"","hide-details":"",flat:"",dense:""}})],1),i("div",{staticClass:"captcha-reply"},[i("v-btn",{attrs:{small:"",block:"",depressed:""},on:{click:function(e){t.replyMemo=!0}}},[t._v("Reply Memo")])],1)])])],1)])},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"view-subject"},[i("h4",[t._v("White Label Migrations")]),i("h6",[t._v("Memo Type")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"view-content"},[i("p",[t._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis perferendis unde at aliquam quo commodi. Incidunt tempora adipisci quaerat, expedita, praesentium totam a optio magnam magni ipsum quos quas similique.")]),i("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae saepe reiciendis illo. Quidem, maiores repellendus dolorem exercitationem consequatur iusto quasi sunt quam? Quasi, odio autem ipsum suscipit nesciunt modi cupiditate!")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"reply-content"},[i("p",[t._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis perferendis unde at aliquam quo commodi. Incidunt tempora adipisci quaerat, expedita, praesentium totam a optio magnam magni ipsum quos quas similique.")]),i("p",[t._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis perferendis unde at aliquam quo commodi. Incidunt tempora adipisci quaerat, expedita, praesentium totam a optio magnam magni ipsum quos quas similique.")]),i("p",[t._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis perferendis unde at aliquam quo commodi. Incidunt tempora adipisci quaerat, expedita, praesentium totam a optio magnam magni ipsum quos quas similique.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"captcha-img"},[i("img",{attrs:{src:"https://52.220.214.91/captcha/default?H3jvAmqK",alt:""}})])}],c={name:"MemoView",data:function(){return{replyMemo:!1}}},u=c,m=(i("26f5"),i("2877")),d=i("6544"),v=i.n(d),p=i("8336"),h=i("132d"),f=i("8654"),_=i("5530"),g=(i("a9e3"),i("1681"),i("58df")),b=Object(g["a"])(f["a"]),C=b.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(_["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},f["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=f["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){f["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),x=Object(m["a"])(u,r,l,!1,null,"5c72afc2",null),w=x.exports;v()(x,{VBtn:p["a"],VIcon:h["a"],VTextField:f["a"],VTextarea:C});var M={name:"MemoList",components:{MemoView:w},data:function(){return{memoList:[{time:"15 min",status:"New",memoSubject:"White Label Migrations",memoUser:"Programmer, CSIT",memoContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nemo eligendi. Porro in, necessitatibus iste sed quis consectetur fuga eius recusandae veniam veritatis possimus cum aspernatur quas dicta illo ex!"},{time:"Nov 5",status:"Read",memoSubject:"Alpha PhilIndo Rules",memoUser:"HR Department",memoContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nemo eligendi. Porro in, necessitatibus iste sed quis consectetur fuga eius recusandae veniam veritatis possimus cum aspernatur quas dicta illo ex!"},{time:"July 14",status:"Read",memoSubject:"Alpha PhilIndo Opening",memoUser:"CEO",memoContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nemo eligendi. Porro in, necessitatibus iste sed quis consectetur fuga eius recusandae veniam veritatis possimus cum aspernatur quas dicta illo ex!"}],viewMemo:!1}}},y=M,V=(i("a7ca"),i("cc20")),q=i("ce7e"),k=i("8860"),A=i("da13"),I=i("1800"),L=i("5d23"),$=i("1baa"),j=Object(m["a"])(y,o,n,!1,null,"f5f2e560",null),B=j.exports;v()(j,{VChip:V["a"],VDivider:q["a"],VList:k["a"],VListItem:A["a"],VListItemAction:I["a"],VListItemActionText:L["a"],VListItemContent:L["b"],VListItemGroup:$["a"],VListItemSubtitle:L["c"],VListItemTitle:L["d"]});var T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"memo-create"},[i("v-form",{staticClass:"create-form"},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"label-textfield"},[t._v("Title*")]),i("v-text-field",{attrs:{label:"Memo Title",type:"text",rules:t.textFieldRules,"hide-details":"auto",solo:"",flat:"",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),i("div",{staticClass:"form-group"},[i("label",{staticClass:"label-textfield"},[t._v("Type*")]),i("v-text-field",{attrs:{label:"Memo Type",type:"text",rules:t.textFieldRules,"hide-details":"auto",solo:"",flat:"",required:""},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1),i("div",{staticClass:"form-group"},[i("label",{staticClass:"label-textfield"},[t._v("Message*")]),i("v-textarea",{attrs:{solo:"",flat:"",rules:t.textFieldRules,"hide-details":"auto",label:"Type here..."},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)]),i("div",{staticClass:"create-captcha"},[i("h5",[t._v("Code Verification")]),i("div",{staticClass:"img-holder"},[t._m(0),i("div",{staticClass:"captcha-refresh"},[i("v-btn",{attrs:{small:"",block:"",depressed:""}},[i("v-icon",{attrs:{"x-small":""}},[t._v("fas fa-sync-alt")])],1)],1)]),i("div",{staticClass:"sent-holder"},[i("div",{staticClass:"captcha-input"},[i("v-text-field",{attrs:{label:"Kode Verifikasi",solo:"","hide-details":"",flat:"",dense:""}})],1),i("div",{staticClass:"captcha-reply"},[i("v-btn",{attrs:{small:"",block:"",depressed:""}},[t._v("Reply Memo")])],1)])]),t._m(1)],1)},E=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"captcha-img"},[i("img",{attrs:{src:"https://52.220.214.91/captcha/default?H3jvAmqK",alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"create-notice"},[i("p",[t._v("** Harap untuk selalu bersabar menunggu jawaban tiket dari operator, untuk masalah yang urgent sekali bisa langsung menghubungi via livechat")])])}],R={name:"MemoCreate",data:function(){return{title:"",type:"",message:"",textFieldRules:[function(t){return!!t||"This field is required"}]}}},H=R,O=(i("2a2c"),i("4bd4")),P=Object(m["a"])(H,T,E,!1,null,"07398886",null),F=P.exports;v()(P,{VBtn:p["a"],VForm:O["a"],VIcon:h["a"],VTextField:f["a"],VTextarea:C});var N={name:"Memo",components:{MemoList:B,MemoCreate:F},data:function(){return{emptyMemo:!1,createMemo:!1,isAllMemoActive:!0,isCreateMemoActive:!1}},methods:{showAllMemo:function(){this.createMemo=!this.createMemo,this.isCreateMemoActive=!this.isCreateMemoActive,this.isAllMemoActive=!this.isAllMemoActive},showCreateMemo:function(){this.createMemo=!this.createMemo,this.isCreateMemoActive=!this.isCreateMemoActive,this.isAllMemoActive=!this.isAllMemoActive}}},z=N,G=(i("5b52"),i("62ad")),S=i("a523"),K=i("0fd9"),U=Object(m["a"])(z,a,s,!1,null,"3e7baca1",null);e["default"]=U.exports;v()(U,{VBtn:p["a"],VCol:G["a"],VContainer:S["a"],VIcon:h["a"],VRow:K["a"]})},1681:function(t,e,i){},"26f5":function(t,e,i){"use strict";i("7234")},"2a2c":function(t,e,i){"use strict";i("de8d")},"4bd4":function(t,e,i){"use strict";var a=i("5530"),s=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("159b"),i("7db0"),i("58df")),o=i("7e2b"),n=i("3206");e["a"]=Object(s["a"])(o["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},5298:function(t,e,i){},"5b52":function(t,e,i){"use strict";i("76e2")},7234:function(t,e,i){},"76e2":function(t,e,i){},a7ca:function(t,e,i){"use strict";i("5298")},de8d:function(t,e,i){}}]);
//# sourceMappingURL=chunk-05567d9e.59a77aed.js.map