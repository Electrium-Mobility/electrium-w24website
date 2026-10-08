import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

type Props = {
    name: string;
    position: string;
    photo?: string;
};

export default function PersonCard({ name, position, photo }: Props) {
    const src = useBaseUrl(`/img/${photo ?? "docusaurus.png"}`);

    return (
        <div className="group text-center">
            <div className="relative inline-block mx-auto h-32 w-32 rounded-full overflow-hidden">
                <img src={src} alt={`Headshot of ${name}`} />
            </div>

            <div className="content">
                <p className="title h5 text-lg font-medium text-emerald-600 mb-1">
                    {name}
                </p>
                <p className="text-slate-400">{position}</p>
            </div>
        </div>
    )
}
