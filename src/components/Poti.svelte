<script lang="ts">
  export let title = '';
  export let stepsCount = 4;
  export let step = 1;

  const minAngle = -130;
  const maxAngle = 130;
  const angleOfOneStep = (Math.abs(minAngle) + maxAngle) / (stepsCount - 1);

  let mouseDownY: number;
  let mouseDownStep: number;

  const handlePointerDown = (event: PointerEvent) => {
    mouseDownY = event.clientY;
    mouseDownStep = step;

    if (event.pointerType === 'touch') {
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    } else {
      document.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('pointerup', handlePointerUp);
    }
  };

  const handleTouchEnd = (event: TouchEvent) => {
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };

  const handlePointerUp = (event: PointerEvent) => {
    document.removeEventListener('pointermove', handlePointerMove);
    document.removeEventListener('pointerup', handlePointerUp);
  };

  const handleTouchMove = (event: TouchEvent) => {
    handleMove(event.targetTouches[0].pageY);
  };

  const handlePointerMove = (event: PointerEvent) => {
    handleMove(event.pageY);
  };

  const handleMove = (yPosition: number) => {
    const dy = mouseDownY - yPosition;
    const dStep = Math.round(dy * (stepsCount * 0.01));
    const newStep = mouseDownStep + dStep;
    const newStepCapped = Math.min(Math.max(newStep, 0), stepsCount - 1);

    step = newStepCapped;
  };
</script>

<div class="container">
  <div class="poti-container" on:pointerdown={handlePointerDown}>
    <div
      class="stroke-container"
      style="transform: rotate({minAngle + step * angleOfOneStep}deg)"
    >
      <div class="stroke" />
    </div>
    <div>{step + 1}</div>
  </div>
  <div class="title">{title}</div>
</div>

<style>
  .poti-container {
    --size: 3rem;

    width: var(--size);
    height: var(--size);
    margin-bottom: 0.25rem;
    border: 2px solid var(--color-black);
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    -webkit-touch-callout: none !important;
    -webkit-user-select: none;
    user-select: none;
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
