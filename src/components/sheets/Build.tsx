import { SheetHead } from "@/components/ui/Sheet";
import { buildFeatures, gradingRows } from "@/lib/content";

export default function Build() {
	return (
		<div>
			<SheetHead
				title="What counts as a web comic"
				lede="The reader has to be able to do something to your comic. If what they do changes what happens next, it counts. Here are four things you can build in."
			/>

			<div className="mt-11 grid gap-x-14 gap-y-11 lg:grid-cols-[1.05fr_0.95fr]">
				<ol className="border-t border-ink/15">
					{buildFeatures.map((feature, i) => (
						<li
							key={feature.title}
							className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-ink/15 py-4"
						>
							<span className="stamp mt-1 text-rust">
								{String(i + 1).padStart(2, "0")}
							</span>
							<div>
								<h3 className="text-[1.0625rem] font-semibold">
									{feature.title}
								</h3>
								<p className="mt-1 text-[0.9375rem] leading-[1.5] text-ink">
									{feature.body}
								</p>
							</div>
						</li>
					))}
				</ol>

				<div>
					<h3 className="text-[1.0625rem] font-semibold">How it is graded</h3>
					<div className="mt-4 border border-ink/20 bg-paper-2">
						<div className="grid grid-cols-[1fr_4.5rem_4.5rem] items-baseline gap-x-2 border-b border-ink/15 px-5 py-3">
							<span className="stamp-sm">Your website is</span>
							<span className="stamp-sm text-right">Art</span>
							<span className="stamp-sm text-right">Site</span>
						</div>
						{gradingRows.map((row) => (
							<div
								key={row.site}
								className="grid grid-cols-[1fr_4.5rem_4.5rem] items-baseline gap-x-2 border-b border-ink/15 px-5 py-3.5 last:border-b-0"
							>
								<span className="text-[0.9375rem] font-medium">{row.site}</span>
								<span className="font-mono text-right text-[0.9375rem] text-forest">
									{row.art}
								</span>
								<span className="font-mono text-right text-[0.9375rem] text-rust">
									{row.web}
								</span>
							</div>
						))}
					</div>
					<p className="mt-4 max-w-[42ch] text-[0.9375rem] leading-[1.55] text-ink">
						The better the website is to use, the larger the share of your drawing
						hours we can approve toward the project.
					</p>

					<div className="mt-7 border-l-2 border-forest pl-4">
						<p className="text-[0.9375rem] leading-[1.55] text-ink">
							Any language or framework works: plain HTML, CSS and JavaScript,
							React, Svelte, p5.js, Twine or Ren&rsquo;Py. Use your own art.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
