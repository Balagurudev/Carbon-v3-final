import { Navbar } from "@/widgets/navbar/Navbar";
import { Hero } from "@/widgets/hero/Hero";
import { LiveMomentum } from "@/widgets/live-momentum/LiveMomentum";
import { EffortlessExperience } from "@/widgets/effortless-experience/EffortlessExperience";
import { CleanCircleIdentity } from "@/widgets/clean-circle-identity/CleanCircleIdentity";
import { ImpactVisualization } from "@/widgets/impact-visualization/ImpactVisualization";
import { CommunityStories } from "@/widgets/community-stories/CommunityStories";
import { FinalSignup } from "@/widgets/final-signup/FinalSignup";
import { Footer } from "@/widgets/footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LiveMomentum />
        <EffortlessExperience />
        <CleanCircleIdentity />
        <ImpactVisualization />
        <CommunityStories />
        <FinalSignup />
      </main>
      <Footer />
    </div>
  );
}
