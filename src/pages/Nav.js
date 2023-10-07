
import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'
import { Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from "react-bootstrap";


function Nav() {
    return (
        <div style={{height:'15%', backgroundColor:'white', width:'100%', height:'10%', position:'absolute', top:'1vh', textAlign:'center'}}>
            <NavLink to="/Home">
                <button style={{textDecoration: 'underline', top:'5%', position:'relative', left:'0%',width:'15%', height:'10%', backgroundColor:'transparent', color:'black', border:'white', fontFamily:'Nova Flat', fontSize:'4vh'}}>Home</button>
            </NavLink>

            <NavLink to="/About">
                <button style={{textDecoration: 'underline',top:'5%', position:'relative', left:'0%',width:'15%', height:'10%', backgroundColor:'transparent', color:'black', border:'white', fontFamily:'Nova Flat', fontSize:' 4vh'}}>About</button>
            </NavLink>

            <NavLink to="/Projects">
                <button style={{textDecoration: 'underline',top:'5%', position:'relative', left:'0%',width:'15%', height:'10%', backgroundColor:'transparent', color:'black', border:'white', fontFamily:'Nova Flat', fontSize:' 4vh'}}>Projects</button>
            </NavLink>


        </div>
    );
  }
  
  export default Nav;