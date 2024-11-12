import React from 'react';

export default function SponsorCarousel({ sponsors, tier }) {
  const width =
    tier === 'platinum'
      ? '500px'
      : tier === 'gold'
      ? '400px'
      : tier === 'silver'
      ? '250px'
      : '120px';
  return (
    <section className='text-white pt-4 pb-5'>
      <div className='relative w-screen overflow-hidden'>
        <div className='logos group relative overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent_0,white_8vw,white_calc(100%-8vw),transparent_100%)]'>
          <div className='animate-slide-left-infinite group-hover:animation-pause inline-block w-max'>
            {sponsors.map((sponsor, index) => (
              <img
                key={index}
                className='mx-4 inline align-middle h-25'
                src={sponsor.imgUrl}
                alt='Sponsor'
                width={width}
              />
            ))}
          </div>
          <div className='animate-slide-left-infinite group-hover:animation-pause inline-block w-max'>
            {sponsors.map((sponsor, index) => (
              <img
                key={index}
                className='mx-4 inline align-middle h-25'
                src={sponsor.imgUrl}
                alt='Sponsor'
                width={width}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
