var sec = 0;
var min = 0;
var h = 0;
var inter;
var stop = true;
var reset = true;
$("#start").click(function(){
	console.log(inter+"1er");
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

	$("#stop").click(function(){
		$("#stop").html(); 
		console.log("ça marche");
		clearInterval(inter);
		inter=undefined;
		console.log(inter);
	});

	$("#reset").click(function(){
		$("#reset").html();
		console.log("ça marche aussi");
		clearInterval(inter);
			sec=0;
			min=0;
			h=0;
			$("#sec").html(sec);
			$("#min").html(min);
			$("#h").html(h);
	})
});



