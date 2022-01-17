<script>
	export let width = 'auto';
</script>

<div class="container" style="width: {width};"><slot /></div>

<style>
	.container {
		margin: 1.2rem 0;
	}
</style>
