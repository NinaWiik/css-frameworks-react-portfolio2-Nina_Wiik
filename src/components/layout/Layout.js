import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Home from "../home/Home";
import PackagesPage from "../packages/PackagesPage";
import Contact from "../contact/Contact";
import FooterPage from './FooterPage';


function Layout() {
    return (
        <>
        <Router>
            <Navbar variant="light" expand="lg">
                <NavLink to ="/" exact>
                    <Navbar.Brand>January Island Escapes</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink to="/" exact className="nav-link">Home  |</NavLink>
                        <NavLink to="/packages" className="nav-link">Packages |</NavLink>
                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/packages" component={PackagesPage} />
                    <Route path="/contact" component={Contact} />
                </Switch>
        </Router>
        <FooterPage />
        </>
    );
}

export default Layout;
