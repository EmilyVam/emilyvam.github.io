


$(document).ready(function(){
	$("#name").fadeIn(1000);
	$("#name").addClass("name-active1");
	$("#school").fadeIn(1000);
	$("#school").addClass("school-active");
	$("#major1").fadeIn(1000);
	$("#major1").addClass("major-active");
	$("#major2").fadeIn(1000);
	$("#major2").addClass("major-active");  
    $("#name-drop").fadeIn(1000);

    setTimeout(function() {
    	$("#name").addClass("name-active2");
    }, 1000);

	$(window).scroll(function() {
		var height = $(window).scrollTop();
		size = 1-height/1400;
		l2 = - height/80 - 60;
		l3 = - height/40 - 120;
		l4 = - height/26 - 180;
		drop = 38 + height/20;

		if (height < 644) {
			$("#name").css("-webkit-transform", "scale(" + size + ")");
			$("#name").css("top", "calc(30% - " + height/20 + "%)");
			$("#name-drop").css("top", drop + "%");
			$("#name-line").css("top","calc(39% - " + height/20.5 + "%)")
			$("#name-line").css("height", height/10 + "%");
		    $("#edge-l2").css("top", l2 + "%");
		    $("#edge-l3").css("top", l3 + "%");
		    $("#edge-l4").css("top", l4 + "%");
		    $("#name-sidel").css("opacity", height/644);
		    $("#name-sider").css("opacity", height/644);
		    $("#topbar").css("background-color", "transparent").css("transition", "1s");	
		}

		else {
		    $("#topbar").css("background-color", "white").css("transition", "1s");		
		}
		
			
			
		
	})


});