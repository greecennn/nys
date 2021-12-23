const form = document.querySelector("#submit_form");
form.addEventListener("submit", onSubmit);

function onSubmit(e) {
	const formData = new FormData(form);
	let values = {};
	for (var pair of formData.entries()) {
		values[pair[0]] = pair[1];
	}

	const title = "Сообщение от " + values["name"];
	const message = values["message"];

	window.open("mailto:greecennn@gmail.com?subject=" + title + "&body=" + message);
	e.preventDefault();
}
