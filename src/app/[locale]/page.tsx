import GreetingSection from "@src/components/pages/home/GreetingSection";
import AboutSection from "@src/components/pages/home/AboutSection";
import PortfolioSection from "@src/components/pages/home/PortfolioSection";
import ContactSection from "@src/components/pages/home/ContactSection";
import {SparklesCore} from "../../components/ui/sparkles";


export default function Page() {
    return (
        <>
            <SparklesCore id="home-sparkles" className="absolute inset-0 z-0 pointer-events-none" />
            <GreetingSection />
            <AboutSection />
            <PortfolioSection />
            <ContactSection />
        </>
    );
}
