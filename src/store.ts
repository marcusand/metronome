import { createMetronome, type Metronome } from '$lib/createMetronome';
import { writable } from 'svelte/store';
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage';

const localStorageItemName = 'metronome-state';

let metronome: Metronome | undefined;

interface MetronomeState {
  playing: boolean;
  bpm: number;
  sampleSet: number;
  timeSignature: number;
  volume: number;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const defaultState: MetronomeState = {
  playing: false,
  bpm: 80,
  sampleSet: 0,
  timeSignature: 4,
  volume: 100,
  loading: 'idle'
};

const localStorageState = loadFromLocalStorage<MetronomeState>(localStorageItemName);

export const store = writable(localStorageState ?? defaultState);

store.subscribe((state: MetronomeState) => {
  if (metronome) {
    metronome.setBpm(state.bpm);
    metronome.setTimeSignature(state.timeSignature + 1);
    metronome.setSampleSet(state.sampleSet);
    metronome.setVolume(state.volume);
    state.playing ? metronome.play() : metronome.pause();
    saveToLocalStorage(state, localStorageItemName);
  }
});

const initializeMetronome = async (): Promise<void> => {
  store.update((state) => ({ ...state, loading: 'pending' }));

  try {
    metronome = createMetronome({
      samples: [
        ['/audio/wood.mp3', '/audio/wood-accent.mp3'],
        ['/audio/hihat.mp3', '/audio/hihat-accent.mp3'],
        ['/audio/cowbell.mp3', '/audio/cowbell-accent.mp3']
      ]
    });

    await metronome.loadSamples();

    store.update((state) => ({ ...state, playing: false, loading: 'succeeded' }));
  } catch (error) {
    console.warn(error);

    store.update((state) => ({ ...state, loading: 'failed' }));
  }
};

const destroyMetronome = (): void => {
  if (metronome) {
    metronome.destroy();
    metronome === undefined;
  }

  store.update((state) => ({ ...state, loading: 'idle' }));
};

const setVolume = (value: number): void => {
  store.update((state) => ({
    ...state,
    volume: value
  }));
};

const setSampleSet = (value: number): void => {
  store.update((state) => ({
    ...state,
    sampleSet: value
  }));
};

const setTimeSignature = (value: number): void => {
  store.update((state) => ({
    ...state,
    timeSignature: value
  }));
};

const setBpm = (value: number): void => {
  store.update((state) => ({ ...state, bpm: value }));
};

const setPlaying = (value: boolean): void => {
  store.update((state) => ({ ...state, playing: value }));
};

export const actions = {
  initializeMetronome,
  destroyMetronome,
  setVolume,
  setSampleSet,
  setTimeSignature,
  setBpm,
  setPlaying
};
