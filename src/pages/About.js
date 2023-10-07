import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import gsap from 'gsap';


function About() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.set(".background-container", { scaleX: 0 });
    tl.set(".background-container", { scaleX: 0});

    tl.to(".background-container", { scaleX: 1, duration: .5, ease: "power2.out" });
    tl.from(".background-container", {duration: 0.2, ease: "power2.out" }, "-=0.5");
  }, []);

    return (
      <div className="background-container">
        <div className="content" style={{height:'100%'}}>
          <div style={{position:'absolute', width:'100%', height:'100%', top:'20%'}}>
         
          <div style={{position:'relative', margin:'auto', borderStyle:'solid', borderRadius:'20px', height:'20%', borderColor:'white', width:'60%', backgroundColor:"#c2ffed", top:'20px', textDecoration:'none'}}>
          <NavLink to="/Home" style={{textDecoration:'none', zIndex:'5'}}>
              <div style={{border:'solid', width:'100px', height:'25px', borderRadius:'5px', color:'black', textDecoration:'none', left:'10px', position:'absolute', top:'10px'}}>
                  <p style={{textAlign:'center', marginTop:'2px', fontWeight:'100'}}>                 
                    Home
                  </p>
              </div>
          </NavLink>
          
            <p style={{color:'black', textDecoration:'none', justifyContent:'center', textAlign:'center', top:'50px', position:'relative'}}>
              Feel free to reach out at:  <a href="mailto:team@lucianai.com" style={{textDecorationStyle:'dotted', color:'black', textUnderlineOffset:'5px'}} >team@lucianai.com</a>
            </p>
          </div>
          
          </div>
        
       
      </div>
    </div>
    );
  }

export default About;
