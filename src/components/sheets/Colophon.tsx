import { SheetHead } from "@/components/ui/Sheet";
import { colophonLinks, meta } from "@/lib/content";

export default function Colophon() {
	return (
		<div>
			<SheetHead
				title="Contact"
				lede="Ask questions or send us your comic ideas. The Slack channel is the fastest way to get an answer."
			/>

			<div className="mt-11 grid gap-x-14 gap-y-11 lg:grid-cols-[0.9fr_1.1fr]">
				<ul className="border-t border-ink/15">
					<li className="flex flex-col gap-1 border-b border-ink/15 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
						<span className="stamp">Slack</span>
						<span className="text-[1.0625rem] font-semibold">{meta.slack}</span>
					</li>
					<li className="flex flex-col gap-1 border-b border-ink/15 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
						<span className="stamp">Email</span>
						<a
							href={`mailto:${meta.email}`}
							className="link-rule text-[1.0625rem] font-semibold"
						>
							{meta.email}
						</a>
					</li>
					<li className="flex flex-col gap-1 border-b border-ink/15 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
						<span className="stamp">Submit</span>
						<a
							href={meta.submitUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="link-rule text-[1.0625rem] font-semibold"
						>
							Send in your comic
						</a>
					</li>
				</ul>

				<div>
					<p className="max-w-[44ch] text-[0.9375rem] leading-[1.6] text-ink">
						Hack Yeah! is run by {meta.org}, a 501(c)(3) nonprofit, and is
						organised by {meta.editor}. It is open to anyone 18 or under and it is
						free to enter.
					</p>

					<ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2">
						{colophonLinks.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="stamp link-rule text-ink"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
