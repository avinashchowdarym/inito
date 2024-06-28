import { useState } from 'react';
import '../App.css';
import LogoInito from '../imgs/Inito_Logo.svg'

const Navbar = ()=>{
    const [active,setActive] = useState(false);
    return(
        
        <header>
            <div className="header__con">
            <div className="ham-menu" id="mobile-ham-menu" onClick={()=>setActive(!active)}>
                    <div className="line-con">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
                
                <div className='logo'>
                    <a href='/'>
                        <img alt='Inito Logo' src={LogoInito}/>
                    </a>
                </div>
                <nav>
                    <a className='font-semi-bold text-dtheme'>About us</a>
                    <a className='font-semi-bold text-dtheme'>Blog</a>
                    <a className='font-semi-bold text-dtheme'>FAQ</a>
                    <a className='font-semi-bold text-dtheme'>Contact Us</a>
                    <a className='font-semi-bold text-dtheme'>Careers</a>
                    <a className='button' id='order-now-menu' >Try inito</a>
                </nav>
            </div>
            <div className={active ? "sidebar active" : "sidebar"} id="mobile-sidebar">
            <nav>
                <a className="font-semi-bold text-dtheme" href="/about-us">About Us</a>
                <a className="font-semi-bold text-dtheme" href="https://blog.inito.com">Blog</a>
                <a className="font-semi-bold text-dtheme" href="/faqs">FAQ</a>
                <a className="font-semi-bold text-dtheme" href="/contact-us">Contact Us</a>
                <a className="font-semi-bold text-dtheme" href="/careers">Careers</a>


            </nav>
        </div>
        </header>
    )
}

export default Navbar;