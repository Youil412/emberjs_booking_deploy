/*!
 * Lightbox for Bootstrap 3 by @ashleydw
 * https://github.com/ashleydw/lightbox
 *
 * License: https://github.com/ashleydw/lightbox/blob/master/LICENSE
 */
(function(){"use strict"
var t,i
t=jQuery,(i=function(i,o){var e,s,a=this
return this.options=t.extend({title:null,footer:null,remote:null},t.fn.ekkoLightbox.defaults,o||{}),this.$element=t(i),this.modal_id=this.options.modal_id?this.options.modal_id:"ekkoLightbox-"+Math.floor(1e3*Math.random()+1),s='<div class="modal-header"'+(this.options.title||this.options.always_show_close?"":' style="display:none"')+'><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">'+(this.options.title||"&nbsp;")+"</h4></div>",e='<div class="modal-footer"'+(this.options.footer?"":' style="display:none"')+">"+this.options.footer+"</div>",t(document.body).append('<div id="'+this.modal_id+'" class="ekko-lightbox modal fade" tabindex="-1"><div class="modal-dialog"><div class="modal-content">'+s+'<div class="modal-body"><div class="ekko-lightbox-container"><div></div></div></div>'+e+"</div></div></div>"),this.modal=t("#"+this.modal_id),this.modal_dialog=this.modal.find(".modal-dialog").first(),this.modal_content=this.modal.find(".modal-content").first(),this.modal_body=this.modal.find(".modal-body").first(),this.lightbox_container=this.modal_body.find(".ekko-lightbox-container").first(),this.lightbox_body=this.lightbox_container.find("> div:first-child").first(),this.showLoading(),this.modal_arrows=null,this.border={top:parseFloat(this.modal_dialog.css("border-top-width"))+parseFloat(this.modal_content.css("border-top-width"))+parseFloat(this.modal_body.css("border-top-width")),right:parseFloat(this.modal_dialog.css("border-right-width"))+parseFloat(this.modal_content.css("border-right-width"))+parseFloat(this.modal_body.css("border-right-width")),bottom:parseFloat(this.modal_dialog.css("border-bottom-width"))+parseFloat(this.modal_content.css("border-bottom-width"))+parseFloat(this.modal_body.css("border-bottom-width")),left:parseFloat(this.modal_dialog.css("border-left-width"))+parseFloat(this.modal_content.css("border-left-width"))+parseFloat(this.modal_body.css("border-left-width"))},this.padding={top:parseFloat(this.modal_dialog.css("padding-top"))+parseFloat(this.modal_content.css("padding-top"))+parseFloat(this.modal_body.css("padding-top")),right:parseFloat(this.modal_dialog.css("padding-right"))+parseFloat(this.modal_content.css("padding-right"))+parseFloat(this.modal_body.css("padding-right")),bottom:parseFloat(this.modal_dialog.css("padding-bottom"))+parseFloat(this.modal_content.css("padding-bottom"))+parseFloat(this.modal_body.css("padding-bottom")),left:parseFloat(this.modal_dialog.css("padding-left"))+parseFloat(this.modal_content.css("padding-left"))+parseFloat(this.modal_body.css("padding-left"))},this.modal.on("show.bs.modal",this.options.onShow.bind(this)).on("shown.bs.modal",(function(){return a.modal_shown(),a.options.onShown.call(a)})).on("hide.bs.modal",this.options.onHide.bind(this)).on("hidden.bs.modal",(function(){return a.gallery&&t(document).off("keydown.ekkoLightbox"),a.modal.remove(),a.options.onHidden.call(a)})).modal("show",o),this.modal}).prototype={modal_shown:function(){var i,o=this
return this.options.remote?(this.gallery=this.$element.data("gallery"),this.gallery&&(this.gallery_items="document.body"===this.options.gallery_parent_selector||""===this.options.gallery_parent_selector?t(document.body).find('*[data-toggle="lightbox"][data-gallery="'+this.gallery+'"]'):this.$element.parents(this.options.gallery_parent_selector).first().find('*[data-toggle="lightbox"][data-gallery="'+this.gallery+'"]'),this.gallery_index=this.gallery_items.index(this.$element),t(document).on("keydown.ekkoLightbox",this.navigate.bind(this)),this.options.directional_arrows&&this.gallery_items.length>1&&(this.lightbox_container.prepend('<div class="ekko-lightbox-nav-overlay"><a href="#" class="'+this.strip_stops(this.options.left_arrow_class)+'"></a><a href="#" class="'+this.strip_stops(this.options.right_arrow_class)+'"></a></div>'),this.modal_arrows=this.lightbox_container.find("div.ekko-lightbox-nav-overlay").first(),this.lightbox_container.find("a"+this.strip_spaces(this.options.left_arrow_class)).on("click",(function(t){return t.preventDefault(),o.navigate_left()})),this.lightbox_container.find("a"+this.strip_spaces(this.options.right_arrow_class)).on("click",(function(t){return t.preventDefault(),o.navigate_right()})))),this.options.type?"image"===this.options.type?this.preloadImage(this.options.remote,!0):"youtube"===this.options.type&&(i=this.getYoutubeId(this.options.remote))?this.showYoutubeVideo(i):"vimeo"===this.options.type?this.showVimeoVideo(this.options.remote):"instagram"===this.options.type||"url"===this.options.type?this.showInstagramVideo(this.options.remote):this.error('Could not detect remote target type. Force the type using data-type="image|youtube|vimeo|url"'):this.detectRemoteType(this.options.remote)):this.error("No remote target given")},strip_stops:function(t){return t.replace(/\./g,"")},strip_spaces:function(t){return t.replace(/\s/g,"")},isImage:function(t){return t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSwf:function(t){return t.match(/\.(swf)((\?|#).*)?$/i)},getYoutubeId:function(t){var i
return!(!(i=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/))||11!==i[2].length)&&i[2]},getVimeoId:function(t){return t.indexOf("vimeo")>0&&t},getInstagramId:function(t){return t.indexOf("instagram")>0&&t},navigate:function(t){if(39===(t=t||window.event).keyCode||37===t.keyCode){if(39===t.keyCode)return this.navigate_right()
if(37===t.keyCode)return this.navigate_left()}},navigateTo:function(i){var o,e
return 0>i||i>this.gallery_items.length-1?this:(this.showLoading(),this.gallery_index=i,this.options.onNavigate.call(this,this.gallery_index),this.$element=t(this.gallery_items.get(this.gallery_index)),this.updateTitleAndFooter(),e=this.$element.attr("data-remote")||this.$element.attr("href"),this.detectRemoteType(e,this.$element.attr("data-type")||!1),this.gallery_index+1<this.gallery_items.length&&(e=(o=t(this.gallery_items.get(this.gallery_index+1),!1)).attr("data-remote")||o.attr("href"),"image"===o.attr("data-type")||this.isImage(e))?this.preloadImage(e,!1):void 0)},navigate_left:function(){return 1!==this.gallery_items.length?(0===this.gallery_index?this.gallery_index=this.gallery_items.length-1:this.gallery_index--,this.options.onNavigate.call(this,"left",this.gallery_index),this.navigateTo(this.gallery_index)):void 0},navigate_right:function(){return 1!==this.gallery_items.length?(this.gallery_index===this.gallery_items.length-1?this.gallery_index=0:this.gallery_index++,this.options.onNavigate.call(this,"right",this.gallery_index),this.navigateTo(this.gallery_index)):void 0},detectRemoteType:function(t,i){var o
return"image"===i||this.isImage(t)?(this.options.type="image",this.preloadImage(t,!0)):"youtube"===i||(o=this.getYoutubeId(t))?(this.options.type="youtube",this.showYoutubeVideo(o)):"vimeo"===i||(o=this.getVimeoId(t))?(this.options.type="vimeo",this.showVimeoVideo(o)):"instagram"===i||(o=this.getInstagramId(t))||"url"===i||(o=this.getInstagramId(t))?(this.options.type="instagram",this.showInstagramVideo(o)):(this.options.type="url",this.loadRemoteContent(t))},updateTitleAndFooter:function(){var t,i,o,e
return o=this.modal_content.find(".modal-header"),i=this.modal_content.find(".modal-footer"),e=this.$element.data("title")||"",t=this.$element.data("footer")||"",e||this.options.always_show_close?o.css("display","").find(".modal-title").html(e||"&nbsp;"):o.css("display","none"),t?i.css("display","").html(t):i.css("display","none"),this},showLoading:function(){return this.lightbox_body.html('<div class="modal-loading">Loading..</div>'),this},showYoutubeVideo:function(t){var i,o,e
return i=560/315,e=this.$element.data("width")||560,o=(e=this.checkDimensions(e))/i,this.resize(e),this.lightbox_body.html('<iframe width="'+e+'" height="'+o+'" src="//www.youtube.com/embed/'+t+'?badge=0&autoplay=1&html5=1" frameborder="0" allowfullscreen></iframe>'),this.options.onContentLoaded.call(this),this.modal_arrows?this.modal_arrows.css("display","none"):void 0},showVimeoVideo:function(t){var i,o,e
return i=500/281,e=this.$element.data("width")||560,o=(e=this.checkDimensions(e))/i,this.resize(e),this.lightbox_body.html('<iframe width="'+e+'" height="'+o+'" src="'+t+'?autoplay=1" frameborder="0" allowfullscreen></iframe>'),this.options.onContentLoaded.call(this),this.modal_arrows?this.modal_arrows.css("display","none"):void 0},showInstagramVideo:function(t){var i
return i=this.$element.data("width")||612,i=this.checkDimensions(i),this.resize(i),this.lightbox_body.html('<iframe width="'+i+'" height="'+i+'" src="'+this.addTrailingSlash(t)+'embed/" frameborder="0" allowfullscreen></iframe>'),this.options.onContentLoaded.call(this),this.modal_arrows?this.modal_arrows.css("display","none"):void 0},loadRemoteContent:function(i){var o,e,s=this
return e=this.$element.data("width")||560,this.resize(e),o=this.$element.data("disableExternalCheck")||!1,console.log(o,this.isExternal(i)),o||this.isExternal(i)?(this.lightbox_body.html('<iframe width="'+e+'" height="'+e+'" src="'+i+'" frameborder="0" allowfullscreen></iframe>'),this.options.onContentLoaded.call(this)):this.lightbox_body.load(i,t.proxy((function(){return s.$element.trigger("loaded.bs.modal")}))),this.modal_arrows?this.modal_arrows.css("display","block"):void 0},isExternal:function(t){var i
return"string"==typeof(i=t.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/))[1]&&i[1].length>0&&i[1].toLowerCase()!==location.protocol||"string"==typeof i[2]&&i[2].length>0&&i[2].replace(new RegExp(":("+{"http:":80,"https:":443}[location.protocol]+")?$"),"")!==location.host},error:function(t){return this.lightbox_body.html(t),this},preloadImage:function(i,o){var e,s=this
return e=new Image,(null==o||!0===o)&&(e.onload=function(){var i
return(i=t("<img />")).attr("src",e.src),i.addClass("img-responsive"),s.lightbox_body.html(i),s.modal_arrows&&s.modal_arrows.css("display","block"),s.resize(e.width),s.options.onContentLoaded.call(s)},e.onerror=function(){return s.error("Failed to load image: "+i)}),e.src=i,e},resize:function(i){var o
return o=i+this.border.left+this.padding.left+this.padding.right+this.border.right,this.modal_dialog.css("width","auto").css("max-width",o),this.lightbox_container.find("a").css("padding-top",(function(){return t(this).parent().height()/2})),this},checkDimensions:function(t){return t+this.border.left+this.padding.left+this.padding.right+this.border.right>document.body.clientWidth&&(t=this.modal_body.width()),t},close:function(){return this.modal.modal("hide")},addTrailingSlash:function(t){return"/"!==t.substr(-1)&&(t+="/"),t}},t.fn.ekkoLightbox=function(o){return this.each((function(){var e
return e=t(this),o=t.extend({remote:e.attr("data-remote")||e.attr("href"),gallery_parent_selector:e.attr("data-parent"),type:e.attr("data-type")},o,e.data()),new i(this,o),this}))},t.fn.ekkoLightbox.defaults={gallery_parent_selector:"*:not(.row)",left_arrow_class:".glyphicon .glyphicon-chevron-left",right_arrow_class:".glyphicon .glyphicon-chevron-right",directional_arrows:!0,type:null,always_show_close:!0,onShow:function(){},onShown:function(){},onHide:function(){},onHidden:function(){},onNavigate:function(){},onContentLoaded:function(){}}}).call(this)
