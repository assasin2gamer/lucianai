import React from "react";
import { Link } from "react-router-dom";

import './pages.css';

import cyber3 from "./images/cyber3.png";
import bg from "./images/background.jpg";
import cyber2 from "./images/cyber2.JPG";

import { NavLink } from "react-router-dom";

function Cybersecurity() {
    return (
      <div className="Home">

          <p style={{fontSize:'200%', position:'relative', left:'10%'}}>Cyber Security</p>
          <p style={{fontSize:'120%', position:'relative', left:'10%', width:'50%', lineHeight:'150%'}}>I am the founder and fourth year president of one of the largest student led cybersecurity club in the nation. We particapte in four to five competitions including National Cyber League, Cyberpatriot, and Mayors Cup.</p>
          <p></p>
          <p style={{fontSize:'120%', position:'relative', left:'10%', width:'50%',top:'29%'}}>The competitions includes Cryptography, Reverse Engineering, Scripting, Log Analysis, SQL/Injection Pentesting, and Packet Tracing.</p>
          <p style={{fontSize:'120%', position:'relative', left:'10%', width:'50%',top:'29%'}}>Our past four year mission statement has been one word: Access <br/> Providing over ten thousand dollars over the past four years, my club has been able to teach a diverse set of students and peers coding and cyber security.</p>
          
        <img style={{position:'absolute', top: '15%', left:'70%', width:'20%', borderColor:'black', borderStyle:'solid',}} src={cyber2} alt="photo"/>
        <img style={{position:'absolute', top:'50%', left:'70%', width:'20%', borderColor:'black', borderStyle:'solid',}} src={cyber3} alt="photo"/>      
      
      
      
      </div>
    );
  }

export default Cybersecurity;