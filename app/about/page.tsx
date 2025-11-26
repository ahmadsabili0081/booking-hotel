import HeaderSection from "@/components/HeaderSection/HeaderSection";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <HeaderSection title="About Us" subTitle="lorem ipsum dolor sit amet." />
      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8"></div>
      </div>
    </div>
  );
};

export default AboutPage;
