import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useMenuClick } from './store/state'


const Hero = () => {
  
  const {MenuClick, hero} = useMenuClick();
  // const tl = gsap.timeline();


  if(hero == 't'){
    gsap.to('.hero',{
      opacity: 0.1,
      duration: 0.4,
      pointerEvents: 'none',
      ease: "none",
    });
    gsap.to('.hero',{
      y: '-25%',
      opacity: 0.1,
      duration: 1.2,
      pointerEvents: 'none',
      ease: "power3.inOut",
    });
  };
  
  if(hero == 'm'){
    gsap.to('.hero',{
      y: '0%',
      scale: 1,
      opacity: 1,
      duration: 1.25,
      delay: 0.1,
      // pointerEvents: 'all',
      ease: "power3.out",
    });
  };

  if(hero == 'b'){
    gsap.set('.hero',{
      y: '30%',
      scale: 1.3,
      opacity: 1,
      pointerEvents: 'none',
    })
  }

  if(!MenuClick && hero == 'm'){
    gsap.set('#hero-heading',{
      y: '70%',
      rotateX: -70,
      rotateY: 50,

      onComplete: () => {
        gsap.to('#hero-heading',{
          y: 0,
          rotateX: 0,
          rotateY: 0,
          duration: 1,
          stagger: {
            each: 0.1,
            from: 'start',
            ease: 'power1.in',
          },
          delay: 0.5,
          ease: 'power3.out',
        });
      },
    });
  };  
    
  
  const refreshA = () => {

    gsap.set('.loading',{
      delay: 0.1,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      onComplete: ()=>{
        gsap.to('.loading',{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          delay: 0.5,
          duration: 1.3,
          ease: "circ.inOut",
        })
        gsap.from('.hero',{
          y: '30%',
          scale: 1.2,
          opacity: 1,
          duration: 1.3,
          delay: 0.7,
          ease: "power3.out",
        });
    
        gsap.from('#hero-heading',{
          y: '70%',
          rotateX: -70,
          rotateY: 50,
          duration: 1,
          stagger: {
            each: 0.1,
            from: 'start',
            ease: 'power1.in',
          },
          delay: 0.8,
          ease: 'power4.inOut',
        })
      }
    });
    // tl.to('.hero',{
    //   clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    //   delay: 0.3,
    //   duration: 1.25,
    //   ease: "circ.inOut",
    // })
    // gsap.from('.hero',{
    //   y: '30%',
    //   scale: 1.3,
    //   opacity: 1,
    //   duration: 1.3,
    //   delay: 0.5,
    //   ease: "power3.out",
    // });

    // gsap.from('#hero-heading',{
    //   y: '70%',
    //   rotateX: -70,
    //   rotateY: 50,
    //   duration: 1,
    //   stagger: {
    //     each: 0.1,
    //     from: 'start',
    //     ease: 'power1.in',
    //   },
    //   delay: 0.6,
    //   ease: 'power4.inOut',
    // })

  };
  useGSAP(()=>{
    refreshA();
  },[onloadeddata]);

  

  return (
    <>
    <div id='hero-section-wrapper' className=''>
      <div className="loading fixed w-full h-full z-100 bg-[#1a1a1a]"></div>
      <section className={`hero `} > 
        <div className='header flex overflow-hidden'>
          <h1 id='hero-heading'>a</h1>
          <h1 id='hero-heading'>n</h1>
          <h1 id='hero-heading'>s</h1>
          <h1 id='hero-heading'>h</h1>
          <h1 id='hero-heading'>u</h1>
          <h1 id='hero-heading'>L</h1>
        </div>
      </section>
    </div>
    </>
  )
}

export default Hero