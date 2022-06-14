<script>
  export let min;
  export let max;
  export let value;
  export let label;

  const sliderId = `${label}-slider`;
</script>

<div class="container">
  <input class="button" type="button" value="-" on:click={() => (value -= 1)} />
  <input id={sliderId} class="slider" type="range" {min} {max} bind:value />
  <input class="button" type="button" value="+" on:click={() => (value += 1)} />
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
    --thumb-size: 25px;
  }

  @media only screen and (min-width: 768px) {
    .slider {
      --thumb-size: 15px;
    }
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
