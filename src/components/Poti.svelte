<script>
  export let title = '';
  export let stepsCount = 4;
  export let step = 1;

  const minAngle = -130;
  const maxAngle = 130;
  const stepAngle = (Math.abs(minAngle) + maxAngle) / (stepsCount - 1);
  const stepAngles = Array(stepsCount)
    .fill(0)
    .map((_, index) => Math.round(minAngle + index * stepAngle));

  const moveEvents = {
    touch: 'touchmove',
    other: 'pointermove'
  };

  const endEvents = {
    touch: 'touchend',
    other: 'pointerup'
  };

  let isTouch = false;
  let mouseDownY;
  let mouseDownAngle;

  const moveEvent = () => (isTouch ? moveEvents.touch : moveEvents.other);
  const endEvent = () => (isTouch ? endEvents.touch : endEvents.other);

  const handleMouseDown = (event) => {
    const { pointerType } = event;

    isTouch = pointerType === 'touch';

    mouseDownY = event.clientY;
    mouseDownAngle = stepAngles[step];

    document.addEventListener(moveEvent(), handleMouseMove);
    document.addEventListener(endEvent(), handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener(moveEvent(), handleMouseMove);
    document.removeEventListener(endEvent(), handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const dy = mouseDownY - e.pageY;

    let newAngle = mouseDownAngle + dy * 5;
    newAngle = Math.max(minAngle, Math.min(maxAngle, newAngle));

    const nearestStep = stepAngles.findIndex((angle) => {
      return newAngle - angle < stepAngle;
    });

    if (nearestStep !== step) {
      step = nearestStep;
    }
  };
</script>

<div class="container">
  <div class="poti-container" on:pointerdown={handleMouseDown}>
    <div class="stroke-container" style="transform: rotate({stepAngles[step]}deg)">
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
