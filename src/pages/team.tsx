import React from "react";
import Layout from "@theme/Layout";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import PersonCard from "../components/Team/PersonCard";
import team from "../data/team.json";

function Team() {
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <Layout title="Team">
      <section className="relative md:py-5 py-16">
        <div className="container">
          <div className="grid grid-cols-1 pt-16 pb-8 text-center">
            <h3 className="mb-2 md:text-4xl text-3xl lg:leading-normal leading-normal font-medium text-green-600">
              Meet Our Team
            </h3>
            <p className="text-slate-400">
              Here are the wonderful people that make it all possible!
            </p>
          </div>
        </div>

        <div className="container">
          {team.sections.map((section, i) => (
            <div key={section.title}>
              <div className={`grid grid-cols-1 pb-8 text-center ${i === 0 ? "pt-8" : "pt-16"}`}>
                <h3 className={`mb-1 md:text-3xl md:leading-normal text-2xl leading-normal font-normal ${i === 0 ? "" : "mt-6"}`}>
                  {section.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-0 gap-[30px]">
                {section.members.map((person) => (
                  <PersonCard
                  key={person.name}
                  name={person.name}
                  position={person.position}
                  photo={person.photo}
                  />
                ))}
              </div>
            </div>
          ))}

          {team.kickoffs.map((kickoff) => (
            <div key={kickoff.term} className="container">
              <div className="grid grid-cols-1 pb-16 pt-16 text-center">
                <h3 className="md:text-4xl text-3xl lg:leading-normal leading-normal font-medium text-green-600">
                  {kickoff.term} Kickoff!
                </h3>
                <div className="relative inline-block mx-auto overflow-hidden">
                  <img
                  src={withBaseUrl(`/img/${kickoff.photo}`)}
                  alt={`${kickoff.term} kickoff group photo`}
                  className="w-2/3 h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
export default Team;