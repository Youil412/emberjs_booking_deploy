/*!
 * Bootstrap v3.1.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery")
!function(t){"use strict"
t.fn.emulateTransitionEnd=function(e){var i=!1,o=this
t(this).one(t.support.transition.end,(function(){i=!0}))
return setTimeout((function(){i||t(o).trigger(t.support.transition.end)}),e),this},t((function(){t.support.transition=function(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"}
for(var i in e)if(void 0!==t.style[i])return{end:e[i]}
return!1}()}))}(jQuery),function(t){"use strict"
var e='[data-dismiss="alert"]',i=function(i){t(i).on("click",e,this.close)}
i.prototype.close=function(e){var i=t(this),o=i.attr("data-target")
o||(o=(o=i.attr("href"))&&o.replace(/.*(?=#[^\s]*$)/,""))
var n=t(o)
function s(){n.trigger("closed.bs.alert").remove()}e&&e.preventDefault(),n.length||(n=i.hasClass("alert")?i:i.parent()),n.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(n.removeClass("in"),t.support.transition&&n.hasClass("fade")?n.one(t.support.transition.end,s).emulateTransitionEnd(150):s())}
var o=t.fn.alert
t.fn.alert=function(e){return this.each((function(){var o=t(this),n=o.data("bs.alert")
n||o.data("bs.alert",n=new i(this)),"string"==typeof e&&n[e].call(o)}))},t.fn.alert.Constructor=i,t.fn.alert.noConflict=function(){return t.fn.alert=o,this},t(document).on("click.bs.alert.data-api",e,i.prototype.close)}(jQuery),function(t){"use strict"
var e=function(i,o){this.$element=t(i),this.options=t.extend({},e.DEFAULTS,o),this.isLoading=!1}
e.DEFAULTS={loadingText:"loading..."},e.prototype.setState=function(e){var i="disabled",o=this.$element,n=o.is("input")?"val":"html",s=o.data()
e+="Text",s.resetText||o.data("resetText",o[n]()),o[n](s[e]||this.options[e]),setTimeout(t.proxy((function(){"loadingText"==e?(this.isLoading=!0,o.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,o.removeClass(i).removeAttr(i))}),this),0)},e.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]')
if(e.length){var i=this.$element.find("input")
"radio"==i.prop("type")&&(i.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&i.prop("checked",!this.$element.hasClass("active")).trigger("change")}t&&this.$element.toggleClass("active")}
var i=t.fn.button
t.fn.button=function(i){return this.each((function(){var o=t(this),n=o.data("bs.button"),s="object"==typeof i&&i
n||o.data("bs.button",n=new e(this,s)),"toggle"==i?n.toggle():i&&n.setState(i)}))},t.fn.button.Constructor=e,t.fn.button.noConflict=function(){return t.fn.button=i,this},t(document).on("click.bs.button.data-api","[data-toggle^=button]",(function(e){var i=t(e.target)
i.hasClass("btn")||(i=i.closest(".btn")),i.button("toggle"),e.preventDefault()}))}(jQuery),function(t){"use strict"
var e=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",t.proxy(this.pause,this)).on("mouseleave",t.proxy(this.cycle,this))}
e.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},e.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},e.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},e.prototype.to=function(e){var i=this,o=this.getActiveIndex()
if(!(e>this.$items.length-1||e<0))return this.sliding?this.$element.one("slid.bs.carousel",(function(){i.to(e)})):o==e?this.pause().cycle():this.slide(e>o?"next":"prev",t(this.$items[e]))},e.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},e.prototype.next=function(){if(!this.sliding)return this.slide("next")},e.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},e.prototype.slide=function(e,i){var o=this.$element.find(".item.active"),n=i||o[e](),s=this.interval,a="next"==e?"left":"right",r="next"==e?"first":"last",l=this
if(!n.length){if(!this.options.wrap)return
n=this.$element.find(".item")[r]()}if(n.hasClass("active"))return this.sliding=!1
var h=t.Event("slide.bs.carousel",{relatedTarget:n[0],direction:a})
return this.$element.trigger(h),h.isDefaultPrevented()?void 0:(this.sliding=!0,s&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",(function(){var e=t(l.$indicators.children()[l.getActiveIndex()])
e&&e.addClass("active")}))),t.support.transition&&this.$element.hasClass("slide")?(n.addClass(e),n[0].offsetWidth,o.addClass(a),n.addClass(a),o.one(t.support.transition.end,(function(){n.removeClass([e,a].join(" ")).addClass("active"),o.removeClass(["active",a].join(" ")),l.sliding=!1,setTimeout((function(){l.$element.trigger("slid.bs.carousel")}),0)})).emulateTransitionEnd(1e3*o.css("transition-duration").slice(0,-1))):(o.removeClass("active"),n.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),s&&this.cycle(),this)}
var i=t.fn.carousel
t.fn.carousel=function(i){return this.each((function(){var o=t(this),n=o.data("bs.carousel"),s=t.extend({},e.DEFAULTS,o.data(),"object"==typeof i&&i),a="string"==typeof i?i:s.slide
n||o.data("bs.carousel",n=new e(this,s)),"number"==typeof i?n.to(i):a?n[a]():s.interval&&n.pause().cycle()}))},t.fn.carousel.Constructor=e,t.fn.carousel.noConflict=function(){return t.fn.carousel=i,this},t(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",(function(e){var i,o=t(this),n=t(o.attr("data-target")||(i=o.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")),s=t.extend({},n.data(),o.data()),a=o.attr("data-slide-to")
a&&(s.interval=!1),n.carousel(s),(a=o.attr("data-slide-to"))&&n.data("bs.carousel").to(a),e.preventDefault()})),t(window).on("load",(function(){t('[data-ride="carousel"]').each((function(){var e=t(this)
e.carousel(e.data())}))}))}(jQuery),function(t){"use strict"
var e=function(i,o){this.$element=t(i),this.options=t.extend({},e.DEFAULTS,o),this.transitioning=null,this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()}
e.DEFAULTS={toggle:!0},e.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},e.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e=t.Event("show.bs.collapse")
if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.$parent&&this.$parent.find("> .panel > .in")
if(i&&i.length){var o=i.data("bs.collapse")
if(o&&o.transitioning)return
i.collapse("hide"),o||i.data("bs.collapse",null)}var n=this.dimension()
this.$element.removeClass("collapse").addClass("collapsing")[n](0),this.transitioning=1
var s=function(){this.$element.removeClass("collapsing").addClass("collapse in")[n]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")}
if(!t.support.transition)return s.call(this)
var a=t.camelCase(["scroll",n].join("-"))
this.$element.one(t.support.transition.end,t.proxy(s,this)).emulateTransitionEnd(350)[n](this.$element[0][a])}}},e.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse")
if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension()
this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1
var o=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")}
if(!t.support.transition)return o.call(this)
this.$element[i](0).one(t.support.transition.end,t.proxy(o,this)).emulateTransitionEnd(350)}}},e.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()}
var i=t.fn.collapse
t.fn.collapse=function(i){return this.each((function(){var o=t(this),n=o.data("bs.collapse"),s=t.extend({},e.DEFAULTS,o.data(),"object"==typeof i&&i)
!n&&s.toggle&&"show"==i&&(i=!i),n||o.data("bs.collapse",n=new e(this,s)),"string"==typeof i&&n[i]()}))},t.fn.collapse.Constructor=e,t.fn.collapse.noConflict=function(){return t.fn.collapse=i,this},t(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",(function(e){var i,o=t(this),n=o.attr("data-target")||e.preventDefault()||(i=o.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""),s=t(n),a=s.data("bs.collapse"),r=a?"toggle":o.data(),l=o.attr("data-parent"),h=l&&t(l)
a&&a.transitioning||(h&&h.find('[data-toggle=collapse][data-parent="'+l+'"]').not(o).addClass("collapsed"),o[s.hasClass("in")?"addClass":"removeClass"]("collapsed")),s.collapse(r)}))}(jQuery),function(t){"use strict"
var e="[data-toggle=dropdown]",i=function(e){t(e).on("click.bs.dropdown",this.toggle)}
function o(i){t(".dropdown-backdrop").remove(),t(e).each((function(){var e=n(t(this)),o={relatedTarget:this}
e.hasClass("open")&&(e.trigger(i=t.Event("hide.bs.dropdown",o)),i.isDefaultPrevented()||e.removeClass("open").trigger("hidden.bs.dropdown",o))}))}function n(e){var i=e.attr("data-target")
i||(i=(i=e.attr("href"))&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""))
var o=i&&t(i)
return o&&o.length?o:e.parent()}i.prototype.toggle=function(e){var i=t(this)
if(!i.is(".disabled, :disabled")){var s=n(i),a=s.hasClass("open")
if(o(),!a){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",o)
var r={relatedTarget:this}
if(s.trigger(e=t.Event("show.bs.dropdown",r)),e.isDefaultPrevented())return
s.toggleClass("open").trigger("shown.bs.dropdown",r),i.focus()}return!1}},i.prototype.keydown=function(i){if(/(38|40|27)/.test(i.keyCode)){var o=t(this)
if(i.preventDefault(),i.stopPropagation(),!o.is(".disabled, :disabled")){var s=n(o),a=s.hasClass("open")
if(!a||a&&27==i.keyCode)return 27==i.which&&s.find(e).focus(),o.click()
var r=" li:not(.divider):visible a",l=s.find("[role=menu]"+r+", [role=listbox]"+r)
if(l.length){var h=l.index(l.filter(":focus"))
38==i.keyCode&&h>0&&h--,40==i.keyCode&&h<l.length-1&&h++,~h||(h=0),l.eq(h).focus()}}}}
var s=t.fn.dropdown
t.fn.dropdown=function(e){return this.each((function(){var o=t(this),n=o.data("bs.dropdown")
n||o.data("bs.dropdown",n=new i(this)),"string"==typeof e&&n[e].call(o)}))},t.fn.dropdown.Constructor=i,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=s,this},t(document).on("click.bs.dropdown.data-api",o).on("click.bs.dropdown.data-api",".dropdown form",(function(t){t.stopPropagation()})).on("click.bs.dropdown.data-api",e,i.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",i.prototype.keydown)}(jQuery),function(t){"use strict"
var e=function(e,i){this.options=i,this.$element=t(e),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy((function(){this.$element.trigger("loaded.bs.modal")}),this))}
e.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},e.prototype.toggle=function(t){return this[this.isShown?"hide":"show"](t)},e.prototype.show=function(e){var i=this,o=t.Event("show.bs.modal",{relatedTarget:e})
this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.backdrop((function(){var o=t.support.transition&&i.$element.hasClass("fade")
i.$element.parent().length||i.$element.appendTo(document.body),i.$element.show().scrollTop(0),o&&i.$element[0].offsetWidth,i.$element.addClass("in").attr("aria-hidden",!1),i.enforceFocus()
var n=t.Event("shown.bs.modal",{relatedTarget:e})
o?i.$element.find(".modal-dialog").one(t.support.transition.end,(function(){i.$element.focus().trigger(n)})).emulateTransitionEnd(300):i.$element.focus().trigger(n)})))},e.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one(t.support.transition.end,t.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},e.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy((function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.focus()}),this))},e.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",t.proxy((function(t){27==t.which&&this.hide()}),this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},e.prototype.hideModal=function(){var t=this
this.$element.hide(),this.backdrop((function(){t.removeBackdrop(),t.$element.trigger("hidden.bs.modal")}))},e.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},e.prototype.backdrop=function(e){var i=this.$element.hasClass("fade")?"fade":""
if(this.isShown&&this.options.backdrop){var o=t.support.transition&&i
if(this.$backdrop=t('<div class="modal-backdrop '+i+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",t.proxy((function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))}),this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return
o?this.$backdrop.one(t.support.transition.end,e).emulateTransitionEnd(150):e()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,e).emulateTransitionEnd(150):e()):e&&e()}
var i=t.fn.modal
t.fn.modal=function(i,o){return this.each((function(){var n=t(this),s=n.data("bs.modal"),a=t.extend({},e.DEFAULTS,n.data(),"object"==typeof i&&i)
s||n.data("bs.modal",s=new e(this,a)),"string"==typeof i?s[i](o):a.show&&s.show(o)}))},t.fn.modal.Constructor=e,t.fn.modal.noConflict=function(){return t.fn.modal=i,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(e){var i=t(this),o=i.attr("href"),n=t(i.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),s=n.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(o)&&o},n.data(),i.data())
i.is("a")&&e.preventDefault(),n.modal(s,this).one("hide",(function(){i.is(":visible")&&i.focus()}))})),t(document).on("show.bs.modal",".modal",(function(){t(document.body).addClass("modal-open")})).on("hidden.bs.modal",".modal",(function(){t(document.body).removeClass("modal-open")}))}(jQuery),function(t){"use strict"
var e=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)}
e.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.prototype.init=function(e,i,o){this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o)
for(var n=this.options.trigger.split(" "),s=n.length;s--;){var a=n[s]
if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this))
else if("manual"!=a){var r="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout"
this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.getOptions=function(e){return(e=t.extend({},this.getDefaults(),this.$element.data(),e)).delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},e.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults()
return this._options&&t.each(this._options,(function(t,o){i[t]!=o&&(e[t]=o)})),e},e.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type)
if(clearTimeout(i.timeout),i.hoverState="in",!i.options.delay||!i.options.delay.show)return i.show()
i.timeout=setTimeout((function(){"in"==i.hoverState&&i.show()}),i.options.delay.show)},e.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type)
if(clearTimeout(i.timeout),i.hoverState="out",!i.options.delay||!i.options.delay.hide)return i.hide()
i.timeout=setTimeout((function(){"out"==i.hoverState&&i.hide()}),i.options.delay.hide)},e.prototype.show=function(){var e=t.Event("show.bs."+this.type)
if(this.hasContent()&&this.enabled){if(this.$element.trigger(e),e.isDefaultPrevented())return
var i=this,o=this.tip()
this.setContent(),this.options.animation&&o.addClass("fade")
var n="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,s=/\s?auto?\s?/i,a=s.test(n)
a&&(n=n.replace(s,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(n),this.options.container?o.appendTo(this.options.container):o.insertAfter(this.$element)
var r=this.getPosition(),l=o[0].offsetWidth,h=o[0].offsetHeight
if(a){var p=this.$element.parent(),d=n,c=document.documentElement.scrollTop||document.body.scrollTop,f="body"==this.options.container?window.innerWidth:p.outerWidth(),u="body"==this.options.container?window.innerHeight:p.outerHeight(),m="body"==this.options.container?0:p.offset().left
n="bottom"==n&&r.top+r.height+h-c>u?"top":"top"==n&&r.top-c-h<0?"bottom":"right"==n&&r.right+l>f?"left":"left"==n&&r.left-l<m?"right":n,o.removeClass(d).addClass(n)}var v=this.getCalculatedOffset(n,r,l,h)
this.applyPlacement(v,n),this.hoverState=null
var g=function(){i.$element.trigger("shown.bs."+i.type)}
t.support.transition&&this.$tip.hasClass("fade")?o.one(t.support.transition.end,g).emulateTransitionEnd(150):g()}},e.prototype.applyPlacement=function(e,i){var o,n=this.tip(),s=n[0].offsetWidth,a=n[0].offsetHeight,r=parseInt(n.css("margin-top"),10),l=parseInt(n.css("margin-left"),10)
isNaN(r)&&(r=0),isNaN(l)&&(l=0),e.top=e.top+r,e.left=e.left+l,t.offset.setOffset(n[0],t.extend({using:function(t){n.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),n.addClass("in")
var h=n[0].offsetWidth,p=n[0].offsetHeight
if("top"==i&&p!=a&&(o=!0,e.top=e.top+a-p),/bottom|top/.test(i)){var d=0
e.left<0&&(d=-2*e.left,e.left=0,n.offset(e),h=n[0].offsetWidth,p=n[0].offsetHeight),this.replaceArrow(d-s+h,h,"left")}else this.replaceArrow(p-a,p,"top")
o&&n.offset(e)},e.prototype.replaceArrow=function(t,e,i){this.arrow().css(i,t?50*(1-t/e)+"%":"")},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle()
t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},e.prototype.hide=function(){var e=this,i=this.tip(),o=t.Event("hide.bs."+this.type)
function n(){"in"!=e.hoverState&&i.detach(),e.$element.trigger("hidden.bs."+e.type)}if(this.$element.trigger(o),!o.isDefaultPrevented())return i.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?i.one(t.support.transition.end,n).emulateTransitionEnd(150):n(),this.hoverState=null,this},e.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},e.prototype.hasContent=function(){return this.getTitle()},e.prototype.getPosition=function(){var e=this.$element[0]
return t.extend({},"function"==typeof e.getBoundingClientRect?e.getBoundingClientRect():{width:e.offsetWidth,height:e.offsetHeight},this.$element.offset())},e.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},e.prototype.getTitle=function(){var t=this.$element,e=this.options
return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},e.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},e.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},e.prototype.enable=function(){this.enabled=!0},e.prototype.disable=function(){this.enabled=!1},e.prototype.toggleEnabled=function(){this.enabled=!this.enabled},e.prototype.toggle=function(e){var i=e?t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this
i.tip().hasClass("in")?i.leave(i):i.enter(i)},e.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)}
var i=t.fn.tooltip
t.fn.tooltip=function(i){return this.each((function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof i&&i;(n||"destroy"!=i)&&(n||o.data("bs.tooltip",n=new e(this,s)),"string"==typeof i&&n[i]())}))},t.fn.tooltip.Constructor=e,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=i,this}}(jQuery),function(t){"use strict"
var e=function(t,e){this.init("popover",t,e)}
if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js")
e.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),(e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype)).constructor=e,e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent()
t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content")[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},e.prototype.hasContent=function(){return this.getTitle()||this.getContent()},e.prototype.getContent=function(){var t=this.$element,e=this.options
return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},e.prototype.tip=function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip}
var i=t.fn.popover
t.fn.popover=function(i){return this.each((function(){var o=t(this),n=o.data("bs.popover"),s="object"==typeof i&&i;(n||"destroy"!=i)&&(n||o.data("bs.popover",n=new e(this,s)),"string"==typeof i&&n[i]())}))},t.fn.popover.Constructor=e,t.fn.popover.noConflict=function(){return t.fn.popover=i,this}}(jQuery),function(t){"use strict"
function e(i,o){var n,s=t.proxy(this.process,this)
this.$element=t(i).is("body")?t(window):t(i),this.$body=t("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",s),this.options=t.extend({},e.DEFAULTS,o),this.selector=(this.options.target||(n=t(i).attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=t([]),this.targets=t([]),this.activeTarget=null,this.refresh(),this.process()}e.DEFAULTS={offset:10},e.prototype.refresh=function(){var e=this.$element[0]==window?"offset":"position"
this.offsets=t([]),this.targets=t([])
var i=this
this.$body.find(this.selector).map((function(){var o=t(this),n=o.data("target")||o.attr("href"),s=/^#./.test(n)&&t(n)
return s&&s.length&&s.is(":visible")&&[[s[e]().top+(!t.isWindow(i.$scrollElement.get(0))&&i.$scrollElement.scrollTop()),n]]||null})).sort((function(t,e){return t[0]-e[0]})).each((function(){i.offsets.push(this[0]),i.targets.push(this[1])}))},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=(this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight)-this.$scrollElement.height(),o=this.offsets,n=this.targets,s=this.activeTarget
if(e>=i)return s!=(t=n.last()[0])&&this.activate(t)
if(s&&e<=o[0])return s!=(t=n[0])&&this.activate(t)
for(t=o.length;t--;)s!=n[t]&&e>=o[t]&&(!o[t+1]||e<=o[t+1])&&this.activate(n[t])},e.prototype.activate=function(e){this.activeTarget=e,t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")
var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',o=t(i).parents("li").addClass("active")
o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate.bs.scrollspy")}
var i=t.fn.scrollspy
t.fn.scrollspy=function(i){return this.each((function(){var o=t(this),n=o.data("bs.scrollspy"),s="object"==typeof i&&i
n||o.data("bs.scrollspy",n=new e(this,s)),"string"==typeof i&&n[i]()}))},t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=i,this},t(window).on("load",(function(){t('[data-spy="scroll"]').each((function(){var e=t(this)
e.scrollspy(e.data())}))}))}(jQuery),function(t){"use strict"
var e=function(e){this.element=t(e)}
e.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target")
if(o||(o=(o=e.attr("href"))&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=i.find(".active:last a")[0],s=t.Event("show.bs.tab",{relatedTarget:n})
if(e.trigger(s),!s.isDefaultPrevented()){var a=t(o)
this.activate(e.parent("li"),i),this.activate(a,a.parent(),(function(){e.trigger({type:"shown.bs.tab",relatedTarget:n})}))}}},e.prototype.activate=function(e,i,o){var n=i.find("> .active"),s=o&&t.support.transition&&n.hasClass("fade")
function a(){n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),s?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),o&&o()}s?n.one(t.support.transition.end,a).emulateTransitionEnd(150):a(),n.removeClass("in")}
var i=t.fn.tab
t.fn.tab=function(i){return this.each((function(){var o=t(this),n=o.data("bs.tab")
n||o.data("bs.tab",n=new e(this)),"string"==typeof i&&n[i]()}))},t.fn.tab.Constructor=e,t.fn.tab.noConflict=function(){return t.fn.tab=i,this},t(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',(function(e){e.preventDefault(),t(this).tab("show")}))}(jQuery),function(t){"use strict"
var e=function(i,o){this.options=t.extend({},e.DEFAULTS,o),this.$window=t(window).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(i),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()}
e.RESET="affix affix-top affix-bottom",e.DEFAULTS={offset:0},e.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
this.$element.removeClass(e.RESET).addClass("affix")
var t=this.$window.scrollTop(),i=this.$element.offset()
return this.pinnedOffset=i.top-t},e.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var i=t(document).height(),o=this.$window.scrollTop(),n=this.$element.offset(),s=this.options.offset,a=s.top,r=s.bottom
"top"==this.affixed&&(n.top+=o),"object"!=typeof s&&(r=a=s),"function"==typeof a&&(a=s.top(this.$element)),"function"==typeof r&&(r=s.bottom(this.$element))
var l=!(null!=this.unpin&&o+this.unpin<=n.top)&&(null!=r&&n.top+this.$element.height()>=i-r?"bottom":null!=a&&o<=a&&"top")
if(this.affixed!==l){this.unpin&&this.$element.css("top","")
var h="affix"+(l?"-"+l:""),p=t.Event(h+".bs.affix")
this.$element.trigger(p),p.isDefaultPrevented()||(this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(e.RESET).addClass(h).trigger(t.Event(h.replace("affix","affixed"))),"bottom"==l&&this.$element.offset({top:i-r-this.$element.height()}))}}}
var i=t.fn.affix
t.fn.affix=function(i){return this.each((function(){var o=t(this),n=o.data("bs.affix"),s="object"==typeof i&&i
n||o.data("bs.affix",n=new e(this,s)),"string"==typeof i&&n[i]()}))},t.fn.affix.Constructor=e,t.fn.affix.noConflict=function(){return t.fn.affix=i,this},t(window).on("load",(function(){t('[data-spy="affix"]').each((function(){var e=t(this),i=e.data()
i.offset=i.offset||{},i.offsetBottom&&(i.offset.bottom=i.offsetBottom),i.offsetTop&&(i.offset.top=i.offsetTop),e.affix(i)}))}))}(jQuery)
