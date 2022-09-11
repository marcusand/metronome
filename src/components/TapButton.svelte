<script lang="ts">
  export let onTap: (value: number) => void;
  export let minBpm: number;
  export let maxBpm: number;

  let flip = false;
  let lastTap: number;

  const tap = () => {
    flip = !flip;
    const currentTap = Date.now();

    if (lastTap) {
      const diff = (currentTap - lastTap) / 1000;
      const bpm = Math.min(Math.round(60 / diff), maxBpm);

      if (bpm >= minBpm) onTap(bpm);
    }

    lastTap = currentTap;
  };
</script>

<div
  class="container"
  style="transform: {flip ? 'scale(-1,1)' : 'scale(1,1)'};"
  on:click={tap}
>
  tap
</div>

<style>
  .container {
    cursor: pointer;
    font-size: 2rem;
  }
</style>
