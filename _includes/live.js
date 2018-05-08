<script>
(_ => {
	let update = html => {
		let updated = document.createElement("html");
		updated.innerHTML = html;
		document.querySelector("div.entry").innerHTML = updated.querySelector("div.entry").innerHTML;
	};
	let fetchAndUpdate = _ => {
		fetch("")
			.then(response => response.text()
				.then(text => update(text)
			)
		);
	};
	setInterval(fetchAndUpdate, 10000);
})();
</script>
