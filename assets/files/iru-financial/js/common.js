$(function() {	
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$('.toggle-menu').click(function() {
		var place = $(this).data("place");
		var menu = place + " .main-menu";
		$(this).toggleClass('on');
		$(menu).slideToggle();
		if (place == "footer") {
			$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		}
		return false;
	});

	var equalHeightsArray = [
	$('.section-1 .sect-content .info-item'),
	$('.s1-bottom .info-item'),
	$('.section-3 .info-item')
	];

	$(window).load(function() {
		var wid = $(window).width();
		if(wid > 767) {
			equalHeightsArray.forEach(function(i){
				i.equalHeights();
			});
		} 
	});

	$(window).resize(function(){
		var wid = $(window).width();     
		if(wid > 767 && $('.main-menu').is(':hidden')) {
			$('.main-menu').removeAttr('style');
		}

		if(wid > 1199) {
			$('.info-item').removeAttr('style');
			equalHeightsArray.forEach(function(i){
				i.equalHeights();
			});
		} else if(wid > 991 && wid < 1200) {
			$('.info-item').removeAttr('style');
			equalHeightsArray.forEach(function(i){
				i.equalHeights();
			});
		} else if (wid > 767 && wid < 991) {
			equalHeightsArray.forEach(function(i){
				i.equalHeights();
			});
		} else {
			$('.info-item').removeAttr('style');
		}
	});

	$('.cards .card').equalHeights();
	$('.team .teammate').equalHeights();

	$(".arrow-down").click(function() {
		$("html, body").animate({ scrollTop: $(".main-head").height()+120 }, "slow");
		return false;
	});

	$(".section-2").waypoint(function() {

		$(".s2-item-wrap").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 175*index);
		});

	}, {
		offset : "50%"
	});


	$(".section-4").waypoint(function() {

		$(".section-4 .card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("card-off").addClass("card-on");
			}, 175*index);
		});

	}, {
		offset : "50%"
	});

	var waypointsvg = new Waypoint({

		element: $(".section-5"),
		handler: function(dir) {
			
			if (dir === "down") {

				$(".section-5 .badge-item").each(function(index) {
					var ths = $(this);
					setTimeout(function() {
						var myAnimation = new DrawFillSVG({
							elementId: "badge-" + index
						});
						ths.children(".badge-content").addClass("badge-content-on");
					}, 500*index);
				});

			};
			this.destroy();
		},
		offset: '60%'
	});

	$(".section-6").waypoint(function() {

		$(".section-6 .teammate").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("teammate-off").addClass("teammate-on");
			}, 175*index);
		});

	}, {
		offset : "50%"
	});

	$(".section-8").waypoint(function() {

		$(".s8-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 175*index);
		});

	}, {
		offset : "60%"
	});

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600
	});

	$(".sect-head h2, .sect-head p").animated("fadeIn");
	$(".info-item-wrap:not(.text-center)").animated("fadeInUp");
	$(".section-8 .forms").animated("fadeInRight");

	$(".to-top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});

	$('.sect-bottom .buttons').click(function() {
		$("#callback h4").html($(this).text());
		$("#callback input[name=form-name]").val($(this).text());
	}).magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'mfp-forms'
	});

});