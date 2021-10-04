import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../logo_1.png';
import './Header.css';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" sticky="top">
            <Container>

                <Navbar.Brand><Link className="text-decoration-none text-muted" to="/home"><Image className="width-image border-0" src={logo} thumbnail /><span className="fs-4 fw-bold">পাঠ<span className="fs-4 fw-bold text-success">শালা</span></span></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="mx-auto nav-design links">
                        <ul className="my-auto">
                            <li><NavLink to="/home" className="text-decoration-none text-dark" activeClassName="selected"><i className="fas fa-home"></i> Home</NavLink></li>

                            <li><NavLink to="/skills" className="text-decoration-none text-dark" activeClassName="selected"><i className="fas fa-rocket"></i> Skills</NavLink></li>

                            <li><NavLink to="/dashboard" className="text-decoration-none text-dark" activeClassName="selected"><i className="fas fa-clipboard-list"></i> Dashboard</NavLink></li>

                            <li><NavLink to="/about" className="text-decoration-none text-dark" activeClassName="selected"><i className="fas fa-info-circle"></i> About</NavLink></li>

                        </ul>
                    </Nav>

                    <Nav>
                        <Button variant="secondary" className="signIn">Sign in <i className="fas fa-sign-in-alt"></i></Button>
                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default Header;