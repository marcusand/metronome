<script>
  import { store, actions } from '../store';
  import { createMetronome } from '$lib/createMetronome';
  import { onDestroy, onMount } from 'svelte';

  import BpmInfo from './BpmInfo.svelte';
  import PlayButton from './PlayButton.svelte';
  import Poti from './Poti.svelte';
  import RowContainer from './RowContainer.svelte';
  import Slider from './Slider.svelte';
  import TapButton from './TapButton.svelte';

  let metronome;
  let minBpm = 40;
  let maxBpm = 220;

  const toggleMetronome = (event) => {
    const { code } = event;

    if (code === 'Space') {
      actions.setPlaying(!$store.playing);
    }
  };

  onMount(() => {
    document.addEventListener('keydown', toggleMetronome);
    return () => document.removeEventListener('keydown', toggleMetronome);
  });

  onMount(() => {
    metronome = createMetronome({
      samples: [
        ['/audio/wood.mp3', '/audio/wood-accent.mp3'],
        ['/audio/hihat.mp3', '/audio/hihat-accent.mp3'],
        ['/audio/cowbell.mp3', '/audio/cowbell-accent.mp3']
      ]
    });

    actions.tryLoadingStateFromLocalStorage();
  });

  onDestroy(() => {
    metronome?.destroy();
  });

  $: {
    if (metronome) {
      metronome.setBpm($store.bpm);
      metronome.setTimeSignature($store.timeSignature + 1);
      metronome.setSampleSet($store.sampleSet);
      metronome.setVolume($store.volume / 100);
      $store.playing ? metronome.play() : metronome.pause();
    }
  }
</script>

<RowContainer><BpmInfo>{$store.bpm}</BpmInfo></RowContainer>
<RowContainer><TapButton {minBpm} {maxBpm} onTap={actions.setBpm} /></RowContainer>
<RowContainer width="100%">
  <Slider label="bpm" min={minBpm} max={maxBpm} bind:value={$store.bpm} />
</RowContainer>
<RowContainer width="60%">
  <div class="buttons">
    <div class="poti">
      <Poti title="time" stepsCount={12} bind:step={$store.timeSignature} />
    </div>
    <PlayButton
      playing={$store.playing}
      onPause={() => actions.setPlaying(false)}
      onPlay={() => actions.setPlaying(true)}
    />
    <div class="poti">
      <Poti title="sound" stepsCount={3} bind:step={$store.sampleSet} />
    </div>
  </div>
</RowContainer>
<RowContainer width="60%">
  <div class="volume-slider">
    <Slider label="volume" min={0} max={100} bind:value={$store.volume} />
    <label for="volume-slider">volume</label>
  </div>
</RowContainer>

<style>
  .buttons {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }

  .poti {
    margin-top: 1.5rem;
  }

  .volume-slider {
    display: flex;
    flex-direction: column;
  }

  .volume-slider label {
    text-align: center;
    color: var(--color-black);
  }
</style>
