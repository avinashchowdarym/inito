import { useState } from 'react';
import '../App.css'

const Footer = () => {
    const[active1,setActive1] = useState(false);
    const[active2,setActive2] = useState(false);
    const[active3,setActive3] = useState(false);


    return (
        <footer>
            <div className="links-con">
                <ul>
                    <li className="head">Company</li>
                    <li>
                        <a href="/about-us">About Us</a>
                    </li>
                    <li>
                        <a href="/careers">Careers</a>
                    </li>
                    <li>
                        <a id="footer-order-now" href="/buy-now">Buy Now</a>
                    </li>
                    <li>
                        <a href="/contact-us">Contact Us</a>
                    </li>
                </ul>
                <ul>
                    <li className="head">Support</li>
                    <li>
                        <a href="/faqs">FAQ</a>
                    </li>
                    <li>
                        <a href="/terms">Terms</a>
                    </li>
                    <li>
                        <a href="/privacy-policy">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/replacements-and-warranty">Returns &amp; Warranty</a>
                    </li>
                    <li>
                        <a href="/consumer-health-data-privacy-policy">Consumer Health Data Privacy Policy</a>
                    </li>
                </ul>
                <ul>
                    <li className="head">Get In Touch</li>
                    <li><a href="tel:+91-9742931931" target="_blank">
                        +91-9742931931
                    </a></li>
                    <li><a href="mailto:help@inito.com" target="_blank">help@inito.com</a></li>
                    <li>
                        2nd Floor, #44, 100 Feet Rd, Koramangala 4th Block, Bengaluru, 560034, IN
                    </li>
                </ul>
                <div className="collapsible" id="mobile-footer-links">
                    <div className={active1 ? "item active":"item"}>
                        <div className="head">
                            <h5 className="title">Company</h5>
                            <img src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/Icon Arrow Down-fbac066563808072fac97a64820fb3e89defb84e6eb03158df960849592ff079.svg" onClick={()=>setActive1(!active1)}/>
                        </div>
                        <div className="body">
                            <a href="/about-us">About Us</a>
                            <a href="/careers">Careers</a>
                            <a href="/buy-now">Buy Now</a>
                            <a href="/contact-us">Contact Us</a>
                        </div>
                    </div>
                    <div className={active2 ? "item active":"item"}>
                        <div className="head">
                            <h5 className="title">Support</h5>
                            * <img src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/Icon Arrow Down-fbac066563808072fac97a64820fb3e89defb84e6eb03158df960849592ff079.svg" onClick={()=>setActive2(!active2)}/> 
                        </div>
                        <div className="body">
                            <a href="/faqs">FAQ</a>
                            <a href="/terms">Terms</a>
                            <a href="/privacy-policy">Privacy Policy</a>
                            <a href="/replacements-and-warranty">Returns &amp; Warranty</a>
                            <a href="/consumer-health-data-privacy-policy">Consumer Health Data Privacy Policy</a>
                        </div>
                    </div>
                    <div className={active3 ? "item active":"item"}>
                        <div className="head">
                            <h5 className="title">Get In Touch</h5>
                            <img src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/Icon Arrow Down-fbac066563808072fac97a64820fb3e89defb84e6eb03158df960849592ff079.svg" onClick={()=>setActive3(!active3)}/>
                        </div>
                        <div className="body">
                            <a href="tel:+91-9742931931" target="_blank">+91-9742931931</a>
                            <a href="mailto:help@inito.com" target="_blank">help@inito.com</a>
                            <li>
                                2nd Floor, #44, 100 Feet Rd, Koramangala 4th Block, Bengaluru, 560034, IN
                            </li>
                        </div>
                    </div>
                </div>
                <div className="social-icon-dark">
                    <a href="https://www.facebook.com/groups/initofertility" target="_blank">
                        <img src="https://cdn.inito.com/inito_website/footer/Facebook - Negative.png"/>
                    </a>
                    <a href="https://www.instagram.com/initofertility" target="_blank">
                        <img src="https://cdn.inito.com/inito_website/footer/Instagram - Negative.png"/>
                    </a>
                    <a href="https://www.linkedin.com/company/initoinc" target="_blank">
                        <img src="https://cdn.inito.com/inito_website/footer/LinkedIn - Negative.png"/>
                    </a>
                    <a href="https://www.youtube.com/@Inito" target="_blank">
                        <img src="https://cdn.inito.com/inito_website/footer/YouTube - Negative.png"/>
                    </a>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-inner-con">
                    <img src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/Logo Inito Small-469e31eca89154d7507eaa91c3dd05b75cc908346860f04e2729a9fca8094e2b.svg"/>
                        <p className="font-med">Copyright 2024.
                            Samplytics Technologies Private Limited.
                            All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;