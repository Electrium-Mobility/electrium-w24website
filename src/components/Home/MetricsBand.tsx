import React from "react";
import { METRICS } from "./homeData";

export default function MetricsBand() {
    return (
        <section className="w-full bg-green-700">
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
                {METRICS.map((item) => (
                    <div key={item.label}>
                        <div className="font-[Lexend] text-5xl md:text-6xl font-semibold leading-none text-white">
                            {item.value}
                            </div>
                            <div className="mt-2 text-lg text-green-50">{item.label}</div>
                                </div>
                                ))}
            </div>
        </section>
    );
}