import React from 'react';
import Layout from '@theme/Layout';

function Team() {
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
                      <div className="group text-center">
                            <div className="relative inline-block mx-auto h-32 w-32 rounded-full overflow-hidden">
                              <img src={require("/static/img/team_headshots/SherwinCopy.png").default} />
                            </div>
  
                          <div className="content">
                              <p className="title h5 text-lg font-medium text-emerald-600 mb-1">Sherwin Ciu</p>
                              <p className="text-slate-400">Electrium Lead</p>
                          </div>
                      </div>  

                      <div className="group text-center">
                            <div className="relative inline-block mx-auto h-32 w-32 rounded-full overflow-hidden">
                              <img src={require("/static/img/team_headshots/WinstonCopy.png").default} />
                            </div>
  
                          <div className="content">
                              <p className="title h5 text-lg font-medium text-emerald-600 mb-1">Winston Lu</p>
                              <p className="text-slate-400">Electrium General Lead</p>
                          </div>
                      </div> 

                      <div className="group text-center">
                            <div className="relative inline-block mx-auto h-32 w-32 rounded-full overflow-hidden">
                              <img src={require("/static/img/team_headshots/LoganCopy.png").default} />
                            </div>
  
                          <div className="content">
                              <p className="title h5 text-lg font-medium text-emerald-600 mb-1">Logan Fournier</p>
                              <p className="text-slate-400">Electrium General Lead</p>
                          </div>
                      </div>  
                  </div>

                  <div className="grid grid-cols-1 pt-16 pb-8 text-center">
                      <h3 className="mb-1 mt-6 md:text-3xl md:leading-normal text-2xl leading-normal font-normal">Team Leads</h3>
                  </div>
  
                  <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-0 gap-[30px]">
                      <div className="group text-center">
                            <div className="relative inline-block mx-auto h-32 w-32 rounded-full overflow-hidden">
                              <img src={require("/static/img/team_headshots/VisheshCopy.png").default} />
                            </div>
  
                          <div className="content">
                              <p className="title h5 text-lg font-medium text-emerald-600 mb-1">Vishesh Garg</p>
                              <p className="text-slate-400">Electric Bike Team Lead</p>
                          </div>
                      </div>  

                      <div className="group text-center">
                            <div className="relative inline-block mx-auto h-32 w-32 rounded-full overflow-hidden">
                              <img src={require("/static/img/team_headshots/CindyCopy.png").default} />
                            </div>
  
                          <div className="content">
                              <p className="title h5 text-lg font-medium text-emerald-600 mb-1">Cindy Peng</p>
                              <p className="text-slate-400">Electric Skateboard Team Lead</p>
                          </div>
                      </div> 

                      <div className="group text-center">
                            <div className="relative inline-block mx-auto h-32 w-32 rounded-full overflow-hidden">
                              <img src={require("/static/img/team_headshots/Junsong.JPG").default} />
                            </div>
  
                          <div className="content">
                              <p className="title h5 text-lg font-medium text-emerald-600 mb-1">Junsong Li</p>
                              <p className="text-slate-400">OneWheel Team Lead</p>
                          </div>
                      </div>  
                      <div className="group text-center">
                            <div className="relative inline-block mx-auto h-32 w-32 rounded-full overflow-hidden">
                              <img src={require("/static/img/team_headshots/vivianCopy.png").default} />
                            </div>
  
                          <div className="content">
                              <p className="title h5 text-lg font-medium text-emerald-600 mb-1">Vivian Dai</p>
                              <p className="text-slate-400">Web Development Team Lead</p>
                          </div>
                      </div>  

                      <div className="group text-center">
                            <div className="relative inline-block mx-auto h-32 w-32 rounded-full overflow-hidden">
                              <img src={require("/static/img/team_headshots/RachelCopy.png").default} />
                            </div>
  
                          <div className="content">
                              <p className="title h5 text-lg font-medium text-emerald-600 mb-1">Rachel Lam</p>
                              <p className="text-slate-400">Management & Marketing Team Lead</p>
                          </div>
                      </div> 

                      <div className="group text-center">
                            <div className="relative inline-block mx-auto h-32 w-32 rounded-full overflow-hidden">
                              <img src={require("/static/img/team_headshots/Enoch.jpg").default} />
                            </div>
  
                          <div className="content">
                              <p className="title h5 text-lg font-medium text-emerald-600 mb-1">Enoch Tin</p>
                              <p className="text-slate-400">Finance Team Lead</p>
                          </div>
                      </div>  
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