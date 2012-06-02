$(document).ready(function(){
	$(".second").pageslide({ direction: "left" });
	$(".first").pageslide({ direction: "right" });
	

		
	$("#open_footer").toggle(
	        function () {
	            $("#footer").animate({marginBottom: 0}, 1000)
	        },
	        function () {
	            $("#footer").animate({marginBottom: "-280px" }, 1000)
	        }
	    );
	// fix sub nav on scroll
	    var $win = $(window)
	      , $nav = $('.subnav')
	      , navTop = $('.subnav').length && $('.subnav').offset().top - 0
	      , isFixed = 0
	
	    processScroll()
	
	    // hack sad times - holdover until rewrite for 2.1
	    $nav.on('click', function () {
	      if (!isFixed) setTimeout(function () {  $win.scrollTop($win.scrollTop() - 47) }, 10)
	    })
	
	    $win.on('scroll', processScroll)
	
	    function processScroll() {
	      var i, scrollTop = $win.scrollTop()
	      if (scrollTop >= navTop && !isFixed) {
	        isFixed = 1
	        $nav.addClass('subnav-fixed')
	      } else if (scrollTop <= navTop && isFixed) {
	        isFixed = 0
	        $nav.removeClass('subnav-fixed')
	      }
	    }
	
		
		$('#menu ul li a').click(function(event){
			event.preventDefault();
			var section = $(this).attr("href");
			$(section).ScrollTo({
		    duration: 400,
		    easing: 'easeOutExpo'
		});
		});
		
		
		$(".wrapper").isotope({
		  // options
		  itemSelector : '.item',
		  layoutMode : 'fitRows'
		});
		
		$("#enlarge_locations").click(function(event){
			event.preventDefault();
			$("#locations").animate(
				
				{height: "+=225px"},500
			);
			
			var $items = $('<div class="item" /><div class="item" /><div class="item" /><div class="item" /><div class="item" />');
			
			$("#locations .wrapper").append( $items ).isotope( 'appended', $items);
		});
		
		
		$("#enlarge_events").click(function(event){
			event.preventDefault();
			$("#events").animate(
				
				{height: "+=225px"},500
			);
			
			var $items = $('<div class="item" /><div class="item" /><div class="item" /><div class="item" /><div class="item" />');
			
			$("#events .wrapper").append( $items ).isotope( 'appended', $items);
		});
		
		
		$("#enlarge_blog").click(function(event){
			event.preventDefault();
			$("#blog").animate(
				
				{height: "+=225px"},500
			);
			
			var $items = $('<div class="item" /><div class="item" /><div class="item" /><div class="item" /><div class="item" />');
			
			$("#blog .wrapper").append( $items ).isotope( 'appended', $items);
		});
		
		
		$("#enlarge_people").click(function(event){
			event.preventDefault();
			$("#people").animate(
				
				{height: "+=225px"},500
			);
			
			var $items = $('<div class="item" /><div class="item" /><div class="item" /><div class="item" /><div class="item" />');
			
			$("#people .wrapper").append( $items ).isotope( 'appended', $items);
		});
});