import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import { useMenuClick } from './store/state';

const Contact = () => {

  const {contact} = useMenuClick();
  useGSAP(()=>{
    gsap.to('.contact',{
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 1.25,
      ease: 'circ.inOut',
    });
  },[]);

  if(contact == 'f'){
    gsap.set('.contact',{

      clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    });
  };

  return (<>
    <section id='contact' className='contact flex justify-center items-center bg-blue-600'>
      <div className='text-white text-2xl'>
        contact
      </div>
    </section>
  </>)
}

export default Contact