import Image from "next/image";
import { SheetHead } from "@/components/ui/Sheet";
import { meta, shopItems } from "@/lib/content";

export default function Shop() {
	return (
		<div>
			<div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
				<SheetHead
					title="The shop"
					lede="Eleven items, priced in hours. Log your hours, ship your comic, then come back and spend what you earned."
				/>
				<div className="mb-1">
					<a
						href={meta.shopUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-solid"
					>
						Place an order
					</a>
				</div>
			</div>

			<div className="mt-11">
				<ol className="grid auto-rows-fr border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{shopItems.map((item) => (
						<li
							key={item.name}
							className="flex flex-col border-b border-r border-ink/15 p-4 sm:p-5"
						>
							<div className="relative h-[142px] w-full border border-ink/10 bg-paper-2">
								{item.img ? (
									<Image
										src={item.img}
										alt={item.name}
										fill
										sizes="(max-width: 640px) 80vw, (max-width: 1024px) 38vw, 25vw"
										className="object-contain object-center p-3"
									/>
								) : (
									<span className="absolute inset-0 grid place-items-center text-[0.875rem] text-ink">
										No photo
									</span>
								)}
							</div>

							<div className="mt-4 flex items-baseline justify-between gap-4 border-t border-ink/15 pt-2.5">
								<h3 className="text-[0.9375rem] font-semibold leading-tight">
									{item.name}
								</h3>
								<span className="stamp flex-none text-rust">{item.price}</span>
							</div>
							<p className="mt-1.5 text-[0.875rem] leading-[1.5] text-ink">
								{item.blurb}
							</p>
						</li>
					))}

					<li className="flex flex-col border-b border-r border-ink/15 p-4 sm:p-5">
						<div className="grid h-[142px] w-full place-items-center border border-dashed border-ink/20">
							<span className="text-[0.875rem] text-ink">Not listed here?</span>
						</div>
						<div className="mt-4 border-t border-ink/15 pt-2.5">
							<h3 className="text-[0.9375rem] font-semibold">
								Suggest an item
							</h3>
							<p className="mt-1.5 text-[0.875rem] leading-[1.5] text-ink">
								Ask in {meta.slack} and we will look at adding it.
							</p>
						</div>
					</li>
				</ol>
			</div>
		</div>
	);
}
