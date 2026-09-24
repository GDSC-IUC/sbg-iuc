import CountdownBanner from "@/components/layout/CountdownBanner";
import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MissionSection from "@/components/sections/MissionSection";
import AtmosphereTiles from "@/components/sections/AtmosphereTiles";
import ProgrammeSection from "@/components/sections/ProgrammeSection";
import SpeakersTalkSection from "@/components/sections/SpeakersTalkSection";
import TeamSection from "@/components/sections/TeamSection";
import SponsoringSection from "@/components/sections/SponsoringSection";
import VenueSection from "@/components/sections/VenueSection";
import RegistrationFAQ from "@/components/sections/RegistrationFAQ";

export default function Home() {
  return (
    <>
      <CountdownBanner />
      <TopNav />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <AtmosphereTiles />
        <ProgrammeSection />
        <SpeakersTalkSection />
        <TeamSection />
        <SponsoringSection />
        <VenueSection />
        <RegistrationFAQ />
      </main>
      <Footer />
    </>
  );
}
