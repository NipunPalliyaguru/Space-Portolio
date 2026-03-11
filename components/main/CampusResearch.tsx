"use client";

import React from "react";

const CampusResearch = () => {
  const project = {
    title: "Smart City With Computer Vision (Campus Research)",
    url: "https://smart-city-website.vercel.app/",
    imageUrl:
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1400&q=70",
    subtitle: "AI-powered computer vision for smarter urban living.",
    highlights: [
      "Vehicle Parking Management (real-time monitoring & counting)",
      "Special Incident / Accident Detection on motorways",
      "Surveillance enhancement with real-time threat detection",
      "Automated waste management for smarter collection & sorting",
    ],
    achievement:
      "Achieved an A grade and was nominated for exhibitions/presentations.",
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 lg:pt-16">
      <div className="w-full text-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Campus Research
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-4xl mx-auto">
          Research project focused on applying computer vision to improve urban
          efficiency, safety, and sustainability.
        </p>
      </div>

      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className={[
          "mt-8 block group relative overflow-hidden rounded-2xl sm:rounded-3xl border",
          "bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm",
          "border-gray-700/50 transition-all duration-500",
          "hover:scale-[1.01] hover:shadow-2xl hover:border-cyan-400/50 hover:shadow-cyan-500/20",
        ].join(" ")}
      >
        <div className="relative h-44 sm:h-56 w-full">
          <img
            src={project.imageUrl}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-white text-lg sm:text-2xl font-semibold">
              {project.title}
            </div>
            <div className="mt-1 text-gray-200/90 text-sm sm:text-base">
              {project.subtitle}
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="text-xs sm:text-sm text-gray-400 truncate">
            {project.url.replace("https://", "")}
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
            {project.highlights.map((h) => (
              <div
                key={h}
                className="text-sm sm:text-base text-gray-200 flex gap-2"
              >
                <span className="text-cyan-300/80">•</span>
                <span className="leading-relaxed">{h}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm sm:text-base text-gray-200">
            <span className="text-cyan-300 font-semibold">Achievement:</span>{" "}
            {project.achievement}
          </div>
        </div>
      </a>
    </section>
  );
};

export default CampusResearch;
