import React from "react";

export default function HeroSection() {
  return (
    <div className="relative ">
      <div className="absolute inset-0 opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Crafting amazing digital experiences with code and creativity.
          </p>
          <a
            href="#about"
            className="inline-block px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-full transition-transform transform hover:scale-105"
          >
            Explore More
          </a>
        </div>
      </div>
    </div>
  );
}
