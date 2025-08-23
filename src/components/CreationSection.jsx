import React from "react";
import creationDeepEarth from "../assets/images/desktop/image-deep-earth.jpg";
import creationNightArcade from "../assets/images/desktop/image-night-arcade.jpg";
import creationSoccerTeam from "../assets/images/desktop/image-soccer-team.jpg";
import creationTheGrid from "../assets/images/desktop/image-grid.jpg";
import creationFromAbove from "../assets/images/desktop/image-from-above.jpg";
import creationPocketBorealis from "../assets/images/desktop/image-pocket-borealis.jpg";
import creationCuriosity from "../assets/images/desktop/image-curiosity.jpg";
import creationFisheye from "../assets/images/desktop/image-fisheye.jpg";
import creationDeepEarthMobile from "../assets/images/mobile/image-deep-earth.jpg";
import creationNightArcadeMobile from "../assets/images/mobile/image-night-arcade.jpg";
import creationSoccerTeamMobile from "../assets/images/mobile/image-soccer-team.jpg";
import creationTheGridMobile from "../assets/images/mobile/image-grid.jpg";
import creationFromAboveMobile from "../assets/images/mobile/image-from-above.jpg";
import creationPocketBorealisMobile from "../assets/images/mobile/image-pocket-borealis.jpg";
import creationCuriosityMobile from "../assets/images/mobile/image-curiosity.jpg";
import creationFisheyeMobile from "../assets/images/mobile/image-fisheye.jpg";

const CreationSection = () => {
  return (
    //Creation Section
    <section id="creations">
      {/* Creations Container */}
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        {/* Creations Header */}
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-5xl">
            Our Creations
          </h2>
          <button className="hidden btn md:block">See All</button>
        </div>

        {/* Creations Items */}
        <div className="items-container">
          <div className="group item">
            {/* Desktop Image */}
            <img
              src={creationDeepEarth}
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* Mobile Image */}
            <img
              src={creationDeepEarthMobile}
              alt=""
              className="w-full duration-200 group-hover:scale-110 md:hidden"
            />
            {/* Gradient */}
            <div className="gradient"></div>
            {/* Hover Text */}
            <h5>Deep Earth</h5>
          </div>

          <div className="group item">
            {/* Desktop Image */}
            <img
              src={creationCuriosity}
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* Mobile Image */}
            <img
              src={creationCuriosityMobile}
              alt=""
              className="w-full duration-200 group-hover:scale-110 md:hidden"
            />
            {/* Gradient */}
            <div className="gradient"></div>
            {/* Hover Text */}
            <h5>Curosity Rover</h5>
          </div>

          <div className="group item">
            {/* Desktop Image */}
            <img
              src={creationFisheye}
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* Mobile Image */}
            <img
              src={creationFisheyeMobile}
              alt=""
              className="w-full duration-200 group-hover:scale-110 md:hidden"
            />
            {/* Gradient */}
            <div className="gradient"></div>
            {/* Hover Text */}
            <h5>Fish Eye</h5>
          </div>

          <div className="group item">
            {/* Desktop Image */}
            <img
              src={creationFromAbove}
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* Mobile Image */}
            <img
              src={creationFromAboveMobile}
              alt=""
              className="w-full duration-200 group-hover:scale-110 md:hidden"
            />
            {/* Gradient */}
            <div className="gradient"></div>
            {/* Hover Text */}
            <h5>Above View</h5>
          </div>
        </div>

        <div className="mt-6 md:mt-8 items-container">
          <div className="group item">
            {/* Desktop Image */}
            <img
              src={creationNightArcade}
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* Mobile Image */}
            <img
              src={creationNightArcadeMobile}
              alt=""
              className="w-full duration-200 group-hover:scale-110 md:hidden"
            />
            {/* Gradient */}
            <div className="gradient"></div>
            {/* Hover Text */}
            <h5>Night Arcade</h5>
          </div>

          <div className="group item">
            {/* Desktop Image */}
            <img
              src={creationPocketBorealis}
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* Mobile Image */}
            <img
              src={creationPocketBorealisMobile}
              alt=""
              className="w-full duration-200 group-hover:scale-110 md:hidden"
            />
            {/* Gradient */}
            <div className="gradient"></div>
            {/* Hover Text */}
            <h5>Pocket Borealis</h5>
          </div>

          <div className="group item">
            {/* Desktop Image */}
            <img
              src={creationSoccerTeam}
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* Mobile Image */}
            <img
              src={creationSoccerTeamMobile}
              alt=""
              className="w-full duration-200 group-hover:scale-110 md:hidden"
            />
            {/* Gradient */}
            <div className="gradient"></div>
            {/* Hover Text */}
            <h5>Soccor Team</h5>
          </div>

          <div className="group item">
            {/* Desktop Image */}
            <img
              src={creationTheGrid}
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* Mobile Image */}
            <img
              src={creationTheGridMobile}
              alt=""
              className="w-full duration-200 group-hover:scale-110 md:hidden"
            />
            {/* Gradient */}
            <div className="gradient"></div>
            {/* Hover Text */}
            <h5>Automobile Grid</h5>
          </div>
        </div>
        {/* See All Button for Mobile */}
        <div className="flex justify-center mt-10 md:hidden">
          <button className="btn w-full md:hidden">See All</button>
        </div>
      </div>
    </section>
  );
};

export default CreationSection;
