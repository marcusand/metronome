<script>
	import BpmInfo from './BpmInfo.svelte';
	import Slider from './Slider.svelte';

	const initialBpm = 80;

	let bpm = initialBpm;
</script>

<div class="metronome-container">
	<BpmInfo>{bpm}</BpmInfo>
	<Slider
		min={0}
		max={200}
		initialValue={initialBpm}
		onChange={(value) => (bpm = value)}
	/>
</div>

<style>
	.metronome-container {
		width: 400px;
		height: 600px;
		color: #7f519d;

		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 50px;

		border-radius: 50px;
		background: #b4b17c;
		box-shadow: 20px 20px 60px #999669, -20px -20px 60px #cfcc8f;
	}
</style>
