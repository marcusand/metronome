<script>
	export let width = 'auto';
</script>

<div class="container" style="width: {width};"><slot /></div>

<style>
	.container {
		margin: 0.5rem 0;
	}

	@media only screen and (min-width: 768px) {
		.container {
			margin: 1.2rem 0;
		}
	}
</style>
