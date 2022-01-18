<div class="content">
	<slot />
</div>
<div class="back">
	<a href="/">back</a>
</div>

<style>
	.content {
		text-align: center;
		color: var(--color-black);
	}

	.back {
		position: absolute;
		bottom: 5%;
	}
</style>
