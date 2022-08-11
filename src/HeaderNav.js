import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderNav.css';

import iGitHub from './icon-github.png';
import iLinkedIn from './icon-linkedin.gif';
import iEmail from './icon-email.png';

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function HeaderNav(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...props} >
        <NavbarBrand href="/" ><h1>~$ johnny madigan</h1></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
                <NavLink href="https://linkedin.com/in/johnnymadigan">
                <img src={iLinkedIn} alt='LinkedIn'/>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://github.com/johnnymadigan">
                    <img src={iGitHub} alt='GitHub'/>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="mailto:johnny.madigan@icloud.com">
                    <img src={iEmail} alt='Email me'/>
                </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderNav;