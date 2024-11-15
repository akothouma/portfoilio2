import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
      <button className="dropdown-toggle" onClick={toggleMenu}>
        Menu
      </button>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="dropdown-animation"
        unmountOnExit
      >
        <ul className="dropdown-list">
          <li>ABOUT</li>
          <li>EXPERIENCE</li>
          <li>CONTACT</li>
        </ul>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;