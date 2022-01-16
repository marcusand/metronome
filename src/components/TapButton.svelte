<script>
	let flip = false;

	const handleClick = () => {
		flip = !flip;
	};
</script>

<div
	class="container"
	style="transform: {flip ? 'scale(-1, 1)' : 'scale(1,1)'};"
	on:click={handleClick}
>
	tap
</div>

<style>
	.container {
		margin: 1rem;
		cursor: pointer;
		font-size: 1.5rem;
	}
</style>
