import { useEffect, useState, useRef} from 'react';
import { useMenuClick } from './store/state';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


  


const Navbar = () => {

  const {MenuClick, hero, about, skills, projects, contact, handleContactT, handleContactF, handleProjectsT, handleProjectsF, handleSkillsT, handleSkillsF, handleHeroVisible, handleAboutTop, handleAboutVisible, handleAboutT, handleAboutF, handleHeroT, handleHeroM, handleHeroB, handleHeroV, handleMenuClick} = useMenuClick();

  const images = document.querySelectorAll('#menu-img4, #menu-img3, #menu-img2, #menu-img1');
  const imagesArray = Array.from(images);
  imagesArray.reverse();

  const mouse = {x: 0, y: 0};
  const cx = window.innerWidth/2;
  const cy = window.innerHeight/2;
  const scales = ['0.87', '0.91', '0.95', '0.99'];
  scales.reverse();

  const [transformStyles, setTransformStyles] = useState('')
  const useMenuImgRef = useRef();

  const handleMouseMove = (e) =>{
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    const {top, left, width, height} = useMenuImgRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * -8;
    const tiltY = (relativeX - 0.5) * 8;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.99, 0.99, 0.99)`;

    const dx = mouse.x - cx;
    const dy = mouse.y - cy;

    imagesArray.forEach((div, index) => {
      const parallaxX = -(dx * (index + 1)) / 100;
      const parallaxY = -(dy * (index + 1)) / 100;

      
      const transformStyless = `translate(${parallaxX}px, ${parallaxY}px) scale(${scales[index]})`;


      gsap.to(div,{
        duration: 1,
        transform: transformStyless,
        stagger: {
          from: 'end'
        },
        ease: 'power2.out',
      });
    });


    gsap.to(useMenuImgRef.current,{
      duration: 1,
      transform: newTransform,
      ease: 'power3.out',
    });
  };

  if(MenuClick){
    gsap.to(useMenuImgRef.current,{
      transform: 'perspective(700px)',
      duration: 1.5,
      ease: 'power3.out',
    });
    
  }

  const handleMouseLeave = () => {
    const newTransform = `perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
    
    gsap.to(useMenuImgRef.current,{
      duration: 1.5,
      transform: newTransform,
      ease: 'power3.out',
    });
    gsap.to('#menu-img4, #menu-img3, #menu-img2, #menu-img1',{
      transform: 'rotateX(0deg) rotateY(0deg)',
      duration: 1,
      ease: 'power3.out',
    });
  };

  // const update = () => {
  //   const dx = mouse.x - cx;
  //   const dy = mouse.y - cy;

  //   const tiltX = (dy/cy) * 10;
  //   const tiltY = (dx/cx) * 10;

  //   gsap.to('.menu-img',{
  //     duration: 2,
  //     transform: `rotate3d(${tiltX}, ${tiltY}, 0, 15deg)`,
  //     ease: 'none',
  //   });

  //   images.forEach((img, index) => {
  //     const parallaxX = -(dx * (index + 1)) / 100;
  //     const parallaxY = -(dy * (index + 1)) / 100;

  //     const transformStyles = `translate(calc(-50% + ${parallaxX}px), calc(-50% + ${parallaxY}px)) scale(${scales[index]})`;

  //     gsap.to(img,{
  //       duration: 1,
  //       transform: transformStyles,
  //       ease: 'power2.out',
  //     });
  //   });
  // };

  // document.body.addEventListener('mousemove', (e)=>{
  //     mouse.x = e.clientX;
  //     mouse.y = e.clientY;
  //     update();
  // });
  // document.body.addEventListener('mouseleave', (e)=>{
  //     mouse.x = cx + 200;
  //     mouse.y = cy;
  //     update();
  // });

  const tl = gsap.timeline();
  const tl1 = gsap.timeline();
  
  
  
  const handleMenuOpen = () => {
    
    tl1.set('#menu-img2, #menu-img3, #menu-img4',{
      y: '40%',
    });
    tl1.set('.menu-logopw',{y: 40});
    // tl1.set('',{y: 40});
    tl1.set('.menu-footer-itemp',{y: 20});
    tl1.set('.menu-footer-itema',{y: 20});
    tl1.set('.menu-link a',{y: 40});
    
    handleHeroT();

    tl1.set('.menu-open, .menu-close',{
      pointerEvents: 'none',
    })
    
    tl1.to('.fullscreen-menu',{
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      pointerEvents: 'all',
      delay: 0.01,
      duration: 1.25,
      ease: "circ.inOut",
    });
    
    gsap.to('#menu-img4, #menu-img3, #menu-img2',{
      y: '0%',
      delay: 0.2,
      duration: 2,
      stagger: {
        from: "end",
        amount: 0.2,
        ease: 'power3.out',
      },
      ease: 'power4.out',
    });
    gsap.to('.menu-logopw',{
      y: 0,
      duration: 1,
      delay: 0.8,
      ease: 'power3.out'
    })
    gsap.to('.menu-link a',{
      y: 0,
      duration: 1,
      delay: 1,
      stagger: 0.1,
      ease: 'power3.out'
    })
    gsap.to('.menu-footer-itemp',{
      y: 0,
      duration: 1,
      delay: 1.2,
      stagger: 0.1,
      ease: 'power3.out'
    })
    gsap.to('.menu-footer-itema',{
      y: 0,
      duration: 1,
      delay: 1.2,
      stagger: 0.1,
      ease: 'power3.out'
    })

    
    tl1.set('.menu-close',{
      // delay: 0.2,
      pointerEvents: 'all',
      onComplete: () => {
        handleHeroB();
        },
    });
    handleMenuClick();
  };

  const handleMenuClose = () => {
    gsap.to('.menu-img',{
      opacity: 0.5,
      duration: 0.3,
      ease: 'none',
    });
    gsap.to('.menu-img',{
      y: '-20%',
      delay: 0.1,
      duration: 1,
      ease: "power4.inOut",
    });
    gsap.to('.menu-items',{
      opacity: 0.5,
      duration: 0.3,
      ease: 'none',
    })
    gsap.to('.menu-items',{
      y: '-20%',
      opacity: 0.5,
      delay: 0.1,
      duration: 1,
      ease: "power4.inOut",
    })

    // handleHeroM();
    handleMenuClick();

    gsap.set('.menu-close',{
      pointerEvents: 'none',
    });

    tl.to('.fullscreen-menu',{
      pointerEvents: 'none',
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      delay: 0.01,
      duration: 1.25,
      ease: "circ.inOut",

      onComplete: () => {
        
        tl.set('.fullscreen-menu',{
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
          pointerEvents: 'none',
        });
        
        tl.set('.menu-open',{
          pointerEvents: 'all',
        });
      },
    });
    tl.set('.menu-img',{
      delay: 0.3,
      y: "0%",
      opacity: 1,
    });
    tl.set('.menu-items',{
      delay: 0.3,
      y: "0%",
      opacity: 1,
    })

    // tl.set('.menu-open',{
    //   pointerEvents: 'all',
    // });
  }
  const handleAnime = ()=>{
    console.log('handleanime')
    gsap.to('.nav-links',{
      position: 'relative',
      y: -100,
      duration: 1,
      color: 'red',
      ease: 'circ.out',
    })
  }
  const [aboutClick, setAboutClick] = useState(false);
  const linkTL = gsap.timeline();
  const handleLinksA = ()=>{
    linkTL.to('.link-text1, .link-text2',{
      y: '-50',
      duration: 0.3,
      ease: "power3.out",
      onComplete: ()=>{
        gsap.set('.link-text1, .link-text2',{
          y: 0,
        })
      }
    })
  }
  const handleLinksB = ()=>{
    gsap.set('.link-text1, .link-text2',{
      y: '0',
    })
  }

  return (
    <>
    <div className=' overflow-x-hidden min-w-[100vw]'>
      {/* <p className='fixed text-5xl text-white z-100 top-50 right-0'>{MenuClick.toString()}</p> */}

      <nav className='nav'>
        <div className='nav-items relative flex justify-between items-center uppercase text-[13px]'>
          <div className='font-chango leading-2.5  text-[15px] sm:text-[2vw]' >
            <a className='' href="#hero" onClick={()=>{
              handleAboutF();
              handleProjectsF();
              handleHeroM();
            }}><img className='menu-logo-svg ' src='./images/aLogo1.svg'/></a>
          </div>

          <p className='menu-open absolute right-0 top-0 inline-block text-[12px] sm:text-[clamp(10px,0.8vw,0.8vw)]' onClick={() => {
            if(MenuClick) return;
            handleMenuOpen();
          }} >Menu</p>
        </div>
      </nav>

      <div>
        
        <div className='fullscreen-menu overflow-hidden'onMouseMove={handleMouseMove} >

          <div className='menu-nav'>
            <p className='menu-close font-a4 uppercase text-[12px] sm:text-[0.9vw] cursor-pointer' onClick={()=>{
              if(!MenuClick) return;
              handleMenuClose();
              handleHeroM();
            }} >close</p>
          </div>

          <div className='menu-img' ref={useMenuImgRef} style={{transform: transformStyles}} >

            <div id="menu-img4">
              {/* <img src="../public/images/tiltimg.webp" alt="" id='menu-img44'/> */}
              <img className=' grayscale-100' src="./images/heropic3.jpg" alt="" id='menu-img44'/>
            </div>

            <div id="menu-img3">
              {/* <img src="../public/images/tiltimg.webp" alt="" id='menu-img33'/> */}
              <img className=' grayscale-100' src="./images/heropic3.jpg" alt="" id='menu-img33'/>
            </div>

            <div id="menu-img2">
              {/* <img src="../public/images/tiltimg.webp" alt="" id='menu-img22'/> */}
              <img className=' grayscale-100' src="./images/heropic3.jpg" alt="" id='menu-img22'/>
            </div>

            <div id="menu-img1">
              {/* <img src="../public/images/tiltimg.webp" alt="" id='menu-img11'/> */}
              <img className=' grayscale-100' src="./images/heropic3.jpg" alt="" id='menu-img11'/>
            </div>

          </div>

          <div className='menu-items'>
            <div className="menu-logo">
                <div className='menu-logopw'>
                  <div className='font-chango cursor-pointer' onClick={()=>{
                    handleAboutF();
                    // handleSkillsF();
                    handleProjectsF();
                    // handleContactF();
                    handleMenuClose();
                    handleHeroM();
                  }}><img className='menu-logo-svg ' src='./images/aLogo1.svg'/></div>
                </div>
            </div>

            <div className="menu-links">
              <ul className='flex gap-2 '>
                  <li className='menu-link h-10 w-40'>
                    <a className='nav-link1 absolute flex flex-col gap-2' href="#about" onClick={()=>{
                      handleProjectsF();
                      handleMenuClose();
                      handleAboutT();
                    }}>
                      <span className='link-text1'>about</span>
                      <span className='link-text2'>about</span>
                    </a>
                  </li>
                      
                  <li className='menu-link h-10 w-60'>
                    <a className='absolute nav-link2 flex flex-col gap-2' href="#projects" onClick={()=>{
                      handleAboutF();
                      handleMenuClose();
                      handleProjectsT();
                    }}>
                      <span className='link-text1'>projects</span>
                      <span className='link-text2'>projects</span>
                    </a>
                  </li>
              </ul>
            </div>

            <div className="menu-footer">
                <div className='menu-footer-col'>
                  <div className='menu-footer-item'><p className='menu-footer-itemp'>social link</p></div>
                  <br />
                  <div className='menu-footer-item'><p className='menu-footer-itemp'>get in touch</p></div>
                </div>

                <div className='menu-footer-col flex flex-col'>
                  <div className='menu-footer-item'><a className='menu-footer-itema ' href='https://github.com/anshultomarr' ><span className='menu-footer-itemat '>github</span></a></div>
                  <br />
                  <div className='menu-footer-item'><a className='menu-footer-itema' href='mailto:anshultomar63@gmail.com' ><span className='menu-footer-itemap'>email</span></a></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar