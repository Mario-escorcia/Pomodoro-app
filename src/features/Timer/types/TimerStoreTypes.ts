export type TimerStoreType = {
  minutes: number;
  seconds: number;
  editingTimer: boolean;
  timerId: number | null | NodeJS.Timeout;
  excecuting : boolean;
  changeTimerEdition: () => void;
  calculateTimer: () => void;
  startTimer: () => void;
  stopTimer: () => void;
};
