import { SheetHead } from "@/components/ui/Sheet";
import { meta, steps } from "@/lib/content";

export default function Process() {
	return (
		<div>
			<SheetHead
				title="Three steps"
				lede="Make a website, submit it, get prizes. You can start whenever you want."
			/>

			<ol className="mt-12 grid gap-y-0 sm:grid-cols-3 sm:gap-x-10">
				{steps.map((step, i) => (
					<li
						key={step.title}
						className="relative border-t border-ink/20 py-5 sm:border-t-2 sm:pb-2 sm:pt-6"
					>
						<span
							aria-hidden
							className="absolute right-0 top-4 font-mono text-[0.6875rem] sm:-top-[1.4rem] sm:left-0 sm:right-auto"
						>
							{String(i + 1).padStart(2, "0")}
						</span>
						<h3 className="display text-[1.5rem] lg:text-[1.75rem]">
							{step.title}
						</h3>
						<p className="mt-2.5 max-w-[34ch] text-[0.9375rem] leading-[1.55] text-ink">
							{step.body}
						</p>
					</li>
				))}
			</ol>

			<div className="mt-12 flex flex-wrap items-center gap-4 border-t border-ink/15 pt-7">
				<a
					href={meta.submitUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="btn btn-solid"
				>
					Submit your comic
				</a>
				<a
					href={meta.shopUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="btn btn-ghost"
				>
					Spend your hours
				</a>
			</div>
		</div>
	);
}
