import { create } from "zustand";

export const useStore = create((set, get) => {
  return {
    course: null
  }
})