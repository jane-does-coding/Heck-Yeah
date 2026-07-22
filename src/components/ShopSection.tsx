import { shopItems } from "@/lib/content";
import Sfx from "@/components/Sfx";

export default function ShopSection() {
	return (
		<section id="shop" className="px-6 py-14">
			<div className="mx-auto max-w-[80vw]">
				<div className="mb-2 flex flex-wrap items-center gap-5">
					<Sfx word="Loot!" className="rotate-[6deg]" />
					<div>
						<span className="mb-0 inline-block font-stamp text-[0.78rem] capitalize tracking-normal text-ink-soft">
							WS - We Ship
						</span>
						<h2 className="font-display text-[clamp(1.6rem,4vw,2.3rem)] uppercase mt-[-0.5vh]">
							The Shop
						</h2>
					</div>
				</div>
				<div className="mt-2.5 flex flex-wrap items-center justify-between gap-4">
					<p className="max-w-[62ch] text-ink-soft">
						Every honest hour you log earns you hours to spend right here. Ship
						more, get better prizes!
					</p>
					<a
						href="https://forms.hackclub.com/t/jAGuiLkx74us"
						target="_blank"
						rel="noopener noreferrer"
						className="comic-btn comic-btn-yellow flex-none"
					>
						Buy Now
					</a>
				</div>
				<div className="mt-8 grid gap-x-[4vw] gap-y-[4vh] sm:grid-cols-2 lg:grid-cols-3">
					{shopItems.map((item, i) => (
						<div
							key={item.name}
							className={`relative flex flex-col gap-2.5 border-[3px] border-ink bg-paper p-5 shadow-[4px_4px_0_var(--ink)] transition-transform duration-150 hover:-translate-y-1 hover:rotate-0 ${
								i % 2 === 0 ? "rotate-[-0.4deg]" : "rotate-[0.4deg]"
							}`}
						>
							<div className="font-display text-[1.05rem] uppercase tracking-wide">
								{item.name}
							</div>
							<p className="text-[0.9rem] text-ink-soft">{item.blurb}</p>
							<span className="mt-auto inline-block self-start border-2 border-ink bg-red px-2.5 py-1 font-stamp text-[0.78rem] uppercase tracking-wide text-white">
								{item.price}
							</span>
							<img
								src={item.img}
								className="w-[6vw] absolute top-[-2vw] right-[-2.5vw] rounded-[1vh]"
								alt=""
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
