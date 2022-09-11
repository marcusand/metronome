import { createScheduler } from './createScheduler';
import { decodeAudioBuffer } from './decodeAudioBuffer';
import { fetchAsArrayBuffer } from './fetchAsArrayBuffer';

type SampleSet = [string, string];

export type CreateMetronomeConfig = {
  samples: SampleSet[];
};

export type Metronome = {
  play: () => void;
  pause: () => void;
  destroy: () => void;
  setBpm: (value: number) => void;
  setVolume: (value: number) => void;
  setSampleSet: (value: number) => void;
  setTimeSignature: (value: number) => void;
  loadSamples: () => Promise<void>;
};

export type CreateMetronome = (config: CreateMetronomeConfig) => Metronome;

export const createMetronome: CreateMetronome = ({ samples }) => {
  let sampleSet = 0;
  let timeSignature = 3;
  let samplesLoaded = false;
  let sampleBuffers: AudioBuffer[];
  const audioContext: AudioContext = new window.AudioContext();
  const gainNode = audioContext.createGain();
  const scheduler = createScheduler({
    audioContext,
    bpm: 80,
    onTick: (count, when) => {
      const beat = count % (timeSignature + 1);
      const accent = beat === 0 ? 1 : 0;
      const sample = sampleBuffers[sampleSet * 2 + accent];

      playSample(sample, when);
    },
  });

  const loadSamples = async () => {
    const arrayBuffers = await Promise.all(
      samples
        .map(([sample1, sample2]) => [fetchAsArrayBuffer(sample1), fetchAsArrayBuffer(sample2)])
        .flat(),
    );

    const audioBuffers = await Promise.all(
      arrayBuffers.map((buffer) => decodeAudioBuffer(audioContext, buffer)),
    );

    sampleBuffers = audioBuffers;
    samplesLoaded = true;
  };

  const playSample = (buffer: AudioBuffer, when: number): void => {
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(gainNode);
    gainNode.connect(audioContext.destination);
    source.start(when);
  };

  const play = () => {
    if (!samplesLoaded) return;
    scheduler.start();
  };

  const pause = () => {
    scheduler.stop();
  };

  const destroy = () => {
    audioContext.close();
  };

  const setBpm = (value: number) => {
    scheduler.setBpm(value);
  };

  const setSampleSet = (value: number) => {
    sampleSet = value;
  };

  const setTimeSignature = (value: number) => {
    timeSignature = value;
  };

  const setVolume = (value: number) => {
    gainNode.gain.value = value / 100;
  };

  return {
    play,
    pause,
    destroy,
    setBpm,
    setSampleSet,
    setTimeSignature,
    setVolume,
    loadSamples,
  };
};
