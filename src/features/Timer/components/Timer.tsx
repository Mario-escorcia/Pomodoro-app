"use client";

import { useTimerStore } from "../stores/TimerStore";

export const Timer = () => {
  const minutes = useTimerStore((state) => state.minutes);
  const seconds = useTimerStore((state) => state.seconds);
  const isEditing = useTimerStore((state) => state.editingTimer);
  const changeTimerEdition = useTimerStore((state) => state.changeTimerEdition);

  return (
    <section className=" flex-1 w-full flex flex-col items-center justify-center gap-6">
      <div className=" w-70 h-70 rounded-full border-2 border-white flex items-center justify-center text-6xl text-white">
        {minutes}:{String(seconds).padStart(2, "0")}
      </div>
      <div className="flex gap-4 flex-wrap">
        {!isEditing ? (
          <>
            <button className="border border-white w-40 rounded-lg h-8 cursor-pointer text-white hover:bg-white hover:text-black transition-colors text-sm">
              Start
            </button>
            <button
              onClick={changeTimerEdition}
              className="border border-white w-40 rounded-lg h-8 cursor-pointer text-white hover:bg-white hover:text-black transition-colors text-sm"
            >
              Edit Time duration
            </button>{" "}
          </>
        ) : (
          <div className=" w-full flex gap-2 flex-wrap justify-center">
            <button className="border border-white w-40 rounded-lg h-8 cursor-pointer text-white hover:bg-white hover:text-black transition-colors text-sm">Add 1 Minute</button>
            <button className="border border-white w-40 rounded-lg h-8 cursor-pointer text-white hover:bg-white hover:text-black transition-colors text-sm">Add 5 Minute</button>
            <button className="border border-white w-40 rounded-lg h-8 cursor-pointer text-white hover:bg-white hover:text-black transition-colors text-sm">Add 10 Minute</button>
            <input type="number" placeholder="Add custom time" className=" no-spin border border-white w-40 rounded-lg h-8 text-white  text-sm text-right px-4"/>
          </div>
        )}
      </div>
    </section>
  );
};
