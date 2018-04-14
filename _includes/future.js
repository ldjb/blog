document.querySelectorAll(".future").forEach(
	post => {post.dataset.pubdate <= new Date().toISOString()
		&& (post.style.display = "{{include.display|default:"list-item"}}");}
);
var lastTenKeys = [null, null, null, null, null, null, null, null, null, null];
var konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
addEventListener("keydown", e => {
	lastTenKeys.shift();
	lastTenKeys.push(e.key);
	if (JSON.stringify(lastTenKeys) == JSON.stringify(konamiCode)) {
		document.querySelectorAll(".future").forEach(
			post => {post.style.display = "{{include.display|default:"block"}}";}
		);
	}
});
