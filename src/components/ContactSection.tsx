export default function ContactSection() {
	return (
		<section id="contact" className="px-6 pt-8">
			<div className="mx-auto max-w-5xl">
				<div className="flex flex-wrap items-center justify-between gap-3 border-[3px] border-ink bg-paper-dim px-5 py-3">
					<p className="text-sm text-ink-soft">
						Questions or comic pitches? Find{" "}
						<strong className="text-ink">#hack-yeah-ysws</strong> on the Hack
						Club Slack or email{" "}
						<a
							href="mailto:hackyeah@hackclub.com"
							className="text-blue underline"
						>
							jenny@hackclub.com
						</a>
						.
					</p>
					<span className="font-stamp text-[0.72rem] uppercase tracking-wide text-ink-soft">
						Built by Jenny - Hack Club
					</span>
				</div>
			</div>
		</section>
	);
}
