function Counter(){$(".counter-wraper").length>0&&$(".counter-wraper").each(function(e){var t=$(this);t.waypoint({handler:function(e){t.find(".counter-digit:not(.counted)").countTo().addClass("counted")},offset:"90%"})})}function Countdown(){$(".pl-clock").length>0&&$(".pl-clock").each(function(){var e=$(this).attr("data-time");$(this).countdown(e,function(e){$(this).html(e.strftime('<div class="countdown-item"><div class="countdown-item-value">%D</div><div class="countdown-item-label">Days</div></div><div class="countdown-item"><div class="countdown-item-value">%H</div><div class="countdown-item-label">Hours</div></div><div class="countdown-item"><div class="countdown-item-value">%M</div><div class="countdown-item-label">Minutes</div></div><div class="countdown-item"><div class="countdown-item-value">%S</div><div class="countdown-item-label">Seconds</div></div>'))})})}function ProgressBar(){$(".group-progressbar").each(function(){var e=$(this);e.waypoint({handler:function(t){e.find(".progressbar").progressbar({display_text:"center"})},offset:"80%"})})}function MagnificPopup(){$(".gallery-item").length>0&&$(".gallery-item").magnificPopup({gallery:{enabled:!0}}),$(".mfp-ajax").length>0&&$(".mfp-ajax").magnificPopup({type:"ajax",removalDelay:300,mainClass:"mfp-fade"})}function Blog(){$(".blog-grid .blog-item").each(function(){var e=$(this).attr("data-color"),t=$(this).find(".blog-overlay").attr("data-color");$(this).find(".blog-overlay").css("background-color",t),$(this).find(".blog-thumbnail").css("border-top-color",e),$(this).find(".blog-cate a").css("color",e),$(this).find("a:not(.blog-cate > a)").mouseover(function(){$(this).css("color",e)}).mouseout(function(){$(this).css("color","#27394A")})}),$(".blog-list .blog-item").each(function(){var e=$(this).attr("data-color");$(this).find(".blog-createdby a").css("color",e),$(this).find("a:not(.blog-createdby > a)").mouseover(function(){$(this).css("color",e)}).mouseout(function(){$(this).css("color","#27394A")})}),$(".blog-modern .blog-item").each(function(){var e=$(this).attr("data-color"),t=$(this).find(".blog-overlay").attr("data-color");$(this).find(".blog-createdby a").css("color",e),$(this).find(".blog-overlay").css("background-color",t),$(this).find(".blog-image").css("background-image",'url("'+$(this).find(".blog-image").attr("data-src")+'")'),$(this).mouseover(function(){$(this).removeClass("inactive-hover").addClass("active-hover")}).mouseout(function(){$(this).removeClass("active-hover").addClass("inactive-hover")}),$(this).find("a:not(.blog-createdby > a)").mouseover(function(){$(this).css("color",e)}).mouseout(function(){$(this).parents(".blog-item").hasClass("active-hover")?$(this).css("color","#fff"):$(this).css("color","#27394A")})}),$(".blog-isotope .blog-item").each(function(){var e=$(this).attr("data-color");$(this).find(".blog-createdby").css("color",e)})}function initRotationText(){$("#js-rotating").length>0&&$("#js-rotating").Morphext({animation:"flipInX",separator:",",speed:2e3,complete:function(){}})}function introHeight(){var e=$(window).height();$(".section-fullscreen").css({height:e}),$("#fullscreen-banner").css({height:e})}function OwlCarousel(){$(".testimonials-slider").length>0&&$(".testimonials-slider").each(function(){$(this).owlCarousel({navigation:!1,slideSpeed:600,pagination:!0,paginationSpeed:400,autoHeight:!0,addClassActive:!0,autoPlay:!0,singleItem:!0,transitionStyle:"backSlide"})}),$(".products-ul-slider").each(function(){$(this).owlCarousel({items:4,loop:!0,mouseDrag:!0,nav:!1,dots:!1,pagination:!1,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,smartSpeed:1e3,autoplayHoverPause:!0,navigationText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsMobile:[479,1]})}),$(".twitter-slider").length>0&&$(".twitter-slider").each(function(){$(this).owlCarousel({navigation:!0,slideSpeed:600,pagination:!1,paginationSpeed:400,autoHeight:!0,addClassActive:!0,autoPlay:!0,singleItem:!0,navigationText:['<i class="mdi-chevron-left"></i>','<i class="mdi-chevron-right"></i>']})})}function GoogleMap(){function e(){var e={zoom:11,scrollwheel:!1,center:new google.maps.LatLng(40.67,-73.94),styles:[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}]},o=document.getElementById("map"),i=new google.maps.Map(o,e);new google.maps.Marker({position:new google.maps.LatLng(40.6,-73.94),map:i,title:"Location 1",icon:t}),new google.maps.Marker({position:new google.maps.LatLng(40.68,-73.8),map:i,title:"Location 2",icon:t}),new google.maps.Marker({position:new google.maps.LatLng(40.73,-74.128),map:i,title:"Location 3",icon:t})}var t="../images/marker.png";$("#map").length>0&&(void 0!=$("#map").attr("data-marker-image")&&(t=$("#map").attr("data-marker-image")),google.maps.event.addDomListener(window,"load",e))}function Map(){$(".maps").on("click",function(){$(".maps iframe").css("pointer-events","auto")}),$(".maps").on("mouseleave",function(){$(".maps iframe").css("pointer-events","none")})}function Animation(){var e=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0});e.init()}function init_sidebar(e){$(".hidden-bar-toggle").on("click",function(t){prk_toggle_sidebar(e)}),$(".sidebar_opener a").on("click",function(t){t.preventDefault(),prk_toggle_sidebar(e)})}function hasParentClass(e,t){return e===document?!1:classie.has(e,t)?!0:e.parentNode&&hasParentClass(e.parentNode,t)}function prk_toggle_sidebar(e){e===!1?($(".hidden-bar-toggle").removeClass("hover_trigger"),e=!0,$("body").addClass("prk_shifted"),$(".hidden-bar").css({visibility:"visible"}),setTimeout(function(){document.addEventListener("click",function(t){console.log(t),("close_flag"===t||hasParentClass(t.target,"hider_flag"))&&e===!0&&prk_toggle_sidebar(e),t.target.className.includes("onepage")&&e===!0&&prk_toggle_sidebar(e)}),$("#body_hider").addClass("prk_shifted_hider"),$("body").addClass("showing_hidden_sidebar")},300)):(e=!1,$("body").removeClass("prk_shifted"),$("body").removeClass("showing_hidden_sidebar"),$("#body_hider").removeClass("prk_shifted_hider"),setTimeout(function(){document.addEventListener("click",function(t){("close_flag"===t||hasParentClass(t.target,"hider_flag"))&&e===!0&&prk_toggle_sidebar(e),t.target.className.includes("onepage")&&e===!0&&prk_toggle_sidebar(e)}),$(".hidden-bar").css({visibility:"hidden"})},300))}function RevolutionFullScreenInit(){$("#rev_slider_1").show().revolution({sliderType:"standard",sliderLayout:"fullscreen",dottedOverlay:"none",delay:6e3,navigation:{keyboardNavigation:"off",keyboard_direction:"horizontal",mouseScrollNavigation:"off",onHoverStop:"on",touch:{touchenabled:"on",swipe_threshold:75,swipe_min_touches:1,swipe_direction:"horizontal",drag_block_vertical:!1},arrows:{style:"hebe",enable:!0,hide_onmobile:!0,hide_under:600,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,left:{h_align:"left",v_align:"center",h_offset:0,v_offset:0},right:{h_align:"right",v_align:"center",h_offset:0,v_offset:0}}},responsiveLevels:[1240,1024,778,480],visibilityLevels:[1240,1024,778,480],gridwidth:[1920,1024,778,480],gridheight:[960,768,960,720],lazyType:"none",shadow:0,spinner:"spinner0",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",autoHeight:"off",fullScreenAutoWidth:"off",fullScreenAlignForce:"off",fullScreenOffsetContainer:"",fullScreenOffset:"",disableProgressBar:"on",hideThumbsOnMobile:"off",hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,debugMode:!1,fallbacks:{simplifyAll:"off",nextSlideOnWindowFocus:"off",disableFocusListener:!1}})}