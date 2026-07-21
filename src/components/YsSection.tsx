import Sfx from "@/components/Sfx";

const features = [
	"Panels that react to clicks or hovers",
	"Scroll-triggered reveals and animation",
	"Choose-your-own-path branching panels",
	"Sound, tiny embedded mini-games, whatever you can dream up",
];

export default function YsSection() {
	return (
		<section id="ys" className="px-6 py-14">
			<div className="mx-auto mb-7 flex max-w-5xl flex-wrap items-center gap-5">
				<Sfx word="Pow!" className="rotate-[-8deg]" />
				<div>
					<span className="mb-0 inline-block font-stamp text-[0.78rem] capitalize tracking-normal text-ink-soft">
						YS - You Ship
					</span>
					<h2 className="font-display text-[clamp(1.6rem,4vw,2.3rem)] uppercase mt-[-0.5vh]">
						Interactive Web Comics
					</h2>
				</div>
			</div>
			<div className="mx-auto grid max-w-5xl gap-7 lg:grid-cols-[1.1fr_0.9fr]">
				<div className="comic-panel rotate-[-0.6deg] p-8 sm:p-10">
					<div className="halftone" />
					<div className="relative z-10">
						<p className="mt-3.5 text-ink-soft">
							Build an interactive web comic that is fun to interact with! It's
							like #storyboard but on the web! Here are few things you can
							include on your website:
						</p>
						<ul className="mt-4 flex flex-col gap-2.5">
							{features.map((feature) => (
								<li key={feature} className="flex items-start gap-2.5">
									<span className="mt-1.5 h-2.5 w-2.5 flex-none rotate-45 bg-red" />
									<span>{feature}</span>
								</li>
							))}
						</ul>
						<p className="mt-3.5 text-[0.95rem] text-ink-soft">
							If a reader can{" "}
							<strong className="text-ink mx-[0.25vw]">do</strong> something to
							your comic that changes what happens next, you&rsquo;re on the
							right track. Any language or framework works - plain HTML/CSS/JS,
							React, Renpy, anything you'd like. Make sure to include your art
							in it too!
						</p>
					</div>
				</div>

				<div className="comic-panel rotate-[0.5deg] p-8 sm:p-10">
					<div className="halftone" />
					<div className="relative z-10">
						<span className="mb-2.5 inline-block font-stamp text-[0.78rem] capitalize tracking-normal text-ink-soft">
							The Grading Formula
						</span>
						<h3 className="font-display text-xl uppercase">Art vs. Website</h3>
						<div className="mt-4 border-[3px] border-dashed border-ink bg-paper-dim p-5">
							<div className="flex flex-wrap items-baseline justify-between gap-3 py-2.5">
								<span className="font-bold">High-quality website</span>
								<span className="font-stamp text-[0.95rem]">
									<b className="text-red">Art 40%</b> /{" "}
									<b className="text-blue">Site 60%</b>
								</span>
							</div>
							<div className="flex flex-wrap items-baseline justify-between gap-3 border-t-2 border-ink py-2.5">
								<span className="font-bold">Website&rsquo;s just alright</span>
								<span className="font-stamp text-[0.95rem]">
									<b className="text-red">Art 30%</b> /{" "}
									<b className="text-blue">Site 70%</b>
								</span>
							</div>
						</div>
						<p className="mt-3.5 text-[0.92rem] text-ink-soft">
							Translation: the more quality you put into the website, the better
							the user experience and the interactivity, the higher percent of
							art can be approved towards the project hours.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
