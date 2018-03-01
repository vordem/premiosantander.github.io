var wrap = $("#wrap");

wrap.on("scroll", function(e) {
	if (this.scrollTop > 147) {
		wrap.addClass("fix-search");
	} else {
		wrap.removeClass("fix-search");
	}
});




$(function(){
	var block1 = $('#block1').offset().top;
	var block2 = $('#block2').offset().top;
	var nav = $('.st-menu').offset().top;
	var s1 = $('#section1').offset().top - 700;
	var s2 = $('#section2').offset().top - 700;
	var third = $('.red-bar.third').offset().top - 700;
	var second = $('.red-bar.second').offset().top - 700;
	var first = $('.red-bar.first').offset().top - 700;
	$(window).scroll(function(event) {
		console.log(first);
		event.preventDefault();
		var top = $(this).scrollTop();

		if ( top > s2 ) {
			$('#block2').addClass('top-right');
		}
		if ( top < s2 ) {
			$('#block2').removeClass('top-right');
		}
		if ( top > nav ) {
			$('.st-menu').addClass('fix');
		}
		if ( top < nav ) {
			$('.st-menu').removeClass('fix');
		}
		if ( top > third ) {
			$('.red-bar.third').addClass('active');
			$('.red-bar.second').addClass('active');
			$('.red-bar.first').addClass('active');
		}
	});
});

// ACCORDION
$(function() {
	var allPanels = $('.accordion > dd').hide();

	$('.accordion > dt > a').click(function() {
		if(!$(this).parent().next().is(":visible")) {
			allPanels.slideUp();
			$(this).parent().next().slideDown();
			$("html, body").animate({scrollTop: $(this).offset().top - 160 }, 400);
		}
		return false;
	});

	$($('.accordion dd')[0]).show();
});

$(function() {
	var allPanels = $('.accordion-2 > dd').hide();

	$('.accordion-2 > dt > a').click(function() {
		if(!$(this).parent().next().is(":visible")) {
			allPanels.slideUp();
			$(this).parent().next().slideDown();
		}
		return false;
	});
	// $('.accordion > dt > a, .accordion-2 > dt > a').click(function () { // on button click
	// 	$("html, body").animate({ // catch the `html, body`
	// 		scrollTop: $(this).offset().top - 160
	// 	}, 400);
	// });
	$($('.accordion-2 dd')[0]).show();
});

$('.accordion > dt > a, .accordion-2 > dt > a').bind('click',function(){
    var self = this;
    setTimeout(function() {
        theOffset = $(self).offset();
        $('body,html').animate({ scrollTop: theOffset.top - 200 });
    }, 310);
});

// SMOOTH TRIGGER
// Select all links with hashes
$('.st-menu li a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 160
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


// NAVIGATION POP UP
$('#TriggerMenu, .close-mobile').click(function(){
	$('.navigation-mobile').toggleClass('show');
});


$('.navigation-mobile .st-menu-mobile a').click(function(){
	$('.navigation-mobile').removeClass('show');
});


// MODAL
$('.video1, .mask1').click(function(){
	$('.mask1, .modal#video1').toggleClass('show');
	$("#video-1").attr("src", "https://www.youtube.com/embed/ZVdz7KsgHMY?start=1");
});

$('.mask1').click(function(){
	$('#video-1').attr("src","");
});

// MODAL2
$('.video2, .mask2').click(function(){
	$('.mask2, .modal#video2').toggleClass('show');
	$("#video-2").attr("src", "https://www.youtube.com/embed/OI6qTHZZG2Y?start=1");
});

$('.mask2').click(function(){
	$('#video-2').attr("src","");
});

// MODAL3
$('.video3, .mask3').click(function(){
	$('.mask3, .modal#video3').toggleClass('show');
	$("#video-3").attr("src", "https://www.youtube.com/embed/1yEeGt8mxxU?start=1");
});

$('.mask3').click(function(){
	$('#video-3').attr("src","");
});

// MODAL4
$('.video4, .mask4').click(function(){
	$('.mask4, .modal#video4').toggleClass('show');
	$("#video-4").attr("src", "https://www.youtube.com/embed/5rCQ1Rs85BE?start=1");
});

$('.mask4').click(function(){
	$('#video-4').attr("src","");
});

// MODAL5
$('.video5, .mask5').click(function(){
	$('.mask5, .modal#video5').toggleClass('show');
	$("#video-5").attr("src", "https://www.youtube.com/embed/6q_vPogaSuM?start=1");
});

$('.mask5').click(function(){
	$('#video-5').attr("src","");
});

// MODAL6
$('.video6, .mask6').click(function(){
	$('.mask6, .modal#video6').toggleClass('show');
	$("#video-6").attr("src", "https://www.youtube.com/embed/qAEchDjM6hM?start=1");
});

$('.mask6').click(function(){
	$('#video-6').attr("src","");
});