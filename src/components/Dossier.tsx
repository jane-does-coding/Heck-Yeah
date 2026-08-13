"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { meta } from "@/lib/content";

export type Sheet = {
	no: string;
	label: string;
	slug: string;
	content: React.ReactNode;
};

export default function Dossier({ sheets }: { sheets: Sheet[] }) {
	const [active, setActive] = useState(0);
	const tabs = useRef<(HTMLButtonElement | null)[]>([]);

	// Deep links: /#shop opens the shop sheet.
	useEffect(() => {
		const read = () => {
			const i = sheets.findIndex(
				(sheet) => sheet.slug === window.location.hash.slice(1),
			);
			if (i >= 0) setActive(i);
		};
		read();
		window.addEventListener("hashchange", read);
		return () => window.removeEventListener("hashchange", read);
	}, [sheets]);

	const open = useCallback(
		(i: number, { focus = false } = {}) => {
			setActive(i);
			window.history.replaceState(null, "", `#${sheets[i].slug}`);
			if (focus) tabs.current[i]?.focus();
		},
		[sheets],
	);

	const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		const last = sheets.length - 1;
		const next =
			event.key === "ArrowRight"
				? active === last
					? 0
					: active + 1
				: event.key === "ArrowLeft"
					? active === 0
						? last
						: active - 1
					: event.key === "Home"
						? 0
						: event.key === "End"
							? last
							: -1;
		if (next < 0) return;
		event.preventDefault();
		open(next, { focus: true });
	};

	return (
		<div className="px-3 pb-16 pt-6 sm:px-6 sm:pb-24 sm:pt-10 lg:pt-14">
			<div className="relative mx-auto w-full max-w-[74rem]">
				{/* Loose sheets in the folder, poking out where they always do. */}
				<div
					aria-hidden
					className="absolute -bottom-2 left-16 right-[-9px] top-24 rotate-[0.7deg] rounded-[2px] bg-paper-3/80"
				/>
				<div
					aria-hidden
					className="absolute -bottom-[9px] left-[-9px] right-24 top-24 -rotate-[0.55deg] rounded-[2px] bg-paper-2"
					style={{ boxShadow: "0 18px 30px -22px rgb(0 0 0 / 0.8)" }}
				/>

				{/* Tabs, cut into the top edge of the folder. */}
				<div
					role="tablist"
					aria-label="Sheets in this folder"
					onKeyDown={onKeyDown}
					className="relative z-20 -mb-px flex items-end gap-[3px] overflow-x-auto pl-1 [scrollbar-width:none] sm:pl-9 [&::-webkit-scrollbar]:hidden"
				>
					{sheets.map((sheet, i) => {
						const on = i === active;
						return (
							<button
								key={sheet.slug}
								ref={(el) => {
									tabs.current[i] = el;
								}}
								type="button"
								role="tab"
								id={`tab-${sheet.slug}`}
								aria-selected={on}
								aria-controls={`sheet-${sheet.slug}`}
								aria-label={`Sheet ${sheet.no}, ${sheet.label}`}
								tabIndex={on ? 0 : -1}
								onClick={() => open(i)}
								className={`tab-shape flex-none cursor-pointer px-4 pb-2.5 text-ink transition-colors duration-150 ${
									on
										? "bg-folder pt-4"
										: "bg-folder-2 pt-2 shadow-[inset_0_-7px_9px_-8px_rgb(0_0_0_/_0.45)] hover:bg-folder"
								}`}
							>
								<span className="flex items-baseline gap-2 whitespace-nowrap">
									<span className="font-mono text-[0.625rem] text-ink">
										{sheet.no}
									</span>
									<span
										className={`text-[0.8125rem] ${on ? "font-bold" : "font-medium"}`}
									>
										{sheet.label}
									</span>
								</span>
							</button>
						);
					})}
				</div>

				{/* The folder itself. */}
				<div className="folder-lift relative z-10 rounded-[2px] rounded-tl-none bg-folder p-2.5 pb-9 sm:p-4 sm:pb-12 lg:p-6 lg:pb-14">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 rounded-[2px]"
						style={{
							background:
								"linear-gradient(178deg, rgb(0 0 0 / 0) 60%, rgb(0 0 0 / 0.06) 100%)",
						}}
					/>

					<div className="relative">
						{sheets.map((sheet, i) => (
							<article
								key={sheet.slug}
								role="tabpanel"
								id={`sheet-${sheet.slug}`}
								aria-labelledby={`tab-${sheet.slug}`}
								hidden={i !== active}
								className="sheet-lift relative bg-paper px-5 py-9 sm:px-9 sm:py-12 lg:px-14 lg:py-14"
							>
								{sheet.content}
							</article>
						))}
					</div>
				</div>
			</div>

			<footer className="mx-auto mt-14 max-w-[74rem]">
				<p className="stamp-sm text-paper">
					{meta.name} · {meta.org} · {meta.window}
				</p>
			</footer>
		</div>
	);
}
