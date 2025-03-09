import React from "react";
import PageTile from "../component/pageTile/PageTile";
import Mission from "../component/about/component/Mission";
import Author from "../component/about/component/Author";
import Testimonial from "../component/about/component/Testimonial";
import FeaturesSection from "../component/home/component/FeaturesSection";
import FAQ from "../component/FAQ/FAQ";

const About = () => {
  return (
    <>
      <PageTile
        title="About Us"
        breadcrumbs={[
          { label: "Home", link: "/", active: false },
          { label: "About Us", active: true },
        ]}
      />
      <Mission />
      <FeaturesSection />
      <Author />
      <Testimonial />
      <FAQ />
    </>
  );
};

export default About;
