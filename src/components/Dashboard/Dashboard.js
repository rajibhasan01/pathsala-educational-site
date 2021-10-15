import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admission from '../Admission/Admission';
import ClassOneToTwelve from '../ClassOneToTwelve/ClassOneToTwelve';
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader';
import FreeCourse from '../FreeCourse/FreeCourse';
import Login from '../Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import StudentProfile from '../StudentProfile/StudentProfile';

const Dashboard = () => {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetch('./data3.json')
            .then(res => res.json())
            .then(data => setSubjects(data));
    }, []);
    const [school, admission] = subjects;
    return (
        <div className="card-design">
            <div className="container">
                <BrowserRouter>
                    <DashBoardHeader />
                    <Switch>
                        <Route exact path="/dashboard">
                            <ClassOneToTwelve subjects={school} />
                        </Route>
                        <Route path="/dashboard/school">
                            <ClassOneToTwelve subjects={school} />
                        </Route>
                        <Route path="/dashboard/admission">
                            <Admission subjects={admission} />
                        </Route>
                        <Route path="/dashboard/free">
                            <FreeCourse />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <PrivateRoute path="/dashboard/stprofile">
                            <StudentProfile></StudentProfile>
                        </PrivateRoute>

                    </Switch>
                </BrowserRouter>



            </div>
        </div>
    );
};

export default Dashboard;