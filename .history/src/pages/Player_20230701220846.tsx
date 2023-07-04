import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../store";
import { loadCourse, start, useCurrentLesson } from "../store/slices/player";

import { Header } from "../components/Header";
import { PlayerVideo } from "../components/PlayerVideo";
import { FeedBackButton } from "../components/FeedBackButton";
import { Module } from "../components/Module";

export function Player() {
  const modules = useAppSelector((state) => {
    return state.player.course?.modules;
  });

  const dispatch = useAppDispatch();
  const { currentLesson } = useCurrentLesson();

  useEffect(() => {
    dispatch(loadCourse())
  }, []);

  useEffect(() => {
    if (currentLesson) {
      document.title = `Assistindo: ${currentLesson?.title}`;
    }
  }, [currentLesson]);

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />

          <FeedBackButton />
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <PlayerVideo />
          </div>
          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {modules &&
              modules.map((module: any, index: any) => {
                return (
                  <Module
                    key={module.id}
                    moduleIndex={index}
                    title={module.title}
                    amountOfLessons={module.lessons.length}
                  />
                );
              })}
          </aside>
        </main>
      </div>
    </div>
  );
}
