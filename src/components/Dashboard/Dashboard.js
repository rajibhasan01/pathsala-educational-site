import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Admission from '../Admission/Admission';
import ClassOneToTwelve from '../ClassOneToTwelve/ClassOneToTwelve';
import FreeCourse from '../FreeCourse/FreeCourse';
import Login from '../Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Register from '../Register/Register';
import StudentProfile from '../StudentProfile/StudentProfile';

const Dashboard = () => {
    useDocumentTitle('Dashboard');
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetch('/data3.json')
            .then(res => res.json())
            .then(data => setSubjects(data));
    }, []);
    const [school, admission] = subjects;
    return (
        <div className="card-design">
            <div className="container">
                <BrowserRouter>
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

                        <Route path="/register">
                            <Register></Register>
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