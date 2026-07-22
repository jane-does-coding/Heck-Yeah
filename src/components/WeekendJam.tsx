"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import {
	weekendJamStory,
	weekendJamInfo,
	weekendJamPrizes,
} from "@/lib/content";

const storyIcons = [
	<Fragment key="tired">
		<rect
			x="10"
			y="14"
			width="28"
			height="18"
			rx="1"
			fill="none"
			stroke="var(--ink)"
			strokeWidth="3"
		/>
		<path
			d="M16 22h4M28 22h4"
			stroke="var(--ink)"
			strokeWidth="3"
			strokeLinecap="round"
		/>
		<path
			d="M32 8a5 5 0 1 0 4 8 6 6 0 0 1-4-8z"
			fill="var(--yellow)"
			stroke="var(--ink)"
			strokeWidth="2"
		/>
	</Fragment>,
	<Fragment key="lyre">
		<path
			d="M14 40V22a10 10 0 0 1 20 0v18"
			fill="none"
			stroke="var(--ink)"
			strokeWidth="3"
			strokeLinecap="round"
		/>
		<path
			d="M14 40h6M28 40h6"
			stroke="var(--ink)"
			strokeWidth="3"
			strokeLinecap="round"
		/>
		<path d="M20 16v22M24 14v24M28 16v22" stroke="var(--red)" strokeWidth="2" />
	</Fragment>,
	<Fragment key="sunrise">
		<path
			d="M6 32h36"
			stroke="var(--ink)"
			strokeWidth="3"
			strokeLinecap="round"
		/>
		<path
			d="M14 32a10 10 0 0 1 20 0"
			fill="var(--yellow)"
			stroke="var(--ink)"
			strokeWidth="3"
		/>
		<path
			d="M24 6v6M11 15l4 4M37 15l-4 4"
			stroke="var(--ink)"
			strokeWidth="2.5"
			strokeLinecap="round"
		/>
	</Fragment>,
	<Fragment key="idea">
		<circle
			cx="24"
			cy="19"
			r="11"
			fill="var(--yellow)"
			stroke="var(--ink)"
			strokeWidth="3"
		/>
		<path
			d="M20 34h8M21 38h6"
			stroke="var(--ink)"
			strokeWidth="3"
			strokeLinecap="round"
		/>
		<path
			d="M24 4v4M8 19h4M36 19h4M12 7l3 3M36 7l-3 3"
			stroke="var(--ink)"
			strokeWidth="2"
			strokeLinecap="round"
		/>
	</Fragment>,
	<path
		key="burst"
		d="M24 2l4 12 12-4-8 10 8 10-12-4-4 12-4-12-12 4 8-10-8-10 12 4z"
		fill="var(--red)"
		stroke="var(--ink)"
		strokeWidth="2.5"
	/>,
];

const accentClasses: Record<string, string> = {
	yellow: "bg-yellow",
	blue: "bg-blue text-white",
	dim: "bg-paper-dim",
};

export default function WeekendJam() {
	const [open, setOpen] = useState(false);
	const closeRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(false);
		};
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		closeRef.current?.focus();
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [open]);

	return (
		<>
			<button
				type="button"
				onClick={() => setOpen(true)}
				className="jam-tab absolute -right-2 -top-4 z-30 border-[3px] border-ink bg-green px-4 py-2 font-display text-xs uppercase tracking-wide text-white shadow-[3px_3px_0_var(--ink)] sm:-right-4 sm:text-2xl cursor-pointer"
			>
				Weekend Jam →
			</button>

			{open && (
				<div
					className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 p-4"
					onClick={() => setOpen(false)}
				>
					<div
						role="dialog"
						aria-modal="true"
						aria-label="WebDev Weekend Jam"
						onClick={(e) => e.stopPropagation()}
						className="comic-panel relative flex h-[95vh] w-[90vw] flex-col"
					>
						<div className="halftone" />
						<button
							ref={closeRef}
							type="button"
							onClick={() => setOpen(false)}
							aria-label="Close"
							className="absolute cursor-pointer right-3 top-3 z-20 flex h-10 w-10 items-center justify-center border-[3px] border-ink bg-red font-display text-lg text-white shadow-[2px_2px_0_var(--ink)]"
						>
							✕
						</button>

						<div className="relative z-10 flex-1 overflow-y-auto px-6 py-10 sm:px-12">
							<span className="inline-block font-stamp text-[0.78rem] capitalize tracking-normal text-ink-soft">
								How It Started
							</span>
							<h2 className="font-display text-[clamp(1.6rem,4vw,2.3rem)] uppercase">
								Tales of Heidi &amp; Orpheus
							</h2>

							<div className="mt-6">
								{/* {weekendJamStory.map((panel, i) => (
									<div
										key={panel.title}
										className="flex flex-col items-center border-[3px] border-ink bg-paper-dim px-3 py-4 text-center"
									>
										<svg viewBox="0 0 48 48" className="h-10 w-10 flex-none">
											{storyIcons[i]}
										</svg>
										<h3 className="mt-2 font-display text-sm uppercase tracking-wide">
											{panel.title}
										</h3>
										<p className="mt-1 text-[0.82rem] text-ink-soft">
											{panel.body}
										</p>
									</div>
								))} */}
								<div className="flex border-dashed flex-col items-center border-[3px] border-ink bg-paper-dim px-3 py-[7.5vh] text-center w-full">
									<h1 className="text-center font-display text-[3vh]">
										COMING SOON
									</h1>
								</div>
							</div>

							<div className="my-10 border-t-4 border-dashed border-ink" />

							<span className="inline-block font-stamp text-[0.78rem] capitalize tracking-normal text-ink-soft">
								The Event
							</span>
							<h2 className="font-display text-[clamp(1.6rem,4vw,2.3rem)] uppercase">
								WebDev Weekend Jam
							</h2>
							<p className="mt-2 font-stamp text-[0.85rem] capitalize tracking-wide text-ink-soft">
								Aug 15 - Aug 16
							</p>
							<p className="mt-3 max-w-[62ch] text-ink-soft">
								{"(Still deciding on dates)"}
							</p>

							<div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
								{weekendJamPrizes.map((prize) => (
									<div
										key={prize.rank}
										className={`border-[3px] border-ink px-4 py-5 ${accentClasses[prize.accent]}`}
									>
										<div className="font-stamp text-[0.72rem] capitalize tracking-normal opacity-70">
											{prize.rank}
										</div>
										<div className="mt-1 font-display text-lg uppercase tracking-wide">
											{prize.reward}
										</div>
									</div>
								))}
							</div>

							<button
								type="button"
								disabled
								className="mt-8 cursor-not-allowed border-[3px] border-ink bg-paper-dim px-8 py-4 font-display uppercase tracking-wide text-ink-soft opacity-70"
							>
								Submissions Opening Soon
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
