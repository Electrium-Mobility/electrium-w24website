import React from "react";
import Link from "@docusaurus/Link";
import HeroGraphic from "./HeroGraphic";

export default function Hero() {
    return (
        <section className="w-full bg-[#f3f6f1] dark:bg-[#141d18]">
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                <p className="m-0 mb-6 text-sm font-bold uppercase tracking-[0.14em] text-green-700 dark:text-green-300">
                    University of Waterloo . Student design team
                </p>
                <h1 className="m-0 text-5xl md:text-6xl font-semibold leading-[1.07] text-gray-900 dark:text-white">
                    Building sustainable, affordable transportation.
                </h1>

                <p className="m-0 mt-6 max-w-xl text-lg md:text-xl leading-relaxed text-gray-600 dark:text-[#b6c2ba]">
                    We design and build personal electric vehicles, from cargo bikes to skateboards, in the Sedra Student Design Centre.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                    to="/join-our-team"
                    className="rounded-lg bg-green-700 px-7 py-4 text-lg font-bold text-white hover:bg-green-800 hover:text-white hover:no-underline"
                    >
                        Join Our Team
                    </Link>
                    <Link
                    to="/sponsors"
                    className="rounded-lg border-2 border-solid border-green-700 px-7 py-4 text-lg font-bold text-green-700 hover:bg-green-700 hover:text-white hover:no-underline dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-green-800"
                    >
                        Become a Sponsor
                    </Link>
                </div>
            </div>
            <div className="flex justify-center">
                <HeroGraphic />
                </div>
            </div>
        </section>
    );
}