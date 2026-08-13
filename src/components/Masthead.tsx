import { meta } from "@/lib/content";

export default function Masthead() {
	return (
		<header className="sticky top-0 z-40 border-b border-white/[0.09] bg-void/95">
			<div className="mx-auto flex max-w-[74rem] items-center justify-between gap-6 px-4 py-3 sm:px-6">
				<a
					href="#brief"
					className="text-[0.9375rem] font-extrabold text-paper"
				>
					Hack Yeah<span className="text-mustard">!</span>
				</a>

				<a
					href={meta.submitUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="stamp-sm border border-white/25 px-3.5 py-2 text-paper transition-colors hover:border-mustard hover:text-mustard"
				>
					Submit
				</a>
			</div>
		</header>
	);
}
