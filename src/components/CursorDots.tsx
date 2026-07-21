"use client";

import { useEffect, useRef, useState } from "react";

const SPACING = 15;
const PHASE = 7.5;
const COLORS = ["var(--red)", "var(--blue)", "var(--yellow)", "var(--green)"];

function colorFor(i: number, j: number) {
	const idx = (((i % 2) + 2) % 2) + (((j % 2) + 2) % 2) * 2;
	return COLORS[idx];
}

type Dot = { key: string; left: number; top: number; t: number; color: string };

export default function CursorDots() {
	const [dots, setDots] = useState<Dot[]>([]);
	const mouse = useRef({ x: -9999, y: -9999 });
	const frame = useRef<number | null>(null);

	useEffect(() => {
		const compute = () => {
			frame.current = null;
			const radius = window.innerWidth * 0.04;
			const pad = SPACING;
			const scrollX = window.scrollX;
			const scrollY = window.scrollY;
			const docX = mouse.current.x + scrollX;
			const docY = mouse.current.y + scrollY;

			const iMin = Math.floor((docX - radius - pad - PHASE) / SPACING);
			const iMax = Math.ceil((docX + radius + pad - PHASE) / SPACING);
			const jMin = Math.floor((docY - radius - pad - PHASE) / SPACING);
			const jMax = Math.ceil((docY + radius + pad - PHASE) / SPACING);

			const next: Dot[] = [];
			for (let i = iMin; i <= iMax; i++) {
				for (let j = jMin; j <= jMax; j++) {
					const cx = i * SPACING + PHASE;
					const cy = j * SPACING + PHASE;
					const dist = Math.hypot(cx - docX, cy - docY);
					const t = Math.max(0, 1 - dist / radius);
					if (t <= 0.02) continue;
					next.push({
						key: `${i}_${j}`,
						left: cx - scrollX,
						top: cy - scrollY,
						t: Math.pow(t, 1.3),
						color: colorFor(i, j),
					});
				}
			}
			setDots(next);
		};

		const schedule = () => {
			if (frame.current !== null) return;
			frame.current = requestAnimationFrame(compute);
		};

		const onMove = (e: PointerEvent) => {
			mouse.current = { x: e.clientX, y: e.clientY };
			schedule();
		};
		const onScroll = () => schedule();
		const onResize = () => schedule();

		window.addEventListener("pointermove", onMove);
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onResize);
		return () => {
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onResize);
			if (frame.current !== null) cancelAnimationFrame(frame.current);
		};
	}, []);

	return (
		<div aria-hidden="true" className="cursor-dots-layer">
			{dots.map((d) => (
				<span
					key={d.key}
					className="cursor-dot"
					style={{
						left: d.left,
						top: d.top,
						transform: `translate(-50%, -50%) scale(${d.t})`,
						opacity: d.t,
						background: d.color,
					}}
				/>
			))}
		</div>
	);
}
