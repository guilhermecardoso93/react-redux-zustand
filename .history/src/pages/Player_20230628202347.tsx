import { Header } from "../components/Header";
import { PlayerVideo } from "../components/PlayerVideo";
import { FeedBackButton } from "../components/FeedBackButton";
import { ChevronDown, Video } from "lucide-react";

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          {/* Header */}
          <Header />
          <FeedBackButton />
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <PlayerVideo />
          </div>
          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            <div>
              <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
                  1
                </div>

                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Desvendando o Redux</strong>
                  <span className="text-xs text-zinc-400">12 aulas</span>
                </div>

                <ChevronDown className="w-5 h-5 ml-auto text-zinc-400" />
              </button>
            </div>

            <div>
              <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
                  1
                </div>

                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Desvendando o Redux</strong>
                  <span className="text-xs text-zinc-400">12 aulas</span>
                </div>

                <ChevronDown className="w-5 h-5 ml-auto text-zinc-400" />
              </button>

              <nav className="relative flex flex-col gap-4 p-6">
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:13
                  </span>
                </button>

                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:13
                  </span>
                </button>

                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:13
                  </span>
                </button>
              </nav>
            </div>

            <div>
              <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
                  1
                </div>

                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Desvendando o Redux</strong>
                  <span className="text-xs text-zinc-400">12 aulas</span>
                </div>

                <ChevronDown className="w-5 h-5 ml-auto text-zinc-400" />
              </button>

              <nav className="relative flex flex-col gap-4 p-6">
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:13
                  </span>
                </button>

                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:13
                  </span>
                </button>

                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:13
                  </span>
                </button>
              </nav>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
