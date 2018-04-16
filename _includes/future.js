<script>
document.querySelectorAll(".future").forEach(
	post => {post.dataset.pubdate <= new Date().toISOString()
		&& post.classList.remove("future");}
);
</script>
