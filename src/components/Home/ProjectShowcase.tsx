import React from "react";
import Link from "@docusaurus/Link";
import { PROJECTS, ALL_PROJECTS_LINK } from "./homeData";

export default function ProjectShowcase() {
    return (
        <section className="w-full bg-[#fafaf7] dark:bg-[#111a15]">
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
                <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
                    <div>
                        <p className="m-0 mb-3 text-sm font-bold uppercase tracking-[0.14em] text-green-700 dark:text-green-300">
                    Projects
                    </p>
                    <h2 className="m-0 text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white">
                     What we build
                    </h2>
                    </div>
                    <Link
                    to={ALL_PROJECTS_LINK}
                    className="text-lg font-bold text-green-700 hover:text-green-800 dark:text-green-300 dark:hover:text-green-200"
                    >
                        See all projects →
                    </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PROJECTS.map((project) => (
                        <Link
                        key={project.link}
                        className="group block overflow-hidden rounded-2xl border border-solid border-gray-200 bg-white hover:no-underline dark:border-[#26352c] dark:bg-[#141d18]"
                        >
                            <div className="flex h-48 items-center justify-center bg-[#e1eee4] text-gray-500 dark:bg-[#1c2a22] dark:text-[#8fa197]">
                                Photo coming soon
                            </div>
                            <div className="p-6">
                                <p className="m-0 text-sm font-bold uppercase tracking-[0.1em] text-green-700 dark:text-green-300">
                                    {project.category}
                                </p>
                                <h3 className="m-0 mt-2 text-2xl font-semibold text-gray-900 group-hover:text-green-700 dark:text-white dark:group-hover:text-green-300">
                                    {project.name}
                                </h3>
                                <p className="m-0 mt-3 text-gray-600 dark:text-[#b6c2ba]">
                                    {project.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}