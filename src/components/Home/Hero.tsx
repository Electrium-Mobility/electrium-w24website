import React from "react";
import Link from "@docusaurus/Link";
import HeroGraphic from "./HeroGraphic";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[80vh] flex items-end bg-[#1b2420]">
            <div className="w-full max-w-6xl mx-auto px-6 md:px-12 pt-40 pb-20 md:pb-28">
                <div>
                <p className="m-0 mb-6 text-sm font-bold uppercase tracking-[0.14em] text-green-300">
                    University of Waterloo . Student design team
                </p>
                <h1 className="m-0 text-5xl md:text-6xl font-semibold leading-[1.05] text-white">
                    Building sustanable, affordable transportation.
                </h1>

                <p className="m-0 mt-6 max-w-xl text-lg md:text-xl leading-relaxed text-gray-600 dark:text-[#b6c2ba]">
                    We design and build personal electric vehicles, from cargo bikes to skateboards, in the Sedra Studenyt Design Centre.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                    to="join-our-team"
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