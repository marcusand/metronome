<script>
	import BpmInfo from './BpmInfo.svelte';
	import PlayButton from './PlayButton.svelte';
	import Poti from './Poti.svelte';
	import RowContainer from './RowContainer.svelte';
	import Slider from './Slider.svelte';
	import TapButton from './TapButton.svelte';

	const initialBpm = 80;

	let bpm = initialBpm;
	let playing = false;
</script>

<div class="container">
	<RowContainer><BpmInfo>{bpm}</BpmInfo></RowContainer>
	<RowContainer><TapButton /></RowContainer>
	<RowContainer width="100%">
		<Slider
			min={0}
			max={200}
			initialValue={initialBpm}
			onChange={(value) => (bpm = value)}
		/>
	</RowContainer>
	<RowContainer width="50%">
		<div class="buttons">
			<div class="poti">
				<Poti title="count" stepsCount={9} initialStep={3} onChange={() => {}} />
			</div>
			<PlayButton
				{playing}
				onPause={() => (playing = false)}
				onPlay={() => (playing = true)}
			/>
			<div class="poti">
				<Poti title="sound" stepsCount={3} onChange={() => {}} />
			</div>
		</div>
	</RowContainer>
	<RowContainer width="50%">
		<div class="volume-slider">
			<Slider min={0} max={100} initialValue={100} onChange={() => {}} />
			<span>volume</span>
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
			padding: 1rem;
		}
	}

	.buttons {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}

	.poti {
		margin-top: 1.5rem;
	}

	.volume-slider {
		display: flex;
		flex-direction: column;
	}

	.volume-slider span {
		text-align: center;
		color: var(--color-black);
	}
</style>
