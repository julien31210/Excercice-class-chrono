var sec = 0;
var min = 0;
var h = 0;
var inter;
$("#start").click(function(){
	console.log(inter+"1");
	if (inter!="1") {
		inter = setInterval(function(){
			sec++
			$("#sec").html(sec);
		//console.log(sec);
		
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
	}


});
