import useAuth from '../../hooks/useAuth';
import './Login.css';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import loginPhoto from '../../image/login1.png';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {
    const { googleSignIn, githubSignIn, fbSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
            .catch(error => {
                console.log(error.message);
            })

    }

    return (
        <div className="d-flex justify-content-center align-content-center mx-5 mb-5">
            <div>
                <p className="fs-5 fw-light text-muted py-5 text-center">লগইন করে,
                    <span className="text-success "> শুরু করো তোমার জার্নি</span> <br />
                    <span className="text-red">পাঠশালা - সবার জন্য শিক্ষা </span>
                </p>
                <div className="bg-danger m-5 p-5 rounded login-form text-center">
                    <Image src={loginPhoto} className="loginPhoto rounded-circle pt-1 bg-light" />
                    <h2 className="text-white text-center pb-3 mt-3">Login <i className="fas fa-sign-in-alt fs-3"></i></h2>
                    <form >
                        <input className="border-0 rounded py-1 ps-2 mb-2" type="email" name="" id="" placeholder="Your email" />
                        <br />
                        <input className="border-0 rounded py-1 ps-2 mt-2" type="password" name="" id="" placeholder="Your password" />
                        <br />
                        <br />
                        <button type="submit" className="w-100 btn btn-design border-0 rounded py-1">Login</button>
                    </form>
                    <br />
                    <p className="text-dark text-center">Sign in using below apps</p>
                    <div className="text-center d-flex justify-content-evenly">

                        <i onClick={handleGoogleLogin} className="fab fa-google text-light fs-4 bg-transparent icon-login google-icon"></i>
                        <i onClick={fbSignIn} className="fab fa-facebook-square text-light fs-4 icon-login"></i>
                        <i onClick={githubSignIn} className="fab fa-github-square text-light fs-4 icon-login"></i>
                    </div>
                </div>
                <p className="px-5">Don't have account? <Link className="text-decoration-none text-primary" to="/register">create a new account</Link></p>
            </div>
        </div>
    );
};

export default Login;