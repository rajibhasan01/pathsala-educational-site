import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './DashBoardHeader.css';

const DashBoardHeader = () => {
    return (
        <div className="d-flex justify-content-between">
            <div className="bgColor px-3 py-2 rounded-pill mt-4 ">

                <NavLink activeClassName="activeBtn" to="/dashboard" className="btnHeader">
                    ক্লাস ১-১২
                </NavLink>
                <NavLink to="/faq" className="btnHeader">
                    এডমিশন টেস্ট
                </NavLink>
                <NavLink to="/skills" className="btnHeader">
                    স্কীলস
                </NavLink>

            </div>
            <div className="rounded-pill mt-4 d-flex">
                <Nav.Link className="text-muted fw-light">ক্লাস পরিবর্তন</Nav.Link>
                <NavDropdown className="dropDown" title="তালিকা" id="basic-nav-dropdown">
                    <NavDropdown.Item>এসএসসি</NavDropdown.Item>
                    <NavDropdown.Item>এইচএসসি</NavDropdown.Item>
                    <NavDropdown.Item>এডমিশন টেস্ট</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>ফ্রি কোর্স</NavDropdown.Item>
                </NavDropdown>
            </div>
        </div>
    );
};

export default DashBoardHeader;