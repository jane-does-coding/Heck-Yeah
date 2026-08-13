export function SheetHead({
	title,
	lede,
	children,
}: {
	title: React.ReactNode;
	lede?: React.ReactNode;
	children?: React.ReactNode;
}) {
	return (
		<header className="max-w-[46rem]">
			<h2 className="display text-[clamp(1.85rem,4vw,2.6rem)]">
				{title}
			</h2>
			{lede ? (
				<p className="mt-4 max-w-[54ch] text-[1rem] leading-[1.6] text-ink">
					{lede}
				</p>
			) : null}
			{children}
		</header>
	);
}
