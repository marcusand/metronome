<div class="content">
	<slot />
</div>
<div class="back">
	<a href="/">back</a>
</div>

<style>
	.content {
		width: 100%;
		height: 100%;
		text-align: center;
		color: var(--color-black);
	}

	.back {
		position: absolute;
		font-size: 0.7rem;
		bottom: 2%;
	}
</style>
