import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import './Navi.css';

import iGitHub from './iGithub.png';
import iLinkedIn from './iLinkedin.gif';
import iEmail from './iEmail.png';

function Navi(props) {
  const [isOpen, setIsOpen] = useState(false); // remember to stay collapsed/expanded

  const toggle = () => setIsOpen(!isOpen);

  // a reactstrap component: https://reactstrap.github.io/?path=/docs/components-navbar--navbar
  // noselect class is defined in App.css and prevents text selection
  // h1 is animated in linked css
  // "navi" instead of "nav" as name already taken from reactstrap
  return (
    <div>
      <Navbar {...props} className='noselect'>
        <NavbarBrand href="/"><h1>johnny madigan</h1></NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
                <NavLink href="https://linkedin.com/in/johnnymadigan">
                <img src={iLinkedIn} alt='LinkedIn' className='link-icon'/><span className='link-text'>LinkedIn</span>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://github.com/johnnymadigan">
                    <img src={iGitHub} alt='GitHub' className='link-icon'/><span className='link-text'>GitHub</span>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="mailto:johnny.madigan@icloud.com">
                    <img src={iEmail} alt='Email me' className='link-icon'/><span className='link-text'>Email</span>
                </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;