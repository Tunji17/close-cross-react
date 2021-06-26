import { Image, Nav, Navbar, } from 'react-bootstrap'
import search from '../assets/search.png'
import degree from '../assets/degree.png'
import transparentstar from '../assets/transparentstar.png'
import logo from '../assets/cicon.png'
import userphoto from '../assets/userphoto.png'


export const Header = () => {
  return (
    <header>
      <Navbar  expand="lg" collapseOnSelect>
        <>
          <div>
            <Navbar.Brand><Image src={logo}/></Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="navigation">
              <div className='navigation-left'>
                <Nav.Link>Training Mode</Nav.Link>
                <Nav.Link><span id='nav-Link'>Live Mode</span></Nav.Link>
              </div>
              <div className="navigation-center">
                  <Nav.Link>Show All</Nav.Link>
                  <Nav.Link>Crypto</Nav.Link>
                  <Nav.Link>Commodities</Nav.Link>
                  <Nav.Link>Stock</Nav.Link>
                  <Nav.Link>Index</Nav.Link>
                  <Nav.Link>Currency</Nav.Link>
              </div>
              <div className="navigation-right">
                  <Nav.Link><Image src={search}/></Nav.Link>
                  <Nav.Link><Image src={transparentstar}/></Nav.Link>
                  <Nav.Link><Image src={degree}/></Nav.Link>
                  <Nav.Link><Image height='32px' src={userphoto}/></Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </>
      </Navbar>
    </header>
  );
}
