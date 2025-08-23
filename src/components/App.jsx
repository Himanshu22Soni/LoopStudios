import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import CreationSection from "./CreationSection";
import FooterSection from "./FooterSection";

const App = () => {
  useEffect(() => {
    document.title = "LoopStudios";

    return () => {
      document.title = "React App";
    };
  }, []);

  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <CreationSection />
      <FooterSection />
    </div>
  );
};

export default App;
