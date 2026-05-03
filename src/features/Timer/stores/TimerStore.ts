import { create } from "zustand";
import { TimerStoreType } from "../types/TimerStoreTypes";

export const useTimerStore = create<TimerStoreType>((set , get)=> ({
    minutes : 12,
    seconds : 0o0,
    editingTimer : false,
    changeTimerEdition() {
        const {editingTimer} = get() 
        set({editingTimer : !editingTimer})
    },
}))