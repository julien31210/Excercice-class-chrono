var sec = 0;
$("#start").click(function(){
	inter = setInterval(function(){
		sec++
		console.log(sec);
	}, 1000)
});
