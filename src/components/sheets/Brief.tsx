import { briefFacts, keywords, meta, prizeTeaser } from "@/lib/content";

export default function Brief() {
	return (
		<div>
			<h1 className="display text-[clamp(2.6rem,7vw,4.75rem)]">
				Hack Yeah<span className="text-rust">!</span>
			</h1>

			<div className="mt-8 grid gap-x-14 gap-y-10 lg:grid-cols-[1.15fr_0.85fr]">
				<div>
					<p className="max-w-[46ch] text-[clamp(1rem,1.35vw,1.1875rem)] leading-[1.5] text-ink">
						You build an{" "}
						<em className="font-semibold not-italic">interactive web comic</em> and
						log the hours you spend on it. We send you real items for those hours.
					</p>

					<ul className="mt-7 flex flex-wrap gap-2">
						{keywords.map((word) => (
							<li key={word} className="pill">
								{word}
							</li>
						))}
					</ul>

					<dl className="mt-9 border-t border-ink/15">
						{briefFacts.map((fact) => (
							<div
								key={fact.label}
								className="flex flex-col gap-0.5 border-b border-ink/15 py-2.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
							>
								<dt className="stamp">{fact.label}</dt>
								<dd className="text-[0.9375rem] text-ink sm:text-right">
									{fact.value}
								</dd>
							</div>
						))}
					</dl>
				</div>

				<div>
					<div className="border border-ink/20 bg-paper-2 p-6">
						<p className="text-[0.9375rem] leading-[1.55] text-ink">
							Eleven items to spend your hours on. Prices start at one hour.
						</p>
						<ul className="mt-4 flex flex-col">
							{prizeTeaser.map((prize) => (
								<li
									key={prize}
									className="border-t border-dotted border-ink/25 py-[7px] text-[0.9375rem] first:border-t-0"
								>
									{prize}
								</li>
							))}
						</ul>
					</div>

					<div className="mt-6">
						<a
							href={meta.submitUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-solid"
						>
							Submit your comic
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
