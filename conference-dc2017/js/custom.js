// JavaScript Document

/* CUSTOM PARAMETERS */

/* ==================================  GLOBAL  ==================================== */

			var main_color = "00aeef"; // Blue: This is global main color for your template.
			
			var secondary_color = "7ac143";  // Green: added by XZ
			
			var page_background_color = "e6e6e6"; // Light Grey: This is the page background color for your template.
			
			var Heading_Font = "Roboto"; // thats your special Heading font
			
			var Site_Font = "Roboto"; // thats your special body content font
			
			
/* =================  REPLACE GOOGLE FONT CODE HERE  =================== */

// Google Web Fonts

WebFontConfig = {
    google: { families: [ 'Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic:latin'] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
 