<script>
	import BpmInfo from './BpmInfo.svelte';
	import PlayButton from './PlayButton.svelte';
	import Poti from './Poti.svelte';
	import Slider from './Slider.svelte';
	import TapButton from './TapButton.svelte';

	const initialBpm = 80;

	let bpm = initialBpm;
	let playing = false;
</script>

<div class="metronome-container">
	<BpmInfo>{bpm}</BpmInfo>
	<TapButton />
	<Slider
		min={0}
		max={200}
		initialValue={initialBpm}
		onChange={(value) => (bpm = value)}
	/>
	<div class="button-container">
		<Poti title="count" stepsCount={9} initialStep={3} onChange={() => {}} />
		<PlayButton
			{playing}
			onPause={() => (playing = false)}
			onPlay={() => (playing = true)}
		/>
		<Poti title="sound" stepsCount={3} onChange={() => {}} />
	</div>

	<div class="volume-container">
		<Slider min={0} max={100} initialValue={100} onChange={() => {}} />
		<span>volume</span>
	</div>
</div>

<style>
	.metronome-container {
		width: 100%;
		height: 100%;
		color: var(--color-beta);

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1rem;

		border: none;
		/* border-radius: 50px; */
		/* background: #b4b17c; */
		/* box-shadow: 20px 20px 60px #999669, -20px -20px 60px #cfcc8f; */

		user-select: none;
	}

	@media only screen and (min-width: 768px) {
		.metronome-container {
			width: 500px;
			height: 700px;

			border: 2px solid var(--color-black);
		}
	}

	.button-container {
		display: flex;
	}

	.volume-container {
		width: 50%;
		display: flex;
		flex-direction: column;
	}

	.volume-container span {
		text-align: center;
		color: var(--color-black);
	}
</style>
