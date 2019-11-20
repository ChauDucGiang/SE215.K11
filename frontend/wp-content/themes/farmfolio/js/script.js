/**andreip**/
(function($) {
	
	$(document).ready(function(){
		
		$('.home-projects .latest-post li.slick-slide').on("click", function(e){
			if($(e.target).hasClass('postLink') || $(e.target).parent().hasClass('postLink'))
    			return;
			if(jQuery(window).width() <= 1024) {
				window.location.href = $(this).data('href');
			}
		})
		
		$('.secondary-toggle').on('click', function(e){
			e.preventDefault();
			$("body").toggleClass('navOpen');
		});
		$(window).scroll(function(){
			var offSet = $('.header').offset().top;
			if(offSet > 15){
				$('body').addClass('scroll');
			}else{
				$('body').removeClass('scroll');				
			}
		}).scroll();
		$('.accordionContainer h3').on('click', function(e){
			$(this).toggleClass('active');
			$(this).parent().find('.accordionMore').slideToggle();
		});

		$(".tabs-menu a").click(function(event) {
	        event.preventDefault();
	        $(this).parent().addClass("current");
	        $(this).parent().siblings().removeClass("current");
	        var tab = $(this).attr("href");
	        $(".tab-content").not(tab).css("display", "none");
	        $(tab).fadeIn();
	    });

	    $(".steps-number a").click(function(event) {
	        event.preventDefault();
	        $(this).parent().addClass("current");
	        $(this).parent().siblings().removeClass("current");
	        var tab1 = $(this).attr("href");
	        $('.slide-content').removeClass("current");
	        $(tab1).addClass("current");
	    });
	    $(".farmshare-timeline .item").click(function(event) {
	        event.preventDefault();
	        $(this).addClass("selected");
	        $(this).siblings().removeClass("selected");
	        var tab = $(this).attr("href");
	        $(".farmshare_image").not(tab).css("display", "none");
	        $(tab).fadeIn();
	    });


	    if($(window).width() > 999) {
			$('.hit-section .left-content').hover(function() {
				$('.hit-section').addClass('hover-l');
			}, function() {
				$('.hit-section').removeClass('hover-l');
			});
			$('.hit-section .right-content').hover(function() {
				$('.hit-section').addClass('hover-r');
			}, function() {
				$('.hit-section').removeClass('hover-r');
			});
		}
		if($(window).width() < 1000) {
			$('.hit-section h3').click(function() {
				$(this).next('.list-content').toggleClass('open');
			});
		}
		
		$("#secondary .close-menu").click(function(event) {
	        $('body').toggleClass('navOpen');
	        event.preventDefault();
	    });

	    $(".map-tabs a").click(function() {
	    	$(".map-tabs a").removeClass('selected');
	    	$(this).addClass('selected');
	    	$(".tabs_section .tab").removeClass('active');
	    });
	    $(".map-tabs a[rel='tab1']").click(function() {
	    	$(".tabs_section .tab1").addClass('active');
	    });
	    $(".map-tabs a[rel='tab2']").click(function() {
	    	$(".tabs_section .tab2").addClass('active');
	    });

	    $('.tab .tab-content h3').on('click', function(e){
			$(this).parent().parent().siblings().removeClass("active");
			$(this).parent().parent().addClass('active');
		});

	    if ($("body.single-projects article").hasClass("type-open-investments")) {

			// $('#sticky').css({
			// 	'left': $('#sticky').offset().left
			// });
		
			
			// var fixedElementOffset = $('#sticky-anchor').offset().top-475;
			// var footerOffset = $('.site-footer').offset().top+1300;
			// var fixedElementHeight = $('#sticky').height(); 
			// var ContainerHeight = $('#single_container').height();
			// var y = $(this).scrollTop();
			// console.log(ContainerHeight);
			// if (ContainerHeight > 500) {
			// 	if($(window).width() > 999) {
			// 	    if ( y >= fixedElementOffset && ( y + fixedElementHeight ) < footerOffset ) {
			// 	        $('#sticky').addClass('stick');
			// 	        $('#sticky').removeClass('bottom');          
			// 	    }
			// 	    else if ( y >= fixedElementOffset && ( y + fixedElementHeight ) >= footerOffset ) {
			// 	        $('#sticky').removeClass('stick');           
			// 	        $('#sticky').addClass('bottom');
			// 	    }
			// 	    else {
			// 	        $('#sticky').removeClass('stick');
			// 	        $('#sticky').removeClass('bottom');
			// 	    }
			// 	}
			// }

			// $(window).scroll(function (event) {
			// 	var ContainerHeight = $('#single_container').height();
			//     var y = $(this).scrollTop();
			//     if (ContainerHeight > 500) {
			// 	    if($(window).width() > 999) {
			// 		    if ( y >= fixedElementOffset && ( y + fixedElementHeight ) < footerOffset ) {
			// 		        $('#sticky').addClass('stick');
			// 		        $('#sticky').removeClass('bottom');          
			// 		    }
			// 		    else if ( y >= fixedElementOffset && ( y + fixedElementHeight ) >= footerOffset ) {
			// 		        $('#sticky').removeClass('stick');           
			// 		        $('#sticky').addClass('bottom');
			// 		    }
			// 		    else {
			// 		        $('#sticky').removeClass('stick');
			// 		        $('#sticky').removeClass('bottom');
			// 		    }
			// 		}
			// 	}
 		// 	});
		}

		// $(".farm-timeline .item").click(function() {
		// 	//$(".farmshare-timeline .right img");
		// 	$(".farmshare-timeline .right img").css("display", "none").eq($(this).index()).css("display", "block");
		// });
		$(window).scroll(function() {
	        if ($(window).scrollTop() > 100) {
	            $("#top a").css({"opacity":"1","transform":"translateY(0) rotateY(0deg)"});
	        }
	        else {
	            $("#top a").css({"opacity":"0","transform":"translateY(-200px) rotateY(180deg)"});
	        }
	    });
	    // scrolltotop
	    $("a[href='#top']").click(function () {
	        $("html, body").animate({ scrollTop: 0 }, "slow");
	        return false;
	    });
	    var pag_height = jQuery(window).height()-150;
	    jQuery('.post-list-stories .moreDetails .scroll-container, .our-team .moreDetails .scroll-container').css('max-height', pag_height + 'px');
	    jQuery(window).resize(function() {
	    	var pag_height = jQuery(window).height()-150;
	    	jQuery('.post-list-stories .moreDetails .scroll-container, .our-team .moreDetails .scroll-container').css('max-height', pag_height + 'px');
	    });
	});

    var tabs = $('.four-steps-section .steps-number li');
    tabs.click(function() { $(this).addClass('current').siblings('.current').removeClass('current'); });
    setInterval(function() {
        var onTab = tabs.filter('.current');
        var nextTab = onTab.index() < tabs.length-1 ? onTab.next() : tabs.first();
        nextTab.click();
    }, 5000);

    var tabs1 = $('.four-steps-section .steps-info .slide-content');
    tabs1.click(function() { $(this).addClass('current').siblings('.current').removeClass('current'); });
    setInterval(function() {
        var onTab1 = tabs1.filter('.current');
        var nextTab1 = onTab1.index() < tabs1.length-1 ? onTab1.next() : tabs1.first();
        nextTab1.click();
    }, 5000);

    var tabs2 = $('.farm-timeline a');
    tabs2.click(function() { $(this).addClass('selected').siblings('.selected').removeClass('selected'); });
    setInterval(function() {
        var onTab2 = tabs2.filter('.selected');
        var nextTab2 = onTab2.index() < tabs2.length-1 ? onTab2.next() : tabs2.first();
        nextTab2.click();
    }, 5000);

    // var farmHeight = $('.farm-timeline').height();
    // console.log(farmHeight);
    // $(".farmshare-timeline .right").css("height", farmHeight + "px");

})(jQuery);

jQuery(document).ready(function($){
	$('.left-block .CustomTable, .content-area table').stacktable({headIndex: 9999});
})

