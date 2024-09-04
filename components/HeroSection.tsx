"use client"

import React, { useEffect, useState } from "react";
import BackgroundImg from "@/public/pxfuel.jpg";

const HeroSection = () => {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    setBgImage(BackgroundImg.src);
  }, []);

  return (
    <section
      className="w-full relative shadow-xl"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="w-full py-24 sm:py-20 md:py-24 lg:py-28">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-left text-neutral-200">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
              Your Online Games Emulator
            </h1>
            <p className="text-base sm:text-lg space-y-2">
              <span className="block">
                Welcome 😎 This website is a personal project of mine where I
                post retro games which are playable through an emulator.
              </span>
              <span className="block">
                Play all the Retro Games that you used to play back in the day,
                and with our recommendation engine you can find the perfect game
                for countless hours of fun. So far we have games for NES/ SNES/
                GB/ GBC/ GBA/ PSX and Sega Saturn consoles.
              </span>
              <span className="block">
                More games to come in the near future 🎮
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
