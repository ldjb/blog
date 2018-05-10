<script>
(_ => {
	const REFRESH_INTERVAL = 30000;

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
		fetch("?" + REFRESH_INTERVAL + "*" + Math.floor(Date.now()/REFRESH_INTERVAL))
			.then(response => response.text()
				.then(text => update(text)
			)
		);
	};
	setInterval(fetchAndUpdate, REFRESH_INTERVAL);
})();
</script>
