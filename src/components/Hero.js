import React from 'react';

// import woman image
import WomanImg from '../assets/img/banner-woman2.webp';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
        
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
            B2B & B2C Growth
            </h1>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
            EXPERTS
            </h1>
            {/* <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing illo ad labore
              dolor elit.
            </p> */}
            <button className='btn btn-md bg-transparent hover:bg-secondary-hover md:btn-lg transition-all border-white border rounded-full' >
              LET US HELP
            </button>
            
          </div>
       
        </div>
      </div>
    </section>
  );
};

export default Hero;
