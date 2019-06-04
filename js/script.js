function drawText(i) {
	var currentStyle = document.getElementById("hidden" + i).style.display;
	if (currentStyle == '') {
		document.getElementById("hidden" + i).style.display = "block";
	} else {
		document.getElementById("hidden" + i).style.display = "";
	}
}
