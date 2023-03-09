(function(){"use strict";var t={5030:function(t,e,i){var n=i(6369),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("el-radio-group",{attrs:{size:"small"},model:{value:t.activeComp,callback:function(e){t.activeComp=e},expression:"activeComp"}},t._l(t.list,(function(i){return e("el-radio-button",{attrs:{label:i.value}},[t._v(t._s(i.name))])})),1),e("div",{staticClass:"box"},[e(t.activeComp,{tag:"component"})],1),t._m(0)],1)},o=[function(){var t=this,e=t._self._c;return e("div",[e("a",{attrs:{href:"https://github.com/wanglin2/VideoTimeLine/tree/main/demo/src/components"}},[t._v("demo源码")])])}],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"timeShow"},[t._v("当前时间："+t._s(t.showTime))]),e("div",{staticClass:"timeLine"},[e("TimeLine",{ref:"Timeline",on:{timeChange:t.timeChange}})],1),e("div",{staticClass:"btns"},[e("el-button",{attrs:{type:"primary"},on:{click:t.reRender}},[t._v("重新渲染")]),e("el-button",{attrs:{type:"primary"},on:{click:t.jump}},[t._v("跳转到2021-01-01零点")]),e("el-select",{staticStyle:{width:"100px",margin:"0 10px"},attrs:{placeholder:"请选择"},on:{change:t.zoomChange},model:{value:t.zoom,callback:function(e){t.zoom=e},expression:"zoom"}},t._l(t.zoomList,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)])},m=[],r=i(5743),h=i.n(r),l={data(){return{time:Date.now(),zoom:5,zoomList:["半小时","1小时","2小时","6小时","12小时","1天","3天","15天","30天","1年","10年"].map(((t,e)=>({label:t,value:e}))),timer:null}},computed:{showTime(){return h()(this.time).format("YYYY-MM-DD HH:mm:ss")}},mounted(){this.timer=setInterval((()=>{this.time+=1e3,this.$refs.Timeline.setTime(this.time)}),1e3)},beforeDestroy(){clearTimeout(this.timer)},methods:{timeChange(t){this.time=t},reRender(){this.initZoomIndex=8,this.$refs.Timeline.reRender()},jump(){this.$refs.Timeline.setTime("2021-01-01 00:00:00")},zoomChange(t){this.$refs.Timeline.setZoom(t)}}},c=l,d=i(1001),u=(0,d.Z)(c,a,m,!1,null,"41b27e10",null),g=u.exports,w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"timeShow"},[t._v("当前时间："+t._s(t.showTime4))]),e("div",{staticClass:"timeLine4"},[e("TimeLine",{ref:"Timeline4",attrs:{initTime:t.time4,windowList:t.windowList4},on:{timeChange:t.timeChange4}})],1),e("i",{ref:"flagIcon",staticClass:"icon el-icon-s-flag",staticStyle:{color:"#E72528"}}),e("i",{ref:"carIcon",staticClass:"icon el-icon-bicycle",staticStyle:{color:"#2196F3"}})])},T=[],f={data(){return{time4:"2021-01-02 00:00:00",windowList4:[{name:"窗口1"},{name:"窗口2"},{name:"窗口3"},{name:"窗口4"},{name:"窗口5"},{name:"窗口6"}],timer:null}},computed:{showTime4(){return h()(this.time4).format("YYYY-MM-DD HH:mm:ss")}},mounted(){this.timer=setInterval((()=>{this.time4+=1e3,this.$refs.Timeline4.setTime(this.time4)}),1e3),window.addEventListener("scroll",(()=>{this.$refs.Timeline4.updateWatchTime()})),this.$refs.Timeline4.watchTime("2021-01-01 23:30:00",((t,e)=>{-1===t||-1===e?this.$refs.flagIcon.style.display="none":(this.$refs.flagIcon.style.display="block",this.$refs.flagIcon.style.left=t+"px",this.$refs.flagIcon.style.top=e+24+"px")})),this.$refs.Timeline4.watchTime("2021-01-02 02:30:00",((t,e)=>{-1===t||-1===e?this.$refs.carIcon.style.display="none":(this.$refs.carIcon.style.display="block",this.$refs.carIcon.style.left=t+"px",this.$refs.carIcon.style.top=e+"px")}),2)},beforeDestroy(){clearTimeout(this.timer)},methods:{timeChange4(t){this.time4=t}}},p=f,v=(0,d.Z)(p,w,T,!1,null,"4951fd2c",null),C=v.exports,M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"timeShow"},[t._v("当前时间："+t._s(t.showTime3))]),e("div",{staticClass:"timeline3"},[e("TimeLine",{ref:"Timeline3",attrs:{initTime:t.time3,timeSegments:t.timeSegments3,windowList:t.windowList},on:{timeChange:t.timeChange3,click_timeSegments:t.click_timeSegments3,click_window_timeSegments:t.click_window_timeSegments}})],1)])},S=[],b={data(){return{time3:"2021-01-15 00:00:00",timeSegments3:[{name:"时间段1",beginTime:new Date("2021-01-13 10:00:00").getTime(),endTime:new Date("2021-01-14 23:00:00").getTime(),color:"#FA3239",startRatio:.65,endRatio:.9},{name:"时间段2",beginTime:new Date("2021-01-15 02:00:00").getTime(),endTime:new Date("2021-01-15 18:00:00").getTime(),color:"#836ABB",startRatio:.65,endRatio:.9}],windowList:[{name:"窗口1",timeSegments:[{name:"窗口1的时间段1",beginTime:new Date("2021-01-13 10:00:00").getTime(),endTime:new Date("2021-01-14 23:00:00").getTime(),color:"#FA3239",startRatio:.1,endRatio:.9},{name:"窗口1的时间段2",beginTime:new Date("2021-01-12 18:00:00").getTime(),endTime:new Date("2021-01-13 00:00:00").getTime(),color:"#00AEFF",startRatio:.1,endRatio:.9}]},{name:"窗口2",timeSegments:[{name:"窗口2的时间段1",beginTime:new Date("2021-01-15 02:00:00").getTime(),endTime:new Date("2021-01-15 18:00:00").getTime(),color:"#FFCC00",startRatio:.1,endRatio:.9}]},{name:"窗口3"},{name:"窗口4"},{name:"窗口5"},{name:"窗口6"}],timer:null}},computed:{showTime3(){return h()(this.time3).format("YYYY-MM-DD HH:mm:ss")}},mounted(){this.timer=setInterval((()=>{this.time3+=1e3,this.$refs.Timeline3.setTime(this.time3)}),1e3)},beforeDestroy(){clearTimeout(this.timer)},methods:{timeChange3(t){this.time3=t},click_timeSegments3(t){alert("点击了："+t[0].name)},click_window_timeSegments(t,e,i){alert("点击了窗口时间轴的时间段："+t[0].name)}}},x=b,y=(0,d.Z)(x,M,S,!1,null,"0f18e806",null),L=y.exports,R=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"timeShow"},[t._v("当前时间："+t._s(t.showTime2))]),e("div",{staticClass:"timeLine"},[e("TimeLine",{ref:"Timeline2",attrs:{initTime:t.time2,timeSegments:t.timeSegments},on:{timeChange:t.timeChange2,click_timeSegments:t.click_timeSegments,click_timeline:t.onClickTimeLine,dragTimeChange:t.onDragTimeChange}})],1)])},_=[],D={data(){return{time2:"2021-01-15 00:00:00",timeSegments:[{name:"时间段1",beginTime:new Date("2021-01-13 10:00:00").getTime(),endTime:new Date("2021-01-14 23:00:00").getTime(),color:"#FA3239",startRatio:.65,endRatio:.9},{name:"时间段2",beginTime:new Date("2021-01-15 02:00:00").getTime(),endTime:new Date("2021-01-15 18:00:00").getTime(),color:"#836ABB",startRatio:.65,endRatio:.9}],timer:null}},computed:{showTime2(){return h()(this.time2).format("YYYY-MM-DD HH:mm:ss")}},mounted(){this.timer=setInterval((()=>{this.time2+=1e3,this.$refs.Timeline2.setTime(this.time2)}),1e3)},beforeDestroy(){clearTimeout(this.timer)},methods:{timeChange2(t){this.time2=t},click_timeSegments(t,...e){console.log("onClickTimeSegments",t,e),alert("点击了："+t[0].name)},onClickTimeLine(...t){console.log("onClickTimeLine",t)},onDragTimeChange(...t){console.log("onDragTimeChange",t)}}},I=D,Y=(0,d.Z)(I,R,_,!1,null,"45a3b121",null),k=Y.exports,Z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("TimeLine",{ref:"Timeline",attrs:{enableZoom:!1,initZoomIndex:10,timeSegments:t.timeSegments}})],1)},$=[],H={data(){return{timeSegments:[{name:"时间段1",beginTime:new Date("2021-01-13 10:00:00").getTime(),endTime:new Date("2025-01-14 23:00:00").getTime(),color:"#FA3239",startRatio:.65,endRatio:.9},{name:"时间段2",beginTime:new Date("2008-01-01 00:00:00").getTime(),endTime:new Date("2021-01-15 18:00:00").getTime(),color:"#836ABB",startRatio:.65,endRatio:.9}]}}},O=H,A=(0,d.Z)(O,Z,$,!1,null,"1a36b017",null),B=A.exports,W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("TimeLine",{ref:"Timeline",attrs:{enableZoom:!1,initZoomIndex:9,timeSegments:t.timeSegments}})],1)},P=[],E={data(){return{timeSegments:[{name:"时间段1",beginTime:new Date("2021-01-13 10:00:00").getTime(),endTime:new Date("2025-01-14 23:00:00").getTime(),color:"#FA3239",startRatio:.65,endRatio:.9},{name:"时间段2",beginTime:new Date("2008-01-01 00:00:00").getTime(),endTime:new Date("2021-01-15 18:00:00").getTime(),color:"#836ABB",startRatio:.65,endRatio:.9}]}}},F=E,z=(0,d.Z)(F,W,P,!1,null,"3aed7087",null),j=z.exports,X=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"timeShow"},[t._v("当前时间："+t._s(t.showTime))]),e("div",{ref:"timeLine",staticClass:"timeLine"},[e("TimeLine",{ref:"Timeline",attrs:{enableZoom:!1,enableDrag:!1,showDateAtZero:!1,initZoomIndex:11,initTime:t.initTime,customShowTime:t.customShowTime,extendZOOM:t.extendZOOM,formatTime:t.formatTime,hoverTimeFormat:t.hoverTimeFormat},on:{click_timeline:t.click_timeline}})],1)])},N=[],G={data(){return{time:Date.now(),initTime:h()().format("YYYY-MM-DD 12:00:00").valueOf(),extendZOOM:[{zoom:25,zoomHourGrid:.5}]}},computed:{showTime(){return h()(this.time).format("YYYY-MM-DD HH:mm:ss")}},mounted(){console.log(this.$refs.timeLine.getBoundingClientRect())},methods:{click_timeline(t,e){this.time=t},formatTime(t){return t.isAfter(h()().format("YYYY-MM-DD 23:59:59"))?"24:00":0===t.hour()&&0===t.minute()&&0===t.millisecond()?t.format("HH:mm"):void 0},hoverTimeFormat(t){return h()(t).isBefore(h()().format("YYYY-MM-DD 00:00:00"))||h()(t).isAfter(h()().format("YYYY-MM-DD 23:59:59"))?"":h()(t).format("HH:mm:ss")},customShowTime(t,e){if(11===e)return t.getHours()%2===0&&0===t.getMinutes()}}},U=G,V=(0,d.Z)(U,X,N,!1,null,"f7bac5fc",null),q=V.exports,J={name:"App",components:{Custom:C,Base:g,MultiSegment:L,Segment:k,Year:B,YearMonth:j,CustomZoom:q},data(){return{activeComp:"Base",list:[{name:"基础用法",value:"Base"},{name:"显示时间段",value:"Segment"},{name:"多个时间轴",value:"MultiSegment"},{name:"显示自定义元素",value:"Custom"},{name:"显示到年",value:"Year"},{name:"显示到年月",value:"YearMonth"},{name:"自定义时间分辨率",value:"CustomZoom"}]}},methods:{change(t){this.activeComp=t}}},K=J,Q=(0,d.Z)(K,s,o,!1,null,null,null),tt=Q.exports,et=function(){var t=this,e=t._self._c;return e("div",{ref:"timeLineContainer",staticClass:"timeLineContainer",style:{backgroundColor:t.backgroundColor},on:{touchstart:t.onTouchstart,touchmove:t.onTouchmove,mousedown:t.onMousedown,mouseout:t.onMouseout,mousemove:t.onMousemove,mouseleave:t.onMouseleave}},[e("canvas",{ref:"canvas",staticClass:"canvas",on:{mousewheel:function(e){return e.stopPropagation(),e.preventDefault(),t.onMouseweel.apply(null,arguments)}}}),t.showWindowList&&t.windowList&&t.windowList.length>1?e("div",{ref:"windowList",staticClass:"windowList",on:{scroll:t.onWindowListScroll}},t._l(t.windowListInner,(function(i,n){return e("WindowListItem",{key:n,ref:"WindowListItem",refInFor:!0,attrs:{index:n,data:i,totalMS:t.totalMS,startTimestamp:t.startTimestamp,width:t.width,active:i.active},on:{click_window_timeSegments:t.triggerClickWindowTimeSegments,click:function(e){return t.toggleActive(n)}}})})),1):t._e()])},it=[],nt=(i(8496),i(7085)),st=i.n(nt),ot=function(){var t=this,e=t._self._c;return e("div",{ref:"windowListItem",staticClass:"windowListItem",class:{active:t.active},on:{click:t.onClick}},[e("span",{staticClass:"order"},[t._v(t._s(t.index+1))]),e("canvas",{ref:"canvas",staticClass:"windowListItemCanvas"})])},at=[],mt={name:"WindowListItem",props:{index:{type:Number},data:{type:Object,default(){return{}}},totalMS:{type:Number},startTimestamp:{type:Number},width:{type:Number},active:{type:Boolean,default:!1}},data(){return{height:0,ctx:null}},mounted(){this.init(),this.drawTimeSegments()},methods:{init(){let{height:t}=this.$refs.windowListItem.getBoundingClientRect();this.height=t-1,this.$refs.canvas.width=this.width,this.$refs.canvas.height=this.height,this.ctx=this.$refs.canvas.getContext("2d")},drawTimeSegments(t,e){if(!this.data.timeSegments||this.data.timeSegments.length<=0)return;const i=this.width/this.totalMS;this.data.timeSegments.forEach((n=>{if(n.beginTime<=this.startTimestamp+this.totalMS&&n.endTime>=this.startTimestamp){this.ctx.beginPath();let s,o=(n.beginTime-this.startTimestamp)*i;o<0?(o=0,s=(n.endTime-this.startTimestamp)*i):s=(n.endTime-n.beginTime)*i;let a=void 0===n.startRatio?.6:n.startRatio,m=void 0===n.endRatio?.9:n.endRatio;e?this.ctx.rect(o,this.height*a,s,this.height*(m-a)):(this.ctx.fillStyle=n.color,this.ctx.fillRect(o,this.height*a,s,this.height*(m-a))),t&&t(n)}}))},clearCanvas(){this.ctx.clearRect(0,0,this.width,this.height)},draw(){this.$nextTick((()=>{this.clearCanvas(),this.drawTimeSegments()}))},onClick(t){this.$emit("click",t);let{left:e,top:i}=this.$refs.windowListItem.getBoundingClientRect(),n=t.clientX-e,s=t.clientY-i,o=this.getClickTimeSegments(n,s);o.length>0&&this.$emit("click_window_timeSegments",o,this.index,this.data)},getClickTimeSegments(t,e){if(!this.data.timeSegments||this.data.timeSegments.length<=0)return[];let i=[];return this.drawTimeSegments((n=>{this.ctx.isPointInPath(t,e)&&i.push(n)}),!0),i},getRect(){return this.$refs.windowListItem?this.$refs.windowListItem.getBoundingClientRect():null}}},rt=mt,ht=(0,d.Z)(rt,ot,at,!1,null,"5d855ac8",null),lt=ht.exports;const ct=36e5,dt=[.5,1,2,6,12,24,72,360,720,8760,87600],ut=[1/60,1/60,2/60,1/6,.25,.5,1,4,4,720,7200],gt=[.05,1/30,.05,1/3,.5,2,4,4,4,720,7200],wt=[()=>!0,t=>t.getMinutes()%5===0,t=>t.getMinutes()%10===0,t=>0===t.getMinutes()||30===t.getMinutes(),t=>0===t.getMinutes(),t=>t.getHours()%2===0&&0===t.getMinutes(),t=>t.getHours()%3===0&&0===t.getMinutes(),t=>t.getHours()%12===0&&0===t.getMinutes(),t=>!1,t=>!0,t=>!0],Tt=[()=>!0,t=>t.getMinutes()%5===0,t=>t.getMinutes()%10===0,t=>0===t.getMinutes()||30===t.getMinutes(),t=>t.getHours()%2===0&&0===t.getMinutes(),t=>t.getHours()%4===0&&0===t.getMinutes(),t=>t.getHours()%3===0&&0===t.getMinutes(),t=>t.getHours()%12===0&&0===t.getMinutes(),t=>!1,t=>!0,t=>!0];var ft={name:"TimeLine",components:{WindowListItem:lt},props:{initTime:{type:[Number,String],default:""},timeRange:{type:Object,default(){return{}}},initZoomIndex:{type:Number,default:5},showCenterLine:{type:Boolean,default:!0},centerLineStyle:{type:Object,default(){return{width:2,color:"#fff"}}},textColor:{type:String,default:"rgba(151,158,167,1)"},hoverTextColor:{type:String,default:"rgb(194, 202, 215)"},lineColor:{type:String,default:"rgba(151,158,167,1)"},lineHeightRatio:{type:Object,default(){return{date:.3,time:.2,none:.1,hover:.3}}},showHoverTime:{type:Boolean,default:!0},hoverTimeFormat:{type:Function},timeSegments:{type:Array,default:()=>[]},backgroundColor:{type:String,default:"#262626"},enableZoom:{type:Boolean,default:!0},enableDrag:{type:Boolean,default:!0},windowList:{type:Array,default(){return[]}},baseTimeLineHeight:{type:Number,default:50},initSelectWindowTimeLineIndex:{type:Number,default:-1},isMobile:{type:Boolean,default:!1},maxClickDistance:{type:Number,default:3},roundWidthTimeSegments:{type:Boolean,default:!0},customShowTime:{type:Function},showDateAtZero:{type:Boolean,default:!0},extendZOOM:{type:Array,default(){return[]}},formatTime:{type:Function}},data(){return{width:0,height:0,ctx:null,currentZoomIndex:0,currentTime:0,startTimestamp:0,mousedown:!1,mousedownX:0,mousedownY:0,mousedownCacheStartTimestamp:0,showWindowList:!1,windowListInner:[],mousemoveX:-1,watchTimeList:[]}},computed:{totalMS(){return dt[this.currentZoomIndex]*ct},timeRangeTimestamp(){let t={};return this.timeRange.start&&(t.start="number"===typeof this.timeRange.start?this.timeRange.start:new Date(this.timeRange.start).getTime()),this.timeRange.end&&(t.end="number"===typeof this.timeRange.end?this.timeRange.end:new Date(this.timeRange.end).getTime()),t},ACT_ZOOM_HOUR_GRID(){return this.isMobile?gt:ut},ACT_ZOOM_DATE_SHOW_RULE(){return this.isMobile?Tt:wt},yearMonthMode(){return 9===this.currentZoomIndex},yearMode(){return 10===this.currentZoomIndex}},watch:{timeSegments:{deep:!0,handler:"reRender"}},created(){this.extendZOOM.forEach((t=>{dt.push(t.zoom),ut.push(t.zoomHourGrid),gt.push(t.mobileZoomHourGrid)}))},mounted(){this.setInitData(),this.init(),this.draw(),this.onMouseup=this.onMouseup.bind(this),this.onResize=this.onResize.bind(this),this.onTouchend=this.onTouchend.bind(this),this.isMobile?window.addEventListener("touchend",this.onTouchend):window.addEventListener("mouseup",this.onMouseup),window.addEventListener("resize",this.onResize)},beforeDestroy(){this.isMobile?window.removeEventListener("touchend",this.onTouchend):window.removeEventListener("mouseup",this.onMouseup),window.removeEventListener("resize",this.onResize)},methods:{setInitData(){this.windowListInner=this.windowList.map(((t,e)=>({...t,active:this.initSelectWindowTimeLineIndex===e}))),this.currentZoomIndex=this.initZoomIndex>=0&&this.initZoomIndex<dt.length?this.initZoomIndex:5,this.startTimestamp=(this.initTime?"number"===typeof this.initTime?this.initTime:new Date(this.initTime).getTime():new Date(st()().format("YYYY-MM-DD 00:00:00")).getTime())-this.totalMS/2,this.fixStartTimestamp()},fixStartTimestamp(){let t=this.totalMS/2,e=this.startTimestamp+t;this.timeRangeTimestamp.start&&e<this.timeRangeTimestamp.start&&(this.startTimestamp=this.timeRangeTimestamp.start-t),this.timeRangeTimestamp.end&&e>this.timeRangeTimestamp.end&&(this.startTimestamp=this.timeRangeTimestamp.end-t)},init(){let{width:t,height:e}=this.$refs.timeLineContainer.getBoundingClientRect();this.width=t,this.height=this.windowList.length>1?this.baseTimeLineHeight:e,this.$refs.canvas.width=this.width,this.$refs.canvas.height=this.height,this.ctx=this.$refs.canvas.getContext("2d"),this.showWindowList=!0},draw(){this.drawTimeSegments(),this.addGraduations(),this.drawMiddleLine(),this.currentTime=this.startTimestamp+this.totalMS/2,this.$emit("timeChange",this.currentTime);try{this.$refs.WindowListItem.forEach((t=>{t.draw()}))}catch(t){}this.updateWatchTime()},updateWatchTime(){this.watchTimeList.forEach((t=>{if(t.time<this.startTimestamp||t.time>this.startTimestamp+this.totalMS)t.callback(-1,-1);else{let e=(t.time-this.startTimestamp)*(this.width/this.totalMS),i=0,{left:n,top:s}=this.$refs.canvas.getBoundingClientRect();if(-1!==t.windowTimeLineIndex&&this.windowList.length>1&&t.windowTimeLineIndex>=0&&t.windowTimeLineIndex<this.windowList.length){let e=this.$refs.WindowListItem[t.windowTimeLineIndex].getRect();i=e?e.top:s}else i=s;t.callback(e+n,i)}}))},drawMiddleLine(){if(!this.showCenterLine)return;this.ctx.beginPath();let{width:t,color:e}=this.centerLineStyle,i=this.width/2;this.drawLine(i,0,i,this.height,t,e)},addGraduations(){this.ctx.beginPath();let t=dt[this.currentZoomIndex]/this.ACT_ZOOM_HOUR_GRID[this.currentZoomIndex],e=this.ACT_ZOOM_HOUR_GRID[this.currentZoomIndex]*ct,i=this.width/t,n=e-this.startTimestamp%e,s=n/e*i;for(let o=0;o<t;o++){let t=this.startTimestamp+n+o*e,a=0;this.yearMode?a=t-new Date(`${st()(t).format("YYYY")}-01-01 00:00:00`).getTime():this.yearMonthMode&&(a=t-new Date(`${st()(t).format("YYYY")}-${st()(t).format("MM")}-01 00:00:00`).getTime());let m=s+o*i-a/e*i,r=t-a,h=0,l=new Date(r);this.showDateAtZero&&0===l.getHours()&&0===l.getMinutes()?(h=this.height*(void 0===this.lineHeightRatio.date?.3:this.lineHeightRatio.date),this.ctx.fillStyle=this.textColor,this.ctx.fillText(this.graduationTitle(r),m-13,h+15)):this.checkShowTime(l)?(h=this.height*(void 0===this.lineHeightRatio.time?.2:this.lineHeightRatio.time),this.ctx.fillStyle=this.textColor,this.ctx.fillText(this.graduationTitle(r),m-13,h+15)):h=this.height*(void 0===this.lineHeightRatio.none?.1:this.lineHeightRatio.none),this.drawLine(m,0,m,h,1,this.lineColor)}},checkShowTime(t){if(this.customShowTime){let e=this.customShowTime(t,this.currentZoomIndex);if(!0===e)return!0;if(!1===e)return!1}return this.ACT_ZOOM_DATE_SHOW_RULE[this.currentZoomIndex](t)},drawTimeSegments(t,e){const i=this.width/this.totalMS;this.timeSegments.forEach((n=>{if(n.beginTime<=this.startTimestamp+this.totalMS){let s=n.endTime>=this.startTimestamp;this.ctx.beginPath();let o,a=(n.beginTime-this.startTimestamp)*i;a<0?(a=0,o=s?(n.endTime-this.startTimestamp)*i:1):o=s?(n.endTime-n.beginTime)*i:1;let m=void 0===n.startRatio?.6:n.startRatio,r=void 0===n.endRatio?.9:n.endRatio;this.roundWidthTimeSegments&&(a=Math.round(a),o=Math.round(o)),o=Math.max(1,o),e?this.ctx.rect(a,this.height*m,o,this.height*(r-m)):(this.ctx.fillStyle=n.color,this.ctx.fillRect(a,this.height*m,o,this.height*(r-m))),t&&t(n)}}))},onTouchstart(t){this.isMobile&&(t=t.touches[0],this.onPointerdown(t))},onMousedown(t){this.isMobile||this.onPointerdown(t)},onPointerdown(t){let e=this.getClientOffset(t);this.mousedownX=e[0],this.mousedownY=e[1],this.mousedown=!0,this.mousedownCacheStartTimestamp=this.startTimestamp,this.$emit("mousedown",t)},onTouchend(t){this.isMobile&&(t=t.touches[0],this.onPointerup(t))},onMouseup(t){this.isMobile||this.onPointerup(t)},onPointerup(t){let e=this.getClientOffset(t);const i=()=>{this.mousedown=!1,this.mousedownX=0,this.mousedownY=0,this.mousedownCacheStartTimestamp=0};if(Math.abs(e[0]-this.mousedownX)<=this.maxClickDistance&&Math.abs(e[1]-this.mousedownY)<=this.maxClickDistance)return i(),void this.onClick(...e);this.mousedown&&this.enableDrag?(i(),this.$emit("dragTimeChange",this.currentTime)):i(),this.$emit("mouseup",t)},onTouchmove(t){this.isMobile&&(t=t.touches[0],this.onPointermove(t))},onMousemove(t){this.isMobile||this.onPointermove(t)},onPointermove(t){let e=this.getClientOffset(t)[0];this.mousemoveX=e,this.mousedown&&this.enableDrag?this.drag(e):this.showHoverTime&&this.hoverShow(e)},onMouseleave(){this.mousemoveX=-1},drag(t){if(!this.enableDrag)return;const e=this.width/this.totalMS;let i=t-this.mousedownX,n=this.totalMS/2,s=this.mousedownCacheStartTimestamp-Math.round(i/e),o=s+n;this.timeRangeTimestamp.start&&o<this.timeRangeTimestamp.start&&(s=this.timeRangeTimestamp.start-n),this.timeRangeTimestamp.end&&o>this.timeRangeTimestamp.end&&(s=this.timeRangeTimestamp.end-n),this.startTimestamp=s,this.clearCanvas(this.width,this.height),this.draw()},hoverShow(t,e){const i=this.width/this.totalMS;let n=this.startTimestamp+t/i;e||(this.clearCanvas(this.width,this.height),this.draw());let s=this.height*(void 0===this.lineHeightRatio.hover?.3:this.lineHeightRatio.hover);this.drawLine(t,0,t,s,1,this.lineColor),this.ctx.fillStyle=this.hoverTextColor;let o=this.hoverTimeFormat?this.hoverTimeFormat(n):st()(n).format("YYYY-MM-DD HH:mm:ss"),a=this.ctx.measureText(o).width;this.ctx.fillText(o,t-a/2,s+20)},onMouseout(){this.clearCanvas(this.width,this.height),this.draw()},onMouseweel(t){if(!this.enableZoom)return;let e=window.event||t,i=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail));i<0?this.currentZoomIndex+1>=dt.length-1?this.currentZoomIndex=dt.length-1:this.currentZoomIndex++:i>0&&(this.currentZoomIndex-1<=0?this.currentZoomIndex=0:this.currentZoomIndex--),this.clearCanvas(this.width,this.height),this.startTimestamp=this.currentTime-this.totalMS/2,this.draw()},onClick(t,e){const i=this.width/this.totalMS;let n=this.startTimestamp+t/i,s=st()(n).format("YYYY-MM-DD HH:mm:ss"),o=this.getClickTimeSegments(t,e);o&&o.length>0?this.$emit("click_timeSegments",o,n,s,t):this.onCanvasClick(n,s,t)},getClickTimeSegments(t,e){let i=[];return this.drawTimeSegments((n=>{this.ctx.isPointInPath(t,e)&&i.push(n)}),!0),i},getClientOffset(t){if(!this.$refs.timeLineContainer||!t)return[0,0];let{left:e,top:i}=this.$refs.timeLineContainer.getBoundingClientRect();return[t.clientX-e,t.clientY-i]},clearCanvas(t,e){this.ctx.clearRect(0,0,t,e)},graduationTitle(t){let e=st()(t),i="";return this.formatTime&&(i=this.formatTime(e)),i||(this.yearMode?e.format("YYYY"):this.yearMonthMode?e.format("YYYY-MM"):0===e.hour()&&0===e.minute()&&0===e.millisecond()?e.format("MM-DD"):e.format("HH:mm"))},drawLine(t,e,i,n,s=1,o="#fff"){this.ctx.beginPath(),this.ctx.strokeStyle=o,this.ctx.lineWidth=s,this.ctx.moveTo(t,e),this.ctx.lineTo(i,n),this.ctx.stroke()},reRender(){this.$nextTick((()=>{this.clearCanvas(this.width,this.height),this.reset(),this.setInitData(),this.init(),this.draw()}))},reset(){this.width=0,this.height=0,this.ctx=null,this.currentZoomIndex=0,this.currentTime=0,this.startTimestamp=0,this.mousedown=!1,this.mousedownX=0,this.mousedownCacheStartTimestamp=0},setTime(t){if(this.mousedown)return;let e="number"===typeof t?t:new Date(t).getTime();this.startTimestamp=e-this.totalMS/2,this.fixStartTimestamp(),this.clearCanvas(this.width,this.height),this.draw(),-1===this.mousemoveX||this.isMobile||this.hoverShow(this.mousemoveX,!0)},triggerClickWindowTimeSegments(t,e,i){this.$emit("click_window_timeSegments",t,e,i)},setZoom(t){this.currentZoomIndex=t>=0&&t<dt.length?t:5,this.clearCanvas(this.width,this.height),this.startTimestamp=this.currentTime-this.totalMS/2,this.draw()},toggleActive(t){this.windowListInner.forEach((t=>{t.active=!1})),this.windowListInner[t].active=!0,this.$emit("change_window_time_line",t,this.windowListInner[t])},watchTime(t,e,i){t&&e&&this.watchTimeList.push({time:"number"===typeof t?t:new Date(t).getTime(),callback:e,windowTimeLineIndex:"number"===typeof i?i-1:-1})},onWindowListScroll(){this.updateWatchTime()},onResize(){this.init(),this.draw();try{this.$refs.WindowListItem.forEach((t=>{t.init()}))}catch(t){}},onCanvasClick(...t){this.$emit("click_timeline",...t)}}},pt=ft,vt=(0,d.Z)(pt,et,it,!1,null,"35dbafe4",null),Ct=vt.exports;const Mt=function(t){t.component(Ct.name,Ct)};var St={install:Mt},bt=i(8499),xt=i.n(bt);n["default"].use(St),n["default"].use(xt()),n["default"].config.productionTip=!1,new n["default"]({render:t=>t(tt)}).$mount("#app")}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(e,n,s,o){if(!n){var a=1/0;for(l=0;l<t.length;l++){n=t[l][0],s=t[l][1],o=t[l][2];for(var m=!0,r=0;r<n.length;r++)(!1&o||a>=o)&&Object.keys(i.O).every((function(t){return i.O[t](n[r])}))?n.splice(r--,1):(m=!1,o<a&&(a=o));if(m){t.splice(l--,1);var h=s();void 0!==h&&(e=h)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[n,s,o]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,o,a=n[0],m=n[1],r=n[2],h=0;if(a.some((function(e){return 0!==t[e]}))){for(s in m)i.o(m,s)&&(i.m[s]=m[s]);if(r)var l=r(i)}for(e&&e(n);h<a.length;h++)o=a[h],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(l)},n=self["webpackChunkdemo"]=self["webpackChunkdemo"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(5030)}));n=i.O(n)})();
//# sourceMappingURL=app.0c429e75.js.map