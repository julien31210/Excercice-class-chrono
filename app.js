var sec = 0;
var min = 0;
var h = 0;
$("#start").click(function(){
	inter = setInterval(function(){
		sec++
		$("#sec").html(sec);
		console.log(sec);
		
		if (sec==60) {
			min++;
			sec=0;
		}
		$("#sec").html(sec);
		$("#min").html(min);

		if (min==60) {
			h++;
			min=0;
		}

		$("#min").html(min);
		$("#h").html(h);
	}, 1000)


});
