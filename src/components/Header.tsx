// @ts-ignore

import * as React from 'react';
import { Image, Nav, Navbar, } from 'react-bootstrap'
import search from '../images/Union.png'
import union from '../images/Union1.png'
import star from '../images/Star (Stroke).png'
import logo from '../images/Group.png'
import avi from '../images/Ellipse.png'


export default function App () {
  return (
    <header>
      <Navbar  expand="lg" collapseOnSelect>
        <>
          <div>
            <Navbar.Brand className=''><Image src={logo}/></Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="r-link">
              <div className='fldiv'>
                <Nav.Link>Training Mode</Nav.Link>
                <Nav.Link><span id='nav-Link'>Live Mode</span></Nav.Link>
              </div>
              <div className="sldiv">
                  <Nav.Link>Show All</Nav.Link>
                  <Nav.Link>Crypto</Nav.Link>
                  <Nav.Link>Commodities</Nav.Link>
                  <Nav.Link>Stock</Nav.Link>
                  <Nav.Link>Index</Nav.Link>
                  <Nav.Link>Currency</Nav.Link>
              </div>
              <div className="tldiv">
                  <Nav.Link><Image src={search}/></Nav.Link>
                  <Nav.Link><Image src={star}/></Nav.Link>
                  <Nav.Link><Image src={union}/></Nav.Link>
                  <Nav.Link><Image height='23px' src={avi}/></Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </>
      </Navbar>
    </header>
  );
}
