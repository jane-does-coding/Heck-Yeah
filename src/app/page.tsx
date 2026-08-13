import Dossier, { type Sheet } from "@/components/Dossier";
import Masthead from "@/components/Masthead";
import Brief from "@/components/sheets/Brief";
import Build from "@/components/sheets/Build";
import Colophon from "@/components/sheets/Colophon";
import Faq from "@/components/sheets/Faq";
import Ideas from "@/components/sheets/Ideas";
import Process from "@/components/sheets/Process";
import Shop from "@/components/sheets/Shop";

const sheets: Sheet[] = [
	{ no: "01", label: "The brief", slug: "brief", content: <Brief /> },
	{ no: "02", label: "The build", slug: "build", content: <Build /> },
	{ no: "03", label: "Ideas", slug: "ideas", content: <Ideas /> },
	{ no: "04", label: "Process", slug: "process", content: <Process /> },
	{ no: "05", label: "Shop", slug: "shop", content: <Shop /> },
	{ no: "06", label: "FAQ", slug: "faq", content: <Faq /> },
	{ no: "07", label: "Contact", slug: "contact", content: <Colophon /> },
];

export default function Home() {
	return (
		<>
			<Masthead />
			<main>
				<Dossier sheets={sheets} />
			</main>
		</>
	);
}
