import { Navbar, Nav } from "react-bootstrap";
import "../assets/MyNav.css";

const MyNav = () => (
  <Navbar bg="info" className="MyNav">
    <Navbar.Brand href="home" className="Title">
      EpiBooks
    </Navbar.Brand>
    <Nav classname="mr-auto">
      <Nav.Link href="#home" className="Title1">
        Shop
      </Nav.Link>
      <Nav.Link href="#about" className="Title1">
        About
      </Nav.Link>
      <Nav.Link href="#browse" className="Title1">
        Browse
      </Nav.Link>
    </Nav>
  </Navbar>
);
export default MyNav;
