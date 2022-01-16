<script>
	import Play from '../assets/icons/play.svelte';
	import Pause from '../assets/icons/pause.svelte';

	export let playing;
	export let onPlay;
	export let onPause;

	const handleClick = () => {
		if (playing) onPause();
		else onPlay();
	};
</script>

<div class="container" on:click={handleClick}>
	<div class="icon-container">
		{#if playing}<Pause />{:else}<Play />{/if}
	</div>
</div>

<style>
	.container {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		border: 2px solid var(--color-black);
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	.icon-container {
		width: 30px;
		height: 30px;
	}
</style>
