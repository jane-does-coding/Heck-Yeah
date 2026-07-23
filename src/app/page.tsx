import Masthead from "@/components/Masthead";
import Hero from "@/components/Hero";
import YsSection from "@/components/YsSection";
import IdeasSection from "@/components/IdeasSection";
import StepsSection from "@/components/StepsSection";
import ShopSection from "@/components/ShopSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<Masthead />
			<main>
				<Hero />
				<YsSection />
				<IdeasSection />
				<StepsSection />
				<ShopSection />
				<FaqSection />
				<ContactSection />
			</main>
			<Footer />
		</>
	);
}
