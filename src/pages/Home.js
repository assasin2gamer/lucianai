import React from "react";

import { NavLink } from "react-router-dom";

import { useEffect } from 'react';
import gsap from 'gsap';
import './pages.css'


import { Link } from "react-router-dom";


const Home = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.set(".line", { scaleX: 0, y: '100%' });
    tl.set(".line2", { scaleX: 2 });

    tl.to(".line", { scaleX: 1, y: "100%", duration: 1, ease: "power2.out" });
    tl.from(".text", { opacity: 0, y: "0%", duration: 0.5, ease: "power2.out" }, "-=0.5");
  }, []);

  return (
    <div className="background-container">
      <div className="content">
        <div className="container" style={{ position: 'relative', height: "50%", top: '200px', margin: 'auto', zIndex: 2 }}>
          <div className="line top" style={{ margin: 'auto', position: 'relative' }}></div>
          <div className="text">
            <section id="banner" style={{ height: '150px', margin: 'auto', position: 'sticky' }}>
              <div class="inner">
                <h2>Kerrigan ML</h2>
                <p style={{ width: '50vw', textAlign: 'center', margin: 'auto' }}>Quantifying human emotions</p>
              </div>
            </section>
          </div>
          <div className="line bottom" style={{ margin: 'auto', position: 'relative' }}></div>

          <div style={{ position: 'relative', width: '100%', height: '51px' }}>
            <div className="line2" style={{ justifyContent: 'center', alignContent: 'center', textAlign: 'center', marginTop: '2px', color: 'white' }}></div>
          </div>
          <div style={{ width: '100%' }}>
            <NavLink to="/About" style={{ textDecoration: 'none', zIndex: '5' }}>
              <div style={{ border: 'solid', width: '100px', height: '25px', borderRadius: '5px', color: 'white', margin: 'auto', textDecoration: 'none' }}>
                <p style={{ textAlign: 'center', marginTop: '2px', fontWeight: '100' }}>
                  Contact
                </p>
              </div>
            </NavLink>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Home;
