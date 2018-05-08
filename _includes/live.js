<script>
(_ => {
	let update = html => {
		let updated = document.createElement("html");
		updated.innerHTML = html;
		let atBottom = innerHeight + scrollY >= document.body.offsetHeight;
		document.querySelector("div.entry").innerHTML = updated.querySelector("div.entry").innerHTML;
		if (atBottom) {
		    window.scrollTo({
			top: document.body.scrollHeight,
			behavior: "smooth"
			});
		}
	};
	let fetchAndUpdate = _ => {
		fetch("?" + Date.now())
			.then(response => response.text()
				.then(text => update(text)
			)
		);
	};
	setInterval(fetchAndUpdate, 10000);
})();
</script>
