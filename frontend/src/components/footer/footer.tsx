import { useState } from "react";
import { Link } from "react-router-dom";
// import {
//     Facebook,
//     X,
//     Instagram,
//     Linkedin,
//     }
//     from "../../assets/svgs";




export default function Footer()  {  
    return ( 
        <div className="footer-container">
            <div className="social-links">
            <span>
                <a href="https://facebook.com/hophippyfb">Facebook</a>
            </span>
            <span>
                <a href="https://instagram.com/hophippyapp">Instagram</a>
            </span>
            <span>
                <a href="https://linkedin.com/company/hophippy">Linkedin</a>
            </span>
            <span>
                <a href="https://x.com/hophippyapp">X</a>
            </span>
            </div>
            <div className="corp-links">
                <span>
                    <a href="https://hophippy.com/team">Team</a>
                </span>
                <span>
                    <a href="https://hopippy.com/contact">Support</a>
                </span>
                <span>
                    <a href="https://hophippy.com/investors">Investors</a>
                </span>

            </div>
            <div className="info-links">
                <span>
                    <a href="https://hophippy.com/featuresover">Features</a>
                </span>

            </div>
            <div className="creator-links">

            </div>
            
            
        </div>
    )
    
}