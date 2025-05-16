import { create } from "zustand";

export const useBearStore = create((set) => ({
  dataSelect: [],
  increasePopulation: (data) =>
    set((state) => ({
      dataSelect: data.condition
        ? state.dataSelect[0]?.condition === data.condition
          ? state.dataSelect
          : [...state.dataSelect, data]
        : state.dataSelect.some((item) => item.questionId === data.questionId)
        ? state.dataSelect.map((item) =>
            item.questionId === data.questionId ? { ...item, ...data } : item
          )
        : [...state.dataSelect, data],
    })),
}));
