import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import { useMenuClick } from './store/state';

const Projects = () => {

  const {projects} = useMenuClick();


  useGSAP(()=>{
    gsap.set('.project-img',{
      opacity: 0,
    });
    gsap.set('.project-img-w',{pointerEvents: 'none'});
    gsap.to('.projects',{
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 1.25,
      ease: 'circ.inOut',
    });
    gsap.to('.project-img',{
      opacity: 1,
      delay: 0.8,
      duration: 1.5,
      ease: 'power2.out',
    });
    gsap.to('.project-img-w',{
      pointerEvents: 'all',
      delay: 0.9,
    });

  },[]);

  

  if(projects == 'f'){
    gsap.set('.projects',{

      clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    });
  };

  return (<>
    <section id='projects' className='projects flex justify-center items-center bg-[#1a1a1a]'>
      <div className='project-container relative sm:static'>
        <div className='w-full flex flex-col sm:gap-0 sm:flex-row justify-center sm:justify-between items-center'>

          <p className='absolute top-[13%] uppercase font-u4 text-[10px] sm:text-[clamp(8px,0.7vw,0.7vw)]  left-[1.5%]'>projects</p>

          <div className='img-container  h-[100dvh] w-[100vw] sm:w-[40vw] sm:h-[40vw] flex justify-center items-center sm:justify-start sm:items-center'>
            <a target='_blank' href='https://modern-gaming-web.netlify.app/' className='project-img-w overflow-hidden h-[50vw] sm:max-h-[24vw] sm:h-[24vw] sm:w-[32vw] sm:max-w-[32vw]'>
              <img className='project-img bg-blue-700' src="./images/zlogoicon.svg" alt="project image" />

              <div className='project-title-w '>
                <div className='project-title text-[11vw] sm:text-[7vw] font-u8 uppercase'>
                  <div className='project-title-h1'>
                    <span>gaming</span>
                  </div>
                  <div className='project-title-h2'>
                    <span>website</span>
                  </div>
                  <div className='project-title-h3 text-[10px] font-u4'>
                    <span>inspired by zentry.com</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className='img-container relative h-[100dvh] w-[100vw] sm:w-[40vw] sm:h-[40vw] flex justify-center items-center sm:justify-end sm:static sm:items-center'>
            <a className='project-img-w  overflow-hidden w-[40vw] h-[70vw] sm:max-h-[35vw] sm:h-[35vw] sm:max-w-[22vw]'>
              
              <img className='project-img nikeimg object-contain bg-amber-500' src="./images/nikelogo.svg" alt="project2" />
              

              <div className='project-title-w '>
                <div className='project-title text-[11vw] sm:text-[7vw] font-u8 uppercase'>
                  <div className='project-title-h1'>
                    <span>nike</span>
                  </div>
                  <div className='project-title-h2'>
                    <span>website</span>
                  </div>
                  <div className='project-title-h3 text-[10px] font-u4'>
                    <span>work in progress</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  </>)
}

export default Projects