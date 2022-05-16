export type CreateSchedulerConfig = {
  audioContext: AudioContext;
  timeoutLookahead?: number;
  schedulerLookhead?: number;
  bpm: number;
  onTick: (count: number, when: number) => void;
};

export type Scheduler = {
  setBpm: (value: number) => void;
  start: () => void;
  stop: () => void;
};

export type CreateScheduler = (config: CreateSchedulerConfig) => Scheduler;

export const createScheduler: CreateScheduler = (config) => {
  const timeoutLookahead = config.timeoutLookahead ?? 25;
  const schedulerLookahead = config.schedulerLookhead ?? 0.1;
  const audioContext = config.audioContext;
  const onTick = config.onTick;
  let bpm = config.bpm;

  let nextNoteTime: number;
  let timeoutId: NodeJS.Timeout;
  let count = 0;

  const schedule = () => {
    while (nextNoteTime < audioContext.currentTime + schedulerLookahead) {
      onTick(count, nextNoteTime);
      nextNoteTime += 60 / bpm;
      count++;
    }

    timeoutId = setTimeout(schedule, timeoutLookahead);
  };

  const start = () => {
    if (timeoutId === undefined) {
      nextNoteTime = audioContext.currentTime;
      schedule();
    }
  };

  const stop = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
      count = 0;
    }
  };

  const setBpm = (value: number) => {
    bpm = value;
  };

  return {
    start,
    stop,
    setBpm
  };
};
