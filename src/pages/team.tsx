import React from "react";
import Layout from "@theme/Layout";
import TeamLead from "../components/Team/TeamLead";
import Coop from "../components/Team/Coop";
import { generalLeads } from "../components/Team/GeneralLeads";
import { teamLeads } from "../components/Team/TeamLeads";
import { coops } from "../components/Team/Coops";

function Team() {
  return (
    <Layout>
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
          <div className="grid grid-cols-1 pt-8 pb-8 text-center">
            <h3 className="mb-1 md:text-3xl md:leading-normal text-2xl leading-normal font-normal">
              Executive Team
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-0 gap-[30px]">
            {generalLeads.map((lead, index) => (
              <TeamLead
                headshot={lead.headshot}
                name={lead.name}
                position={lead.position}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 pt-16 pb-8 text-center">
            <h3 className="mb-1 mt-6 md:text-3xl md:leading-normal text-2xl leading-normal font-normal">
              Project Leads
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-0 gap-[30px]">
            {teamLeads.map((lead, index) => (
              <TeamLead
                headshot={lead.headshot}
                name={lead.name}
                position={lead.position}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 pt-16 pb-8 text-center">
            <h3 className="mb-1 mt-6 md:text-3xl md:leading-normal text-2xl leading-normal font-normal">
              Coops
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-0 gap-[30px]">
            {coops.map((lead, index) => (
              <Coop headshot={lead.headshot} name={lead.name} position={lead.position} />
            ))}
          </div>

          <div className="container">
            <div className="grid grid-cols-1 pb-16 pt-16 text-center">
              <h3 className="md:text-4xl text-3xl lg:leading-normal leading-normal font-medium text-green-600">
                Winter 2025 Kickoff!
              </h3>
              <div className="relative inline-block mx-auto overflow-hidden">
                <img
                  src={
                    require("/static/img/kickoff/kickoff-w25.jpg").default
                  }
                  className=" w-2/3 h-auto rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="grid grid-cols-1 pb-16 pt-16 text-center">
              <h3 className="md:text-4xl text-3xl lg:leading-normal leading-normal font-medium text-green-600">
                Fall 2024 Kickoff!
              </h3>
              <div className="relative inline-block mx-auto overflow-hidden">
                <img
                  src={
                    require("/static/img/kickoff/kickoff-f24.jpg").default
                  }
                  className=" w-2/3 h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Team;
