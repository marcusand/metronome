<svelte:head>
	<title>metronome</title>
	<meta name="description" content="A free online metronome" />
	<meta
		name="keywords"
		content="metronome, free, online, web, music, rhythm, minimalistic"
	/>

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

<div class="outer-container">
	<div class="inner-container">
		<slot />
	</div>
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

	:global(html) {
		position: fixed;
		height: 100%;
		touch-action: manipulation;
	}

	:global(html),
	:global(body),
	:global(#svelte),
	.outer-container {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		overflow: hidden;
		font-family: Objectivity, sans-serif;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(a) {
		color: var(--color-beta);
	}

	.outer-container {
		background-color: var(--color-alpha);
	}

	.inner-container {
		width: 100%;
		height: 100%;
		color: var(--color-beta);
		display: flex;
		position: relative;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0rem;
		border: none;
		user-select: none;
	}

	@media only screen and (min-width: 768px) {
		.inner-container {
			width: 450px;
			height: 700px;
			border: 2px solid var(--color-black);
			border-radius: 20px;
			padding: 1rem;
		}
	}
</style>
