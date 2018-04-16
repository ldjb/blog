<script>
document.querySelectorAll(".future").forEach(
	post => {post.dataset.pubdate <= new Date().toISOString()
		&& (post.style.display = "{{include.display|default:"block"}}");}
);
</script>
