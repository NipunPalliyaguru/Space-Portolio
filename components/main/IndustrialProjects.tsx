"use client";
import React from "react";

type IndustrialProject = {
  title: string;
  url: string;
  description: string;
  imageUrl: string;
  accentClassName: string;
};

const industrialProjects: IndustrialProject[] = [
  {
    title: "Axonall — Travel Management Solution",
    url: "https://axonall.com",
    description:
      "Public-facing platform for the online travel agency ecosystem — product overview, offerings, and entry point into the travel management suite.",
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/spaceaxonall.com/origin+mvp+assets/Email+Temp+Headers/Frame+127.png",
    accentClassName: "hover:border-cyan-400/50 hover:shadow-cyan-500/20",
  },
  {
    title: "Partners Portal",
    url: "https://partners.axonall.com",
    description:
      "Partner relationship management for travel suppliers and business partners — onboarding, partner operations, and collaboration workflows.",
    imageUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=70",
    accentClassName: "hover:border-purple-400/50 hover:shadow-purple-500/20",
  },
  {
    title: "Travel Agents Portal",
    url: "https://travelagents.axonall.com",
    description:
      "Travel agent reservation system — search/booking flows, reservation management, and day-to-day agent operations for OTA bookings.",
    imageUrl:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=70",
    accentClassName: "hover:border-indigo-400/50 hover:shadow-indigo-500/20",
  },
  {
    title: "Careers",
    url: "https://carreers.axonall.com",
    description:
      "Careers site for recruitment and hiring — job listings and application flows supporting the organization behind the travel platforms.",
    imageUrl:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=70",
    accentClassName: "hover:border-pink-400/50 hover:shadow-pink-500/20",
  },
  {
    title: "News",
    url: "https://news.axonall.com",
    description:
      "News and updates hub — announcements, product updates, and travel-industry communications related to the OTA suite.",
    imageUrl:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=70",
    accentClassName: "hover:border-emerald-400/50 hover:shadow-emerald-500/20",
  },
  {
    title: "Central Admin",
    url: "https://central.axonall.com",
    description:
      "Centralized admin management — internal operations tooling, configuration, and cross-platform administration for the travel ecosystem.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70",
    accentClassName: "hover:border-amber-400/50 hover:shadow-amber-500/20",
  },
];

const IndustrialProjects = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-10 sm:pb-16 lg:pb-20">
      <div className="w-full text-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-400">
          Industrial Projects (Public)
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-4xl mx-auto">
          Public-facing products I’ve built for an online travel agency (OTA) and
          travel management ecosystem.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {industrialProjects.map((project) => (
          <a
            key={project.url}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className={[
              "group relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 border",
              "bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm",
              "border-gray-700/50 transition-all duration-500",
              "hover:scale-[1.02] hover:shadow-2xl",
              project.accentClassName,
            ].join(" ")}
          >
            <div className="relative h-36 sm:h-40 w-full overflow-hidden rounded-xl sm:rounded-2xl border border-white/10">
              <img
                src={project.imageUrl}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="text-base sm:text-lg font-semibold text-white truncate">
                  {project.title}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-gray-400 truncate">
                  {project.url.replace("https://", "")}
                </div>
              </div>
              <span className="flex-shrink-0 text-gray-300/80 group-hover:text-white transition-colors">
                ↗
              </span>
            </div>

            <p className="mt-4 text-sm sm:text-base text-gray-200 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default IndustrialProjects;
