<div class="container">
	<span class="number"><slot /></span>
	<label class="label" for="bpm-slider">BPM</label>
</div>

<style>
	.container {
		--size: 12rem;

		width: var(--size);
		height: var(--size);
		border: 2px solid var(--color-black);
		border-radius: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.number {
		font-size: 4rem;
	}

	.label {
		font-size: 1rem;
		margin-top: -0.5rem;
	}
</style>
