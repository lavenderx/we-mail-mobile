!function(t){function e(o){if(i[o])return i[o].exports;var s=i[o]={exports:{},id:o,loaded:!1};return t[o].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="/dist/",e(0)}([function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function s(t){if(y){y=!1,clearInterval(e);var e=setTimeout(function(){t(),y=!0},200)}}function n(t){var e=l(t,_.goodsInfo.skus),i=r(_.goodsInfo.style_type_list,t);a(i),u(i,e)}function a(t){t.forEach(function(t){t.style_list.forEach(function(t){t.hasQuantity=!0})})}function r(t,e){var i=[];return t.forEach(function(t){void 0==e[t.sku_style_key]&&i.push(t)}),i}function u(t,e){t.forEach(function(t){t.style_list.forEach(function(i){e.forEach(function(e){e.style_id_list[t.sku_style_key]==i.id&&0==e.quantity&&(i.hasQuantity=!1)})})})}function l(t,e){var i=[],o=e;return $.each(t,function(t,e){i=[],o.forEach(function(o){o.style_id_list[t]==e&&i.push(o)}),o=i}),o}var c=i(2),d=o(c),f=i(3),y=!0,_=new Vue({el:"#app",mounted:function(){this.getGoodsInfo(),$(".container").css("min-height",$(window).height()),$(".layout-content").css("max-height",.85*$(window).height())},data:{select_type:1,goodsInfo:{},showSku:!1,goods:{hasSelectSku:!1,original_price_range:"",current_price_range:"",selected_original_price:"",selected_current_price:"",style_name_list:[],buy_quantity:1,item_quantity:0,all_quantity:0,hasMaxQuantity:!1},smallImg:"",skuList:[],searchTerms:{},formData:{},styleNameMappingList:{}},methods:{getGoodsInfo:function(){var t=this;(0,f.http)({url:d.default.getGoodsDetail,success:function(e){$.each(e.data.style_type_list,function(i,o){o.select_id="",o.style_list.forEach(function(t){if(1==e.data.style_type_list.length){var i={};e.data.skus.forEach(function(t){i[t.style_id_list[o.sku_style_key]]=t.quantity}),0==i[t.id]?t.hasQuantity=!1:t.hasQuantity=!0}else t.hasQuantity=!0}),t.styleNameMappingList[o.sku_style_key]=o.name,t.formData[o.sku_style_key]=""}),t.goodsInfo=e.data;var i=t.goodsInfo.skus;i.sort(function(t,e){return t.price-e.price}),t.goods.current_price_range=i[0].price==i[i.length-1].price?i[0].price:i[0].price+" - "+i[i.length-1].price,t.goods.original_price_range=i[0].price_dot==i[i.length-1].price_dot?i[0].price_dot:i[0].price_dot+" - "+i[i.length-1].price_dot,$("title").html(t.goodsInfo.title),t.goods.all_quantity=0,t.goodsInfo.skus.forEach(function(e){t.goods.all_quantity+=Number(e.quantity)}),t.goods.item_quantity=t.goods.all_quantity,t.$nextTick(function(){new Swiper(".swiper-container",{loop:!0,pagination:".swiper-pagination",slidesPerView:"auto",centeredSlides:!0,paginationClickable:!0,breakpoints:{320:{slidesPerView:1,spaceBetweenSlides:10}},autoplay:3e3,autoplayDisableOnInteraction:!1})})}})},showSkuDetail:function(t){this.select_type=t,this.smallImg=this.goodsInfo.picture[0].url,this.showSku=!0},hideSkuDetail:function(){this.showSku=!1},selectSku:function(t,e){var i=this;if(!t.hasQuantity)return!1;t.url&&(this.smallImg=t.url),e.select_id==t.id?(e.select_id="",delete i.searchTerms[e.sku_style_key],i.formData[e.sku_style_key]=""):(e.select_id=t.id,i.searchTerms[e.sku_style_key]=t.id,i.formData[e.sku_style_key]=t.id),i.skuList=l(i.searchTerms,i.goodsInfo.skus);var o=i.goodsInfo.style_type_list.length;if(1==o);else if(2==o)if(1==(0,f.getJsonLength)(i.searchTerms))n(i.searchTerms);else if(0==(0,f.getJsonLength)(i.searchTerms))a(i.goodsInfo.style_type_list);else{var s={};s[e.sku_style_key]=i.searchTerms[e.sku_style_key],n(s)}else if(2==(0,f.getJsonLength)(i.searchTerms))n(i.searchTerms);else if((0,f.getJsonLength)(i.searchTerms)<2)a(i.goodsInfo.style_type_list);else{var s=(0,f.deepClone)(i.searchTerms);delete s[e.sku_style_key];var r=(0,f.objChangeArr)(s,!0),u=r[0];u[e.sku_style_key]=t.id;var c=r[1];c[e.sku_style_key]=t.id,n(u),n(c)}1==(0,f.getJsonLength)(i.skuList)?(i.goodsInfo.skus.forEach(function(t){var e=0;$.each(t.style_id_list,function(t,o){i.skuList[0].style_id_list[t]==o&&e++}),e==o&&(i.goods.selected_original_price=t.price,i.goods.selected_current_price=t.price_dot,i.goods.item_quantity=t.quantity,i.goods.style_name_list=[],$.each(t.style_id_list,function(t,e){i.goodsInfo.style_type_list.forEach(function(t){t.style_list.forEach(function(t){t.id==e&&i.goods.style_name_list.push(t.name)})})}))}),i.goods.buy_quantity=1):(i.goods.selected_original_price="",i.goods.selected_current_price="",i.goods.item_quantity=i.goods.all_quantity)},minusBuyQuantity:function(){this.goods.hasMaxQuantity=!1,1==this.goods.buy_quantity?"":this.goods.buy_quantity--},plusBuyQuantity:function(){var t=this;s(function(){t.goods.buy_quantity<t.goods.item_quantity?t.goods.buy_quantity+1==t.goods.item_quantity?(t.goods.buy_quantity++,t.goods.hasMaxQuantity=!0):t.goods.buy_quantity++:t.goods.buy_quantity==t.goods.item_quantity&&(0,f.msgAlert)("就这么几件啦～")})},checkSelect:function(){var t=this,e="请选择 ";for(var i in t.formData)""==t.formData[i]&&(e+=t.styleNameMappingList[i]+" ");return"请选择 "==e||((0,f.msgAlert)(e),!1)},addBuyCar:function(){this.checkSelect()&&((0,f.msgAlert)("已成功添加到购物车"),this.hideSkuDetail())},buyItNow:function(){this.checkSelect()}}})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="./";e.api=i},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(1);e.default={getGoodsList:o.api+"4.txt",getGoodsDetail:o.api+"1.txt"}},function(t,e){"use strict";function i(t){if(!t.url)return void console.warn("请传入请求地址");var e=t.url,i=void 0==t.type?"get":t.type,o=void 0==t.data?"":t.data,s=void 0==t.hasLoading?"":t.hasLoading,n=void 0==t.loadingTxt?"":t.loadingTxt,l=t.timeout||2e4;$.ajax({type:i,url:e,data:o,beforeSend:function(){if(s)if(n){r(n)}else{r("",1)}t.beforeSend&&t.beforeSend()},complete:function(){s&&u(),t.complete&&t.complete()},success:function(e){var e=JSON.parse(e);0==e.code?t.success&&t.success(e):t.fail?t.fail(e):a(e.errorMsg)},error:function(e){a("网络太差，请稍后重试",function(){t.error&&t.error()})},timeout:l})}function o(t){if(null===t||"object"!==("undefined"==typeof t?"undefined":l(t)))return t;var e=t.constructor();for(var i in t)e[i]=o(t[i]);return e}function s(t){var e,i=0;for(e in t)t.hasOwnProperty(e)&&i++;return i}function n(t,e){var i=[];for(var o in t)if(e){var s={};s[o]=t[o],i.push(s)}else i.push(t[o]);return i}function a(t,e){if($("body").find(".motify").length)$(".motify-inner").text(t);else{var i='<div class="motify"><div class="weui-mask_transparent" id="msgMask"></div><div class="motify-inner">'+t+"</div></div>";$("body").append(i)}$(".motify").show(),clearTimeout(c),c=setTimeout(function(){$(".motify").hide(),e&&e()},2e3)}function r(t,e){if(t=void 0==t?"数据加载中":t,$("body").find("#loadingToast").length)$(".weui-toast__content").text(t);else{var i='<div id="loadingToast" style="display: none;"><div class="weui-mask_transparent"></div><div class="weui-toast"><i class="weui-loading weui-icon_toast"></i><p class="weui-toast__content">'+t+"</p></div></div>";$("body").append(i)}$("#loadingToast").show(),e&&1==e&&($(".weui-toast").css("background","rgba(256,256,256,0)"),$(".weui-toast__content").hide())}function u(){$("#loadingToast").hide()}Object.defineProperty(e,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.http=i,e.deepClone=o,e.getJsonLength=s,e.objChangeArr=n,e.msgAlert=a,e.msgLoad=r,e.msgLoadHide=u;var c=""}]);