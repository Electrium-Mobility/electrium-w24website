import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import skateboard from '../../static/img/roles-responsibilty/skateboard.png';
import onewheel from '../../static/img/roles-responsibilty/onewheel.png';
import scooter from '../../static/img/roles-responsibilty/scooter.png';
import skateboard2 from '../../static/img/roles-responsibilty/skateboard2.png';
import onewheel2 from '../../static/img/roles-responsibilty/onewheel2.png';

const Responsibilities: React.FC = () => {
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowImages(window.innerWidth >= 1034);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <Layout>
      <div>
        <div>
          {showImages && (
            <div className="images-container">
              <img src={skateboard} alt="skateboard" style={{ position: 'absolute', width: '150px', height: 'auto', left: '0', transform: 'translateX(-10%)', top: '50px' }} />
              <img src={onewheel} alt="onewheel" style={{ position: 'absolute', width: '150px', height: 'auto', right: '0', transform: 'translateX(10%)', top: '350px' }} />
              <img src={scooter} alt="scooter" style={{ position: 'absolute', width: '150px', height: 'auto', left: '0', transform: 'translateX(-10%)', top: '650px' }} />
              <img src={skateboard2} alt="skateboard-right" style={{ position: 'absolute', width: '150px', height: 'auto', right: '0', transform: 'translateX(10%)', top: '950px' }} />
              <img src={onewheel2} alt="onewheel-left" style={{ position: 'absolute', width: '150px', height: 'auto', left: '0', transform: 'translateX(-10%)', top: '1250px' }} />
            </div>
          )}
        </div>
        <div style={{ maxWidth: '750px', margin: '0 auto', padding: '20px', boxSizing: 'border-box' }}>
          <h1 style={{ fontFamily: "'Lexend', sans-serif", color: '#53bd4b', textAlign: 'center', fontWeight: 700 }}>Role Responsibilities</h1>
          <p>
            Below are the various roles that the team is recruiting for. As part of your application, we ask that you select one role of interest.
          </p>
          <p style={{ fontSize: '0.9em', color: '#666666', marginTop: '20px'}}>
            To keep your application short, you will only be allowed to apply to one role. Note that these roles are not set in stone, and if you join the team, we don't mind allowing members to work on tasks or assignments that are not meant for their role, so don’t worry too much about your selection!
          </p>

          <section style={{ margin: '20px 0' }}>
            <h2 style={{ fontFamily: "'Nunito', sans-serif", color: '#333333', marginBottom: '10px', fontWeight: 600 }}>Micromobility Project Roles</h2>
            <p>
              These roles are focused around making our electric vehicle projects. By signing up for one of these roles, you will be responsible for attending project meetings and technical workshops.
            </p>

            <div style={{ margin: '10px 0 20px 0' }}>
              <p>
                <span style={{ fontWeight: 'bold', color: '#53bd4b' }}>Electrical</span> - Designing and creating schematics and electrical designs, performing battery math and calculations, analyzing electrical systems, creating PCB layouts, creating/assembling/spot-welding batteries, coordinating with Firmware team, and anything else that has to do with electrical components. This is a great opportunity to expand hardware skills and learn more about circuit design.
              </p>
            </div>

            <div style={{ margin: '10px 0 20px 0' }}>
              <p>
                <span style={{ fontWeight: 'bold', color: '#53bd4b' }}>Firmware</span> - Embedded software design on embedded chips (such as the STM32F401/RP2040), analyzing data from electrical systems, coordinating with Electrical team to upload code (OTA, Serial, etc.), and anything that has to do with embedded programming. This is great to get more knowledge on firmware design and how embedded processors are programmed.
              </p>
            </div>

            <div style={{ margin: '10px 0 20px 0' }}>
              <p>
                <span style={{ fontWeight: 'bold', color: '#53bd4b' }}>Mechanical</span> - Prototyping, designing, testing, load analyzing, and creating mechanical systems, such as bike frames, bike wheels, skateboard decks, trucks. This is a great opportunity to apply the knowledge required to build bikes, skateboards and scooters from scratch with your own design, and being able to create it. Lots of CAD, FEA, and machining involved.
              </p>
            </div>

            <div style={{ margin: '10px 0 20px 0' }}>
              <p>
                <span style={{ fontWeight: 'bold', color: '#53bd4b' }}>Marketing</span> - Creating and managing promotional material (such as on Instagram, posters, etc.) for our EV projects. You will also be involved with marketing initiatives outside of your assigned EV project. NOTE: We ask for a more detailed application (including a resume and portfolio) for marketing as a way to gauge your knowledge prior to joining the team, so that we can assign tasks that are a better match for your experiences.
              </p>
            </div>

            <div style={{ margin: '10px 0 20px 0' }}>
              <p>
                <span style={{ fontWeight: 'bold', color: '#53bd4b' }}>Management</span> - Handling logistical work for our EV projects, such as creating and updating a WBS (ClickUp/Jira), project schedules and timelines (GANTT charts), and appointments for project workshops and events. You will also be involved with initiatives and projects outside of your assigned EV project. This is a great role if you want to learn more about project management!
              </p>
            </div>
          </section>

          <section style={{ margin: '20px 0' }}>
            <h2 style={{ fontFamily: "'Nunito', sans-serif", color: '#333333', marginBottom: '10px', fontWeight: 600 }}>External Roles</h2>
            <p>
              These roles work on aspects of the team outside of our EV projects, but are still important nonetheless!
            </p>

            <div style={{ margin: '10px 0 20px 0' }}>
              <p>
                <span style={{ fontWeight: 'bold', color: '#53bd4b' }}>Web Development</span> - Creating and managing the team's website for recruitment and UX/UI design. This is great for anyone who wants to learn more about web development.
              </p>
            </div>

            <div style={{ margin: '10px 0 20px 0' }}>
              <p>
                <span style={{ fontWeight: 'bold', color: '#53bd4b' }}>Finance</span> - Managing budget, acquiring sponsors, and doing anything related to money. This is a good opportunity to apply business skills learned in school. <br/> <br/> NOTE: Applications to the Finance Team are selective, due to the sensitive nature of the work handled by the Finance team. Your application will require a resume, portfolio, and a screening process may be required.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Responsibilities;
