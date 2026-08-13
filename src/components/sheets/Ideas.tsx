import { SheetHead } from "@/components/ui/Sheet";
import { ideas } from "@/lib/content";

export default function Ideas() {
	return (
		<div>
			<SheetHead
				title="Six ideas"
				lede="You do not have to use any of these. Change them, combine two of them, or build your own idea instead."
			/>

			<ol className="mt-11 grid gap-x-14 sm:grid-cols-2">
				{ideas.map((idea, i) => (
					<li
						key={idea.title}
						className="grid grid-cols-[2.75rem_1fr] gap-x-4 border-t border-ink/15 py-5"
					>
						<span className="stamp mt-[3px]">
							{String(i + 1).padStart(2, "0")}
						</span>
						<div>
							<h3 className="max-w-[24ch] text-[1.0625rem] font-semibold leading-snug">
								{idea.title}
							</h3>
							<p className="mt-1.5 max-w-[38ch] text-[0.9375rem] leading-[1.55] text-ink">
								{idea.body}
							</p>
						</div>
					</li>
				))}
			</ol>
		</div>
	);
}
