webpackJsonp([1],{"2sSa":function(t,e){},"6Hzc":function(t,e){},"8boA":function(t,e){},"9BYC":function(t,e){},"9n10":function(t,e){},AgnK:function(t,e){},DVkh:function(t,e){},HR4P:function(t,e){},ILV3:function(t,e){},KV7o:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},a=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=a.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Details"}},[e("router-view")],1)],1)},staticRenderFns:[]};var n=i("VU/8")({name:"App"},a,!1,function(t){i("DVkh")},null,null).exports,r=i("F3EI"),c=i.n(r),o=(i("j1ja"),i("v2ns"),i("/ocq")),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("div",{staticClass:"left iconfont"},[this._v("")]),this._v(" "),this._m(0),this._v(" "),e("div",{staticClass:"right"},[e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"font"},[this._v(this._s(this.$store.state.city))])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-div"},[e("input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入景点"}}),this._v(" "),e("span",{staticClass:"span iconfont"},[this._v("")])])}]};var h=i("VU/8")({name:"homeheader",props:{}},l,!1,function(t){i("RrqB")},"data-v-ec1acdb4",null).exports,d={name:"carousel",props:{swiperList:Array},data:function(){return{swiperOption:{loop:!0,autoplay:3e3}}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"carousel"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.swiperList,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"carouselimg",attrs:{src:t.imgUrl}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var p=i("VU/8")(d,u,!1,function(t){i("8boA")},"data-v-22a48ec4",null).exports,v={name:"icon",props:{iconList:Array},data:function(){return{swiperOption:{loop:!1,disableOnInteraction:!1}}},computed:{pages:function(){var t=[];return this.iconList.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icon"},[i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon1"},[i("div",{staticClass:"icon-img"},[i("img",{attrs:{src:e.imgUrl}})]),t._v(" "),i("p",{staticClass:"icon-text"},[t._v(t._s(e.desc))])])}))}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var m=i("VU/8")(v,f,!1,function(t){i("HR4P")},"data-v-30292382",null).exports,y={name:"viewspot",props:{recommendList:Array},data:function(){return{}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"viewspot"},t._l(t.recommendList,function(e){return i("router-link",{key:e.id,staticClass:"view",attrs:{tag:"div",to:"/details/"+e.id}},[i("div",{staticClass:"viewimg"},[i("img",{staticClass:"img",attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"viewtext"},[i("div",{staticClass:"viewname"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"viewintroduce"},[t._v(t._s(e.desc))]),t._v(" "),i("div",{staticClass:"viewdetails"},[t._v("查看详情")])])])}))},staticRenderFns:[]};var _=i("VU/8")(y,g,!1,function(t){i("xcdW")},"data-v-3e17a4c1",null).exports,w=i("mtWM"),C=i.n(w),b=i("GQaK"),$={name:"Home",components:{homeheader:h,carousel:p,icon:m,viewspot:_},data:function(){return{iconList:[],swiperList:[],recommendList:[]}},methods:{getHomeinfo:function(){C.a.get("/static/mock/index.json").then(this.getHomeinfoSucc)},getHomeinfoSucc:function(t){var e=t.data;this.iconList=e.data.iconList,this.swiperList=e.data.swiperList,this.recommendList=e.data.recommendList}},mounted:function(){this.getHomeinfo(),this.scroll=new b.a(this.$refs.list)}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("homeheader"),this._v(" "),e("div",{ref:"list",staticClass:"list"},[e("div",[e("carousel",{attrs:{swiperList:this.swiperList}}),this._v(" "),e("icon",{attrs:{iconList:this.iconList}}),this._v(" "),e("viewspot",{attrs:{recommendList:this.recommendList}})],1)])],1)},staticRenderFns:[]};var L=i("VU/8")($,x,!1,function(t){i("YuzU")},"data-v-b6c69082",null).exports,k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"cityheader"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n\t\t城市选择\n\t")])])},staticRenderFns:[]};var S=i("VU/8")({name:"cityheader",props:{}},k,!1,function(t){i("2sSa")},"data-v-0d4fecf2",null).exports,R={name:"citysearch",props:{cities:Object},data:function(){return{searchcity:"",searchcitylist:[],timer:null}},methods:{changecitys:function(t){this.$store.commit("changecity",t),this.$router.push("/"),this.searchcity=""}},watch:{searchcity:function(){var t=this;this.$store.commit("changesearchcity",this.searchcity),this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.searchcity)>=0||i.name.indexOf(t.searchcity)>=0)&&e.push(i.name)});t.searchcitylist=e,""==t.searchcity&&(t.searchcitylist=[])},100)}},mounted:function(){this.scroll=new b.a(this.$refs.list)}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"citysearch"},[i("div",{staticClass:"searchkuang"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchcity,expression:"searchcity"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入城市名称"},domProps:{value:t.searchcity},on:{input:function(e){e.target.composing||(t.searchcity=e.target.value)}}})]),t._v(" "),i("div",{ref:"list"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.searchcity,expression:"searchcity"}],staticClass:"search"},t._l(t.searchcitylist,function(e,s){return i("div",{key:s,staticClass:"searchcity border-bottom",attrs:{dir:""},on:{click:function(i){t.changecitys(e)}}},[t._v("\n\t\t\t\t"+t._s(e)+"\n\t\t\t")])}))])])},staticRenderFns:[]};var I=i("VU/8")(R,E,!1,function(t){i("6Hzc")},"data-v-52ecf4e5",null).exports,V={name:"citylist",props:{cities:Object,hotCities:Array,alphabetic:String},methods:{handlecity:function(t){this.$store.commit("changecity",t),this.$router.push("/")}},watch:{alphabetic:function(){var t=this.$refs[this.alphabetic][0];this.scroll.scrollToElement(t)}},mounted:function(){this.scroll=new b.a(this.$refs.list)}},U={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.searchcity,expression:"!this.$store.state.searchcity"}],ref:"list",staticClass:"list"},[i("div",[i("div",{staticClass:"area border-bottom"},[i("div",{staticClass:"title"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"citylist"},[i("div",{staticClass:"city"},[t._v(t._s(this.$store.state.city))])])]),t._v(" "),i("div",{staticClass:"area border-bottom"},[i("div",{staticClass:"title"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"citylist"},t._l(t.hotCities,function(e){return i("div",{key:e.id,staticClass:"city",on:{tap:function(i){t.handlecity(e.name)}}},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")])}))]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area border-bottom"},[i("div",{staticClass:"title"},[t._v(t._s(s))]),t._v(" "),t._l(e,function(e){return i("div",{key:e.id,staticClass:"citylists border-bottom",on:{tap:function(i){t.handlecity(e.name)}}},[t._v("\n\t\t\t\t"+t._s(e.name)+"\n\t\t\t")])})],2)})],2)])},staticRenderFns:[]};var N=i("VU/8")(V,U,!1,function(t){i("KV7o")},"data-v-ce3651c6",null).exports,F={name:"alphabeticindex",props:{cities:Object,searchcity:String},data:function(){return{touchstatus:!1}},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},methods:{getalphabetic:function(t){this.$emit("watchalphabetic",t.target.innerText)},handertouchstart:function(){this.touchstatus=!0},handertouchmove:function(t){if(this.touchstatus=!0){var e=this.$refs.A[0].offsetTop,i=t.touches[0].clientY-e-79,s=Math.floor(i/17);s>=0&&s<=21&&this.$emit("watchalphabetic",this.letters[s])}},handertouchend:function(){this.touchstatus=!1}}},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.searchcity,expression:"!this.$store.state.searchcity"}],staticClass:"alphabeticindex"},t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"alphabetic",on:{click:t.getalphabetic,touchstart:t.handertouchstart,touchmove:t.handertouchmove,touchend:t.handertouchend}},[t._v("\n\t     "+t._s(s)+"\n\t")])}))},staticRenderFns:[]};var T={name:"City",components:{cityheader:S,citysearch:I,citylist:N,alphabeticindex:i("VU/8")(F,O,!1,function(t){i("S/2R")},"data-v-830ea3c4",null).exports},data:function(){return{cities:{},hotCities:[],alphabetic:"",searchcity:""}},methods:{getCityinfo:function(){C.a.get("/static/mock/city.json").then(this.getCityinfoSucc)},getCityinfoSucc:function(t){var e=t.data;e.ret&&(this.cities=e.data.cities,this.hotCities=e.data.hotCities)},changealphabetic:function(t){this.alphabetic=t}},mounted:function(){this.getCityinfo()}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("cityheader"),t._v(" "),i("citysearch",{attrs:{cities:t.cities}}),t._v(" "),i("citylist",{attrs:{hotCities:t.hotCities,cities:t.cities,alphabetic:t.alphabetic,searchcity:t.searchcity}}),t._v(" "),i("alphabeticindex",{attrs:{cities:t.cities},on:{watchalphabetic:t.changealphabetic}})],1)},staticRenderFns:[]};var j=i("VU/8")(T,A,!1,function(t){i("mL1G")},null,null).exports,H={name:"detailheader",props:{},data:function(){return{showheader:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showheader=!1}else this.showheader=!0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},unmounted:function(){window.removeEventListener("scroll",this.handleScroll)}},z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detailheader"},[i("router-link",{directives:[{name:"show",rawName:"v-show",value:!t.showheader,expression:"!showheader"}],staticClass:"header",style:t.opacityStyle,attrs:{tag:"div",to:"/"}},[i("div",{staticClass:"left iconfont"},[t._v("")]),t._v(" "),i("div",{staticClass:"headertitle"},[t._v("景点详情")])]),t._v(" "),i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.showheader,expression:"showheader"}],staticClass:"header0 iconfont",attrs:{tag:"div",to:"/"}},[t._v("\n\t\t\t\n\t\t")])],1)},staticRenderFns:[]};var D=i("VU/8")(H,z,!1,function(t){i("ILV3")},"data-v-3297949b",null).exports,M={name:"gallery",props:{gallaryImgs:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gallery"},[e("div",{staticClass:"galleryimg"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.gallaryImgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var Y=i("VU/8")(M,P,!1,function(t){i("AgnK")},"data-v-d26f7af0",null).exports,q={name:"detailsimg",props:{sightName:String,bannerImg:String,gallaryImgs:Array},components:{gallery:Y},data:function(){return{showgallery:0}},methods:{handleshowgallery:function(){this.showgallery=!this.showgallery}}},B={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detailsimg",on:{click:t.handleshowgallery}},[i("div",{staticClass:"img"},[i("img",{attrs:{src:t.bannerImg}}),t._v(" "),i("div",{staticClass:"imgmessage"},[i("div",{staticClass:"imgtitle"},[t._v(t._s(t.sightName))]),t._v(" "),i("div",{staticClass:"imgnum iconfont"},[t._v(" "+t._s(t.gallaryImgs.length))])]),t._v(" "),i("gallery",{directives:[{name:"show",rawName:"v-show",value:t.showgallery,expression:"showgallery"}],attrs:{gallaryImgs:t.gallaryImgs}})],1)])},staticRenderFns:[]};var K=i("VU/8")(q,B,!1,function(t){i("qeMm")},"data-v-fee0dd84",null).exports,W={name:"detailsprice",props:{categoryList:Array},data:function(){return{}},methods:{}},G={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detailsprice"},t._l(t.categoryList,function(e,s){return i("div",{key:s},[i("div",{staticClass:"detailstitle iconfont border-bottom"},[i("span",{staticClass:"titleimg"},[t._v("")]),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?i("div",{staticClass:"detailstitle-child"},[i("detailsprice",{attrs:{categoryList:e.children}})],1):t._e()])}))},staticRenderFns:[]};var J={name:"Details",components:{detailheader:D,detailsimg:K,detailsprice:i("VU/8")(W,G,!1,function(t){i("ztRR")},"data-v-4b837e36",null).exports},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],categoryList:[]}},methods:{getDetailinfo:function(){C.a.get("/static/mock/detail.json?",{params:{id:this.$route.params.id}}).then(this.getDetailinfoSucc)},getDetailinfoSucc:function(t){var e=t.data;if(e&&1==e.ret){var i=t.data.data;this.sightName=i.sightName,this.bannerImg=i.bannerImg,this.gallaryImgs=i.gallaryImgs,this.categoryList=i.categoryList}}},mounted:function(){this.getDetailinfo()}},Q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detailheader"),this._v(" "),e("detailsimg",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,gallaryImgs:this.gallaryImgs}}),this._v(" "),e("detailsprice",{attrs:{categoryList:this.categoryList}}),this._v(" "),e("div",{staticClass:"bottom"})],1)},staticRenderFns:[]};var X=i("VU/8")(J,Q,!1,function(t){i("9BYC")},"data-v-04cf9161",null).exports;s.a.use(o.a);var Z=new o.a({routes:[{path:"/",name:"Home",component:L},{path:"/city",name:"City",component:j},{path:"/details/:id",name:"Details",component:X}]}),tt=i("NYxO");s.a.use(tt.a);var et=new tt.a.Store({state:{city:localStorage.city||"广州",searchcity:""},actions:{},mutations:{changecity:function(t,e){t.city=e,localStorage.city=e},changesearchcity:function(t,e){t.searchcity=e}}}),it=(i("9n10"),i("M6Sr"),i("TzC8"),i("v5o6")),st=i.n(it);s.a.use(c.a),s.a.config.productionTip=!1,st.a.attach(document.body),new s.a({el:"#app",router:Z,store:et,components:{App:n},template:"<App/>"})},RrqB:function(t,e){},"S/2R":function(t,e){},TzC8:function(t,e){},YuzU:function(t,e){},mL1G:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var a={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var a=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(a):a()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(a,n,!1,null,null,null);e.default=r.exports},qeMm:function(t,e){},v2ns:function(t,e){},xcdW:function(t,e){},ztRR:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f600d258e9ab19c3cfc0.js.map