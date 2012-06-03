$(document).ready(function(){
	$(".second").pageslide({ direction: "left" });
	$(".first").pageslide({ direction: "right" });
	
	var $events = $('<div class="event single cover "><div class="mask"><div class="card mosaic-overlay"><img src="images/placeholder.png" /><div class="avatar"><img src="images/face.png" /></div></div><div class="details mosaic-backdrop"><p>Chocolate cake pastry tootsie roll. Macaroon dragée jelly beans chupa chups jelly. Jujubes applicake chocolate cake sugar plum tiramisu dessert cotton candy. Bear claw muffin croissant lemon drops sweet roll brownie jelly.</p></div></div><div class="date"><div class="day">31</div><div class="month">dicembre</div><div class="place">Caltanissetta</div></div></div><div class="event single cover "><div class="mask"><div class="card mosaic-overlay"><img src="images/placeholder.png" /><div class="avatar"><img src="images/face.png" /></div></div><div class="details mosaic-backdrop"><p>Chocolate cake pastry tootsie roll. Macaroon dragée jelly beans chupa chups jelly. Jujubes applicake chocolate cake sugar plum tiramisu dessert cotton candy. Bear claw muffin croissant lemon drops sweet roll brownie jelly.</p></div></div><div class="date"><div class="day">31</div><div class="month">dicembre</div><div class="place">Caltanissetta</div></div></div><div class="event single cover "><div class="mask"><div class="card mosaic-overlay"><img src="images/placeholder.png" /><div class="avatar"><img src="images/face.png" /></div></div><div class="details mosaic-backdrop"><p>Chocolate cake pastry tootsie roll. Macaroon dragée jelly beans chupa chups jelly. Jujubes applicake chocolate cake sugar plum tiramisu dessert cotton candy. Bear claw muffin croissant lemon drops sweet roll brownie jelly.</p></div></div><div class="date"><div class="day">31</div><div class="month">dicembre</div><div class="place">Caltanissetta</div></div></div><div class="event single cover "><div class="mask"><div class="card mosaic-overlay"><img src="images/placeholder.png" /><div class="avatar"><img src="images/face.png" /></div></div><div class="details mosaic-backdrop"><p>Chocolate cake pastry tootsie roll. Macaroon dragée jelly beans chupa chups jelly. Jujubes applicake chocolate cake sugar plum tiramisu dessert cotton candy. Bear claw muffin croissant lemon drops sweet roll brownie jelly.</p></div></div><div class="date"><div class="day">31</div><div class="month">dicembre</div><div class="place">Caltanissetta</div></div></div><div class="event single cover "><div class="mask"><div class="card mosaic-overlay"><img src="images/placeholder.png" /><div class="avatar"><img src="images/face.png" /></div></div><div class="details mosaic-backdrop"><p>Chocolate cake pastry tootsie roll. Macaroon dragée jelly beans chupa chups jelly. Jujubes applicake chocolate cake sugar plum tiramisu dessert cotton candy. Bear claw muffin croissant lemon drops sweet roll brownie jelly.</p></div></div><div class="date"><div class="day">31</div><div class="month">dicembre</div><div class="place">Caltanissetta</div></div></div>');

		
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
		
		
		function refresh_scrollspy(){
			
			$('[data-spy="scroll"]').each(function () {
				console.log("refresh");
			  var $spy = $(this).scrollspy('refresh')
			});
		}
		
		$(".wrapper").isotope({
		  // options
		  eventselector : '.event',
		  layoutMode : 'fitRows'
		});
		
		$("#enlarge_locations").click(function(event){
			event.preventDefault();
			$("#locations .spacer").animate(
				
				{height: "+=400px"},500, refresh_scrollspy()
			);
			
			$("#locations .content").animate(
				
				{height: "+=400px"},500
			);
			
			$("#locations .wrapper").append( $events ).isotope( 'appended', $events);
			
			$('#locations .cover').mosaic({
				animation	:	'slide',	//fade or slide
				anchor_y	:	'top',		//Vertical anchor position
				hover_y		:	'270px'		//Vertical position on hover
			});
			
			
		});
		
		
		$("#enlarge_events").click(function(event){
			event.preventDefault();
			$("#events .spacer").animate(
				
				{height: "+=400px"},500, refresh_scrollspy()
			);
			
			$("#events .content").animate(
				
				{height: "+=400px"},500
			);
			
			
			
			$("#events .wrapper").append( $events ).isotope( 'appended', $events);
			
			$('#events .cover').mosaic({
				animation	:	'slide',	//fade or slide
				anchor_y	:	'top',		//Vertical anchor position
				hover_y		:	'270px'		//Vertical position on hover
			});
			
		});
		
		
		$("#enlarge_blog").click(function(event){
			event.preventDefault();
			$("#blog .spacer").animate(
				
				{height: "+=400px"},500, refresh_scrollspy()
			);
			
			$("#blog .content").animate(
				
				{height: "+=400px"},500
			);
			
			
			
			$("#blog .wrapper").append( $events ).isotope( 'appended', $events);
			
			$('#blog .cover').mosaic({
				animation	:	'slide',	//fade or slide
				anchor_y	:	'top',		//Vertical anchor position
				hover_y		:	'270px'		//Vertical position on hover
			});
			
		});
		
		
		$("#enlarge_people").click(function(event){
			event.preventDefault();
			$("#people .spacer").animate(
				
				{height: "+=400px"},500, refresh_scrollspy()
			);
			
			$("#people .content").animate(
				
				{height: "+=400px"},500
			);
			

			
			$("#people .wrapper").append( $events ).isotope( 'appended', $events);
			
			$('#people .cover').mosaic({
				animation	:	'slide',	//fade or slide
				anchor_y	:	'top',		//Vertical anchor position
				hover_y		:	'270px'		//Vertical position on hover
			});
			
		});
		
		$('.cover').mosaic({
			animation	:	'slide',	//fade or slide
			anchor_y	:	'top',		//Vertical anchor position
			hover_y		:	'270px'		//Vertical position on hover
		});
});