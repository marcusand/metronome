<script lang="ts">
  import Play from '../assets/icons/play.svelte';
  import Pause from '../assets/icons/pause.svelte';

  export let playing: boolean;
  export let onPlay: () => void;
  export let onPause: () => void;

  const handleClick = () => {
    playing ? onPause() : onPlay();
  };
</script>

<div class="container" on:click={handleClick}>
  <div class="icon-container">
    {#if playing}<Pause />{:else}<Play />{/if}
  </div>
</div>

<style>
  .container {
    --size: 4rem;

    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    border: 2px solid var(--color-black);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .icon-container {
    --size: 2rem;

    width: var(--size);
    height: var(--size);
  }
</style>
