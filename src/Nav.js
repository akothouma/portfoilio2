import React from "react"
import {Link} from "react-router-dom"
import './Nav.css'


function NavBar(){
    return(
        <div className='overall'>
           
            <div className="intro"style={{ height:"fit-content",border:"1px solid rgb(255,92,0)",padding:"4px",alignContent:"center"}}>
            
                <p style={{fontSize:"12px"}}>LORNA AKOTH</p>   

            </div>
            
            <div className="otherComponents">
               <Link to="/home" style={{textDecoration:"none",color:"rgb(255,92,0)"}}> ABOUT</Link>
               {/* <Link to="/about" style={{textDecoration:"none",color:"rgb(255,92,0)",alignContent:"center"}}>   ABOUT</Link> */}
               <Link to="/experience" style={{textDecoration:"none",color:"rgb(255,92,0)",}}>   EXPERIENCE</Link>
               <Link to="/contact"style={{textDecoration:"none",color:"rgb(255,92,0)"}}> CONTACT</Link>
               {/* <Link to="/resume" style={{textDecoration:"none",color:"rgb(255,92,0)",height:"fit-content",border:"1px solid rgb(255,92,0)",padding:"5px" ,alignContent:"center"}}> RESUME</Link>  */}
            </div>
        </div>
    )
}
export default NavBar