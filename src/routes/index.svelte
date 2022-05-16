<script>
  import NoSleep from 'nosleep.js';
  import { onDestroy, onMount } from 'svelte';
  import Metronome from '../components/Metronome.svelte';

  let noSleep;

  const enableNoSleep = () => {
    document.removeEventListener('click', enableNoSleep);
    noSleep.enable();
  };

  onMount(() => {
    noSleep = new NoSleep();
    document.addEventListener('click', enableNoSleep);
  });

  onDestroy(() => {
    if (noSleep) noSleep.disable();
  });
</script>

<Metronome />

<div class="menu">
  <a href="/about">about</a>
</div>

<style>
  .menu {
    position: absolute;
    bottom: 2%;
    font-size: 0.7rem;
  }
</style>
