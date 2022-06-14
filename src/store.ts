import { writable } from 'svelte/store';

const localStorageItemName = 'metronome-state';

interface MetronomeState {
  playing: boolean;
  bpm: number;
  sampleSet: number;
  timeSignature: number;
  volume: number;
}

const defaultState: MetronomeState = {
  playing: false,
  bpm: 80,
  sampleSet: 0,
  timeSignature: 4,
  volume: 100
};

export const store = writable(defaultState);

const tryLoadingStateFromLocalStorage = (): void => {
  try {
    const localState = localStorage.getItem(localStorageItemName);
    const localStateObject = JSON.parse(localState);

    /**
     * we don't want autoplay so always set playing to false
     *  no matter what the last state was
     */
    store.set({
      ...localStateObject,
      playing: false
    });

    updateLocalStorageOnStateChange();
  } catch (error) {
    console.warn('Loading from local storage was not successful: ', error);
  }
};

const updateLocalStorageOnStateChange = () => {
  store.subscribe((value) => {
    localStorage.setItem(localStorageItemName, JSON.stringify(value));
  });
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
  setVolume,
  setSampleSet,
  setTimeSignature,
  setBpm,
  setPlaying,
  tryLoadingStateFromLocalStorage
};
