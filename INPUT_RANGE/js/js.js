var doc = document;

//input type="range"
var elRange = doc.querySelectorAll('input[type="range"]'),
	out = doc.getElementsByTagName('output');

for(var i = 0; i < elRange.length; i++) {
	elRange[i].onclick = function() {
		var id = this.id,
			val = this.value;
		
		for(var i = 0; i < elRange.length; i++) {
			if(out[i].getAttribute('for') === id) {
				out[i].innerHTML = val;
				break;
			}
		}
	}
};
