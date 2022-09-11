<script lang="ts">
  import { store, actions } from '../store';

  import BpmInfo from './BpmInfo.svelte';
  import PlayButton from './PlayButton.svelte';
  import Poti from './Poti.svelte';
  import Slider from './Slider.svelte';
  import TapButton from './TapButton.svelte';

  let minBpm = 40;
  let maxBpm = 220;
</script>

<div class="metronome">
  <BpmInfo>{$store.bpm}</BpmInfo>
  <TapButton {minBpm} {maxBpm} onTap={actions.setBpm} />
  <Slider label="bpm" min={minBpm} max={maxBpm} bind:value={$store.bpm} />
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
  <div class="volume-slider">
    <Slider label="volume" min={0} max={100} bind:value={$store.volume} />
    <label for="volume-slider">volume</label>
  </div>
</div>

<style>
  .metronome {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    margin: 2.5rem 0;
  }

  .buttons {
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }

  .poti {
    margin-top: 1.5rem;
  }

  .volume-slider {
    width: 60%;
    display: flex;
    flex-direction: column;
  }

  .volume-slider label {
    text-align: center;
    color: var(--color-black);
  }
</style>
