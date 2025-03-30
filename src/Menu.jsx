import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { useMenuClick } from './store/state';
import { useRef } from 'react';


const Menu = () => {

    const {MenuClick, MenuClose, handleMenuClick} = useMenuClick();
    const menuRef = useRef();

    const handleclick = () => {

    }
    console.log(MenuClick,'menu')
        // useGSAP(()=>{
            if(MenuClick){
                gsap.to(menuRef.current,{
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0, 0% 0%)",
                    // duration: 1,
                    zIndex: 20,
                    pointerEvents: 'all',
                    ease: 'power4.inOut'
                });
            } if(!MenuClick) {
                gsap.to(menuRef.current,{
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                    duration: 1,
                    zIndex: 10,
                    pointerEvents: 'none',
                    ease: 'power4.inOut'
                });
            }
        // },{scope: menuRef});
    
    


    // if (menuOpen){
        // useGSAP(()=>{
            // gsap.to('.fullscreen-menu',{
            //     clipPath: "polygon(0% 100%, 100% 100%, 100% 0, 0% 0%)",
            //     pointerEvents: 'all',
            //     delay: 0.3,
            //     duration: 0.7,
            //     ease: 'power4.inOut'
            // })
            // gsap.to(['#menu-img2, #menu-img3, #menu-img4'],{
            //     top: '50%',
            //     delay: 0.1,
            //     duration: 1.25,
            //     stagger: 0.09,
            //     ease: 'power4.inOut'
            // })
            // gsap.to(element.current,{
            //     top: "-50%",
            //     opacity: 0,
            //     duration: 1.25,
            //     ease: "power4.inOut",
            // })
        // })
    // };
    // if(!isMenuClose){
    //     console.log(isMenuClose , "close clicked")
    //     useGSAP(()=>{
    //         gsap.to('.fullscreen-menu',{
    //             clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    //             pointerEvents: 'none',
    //             duration: 1.25,
    //             ease: 'power4.inOut'
    //         })
    //     })
    // }
    
    // useGSAP(()=>{
    //     gsap.set(['#menu-img2, #menu-img3, #menu-img4'], {
    //         top: '150%',
    //     })
    // });

  
  return (
    <div className='fullscreen-menu' ref={menuRef} >
        <div className='menu-nav'>
            <p className='menu-close font-a4 uppercase text-[12px] cursor-pointer' onClick={()=>handleMenuClick()} >close</p>
        </div>

        <div className='menu-img'>
            <img src="../public/images/tiltimg.webp" alt="" id='menu-img1'/>
            <img src="../public/images/tiltimg.webp" alt="" id='menu-img2'/>
            <img src="../public/images/tiltimg.webp" alt="" id='menu-img3'/>
            <img src="../public/images/tiltimg.webp" alt="" id='menu-img4'/>

            {/* <img src="../public/images/heropic3.jpg" alt="" id='menu-img1'/>
            <img src="../public/images/heropic3.jpg" alt="" id='menu-img2'/>
            <img src="../public/images/heropic3.jpg" alt="" id='menu-img3'/>
            <img src="../public/images/heropic3.jpg" alt="" id='menu-img4'/> */}
        </div>

        <div className='menu-items'>
            <div className="menu-logo">
                <p className='font-chango text-5xl'>A</p>
            </div>

            <div className="menu-links">
                <ul>
                    <li><a href="">about</a></li>
                    <li><a href="">skills</a></li>
                    <li><a href="">projects</a></li>
                    <li><a href="">contact</a></li>
                </ul>
            </div>

            <div className="menu-footer">
                <div className='menu-footer-col'>
                    <div className='menu-footer-item'><p>social link</p></div>
                    <br />
                    <div className='menu-footer-item'><p>get in touch</p></div>
                </div>

                <div className='menu-footer-col'>
                    <div className='menu-footer-item'><p>instagram</p></div>
                    <br />
                    <div className='menu-footer-item'><p>email</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu