<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import NoSleep from 'nosleep.js';
  import Footer from '../components/Footer.svelte';
  import Metronome from '../components/Metronome.svelte';

  let noSleep = new NoSleep();

  const enableNoSleep = () => {
    document.removeEventListener('click', enableNoSleep);
    noSleep.enable();
  };

  onMount(() => {
    document.addEventListener('click', enableNoSleep);
  });

  onDestroy(() => {
    if (noSleep) noSleep.disable();
  });
</script>

<Metronome />
<Footer>
  <a href="/about">about</a>
</Footer>
