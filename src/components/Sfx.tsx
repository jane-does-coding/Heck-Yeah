export default function Sfx({
  word,
  className = "",
}: {
  word: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`burst-shape inline-grid h-16 w-16 flex-none place-items-center bg-yellow text-center font-display text-[0.75rem] uppercase leading-none text-ink sm:h-20 sm:w-20 sm:text-[0.85rem] ${className}`}
    >
      {word}
    </span>
  );
}
