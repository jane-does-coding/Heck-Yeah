import { ideas } from "@/lib/content";
import Sfx from "@/components/Sfx";

const tilts = ["rotate-[-0.7deg]", "rotate-[0.6deg]", "rotate-[-0.4deg]"];

export default function IdeasSection() {
	return (
		<section id="ideas" className="px-6 py-14">
			<div className="mx-auto max-w-5xl">
				<div className="mb-2 flex flex-wrap items-center gap-5">
					<Sfx word="Zap!" className="rotate-[7deg]" />
					<div>
						<span className="mb-0 inline-block font-stamp text-[0.78rem] capitalize tracking-normal text-ink-soft">
							Need A Spark?
						</span>
						<h2 className="font-display text-[clamp(1.6rem,4vw,2.3rem)] uppercase mt-[-0.5vh]">
							Ideas To Steal (Or Wreck)
						</h2>
					</div>
				</div>
				<p className="mt-2.5 max-w-[62ch] text-ink-soft">
					You don&rsquo;t have to use any of these. Warp them, combine them, or
					ignore them completely.
				</p>
				<div className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
					{ideas.map((idea, i) => (
						<div
							key={idea.title}
							className={`thought-bubble transition-transform duration-150 hover:rotate-0 ${tilts[i % tilts.length]}`}
						>
							<h3 className="font-display text-[0.95rem] uppercase tracking-wide">
								{idea.title}
							</h3>
							<p className="mt-2 text-[0.94rem] text-ink-soft">{idea.body}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
