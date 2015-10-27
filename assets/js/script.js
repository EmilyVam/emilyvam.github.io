


$(document).ready(function(){
	// $("#name").fadeIn(800);
	// $("#name").addClass("name-active1");
	// $("#school").fadeIn(800);
	// $("#school").addClass("school-active");
	// $("#major1").fadeIn(800);
	// $("#major1").addClass("major-active");
	// $("#major2").fadeIn(800);
	// $("#major2").addClass("major-active");  
 //    // $("#name-drop").fadeIn(800);
 //    // $("#name-line").fadeIn(800);

 //    setTimeout(function() {
 //    	$("#name").addClass("name-active2");
 //    }, 800);

	$(window).scroll(function() {
		var height = $(window).scrollTop();
		//size = 1-height/1400;
		//l2 = - height/80 - 60;
		//l3 = - height/40 - 120;
		//l4 = - height/26 - 180;
		//drop = 40 + height/20;

		if (height < 644) {
			//$("#name").css("-webkit-transform", "scale(" + size + ")");
			//$("#name").css("top", "calc(30% - " + height/20 + "%)");
			//$("#background").css("width", 100 + height*0.05 + "%").css("margin-left", -height*0.025 + "%").css("height", 100 + height*0.04 + "%");
			//$("#name").css("font-size", 45 - height*0.1 + "px").css("margin-left", 32 - height*0.05 + "%");
			// $("#name-drop").css("top", drop + "%");
			// $("#name-line").css("top","calc(40% - " + height/20 + "%)")
			// $("#name-line").css("height", height/10 + "%");
		    // $("#edge-l2").css("top", l2 + "%");
		    // $("#edge-l3").css("top", l3 + "%");
		    // $("#edge-l4").css("top", l4 + "%");
		    // $("#topbar").css("background-color", "transparent");
			//social").css("opacity", height/550).css("transform", "translateY(50px)");

		    // if (height > 550) {
		    // 	$("#name-drop").css("opacity", 1 / height);
		    // 	$("#name-line").fadeOut(500);
		    // 	$("#topbar").css("background-color", "white");
		    // 	$("#topbar-overlay").css("opacity", 1);

		    // }
		    // else {
		    // 	$("#topbar-overlay").css("opacity", 0);
		    // 	$("#topbar").css("background-color", "transparent");
		    // }
		}
		
			
		
	})


});