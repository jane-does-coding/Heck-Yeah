import { SheetHead } from "@/components/ui/Sheet";
import { faqs, meta } from "@/lib/content";

export default function Faq() {
	return (
		<div>
			<SheetHead
				title="Questions"
				lede="Eight questions people ask before they start. If yours is not here, ask in the Slack channel."
			/>

			<div className="mt-11 max-w-[52rem] border-t border-ink/15">
				{faqs.map((item, i) => (
					<details
						key={item.q}
						className="disclosure border-b border-ink/15"
					>
						<summary className="grid cursor-pointer grid-cols-[2.5rem_1fr_1.5rem] items-start gap-x-4 py-4">
							<span className="stamp mt-[5px]">
								{String(i + 1).padStart(2, "0")}
							</span>
							<span className="max-w-[52ch] text-[1.0625rem] font-semibold leading-snug">
								{item.q}
							</span>
							<span
								aria-hidden
								className="disclosure-plus mt-1.5 justify-self-end text-lg leading-none text-ink transition-transform duration-200"
							>
								+
							</span>
						</summary>
						<div className="grid grid-cols-[2.5rem_1fr] gap-x-4 pb-5">
							<span />
							<p className="max-w-[60ch] text-[0.9375rem] leading-[1.6] text-ink">
								{item.a}
							</p>
						</div>
					</details>
				))}
			</div>

			<p className="mt-8 text-[0.9375rem] text-ink">
				Ask in <strong className="font-semibold">{meta.slack}</strong> on the Hack
				Club Slack, or email{" "}
				<a href={`mailto:${meta.email}`} className="link-rule">
					{meta.email}
				</a>
				.
			</p>
		</div>
	);
}
