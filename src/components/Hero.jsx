import React from 'react';
import Clips from './utils/Clips';
import SocialLink from './utils/SocialLink';

const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {
  // console.log(heroapi)
  return (
   <>
      <div className='relative h-auto w-auto flex flex-col overflow-x-clip'>
        <p className=' z-50 relative top-24 text-4xl 
        right-0 left-0 text-yellow-500 font-semibold'><marquee behavior="" direction="right">WHAT ARE YOU BUYING FROM US!</marquee></p>
        <div className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:[55vh] 
      w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
        <div className='relative opacity-100 z-20 grid items-center justify-items-center nike-container'>
          <div className='grid items-center justify-items-center mt-24 md:mt-24'>
            <h1 className='text-2xl lg:text-5xl md:text-4xl sm:text-3xl 
            xsm:text-2xl  font-extrabold filter drop-shadow-sm 
            text-slate-200'>{title}</h1>
            <h1 className='text-2xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>{subtitle}</h1>
            <button type='button' className='button-theme bg-slate-200  shadow-slate-200 rounded-xl my-5'>{btntext}</button>
            <div className='grid items-center gap-2 md:gap-3 
            absolute top-[30vh] lg:top-[29vh] left-[-3%] xl:left-0 
            w-auto h-auto'>
              {videos?.map((val, i) => (
                <Clips
                  key={i}
                  imgsrc={val.imgsrc}
                  clip={val.clip}
                 />
              ))}
            </div>
            <div className='grid items-center absolute 
            top-[25vh] lg:top-[33vh] right-0 gap-4'>
              {sociallinks?.map((val, i) => (
                <SocialLink
                  key={i}
                  icon={val.icon}
                />
              ))}
            </div>
          </div>
          <div className='flex items-center relative top-16'>
            <img
              src={img}
              alt='hero-img/img'
              className='w-[21em] h-[45vh] lg:h-[35vh] 
              md:h-[31vh] sm:h-[21vh] 
              xsm:h-[19vh] transitions-theme -rotate-[25deg] 
              hover:rotate-0 cursor-pointer object-fill '
            />
          </div>
        </div>
      </div>
   </>
  )
}

export default Hero