import { create } from "zustand";

interface Course {
  id: number;
  modules: Array<{
    id: number;
    title: string;
    lessons: Array<{
      id: string;
      title: string;
      duration: string;
    }>;
  }>;
}

export interface PlayerState {
  course: Course | null;
  currentModuleIndex: number;
  currentLessonIndex: number;
  isLoading: boolean;
}

export const useStore = create<PlayerState>((set, get) => {
  return {
    course: null,
    currentModuleIndex: 0,
    currentLessonIndex: 0,
    isLoading: false,
  };
});
