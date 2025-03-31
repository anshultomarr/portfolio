import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMenuClick } from './store/state';
import { useRef } from 'react';

const About = () => {
  const mouse = {x: 0, y: 0};
  // const [transformStyles, setTransformStyles] = useState('')
  const useImgRef = useRef();

  const handleMouseMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    const {top, left, width, height} = useImgRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * -10;
    const tiltY = (relativeX - 0.5) * 10;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.99, 0.99, 0.99)`;

    gsap.to('.tilt',{
      duration: 1,
      transform: newTransform,
      ease: 'power3.out',
    });
  };

  const tl = gsap.timeline();
  const {about, aboutVisible} = useMenuClick();


  useGSAP(()=>{
    tl.set('.about-hw h1',{y: 30});
    tl.set('.about-p p',{y: 35});
    tl.set('.about-p2 p',{y: 35});
    gsap.to('.about',{
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 1.25,
      ease: 'circ.inOut',
    });
    gsap.to('.about-hw h1',{
      y: 0,
      duration: 1.2,
      delay: 0.8,
      ease: 'power3.out',
      // stagger: 0.2,
    })
    gsap.to('.about-p p',{
      y: 0,
      duration: 1.2,
      delay: 1,
      ease: 'power3.out',
      stagger: 0.075,
    });
    gsap.to('.about-p2 p',{
      y: 0,
      duration: 1.2,
      delay: 1,
      ease: 'power3.out',
      stagger: 0.075,
    });
    gsap.from('.about-img',{
      opacity: 0,
      duration: 1,
      delay: 0.8,
      ease: 'power2.inOut',
    })
  },[]);
  

  if(about == 'f'){
    tl.to('.about',{
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      duration: 1,
      ease: "power4.inOut",
      onComplete: () => {
        tl.set('.about',{
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        });
      }
    })
  };
  
  // if(aboutVisible && about == 'top'){
  //   console.log(aboutVisible);
  //   // gsap.to('.about-wrapper',{
  //   //   opacity: 0.5,
  //   //   duration: 0.3,
  //   //   ease: 'none',
  //   // });
  //   gsap.to('.tilt',{
  //     y: '-20%',
  //     delay: 0.1,
  //     duration: 1,
  //     ease: "power4.inOut",
      
  //   });

  // }

  return (
    <section  id='about' className='about z-50 bg-[#1a1a1a] flex justify-center items-center w-full h-full' onMouseMove={handleMouseMove}>

      <div  ref={useImgRef} className='about-wrapper flex flex-col gap-[9vw] justify-between items-start sm:flex-row  '>

        {/* sm:max-w-[150px] md:max-w-[250px] xl:max-w-[296px] */}
        <div  className=' tilt w-full sm:w-[50vw] sm:max-w-[296px] '>
          <div className=''>
            <img className='about-img object-cover' src="./images/aboutpicc.jpg" alt="" />
            {/*<img className='about-img object-cover' src="../public/images/arock-about1.webp" alt="" />*/}
          </div>
        </div>

        {/* sm:text-[10px] md:text-[12px] xl:text-sm */}
        <div className=' w-full flex flex-col gap-2 sm:gap-[1vw]'>
          <div className='about-hw'>
            <h1 className='text-[12px] sm:text-[0.8vw] uppercase'>about</h1>
          </div>

          <div className='about-pw text-xl sm:text-[1.5vw] font-u4'>
            <div className='about-p'>
              <p className=''>Hello, I&apos;m ANSHUL, a passionate frontend</p>
            </div>

            <div className='about-p'>
              <p className=''>web developer with a strong enthusiasm for</p>
            </div>

            <div className='about-p'>
              <p className=''>building responsive, scalable, and </p>

            </div>

            <div className='about-p'>
              <p className=''>user-friendly web applications. I&apos;m </p>
            </div>

            <div className='about-p'>
              <p className=''>dedicated to continuously learing and </p>
            </div>

            <div className='about-p'>
              <p className=''>improving my skills to deliver high-quality</p>
            </div>

            <div className='about-p'>
              <p className=''>solutions.</p>
            </div>
            
          </div>
        </div>

        <div className='w-full flex flex-col gap-2 sm:gap-[1vw]'>
          <div className='about-hw'>
            <h1 className='text-[12px] sm:text-[0.8vw] uppercase'>skills</h1>
          </div>

          <div className='about-pw  text-xl sm:text-[1.5vw] font-u4'>

            <div className='about-p2'>
              <p>&bull; Frontend Development: HTML, CSS,</p>
            </div>

            <div className='about-p2'>
              <p>&nbsp; JavaScript and React.</p>
            </div>

            <div className='about-p2'>
              <p>&bull; Styling: Tailwind CSS.</p>
            </div>

            <div className='about-p2'>
              <p>&bull; Animation: GSAP.</p>
            </div>

            <div className='about-p2'>
              <p>&bull; Other Skills: Responsive Web Design</p>
            </div>

            <div className='about-p2'>
              <p>&nbsp; and Web Performance Optimization.</p>
            </div>
            
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default About