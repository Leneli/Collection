var doc = document,
	sel = doc.getElementsByName('activity-status'),
	opt = sel[0].children;

sel[0].onclick = function() {
	for(var i = 0; i < opt.length; i++) {
		if(opt[i].selected) {
			sel[0].style.backgroundColor = opt[i].classList;
		}
		
	}
};