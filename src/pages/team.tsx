import React from 'react';
import Layout from '@theme/Layout';
import Sherwin from "/static/img/team_headshots/SherwinCopy.png";
import Vishesh from "/static/img/team_headshots/VisheshCopy.png"
import Jerry from "/static/img/team_headshots/Jerry.jpeg"
import Andrew from "/static/img/team_headshots/Andrew.jpeg"
import Victor from "/static/img/team_headshots/Victor.jpg"
import Shari from "/static/img/team_headshots/Shari.jpg"
import Samantha from "/static/img/team_headshots/Samantha.png"
import Enoch from "/static/img/team_headshots/Enoch.jpg";
import Faisal from "/static/img/team_headshots/Faisal.jpeg";
import Damir from "/static/img/team_headshots/Damir.jpg";
import ElectriumLogo from "/static/img/favicon.png";

//import TeamLead from "../components/Team/team";

function TeamLead({ headshot, name, position }) {
  return (
    <div className="group text-center">
        <div className="relative inline-block mx-auto h-32 w-32 rounded-full overflow-hidden">
          <img src={headshot} />
        </div>

      <div className="content">
          <p className="title h5 text-lg font-medium text-emerald-600 mb-1">{name}</p>
          <p className="text-slate-400">{position}</p>
      </div>
    </div> 
  );
}

function Team() {

  const generalLeads = [
    {
      name: "Vishesh Garg",
      position: "Electrium Lead",
      headshot: Vishesh,
    },
    {
      name: "Jerry Chen",
      position: "Mechanical Lead",
      headshot: Jerry,
    },
    {
      name: "Damir Gazizullin",
      position: "Electrical Lead",
      headshot: Damir,
    },
    {
      name: "Victor Kalenda",
      position: "Firmware Lead",
      headshot: Victor,
    },
  ];

  const teamLeads = [
    {
      name: "Jerry Chen",
      position: "Bafkiets Lead",
      headshot: Jerry,
    },
    {
      name: "Faisal Shahbaz",
      position: "Bafkiets Lead",
      headshot: Faisal,
    },
    {
      name: "Meghan",
      position: "Stealth Bike Lead",
      headshot: ElectriumLogo,
    },
    {
      name: "Farbeen Haque",
      position: "Scooter Lead",
      headshot: ElectriumLogo,
    },
    {
      name: "Shari Sun",
      position: "Skateboard Lead",
      headshot: Shari,
    },
    {
      name: "Samantha Chong",
      position: "CF Skateboard Lead",
      headshot: Samantha,
    },
    {
      name: "Vishesh Garg",
      position: "Vroom Lead",
      headshot: Vishesh,
    },
    {
      name: "Enoch Tin",
      position: "Finance & Marketing Lead",
      headshot: Enoch,
    },
    {
      name: "Andrew Au",
      position: "Web Development Team Lead",
      headshot: Andrew,
    },
  ];
  return (
      <Layout>

      <section className="relative md:py-5 py-16">

          <div className="container">
                  <div className="grid grid-cols-1 pt-16 pb-8 text-center">
                      <h3 className="mb-2 md:text-4xl text-3xl lg:leading-normal leading-normal font-medium text-green-600">Meet Our Team</h3>
                      <p className="text-slate-400">Here are the wonderful people that make it all possible!</p>
                  </div>
          </div>

          <div className="container">
                  <div className="grid grid-cols-1 pt-16 pb-8 text-center">
                      <h3 className="mb-1 md:text-3xl md:leading-normal text-2xl leading-normal font-normal">Executive Team</h3>
                  </div>
  
                  <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-0 gap-[30px]">
                    {generalLeads.map((lead, index) => (
                      <TeamLead headshot={lead.headshot} name={lead.name} position={lead.position} />
                    )) }
                  </div>

                  <div className="grid grid-cols-1 pt-16 pb-8 text-center">
                      <h3 className="mb-1 mt-6 md:text-3xl md:leading-normal text-2xl leading-normal font-normal">Team Leads</h3>
                  </div>
  
                  <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-0 gap-[30px]">
                  {teamLeads.map((lead, index) => (
                      <TeamLead headshot={lead.headshot} name={lead.name} position={lead.position} />
                    )) }                  
                  </div>

                  <div className="container">
                    <div className="grid grid-cols-1 pb-16 pt-16 text-center">
                        <h3 className="md:text-4xl text-3xl lg:leading-normal leading-normal font-medium text-green-600">Our Team!</h3>
                        <div className="relative inline-block mx-auto overflow-hidden">
                            <img src={require("/static/img/team_headshots/groupPic.JPG").default} className=" w-2/3 h-auto rounded-xl"/>
                        </div>
                    </div>
                  </div>
                  
              </div>
          </section>
      </Layout>
  );
}

export default Team;