import BullionServices from "@/components/landing-page-components/bullion-services";
import EdgeAgainstCurrency from "@/components/landing-page-components/edge-against-currency";
import HeroSection from "@/components/landing-page-components/hero-section";
import HowItWorks from "@/components/landing-page-components/how-it-works";
import Navbar from "@/components/landing-page-components/navbar";
import WhyAu from "@/components/landing-page-components/why-au";
import MetalWidget from "@/components/widgets/metal-widget";


export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <HeroSection/>
<HowItWorks/>
<MetalWidget/>
<EdgeAgainstCurrency/>
<BullionServices/>
<WhyAu/>
    </div>
  );
}
