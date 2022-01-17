<script>
	import Metronome from '../components/Metronome.svelte';
</script>

<svelte:head>
	<title>metronome</title>
	<meta name="description" content="A free online metronome" />
</svelte:head>

<div class="container">
	<Metronome />
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
