import React from 'react'
import { useMenuClick } from './store/state';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Skills = () => {

  const {skills} = useMenuClick();

  useGSAP(()=>{
    gsap.to('.skills',{
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 1.25,
      ease: 'circ.inOut',
    });
    // console.log('usegsap');
  },[]);

  if(skills == 'f'){
    gsap.set('.skills',{

      clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    });
  };

  return (<>
    <section id='skills' className='skills flex justify-center items-center bg-green-600'>
      <div className='flex justify-center text-2xl'>
        skills
      </div>
    </section>
  </>)
}

export default Skills