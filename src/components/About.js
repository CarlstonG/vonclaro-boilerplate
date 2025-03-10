import React from 'react';

// import img
import Image from '../assets/img/Draft1.png';

const About = () => {
  return (
    <section className='section bg-white' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h1 className='text-black text-2xl mb-3 text-center'>
                Experience Matters
              </h1> 
              <h2 className='mb-4 text-black text-center'>
                Data First Company
              </h2>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit tempore
                earum dolorum quo consequatur rem nihil hic ducimus rerum soluta
                neque harum velit molestiae dignissimos distinctio dolorum nisi
                labore culpa nihil. <br />
                <br />
                Qui doloremque quod sit accusantium unde totam inventore
                cupiditate ratione esse maxime eum recusandae ducimus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
