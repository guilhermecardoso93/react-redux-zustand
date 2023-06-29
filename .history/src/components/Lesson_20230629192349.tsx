import { Video } from "lucide-react";

interface LessonProps {
  title: string;
  duration: string;
  onPlay: () => void;
  isCurrent?: boolean;
}

export function Lesson({ title, duration, onPlay, isCurrent = false }: LessonProps) {
  return (
    <button
      className="flex items-center gap-3 text-sm text-zinc-400"
      onClick={onPlay}
    >
      <Video className="w-4 h-4 text-zinc-500" />
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  );
}
