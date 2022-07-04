function updateInfos() {
	var form = document.getElementById("form");

	form.addEventListener("submit", function (event) {
		event.preventDefault();

		var informations = document.getElementById("UserInfos");
		informations.style.display = "block";

		document.getElementById("nameInfo").innerHTML =
			document.getElementById("name").value;
		document.getElementById("ageInfo").innerHTML =
			document.getElementById("age").value;
		document.getElementById("addressInfo").innerHTML =
			document.getElementById("education").value;
		document.getElementById("addressInfo").innerHTML =
			document.getElementById("address").value;
		document.getElementById("salaryInfo").innerHTML =
			document.getElementById("salary").value;
	});
}

function resetInfos() {
	var form = document.getElementById("form");

	form.addEventListener("reset", function (event) {
		event.preventDefault();
		var informations = document.getElementById("UserInfos");
		informations.style.display = "none";

		document.getElementById("name").value = null;
		document.getElementById("age").value = null;
		document.getElementById("address").value = null;
		document.getElementById("address").value = null;
		document.getElementById("salary").value = null;
	});
}
updateInfos();
resetInfos();
