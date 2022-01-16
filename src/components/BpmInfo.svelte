<div class="container">
	<span class="number"><slot /></span>
	<span class="label">BPM</span>
</div>

<style>
	.container {
		width: 150px;
		height: 150px;
		border: 2px solid var(--color-black);
		border-radius: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.number {
		font-size: 2.5rem;
	}

	.label {
		font-size: 0.7rem;
	}
</style>
