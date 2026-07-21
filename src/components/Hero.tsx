import WeekendJam from "@/components/WeekendJam";

const strip = [
	{
		caption: "1. Idea sparks",
		svg: (
			<>
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
			</>
		),
	},
	{
		caption: "2. Draw + code",
		svg: (
			<>
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
			</>
		),
	},
	{
		caption: "3. Ship it",
		svg: (
			<path
				d="M24 4l6 14h14l-11 9 4 15-13-9-13 9 4-15-11-9h14z"
				fill="var(--yellow)"
				stroke="var(--ink)"
				strokeWidth="3"
			/>
		),
	},
	{
		caption: "4. Get prizes!",
		svg: (
			<>
				<rect
					x="8"
					y="18"
					width="32"
					height="22"
					rx="2"
					fill="none"
					stroke="var(--ink)"
					strokeWidth="3"
				/>
				<path
					d="M8 18l16 12 16-12"
					fill="none"
					stroke="var(--green)"
					strokeWidth="3"
				/>
				<circle cx="24" cy="10" r="4" fill="var(--red)" />
			</>
		),
	},
];

export default function Hero() {
	return (
		<section id="hero" className="px-6 pt-12">
			<div className="relative mx-auto max-w-5xl">
				<WeekendJam />
				<div className="comic-panel px-8 pb-14 pt-16 text-center sm:px-12 h-[80vh]">
					<div className="halftone" />
					<div
						aria-hidden
						className="burst-shape absolute left-1/2 top-[30px] z-0 h-[260px] w-[390px] -translate-x-1/2 rotate-[-6deg] bg-yellow opacity-90"
					/>
					<div className="relative z-10">
						<h1 className="comic-text font-display text-[clamp(4rem,12vw,8rem)] my-[2vh] leading-[0.98] uppercase">
							{" "}
							HACK <span className="text-red">YEAH!</span>
						</h1>
						{/* <div className="mt-3 font-stamp text-[clamp(0.9rem,2vw,1.05rem)] uppercase tracking-wide text-ink-soft">
              Draw it. Code it. Ship it.
            </div> */}
						<p className="mx-auto mt-16 max-w-[62ch] text-xl text-ink-soft">
							You Ship an{" "}
							<strong className="text-ink">interactive web comic</strong> - We
							Ship Prizes!
						</p>
						<p className="mx-auto mt-2 max-w-[62ch] text-lg text-ink-soft italic">
							Blanket, Linkedin Premium, Linkedin Recommendation Letter by
							Jenny, Comic Books Grant, Apple Pencil, Drawing Tablet,{" "}
							<strong className="text-ink">and more!</strong>
						</p>
						<div className="mt-8 flex flex-wrap justify-center gap-4">
							<a
								href="https://forms.hackclub.com/t/h8VuWULvxFus"
								target="_blank"
								rel="noopener noreferrer"
								className="comic-btn comic-btn-red"
							>
								Submit Your Comic
							</a>
							<a href="#ys" className="comic-btn comic-btn-alt">
								What Do I Build?
							</a>
							<a href="#shop" className="comic-btn comic-btn-alt">
								See The Shop
							</a>
						</div>

						<div
							aria-hidden
							className="mt-11 grid grid-cols-2 gap-3.5 sm:grid-cols-4"
						>
							{strip.map((frame) => (
								<div
									key={frame.caption}
									className="flex min-h-[132px] flex-col items-center justify-end gap-2 border-[3px] border-dashed bg-paper-dim px-2.5 pb-6 pt-3"
								>
									<svg viewBox="0 0 48 48" className="h-11 w-11">
										{frame.svg}
									</svg>
									<div className="font-stamp text-[0.68rem] capitalize tracking-wide text-ink-soft">
										{frame.caption}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
