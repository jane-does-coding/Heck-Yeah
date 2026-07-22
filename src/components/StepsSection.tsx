import { Fragment } from "react";
import { steps } from "@/lib/content";
import Sfx from "@/components/Sfx";

const stepIcons = [
	<Fragment key="idea">
		<circle
			cx="24"
			cy="16"
			r="10"
			fill="none"
			stroke="var(--ink)"
			strokeWidth="3"
		/>
		<path
			d="M8 44c2-14 10-20 16-20s14 6 16 20"
			fill="none"
			stroke="var(--ink)"
			strokeWidth="3"
		/>
		<path d="M12 12l6 6M36 12l-6 6" stroke="var(--red)" strokeWidth="3" />
	</Fragment>,
	<Fragment key="code">
		<rect
			x="6"
			y="10"
			width="36"
			height="26"
			fill="none"
			stroke="var(--ink)"
			strokeWidth="3"
		/>
		<path
			d="M12 22l6 6-6 6M26 34h10"
			stroke="var(--blue)"
			strokeWidth="3"
			fill="none"
		/>
	</Fragment>,
	<Fragment key="clock">
		<circle
			cx="24"
			cy="24"
			r="17"
			fill="none"
			stroke="var(--ink)"
			strokeWidth="3"
		/>
		<path
			d="M24 14v10l8 5"
			fill="none"
			stroke="var(--red)"
			strokeWidth="3"
			strokeLinecap="round"
		/>
	</Fragment>,
	<path
		key="ship"
		d="M24 4l6 14h14l-11 9 4 15-13-9-13 9 4-15-11-9h14z"
		fill="var(--yellow)"
		stroke="var(--ink)"
		strokeWidth="3"
	/>,
	<Fragment key="coins">
		<circle
			cx="19"
			cy="26"
			r="13"
			fill="var(--yellow)"
			stroke="var(--ink)"
			strokeWidth="3"
		/>
		<circle
			cx="30"
			cy="18"
			r="13"
			fill="none"
			stroke="var(--ink)"
			strokeWidth="3"
		/>
		<path
			d="M15 26h8"
			stroke="var(--ink)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
	</Fragment>,
];

const areas = ["p1", "p2", "p3", "p4", "p5"];
const cuts = [
	"cut-corner-bl",
	"cut-corner-tr",
	"cut-corner-tr",
	"cut-corner-bl",
	"cut-corner-tr",
];

export default function StepsSection() {
	return (
		<section id="steps" className="py-10">
			<div className="mx-auto max-w-5xl px-6">
				<div className="mb-5 flex flex-wrap items-center gap-5">
					<Sfx word="Go!" className="rotate-[-9deg]" />
					<div>
						<span className="mb-1 inline-block font-stamp text-[0.78rem] capitalize tracking-normal text-ink-soft">
							Page By Page
						</span>
						<h2 className="font-display text-[clamp(1.6rem,4vw,2.3rem)] uppercase mt-[-0.5vh]">
							How It Works
						</h2>
					</div>
				</div>
			</div>

			<div className="w-full bg-ink px-1.5 py-1.5 sm:px-2.5 sm:py-2.5">
				<div className="comic-page-grid relative">
					<Sfx
						word="Pow!"
						className="absolute left-1/2 top-0 z-20 hidden -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] sm:inline-grid"
					/>
					<Sfx
						word="Boom!"
						className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 rotate-[8deg] sm:inline-grid"
					/>
					<Sfx
						word="Yeah!"
						className="absolute right-[15vw] top-1/2 z-20 hidden -translate-y-1/2 rotate-[12deg] sm:inline-grid"
					/>

					{steps.map((step, i) => {
						const isFinale = i === 4;
						return (
							<div
								key={step.title}
								style={{ gridArea: areas[i] }}
								className={`relative flex flex-col items-center px-6 py-5 text-center sm:py-6 bg-paper ${cuts[i]} ${
									isFinale ? "justify-center sm:px-4" : ""
								}`}
							>
								<div className="halftone" />
								{i === 1 && <div className="speed-lines" />}
								<span className="step-num-outline absolute left-3 top-2 z-10 font-display text-2xl leading-none sm:text-3xl">
									{i + 1}
								</span>
								<div className="relative z-10 mt-1 flex h-12 w-12 flex-none items-center justify-center border-[3px] border-ink bg-paper-dim sm:mt-2 sm:h-14 sm:w-14">
									<svg viewBox="0 0 48 48" className="h-7 w-7 sm:h-8 sm:w-8">
										{stepIcons[i]}
									</svg>
								</div>
								<div className="relative z-10">
									<h3 className="mt-2 font-display text-base uppercase tracking-wide sm:mt-3 sm:text-lg">
										{step.title}
									</h3>
									<p className="mt-1 text-[0.9rem] text-ink-soft sm:mt-1.5">
										{step.body}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
