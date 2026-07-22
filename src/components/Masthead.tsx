const links = [
	{ href: "#ys", label: "The Ship" },
	{ href: "#ideas", label: "Ideas" },
	{ href: "#shop", label: "Shop" },
	{ href: "#faq", label: "FAQ" },
	{ href: "#contact", label: "Contact" },
];

export default function Masthead() {
	return (
		<div className="sticky top-0 z-50 border-b-4 border-ink bg-paper">
			<div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-3">
				<div className="font-display text-4xl uppercase tracking-wide">
					HACK<span className="text-red">YEAH!</span>
					<p className="text-[1.5vh] font-sans font-light capitalize">
						by Jenny • July 22 - Aug 14
					</p>
				</div>
				<nav className="flex flex-wrap gap-4 font-stamp text-[0.78rem] tracking-normal">
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="relative pb-[3px] text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[3px] after:origin-left after:scale-x-0 after:bg-yellow after:transition-transform after:duration-150 hover:text-red hover:after:scale-x-100"
						>
							{link.label}
						</a>
					))}
				</nav>
			</div>
		</div>
	);
}
