import React, { useState } from 'react';

import Avatar from '../images/avatar.png';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">
    <div className="md:absolute md:left-3/4 md:top-36 md:-translate-x-1/2 md:pointer-events-none md:-z-10 flex justify-center mt-20 md:mt-0" aria-hidden="true">
        <img src={Avatar} width="250" />
    </div>

    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-20 md:pt-34 pb-12 md:pt-40 md:pb-20 max-w-xl">

          {/* Section header */}
          <div className="text-left pb-12 md:pb-16">
            <h1 className="text-5xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Hi! I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Austin</span>.</h1>
            <h2 className="text-3xl md:text-3xl font-bold leading-tighter tracking-tighter mt-10" data-aos="zoom-y-out">Full-time engineer, part time tinkerer.</h2>
            <p className="text-md text-gray-600 mt-4" data-aos="zoom-y-out" data-aos-delay="150">I'm a full-stack software and site reliability engineer specializing in making systems that scale. I'm currently employed as a Senior Site Reliability Engineer at WePay by J.P. Morgan and as an officer in the Army National Guard.</p>
            <p className="text-md text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150"></p>
          </div>
        </div>
    </div>
    </section>
  );
}

export default HeroHome;