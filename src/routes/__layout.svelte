<div class="main-container">
	<slot />
</div>

<style>
	@font-face {
		font-family: 'Objectivity';
		src: url('/fonts/objectivity.medium.otf') format('opentype');
	}

	:global(:root) {
		--color-alpha: #b4b17c;
		--color-beta: #7f519d;
		--color-black: #1f0539;
	}

	:global(html),
	:global(body),
	:global(#svelte),
	.main-container {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		overflow: hidden;
		font-family: Objectivity, sans-serif;
	}

	:global(*) {
		box-sizing: border-box;
	}

	.main-container {
		background-color: var(--color-alpha);
	}
</style>
