<script>
	export let min;
	export let max;
	export let value;
	export let onChange;

	$: onChange(value);
</script>

<div class="container">
	<input type="button" class="button" value="-" on:click={() => (value -= 1)} />
	<input type="range" {min} {max} class="slider" bind:value />
	<input type="button" class="button" value="+" on:click={() => (value += 1)} />
</div>

<style>
	.container {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.button {
		background: transparent;
		border: none;
		color: var(--color-beta);
		cursor: pointer;
	}

	.slider {
		-webkit-appearance: none;
		width: 100%;
		height: 2px;
		background: var(--color-black);
		cursor: pointer;

		--thumb-color: var(--color-beta);
		--thumb-size: 15px;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: var(--thumb-size);
		height: var(--thumb-size);
		border-radius: 50%;
		background: var(--thumb-color);
	}

	.slider::-moz-range-thumb {
		width: var(--thumb-size);
		height: var(--thumb-size);
		border-radius: 50%;
		background: var(--thumb-color);
	}
</style>
