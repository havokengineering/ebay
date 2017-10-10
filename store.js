
var $v = jQuery.noConflict();
$v(document).ready(function () {
    $v('.flexslider').flexslider({
        animation: "slide",
        slideshowSpeed: "5000",
        start: function (slider) {
            $v('body').removeClass('loading');
        }
    });
});

var $w = jQuery.noConflict();
	$w(document).ready(function(){
	//Right Click Protection
	// $w(document).bind("contextmenu",function(e){ return false;});

	//Content Area Mods
	$w(".pagecontainer > table:eq(1)").addClass("org-background");
	$w(".pagecontainer > table:eq(1) tr:first td:first").addClass("org-main");
	$w(".org-background table:eq(1)").addClass("org-content");	
	
	//Getting and Setting Store Categories
	if($w("#org-categories").length > 0) {
		if($w("#LeftPanel .lcat").length > 0) {
			$w("#org-categories").html($w("#LeftPanel .lcat").html());
		}
		$w("#org-categories ul[class=lev1]").find("li:last").addClass("org-lastitem");
	}
	
	//Search Box
	var stxt = $w("#org-search #org-input").find("input[class=v4sbox]").val();
	$w("#org-search #org-input").find("input[class=v4sbox]").focus(function(){
		if($w("#org-search #org-input").find("input[class=v4sbox]").val() == stxt) {
			$w("#org-search #org-input").find("input[class=v4sbox]").val("");
		}
	});
	$w("#org-search #org-input").find("input[class=v4sbox]").blur(function(){
		if($w("#org-search #org-input").find("input[class=v4sbox]").val() == "") {
			$w("#org-search #org-input").find("input[class=v4sbox]").val(stxt);
		}
	});
	$w("#org-search #org-submit").find("input").click(function(){
		if($w("#org-search #org-input").find("input[class=v4sbox]").val() == stxt) {
			$w("#org-search #org-input").find("input[class=v4sbox]").val("");
		}
	});
	
	
	var d = new Date();
	var header = '\n\r';
 {
		if($w(".org-wrapcen").length > 0) {
			$w(".org-wrapcen").before(header);			
		}
	}

	
	
	//Footer
	var d = new Date();
	var footer = '\n\r<div class="org-wrapcens wow bounceInUp"><div id="org-footer"><div id="org-footernav"><div id="org-footernav-title">Useful Links</div><ul><li><a href="http://stores.ebay.com.au/havokengineering/About-Us">About Us</a></li><li><a href="http://stores.ebay.com.au/havokengineering/Payment">Payment</a></li><li><a href="http://stores.ebay.com.au/havokengineering/Shipping">Shipping</a></li><li><a href="http://stores.ebay.com.au/havokengineering/Returns">Returns</a></li><li><a href="http://stores.ebay.com.au/havokengineering/_i.html?rt=nc&_sid=1056493898&_trksid=p4634.c0.m14&_sop=10&_sc=1">New Arrival </a></li><li><a href="http://stores.ebay.com.au/havokengineering/_i.html?rt=nc&_sc=1&_sid=1056493898&_trksid=p4634.c0.m14&_sop=1&_sc=1">Ending Soon</a></li><li><a href="http://feedback.ebay.com.au/ws/eBayISAPI.dll?ViewFeedback2&userid=havok-engineering&ftab=AllFeedback">Feedback</a></li><li><a href="http://contact.ebay.com.au/ws/eBayISAPI.dll?FindAnswers&frm=284&requested=havok-engineering&iid=-1">Contact Us</a></li></ul></div><div class="copy-holder"><div id="org-copy">Copyright &copy; ' + d.getFullYear() + ', <span>HAVOK ENGINEERING. </span>All Rights Reserved </div><div id="org-designedby"><a href="http://z-dzine.com/" target="_blank">eBay Store Designed &amp; Developed</a> By <a href="http://z-dzine.com/" target="_blank">Z-Dzine.com</a></div></div></div><div class="best-seller"><img src="https://cdn.shopify.com/s/files/1/0974/8972/files/barcode_logo.jpg" alt=""></div></div>';
 {
		if($w(".org-content").length > 0) {
			$w(".org-content").after(footer);			
		}
	}





});

$w(window).load(function(){
	$w("#org-banner .container").css("display","block");
});









