import { create } from "zustand";
import { TimerStoreType } from "../types/TimerStoreTypes";

export const useTimerStore = create<TimerStoreType>((set, get) => ({
  minutes: 1,
  seconds: 0,
  editingTimer: false,
  timerId: null,
  excecuting: false,

  changeTimerEdition() {
    set((state) => ({ editingTimer: !state.editingTimer }));
  },
  startTimer() {
    const { calculateTimer, timerId } = get();
    if (timerId) return;
    set({ excecuting: true });
    const intervalId = setInterval(() => {
      calculateTimer();
    }, 1000);
    set({ timerId: intervalId });
  },

  stopTimer() {
    const { timerId } = get();
    if (timerId) {
      clearInterval(timerId);
      set({ timerId: null, excecuting: false , minutes : 0 , seconds : 0});
    }
  },
  calculateTimer() {
    const { minutes, seconds, stopTimer } = get();

    if (minutes === 0 && seconds === 0) {
      stopTimer();
      return;
    }

    if (seconds == 0) {
      set({ minutes: minutes - 1, seconds: 59 });
    } else {
      set({ seconds: seconds - 1 });
    }
  },
}));
