import { faqs } from "@/lib/content";
import Sfx from "@/components/Sfx";

const fronts = [
	"bg-yellow text-ink",
	"bg-blue text-white",
	"bg-red text-white",
	"bg-green text-white",
];
const tilts = [
	"rotate-[-1.1deg]",
	"rotate-[0.9deg]",
	"rotate-[-0.7deg]",
	"rotate-[1.2deg]",
];

export default function FaqSection() {
	return (
		<section id="faq" className="px-6 py-14">
			<div className="mx-auto max-w-5xl">
				<div className="mb-2 flex flex-wrap items-center gap-5">
					<Sfx word="Huh?" className="rotate-[-6deg]" />
					<div>
						<span className="mb-0 inline-block font-stamp text-[0.78rem] capitalize tracking-normal text-ink-soft">
							Ask Away
						</span>
						<h2 className="font-display text-[clamp(1.6rem,4vw,2.3rem)] uppercase mt-[-0.5vh]">
							FAQ
						</h2>
					</div>
				</div>
				<p className="mt-2.5 max-w-[62ch] text-ink-soft">
					Click a panel to flip it over. Click again to flip it back.
				</p>

				<div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{faqs.map((item, i) => (
						<label
							key={item.q}
							className={`flip-card block h-56 cursor-pointer select-none ${tilts[i % tilts.length]}`}
						>
							<input
								type="checkbox"
								className="sr-only"
								aria-label={`Reveal answer: ${item.q}`}
							/>
							<div className="flip-card-inner">
								<div
									className={`flip-card-face flex flex-col border-[3px] border-ink p-4 shadow-[4px_4px_0_var(--ink)] ${fronts[i % fronts.length]}`}
								>
									<span className="font-display text-2xl leading-none">Q</span>
									<p className="mt-2 flex-1 font-display text-base uppercase leading-tight tracking-wide">
										{item.q}
									</p>
									<span className="font-stamp text-[0.68rem] uppercase tracking-normal opacity-80">
										Tap to reveal ↴
									</span>
								</div>
								<div className="flip-card-face flip-card-back flex flex-col border-[3px] border-ink bg-paper p-4 shadow-[4px_4px_0_var(--ink)]">
									<span className="font-display text-2xl leading-none text-red">
										A
									</span>
									<p className="mt-2 flex-1 text-[0.86rem] text-ink-soft">
										{item.a}
									</p>
									<span className="font-stamp text-[0.68rem] uppercase tracking-normal text-ink-soft">
										Tap to flip back ↺
									</span>
								</div>
							</div>
						</label>
					))}
				</div>
			</div>
		</section>
	);
}
