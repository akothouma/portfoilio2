import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Nav.css';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('/home');

    const handleChange = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
        window.location.href = value; // Navigate to selected route
    };

    return (
        <div className='overall'>
            <div className="intro" style={{ height: "fit-content", border: "1px solid rgb(255,92,0)", padding: "4px", alignContent: "center" }}>
                <p style={{ fontSize: "12px" }}>LORNA AKOTH</p>
            </div>
            
            <div className="otherComponents">
                <Link to="/home" style={{ textDecoration: "none", color: "rgb(255,92,0)" }}> HOME</Link>
                <Link to="/experience" style={{ textDecoration: "none", color: "rgb(255,92,0)" }}> EXPERIENCE</Link>
                <Link to="/contact" style={{ textDecoration: "none", color: "rgb(255,92,0)" }}> CONTACT</Link>
            </div>

            <div className="burger" style={{ width: "30px",background: 'transparent', border: 'none', cursor: 'pointer'  }} onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ff5c00" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                </svg>
                {isOpen && (
                    <div className="dropdown-menu" style={{ position: 'absolute', backgroundColor: 'transparent', border: '1px solid rgb(255,92,0)', zIndex: '100',gap:"2px" }}>
                        <div onClick={() => handleChange('/home')} style={{ padding: '3px', cursor: 'pointer' }}>HOME</div>
                        <div onClick={() => handleChange('/experience')} style={{ padding: '3px', cursor: 'pointer' }}>EXPERIENCE</div>
                        <div onClick={() => handleChange('/contact')} style={{ padding: '3px', cursor: 'pointer' }}>CONTACT</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavBar;