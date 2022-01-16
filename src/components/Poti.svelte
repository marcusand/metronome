<script>
	export let title = '';
	export let stepsCount = 4;
	export let initialStep = 0;
	export let onChange = (currentStep) => {};

	const minAngle = -130;
	const maxAngle = 130;
	const stepAngle = (Math.abs(minAngle) + maxAngle) / (stepsCount - 1);
	const stepAngles = Array(stepsCount)
		.fill(0)
		.map((_, index) => Math.round(minAngle + index * stepAngle));

	let currentStep = initialStep;
	let mouseDownY;
	let mouseDownAngle;

	const handleMouseDown = (event) => {
		mouseDownY = event.clientY;
		mouseDownAngle = stepAngles[currentStep];

		document.addEventListener('pointermove', handleMouseMove);
		document.addEventListener('pointerup', handleMouseUp);
	};

	const handleMouseUp = () => {
		document.removeEventListener('pointerup', handleMouseUp);
		document.removeEventListener('pointermove', handleMouseMove);
	};

	const handleMouseMove = (e) => {
		const dy = mouseDownY - e.clientY;

		let newAngle = mouseDownAngle + dy * 2;
		newAngle = Math.max(minAngle, Math.min(maxAngle, newAngle));

		const nearestStep = stepAngles.findIndex((angle) => {
			return newAngle - angle < stepAngle / 2;
		});

		if (nearestStep !== currentStep) {
			currentStep = nearestStep;
			onChange(currentStep);
		}
	};
</script>

<div class="container">
	<div class="poti-container" on:pointerdown={handleMouseDown}>
		<div class="stroke-container" style="transform: rotate({stepAngles[currentStep]}deg)">
			<div class="stroke" />
		</div>
		<div>{currentStep + 1}</div>
	</div>
	<div class="title">{title}</div>
</div>

<style>
	.container {
		margin: 1.5rem;
	}

	.poti-container {
		--size: 50px;

		width: var(--size);
		height: var(--size);
		margin-bottom: 0.25rem;

		border: 2px solid var(--color-black);
		border-radius: 50%;

		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.stroke-container {
		width: 100%;
		height: 100%;
		position: absolute;
	}

	.stroke {
		width: 2px;
		height: calc(var(--size) / 4);
		background-color: var(--color-black);
		position: absolute;
		left: 50%;
		transform: translate(-50%, 0);
	}

	.title {
		text-align: center;
		color: var(--color-black);
	}
</style>
