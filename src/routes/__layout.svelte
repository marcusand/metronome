<div class="main-container">
	<slot />
</div>

<style>
	@font-face {
		font-family: 'Objectivity';
		src: url('/fonts/objectivity.medium.otf') format('opentype');
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
		background-color: #b4b17c;
	}
</style>
