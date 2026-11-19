import React from "react";
import { METRICS } from "./homeData";

export default function MetricsBand() {
  return (
    <section
      aria-label="Team impact metrics"
      className="w-full bg-green-700 dark:bg-green-900"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4 md:gap-10 md:px-12 md:py-14">
        {METRICS.map((item) => (
          <div key={item.label} className="min-w-0 text-center md:text-left">
            <p className="m-0 font-[Lexend] text-4xl font-semibold leading-none text-white sm:text-5xl md:text-6xl">
              {item.value}
            </p>
            <p className="m-0 mt-2 text-base text-green-50 sm:text-lg">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
