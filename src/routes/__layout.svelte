<svelte:head>
	<title>metronome</title>
	<meta name="description" content="A free online metronome" />

	<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
	<link rel="manifest" href="/icons/site.webmanifest" />
	<link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
	<link rel="shortcut icon" href="/icons/favicon.ico" />
	<meta name="msapplication-TileColor" content="#b91d47" />
	<meta name="msapplication-config" content="/icons/browserconfig.xml" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

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
		--color-beta: #491280;
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
