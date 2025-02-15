/*! WOW - v1.0.1 - 2014-08-15
 * Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */
(function(){var t,e,n,i=function(t,e){return function(){return t.apply(e,arguments)}},o=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e
return-1}
e=function(){function t(){}return t.prototype.extend=function(t,e){var n,i
for(n in e)i=e[n],null==t[n]&&(t[n]=i)
return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i,o
for(e=n=0,i=(o=this.keys).length;i>n;e=++n)if(o[e]===t)return this.values[e]},t.prototype.set=function(t,e){var n,i,o,r
for(n=i=0,o=(r=this.keys).length;o>i;n=++i)if(r[n]===t)return void(this.values[n]=e)
return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),this.WOW=function(){function r(t){null==t&&(t={}),this.scrollCallback=i(this.scrollCallback,this),this.scrollHandler=i(this.scrollHandler,this),this.start=i(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),this.animationNameCache=new n}return r.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0},r.prototype.init=function(){var t
return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():document.addEventListener("DOMContentLoaded",this.start),this.finished=[]},r.prototype.start=function(){var e,n,i,o
if(this.stopped=!1,this.boxes=function(){var t,n,i,o
for(o=[],t=0,n=(i=this.element.querySelectorAll("."+this.config.boxClass)).length;n>t;t++)e=i[t],o.push(e)
return o}.call(this),this.all=function(){var t,n,i,o
for(o=[],t=0,n=(i=this.boxes).length;n>t;t++)e=i[t],o.push(e)
return o}.call(this),this.boxes.length)if(this.disabled())this.resetStyle()
else{for(n=0,i=(o=this.boxes).length;i>n;n++)e=o[n],this.applyStyle(e,!0)
window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}return this.config.live?new t(function(t){return function(e){var n,i,o,r,s
for(s=[],o=0,r=e.length;r>o;o++)i=e[o],s.push(function(){var t,e,o,r
for(r=[],t=0,e=(o=i.addedNodes||[]).length;e>t;t++)n=o[t],r.push(this.doSync(n))
return r}.call(t))
return s}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},r.prototype.stop=function(){return this.stopped=!0,window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},r.prototype.sync=function(){return t.notSupported?this.doSync(this.element):void 0},r.prototype.doSync=function(t){var e,n,i,r,s
if(!this.stopped){if(null==t&&(t=this.element),1!==t.nodeType)return
for(s=[],n=0,i=(r=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass)).length;i>n;n++)e=r[n],o.call(this.all,e)<0?(this.applyStyle(e,!0),this.boxes.push(e),this.all.push(e),s.push(this.scrolled=!0)):s.push(void 0)
return s}},r.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass},r.prototype.applyStyle=function(t,e){var n,i,o
return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.animate(function(r){return function(){return r.customStyle(t,e,i,n,o)}}(this))},r.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},r.prototype.resetStyle=function(){var t,e,n,i,o
for(o=[],e=0,n=(i=this.boxes).length;n>e;e++)t=i[e],o.push(t.setAttribute("style","visibility: visible;"))
return o},r.prototype.customStyle=function(t,e,n,i,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},r.prototype.vendors=["moz","webkit"],r.prototype.vendorSet=function(t,e){var n,i,o,r
for(n in r=[],e)i=e[n],t[""+n]=i,r.push(function(){var e,r,s,a
for(a=[],e=0,r=(s=this.vendors).length;r>e;e++)o=s[e],a.push(t[""+o+n.charAt(0).toUpperCase()+n.substr(1)]=i)
return a}.call(this))
return r},r.prototype.vendorCSS=function(t,e){var n,i,o,r,s,a
for(n=(i=window.getComputedStyle(t)).getPropertyCSSValue(e),r=0,s=(a=this.vendors).length;s>r;r++)o=a[r],n=n||i.getPropertyCSSValue("-"+o+"-"+e)
return n},r.prototype.animationName=function(t){var e
try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=window.getComputedStyle(t).getPropertyValue("animation-name")}return"none"===e?"":e},r.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},r.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},r.prototype.scrollHandler=function(){return this.scrolled=!0},r.prototype.scrollCallback=function(){var t
return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var e,n,i,o
for(o=[],e=0,n=(i=this.boxes).length;n>e;e++)(t=i[e])&&(this.isVisible(t)?this.show(t):o.push(t))
return o}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},r.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode
for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop
return e},r.prototype.isVisible=function(t){var e,n,i,o,r
return n=t.getAttribute("data-wow-offset")||this.config.offset,o=(r=window.pageYOffset)+Math.min(this.element.clientHeight,innerHeight)-n,e=(i=this.offsetTop(t))+t.clientHeight,o>=i&&e>=r},r.prototype.util=function(){return null!=this._util?this._util:this._util=new e},r.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},r}()}).call(this)
