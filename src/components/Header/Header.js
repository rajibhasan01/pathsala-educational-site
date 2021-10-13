import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../logo_1.png';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    const history = useHistory();

    const handleSignInBtn = () => {
        history.push('/login')
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" sticky="top">
            <Container>

                <Navbar.Brand>
                    <Link className="text-decoration-none text-muted" to="/home"><Image className="width-image border-0" src={logo} thumbnail /><span className="fs-4 fw-bold">পাঠ<span className="fs-4 fw-bold text-success">শালা</span></span></Link>
                </Navbar.Brand>
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

                    <Nav className="ms-md-5 ps-md-5">
                        {
                            !user.email ? <Button onClick={handleSignInBtn} variant="secondary" className="signIn">Sign in <i className="fas fa-sign-in-alt"></i>
                            </Button>
                                :
                                <div className="logoutName"><i className="fas fa-user my-auto"> <span className="text-muted m-1"> {user.displayName} </span></i><Button onClick={logOut} variant="warning" className="logout">Log out <i className="fas fa-sign-in-alt"></i>
                                </Button></div>
                        }
                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default Header;