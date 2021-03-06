import React from 'react';
import { Button, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import './DashBoardHeader.css';

const DashBoardHeader = () => {
    const history = useHistory();
    const handleStudentProfile = () => {
        history.push('/dashboard/stprofile');
        // history.push('/stprofile')

    }
    return (
        <div className="d-flex justify-content-between displayDesign">
            <div className="bgColor px-3 py-2 rounded-pill mt-4 ">

                <NavLink activeClassName="activeBtn" to="/dashboard/school" className="btnHeader dBlock">
                    ক্লাস ১-১২
                </NavLink>
                <NavLink activeClassName="activeBtn" to="/dashboard/admission" className="btnHeader dBlock">
                    এডমিশন টেস্ট
                </NavLink>
                <NavLink activeClassName="activeBtn" to="/dashboard/free" className="btnHeader dBlock">
                    ফ্রি কোর্স
                </NavLink>

            </div>
            <div className=" mt-4 d-flex">
                <Nav.Link className="text-muted fw-light"><Button className="py-0"
                    onClick={handleStudentProfile} variant="transparent"> ক্লাস পরিবর্তন</Button></Nav.Link>
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