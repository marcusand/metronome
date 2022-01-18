<script>
	import { createMetronome } from '$lib/createMetronome';
	import { onMount } from 'svelte';

	import BpmInfo from './BpmInfo.svelte';
	import PlayButton from './PlayButton.svelte';
	import Poti from './Poti.svelte';
	import RowContainer from './RowContainer.svelte';
	import Slider from './Slider.svelte';
	import TapButton from './TapButton.svelte';

	let metronome;
	let playing = false;
	let bpm = 80;
	let sound = 0;
	let timeSignature = 4;
	let volume = 100;
	let minBpm = 40;
	let maxBpm = 220;

	onMount(() => {
		metronome = createMetronome({
			samples: [['/audio/wood-low.mp3', '/audio/wood-high.mp3']]
		});
	});

	$: {
		if (metronome) metronome.setBpm(bpm);
	}

	$: {
		if (metronome) playing ? metronome.play() : metronome.pause();
	}

	$: {
		if (metronome) metronome.setTimeSignature(timeSignature);
	}

	$: {
		if (metronome) metronome.setSampleSet(sound);
	}

	$: {
		if (metronome) metronome.setVolume(volume / 100);
	}
</script>

<div class="container">
	<RowContainer><BpmInfo>{bpm}</BpmInfo></RowContainer>
	<RowContainer
		><TapButton {minBpm} {maxBpm} onTap={(value) => (bpm = value)} /></RowContainer
	>
	<RowContainer width="100%">
		<Slider
			label="bpm"
			min={minBpm}
			max={maxBpm}
			value={bpm}
			onChange={(value) => (bpm = value)}
		/>
	</RowContainer>
	<RowContainer width="60%">
		<div class="buttons">
			<div class="poti">
				<Poti
					title="time"
					stepsCount={12}
					initialStep={timeSignature - 1}
					onChange={(value) => (timeSignature = value + 1)}
				/>
			</div>
			<PlayButton
				{playing}
				onPause={() => (playing = false)}
				onPlay={() => (playing = true)}
			/>
			<div class="poti">
				<Poti
					title="sound"
					stepsCount={3}
					initialStep={sound}
					onChange={(value) => (sound = value)}
				/>
			</div>
		</div>
	</RowContainer>
	<RowContainer width="60%">
		<div class="volume-slider">
			<Slider
				label="volume"
				min={0}
				max={100}
				value={100}
				onChange={(value) => (volume = value)}
			/>
			<label for="volume-slider">volume</label>
		</div>
	</RowContainer>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		color: var(--color-beta);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0rem;
		border: none;
		user-select: none;
	}

	@media only screen and (min-width: 768px) {
		.container {
			width: 450px;
			height: 700px;
			border: 2px solid var(--color-black);
			border-radius: 20px;
			padding: 1rem;
		}
	}

	.buttons {
		display: flex;
		justify-content: space-around;
		align-items: flex-start;
	}

	.poti {
		margin-top: 1.5rem;
	}

	.volume-slider {
		display: flex;
		flex-direction: column;
	}

	.volume-slider label {
		text-align: center;
		color: var(--color-black);
	}
</style>
