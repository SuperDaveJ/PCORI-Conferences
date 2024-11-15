// JavaScript Document

$(document).ready(function() {
	
	// Global Color
	$('head style').append('h1,h2,h3,h4,h5,h6, .navigation ul li a, blockquote,.btnMain,.btnColor2,.btnColor3,.btnLte {font-family:"'+Heading_Font+'"; } html, body, div, p, table, tr, td, th, tbody, tfoot, ul, li, ol, dl, dd, dt, fieldset, cite, input, select, textarea, button, a, section, article, aside, header, footer, nav {font-family:"'+Site_Font+'"; }  body {background-color:#'+page_background_color+';} .navbar-header, .btn, .schedule-box h6.section-head span, .panel-heading a, .navigation nav ul li {background-color:#'+secondary_color+'; } header.colored {background-color:#'+main_color+'; }  a, #home li a:hover, .styled div, h3 span, .speaker .col-md-2 i, #directionsPanel .adp-summary, #schedule .nav-tabs li.active h5  {color:#'+secondary_color+'} #schedule .nav-tabs li.active i, #schedule .nav-tabs li a:hover h5, .schedule-box li h6 strong {color:#'+main_color+';}    div.section, #home {border-top:5px solid #'+main_color+';  }  ::selection {background-color:#'+main_color+'; color:#fff;} ::-moz-selection {background-color:#'+main_color+'; color:#fff;} ');

	
	// Gallery Captions
	$(' #eg-thumbs > li ').each( function() { $(this).hoverdir(); } );
	
	// Image Lightbox
	 $("a[rel^='prettyPhoto']").prettyPhoto({overlay_gallery: true, social_tools: false});
	 $('.gallery a').append('<span class="link"><i class="fa fa-search-plus"></i></span>');
	 
	// equal heights columns
	$('.container').each(function(){  
			var highestBox = 0;
			$('.column', this).each(function(){
				if($(this).height() > highestBox) 
				   highestBox = $(this).height(); 
			});  
			$('.column',this).height(highestBox);
	});   
	
	// Top Arrow
	$(window).scroll(function() {
			if ($(window).scrollTop() > 1000) { 
				$('a.top').fadeIn('slow'); 
			} else { 
				$('a.top').fadeOut('slow');
			}
	}); 
	
	$('#register').hide();
	$('.register-trigger').click(function(event) {
			event.preventDefault();	
			$('#register').slideToggle('fast');
	});
	
	// Tooltip
	$('a.tips').tooltip();
	
	// responsive Video Target your .container, .wrapper, .post, etc.
    $(".container").fitVids();
	
	// Tabs Active
	$('#schedule .nav-tabs li').append('<span class="arrow"></span>');
	$('#schedule .nav-tabs li span.arrow').hide();
	
	// Counter is deleted by XZ
	
	// Accordion Symbols
	$('.panel-heading a').click(function() {
			var thisParent = $(this).parent().next();
		if(thisParent.hasClass('in')) {
				$(this).parent().removeClass('active');
		} else {
				$('.panel-heading').removeClass('active');
				$(this).parent().addClass('active');
		}
	});
	
	//page Scroll
	$('nav a[href^=#], a.top[href^=#]').click(function(event) {
			event.preventDefault();
			$('html,body').animate({
            scrollTop: $(this.hash).offset().top - 80},
            1000);	
	});
	
	// Year Update
	var curYear = new Date().getFullYear();
	$('.year').html(curYear);
	
	// Subscription Form is deleted by XZ

	// Register Form is deleted by XZ
  
	//Speaker OverlayColor
		  
	var getcolor = $('.speaker i').css("color");
	var matchColors = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
	var match = matchColors.exec(getcolor);
	var transColor = "rgba("+match[1] + ', ' + match[2] + ', ' + match[3]+", 0.9)";
	$('figcaption').css("background-color", transColor);
	 
	/* XZ added following to make speakers clickable for small screen */  
	if ( $(window).width() <= 570 ) {	
		$(".speaker-grid .section").click( function() {
			$(this).find("figcaption").toggleClass("small");
		});
	}
});
