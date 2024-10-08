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
    <section className='text-white pt-8 pb-4'>
      {/* <h2 className='text-center text-2xl mb-2 font-bold leading-8'>
        Our Clients
      </h2>
      <p className='text-center text-lg font-extralight leading-8'>
        We are trusted by the world’s most innovative teams
      </p> */}

      <div className='logos group relative overflow-hidden whitespace-nowrap inline-block py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]'>
        <div className='animate-slide-left-infinite group-hover:animation-pause inline-block w-max'>
          {/* Ensure that the images cover entire screen width for a smooth transition */}
          {sponsors.map((sponsor, index) => (
            <img
              key={index}
              className='mx-4 inline h-25'
              src={sponsor.imgUrl}
              alt='Sponsor'
              width={width}
            />
          ))}
        </div>

        {/* Duplicate of the above for infinite effect (you can use javascript to duplicate this too) */}
        <div className='animate-slide-left-infinite group-hover:animation-pause inline-block w-max'>
          {/* Ensure that the images cover entire screen width for a smooth transition */}
          {sponsors.map((sponsor, index) => (
            <img
              key={index}
              className='mx-4 inline h-25'
              src={sponsor.imgUrl}
              alt='Sponsor'
              width={width}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
