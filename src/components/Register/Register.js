import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Register.css';
import picture from '../../image/login3.png';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useDocumentTitle from '../../hooks/useDocumentTitle';


const Register = () => {
    useDocumentTitle('Register')
    const { getEmail, getPassword, handleRegistation, googleSignIn, fbSignIn, githubSignIn, handleNameChange, handlePhoneChange, getRePassword, errors } = useAuth();

    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri);
                setError('');
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })

    };

    const handleGitLogin = () => {
        githubSignIn()
            .then(result => {
                history.push(redirect_uri);
                setError('');
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    };

    const handleFbLogin = () => {
        fbSignIn()
            .then(result => {
                history.push(redirect_uri);
                setError('');
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    };


    return (
        <div className="container text-center mt-3">
            <p className="fs-5 fw-light text-muted">ফ্রি রেজিস্টার করে,
                <span className="text-success "> শুরু করো তোমার জার্নি</span> <br />
                <span className="text-red">পাঠশালা - সবার জন্য শিক্ষা </span>
                {
                    !error.length || <small className="fw-light text-muted"><br />{error}</small>
                }
                {
                    !errors.length || <small className="fw-light text-muted"><br />{errors}</small>
                }
            </p>

            <div className="container d-flex justify-content-center align-content-center">
                <div className="register-bg mt-3 mb-3 px-md-3 py-5 rounded">
                    <div className="register-sidebox text-center">
                        <Image src={picture} className="register-picture" />
                        <p className="fs-6 text-white pt-3"><i className="fas fa-user-shield fs-5 pe-1 text-dark"></i> Create Account</p>
                        <small>Create apps, connect databases <br /> & add-on services & collaborate <br /> on your apps, for free.</small>

                        <div className="d-none d-md-block">
                            <p className="fs-6 text-white pt-3"><i className="fas fa-sign-in-alt fs-5 pe-1 text-dark"></i> Signup With</p>
                            <small>Signup using below application</small>

                            <div className="text-center ">
                                <i onClick={handleGoogleLogin} className="fab fa-google text-dark fs-4 bg-transparent m-2"></i>
                                <i onClick={fbSignIn} className="fab fa-facebook-square text-dark fs-4 m-2"></i>
                                <i onClick={githubSignIn} className="fab fa-github-square text-dark fs-4 m-2"></i>
                            </div>

                            <p className="fs-6 text-white pt-3"><Link className="text-decoration-none text-primary" to="/login">Login! </Link> if have a account</p>

                        </div>

                    </div>

                    <div className="register-form my-3">
                        <div className="bg-transparent mx-5 p-md-5 p-3 rounded login-form register-desgin">
                            <h2 className="text-dark text-center pb-3">Register <i className="fas fa-sign-in-alt fs-3"></i></h2>
                            <form onSubmit={handleRegistation}>
                                <input onBlur={handleNameChange} className="border rounded w-100 py-1 ps-2 my-1" type="text" name="" id="" placeholder="Your name" required />
                                <br />
                                <input onBlur={getEmail} className="border rounded w-100 py-1 ps-2 my-2" type="email" id="" placeholder="Your email" required />
                                <br />
                                <input onBlur={getPassword} className="border rounded w-100 py-1 ps-2 my-1" type="password" name="" id="" placeholder="Your password" required />
                                <br />
                                <input onBlur={getRePassword} className="border rounded w-100 py-1 ps-2 my-2" type="password" name="" id="" placeholder="Re-enter password" required />
                                <br />
                                <input onBlur={handlePhoneChange} className="border rounded w-100 py-1 ps-2 my-1" type="text" name="" id="" placeholder="Phone number" required />
                                <br />
                                <br />
                                <button type="submit" className="w-100 btn btn-design-register border-0 rounded py-1">Register</button>
                            </form>
                            <small className="text-dark d-block mt-3 texr-center ">Signing up signify that you<br /> have read & agree to the<br /><Link to="/about"> Terms of Service</Link></small>
                        </div>
                    </div>
                    <div className="d-md-none">
                        <p className="fs-6 text-white pt-3"><i className="fas fa-sign-in-alt fs-5 pe-1 text-dark"></i> Signup With</p>
                        <small>Signup using below application</small>

                        <div className="text-center ">
                            <i onClick={handleGoogleLogin} className="fab fa-google text-dark fs-4 bg-transparent m-2"></i>
                            <i onClick={handleFbLogin} className="fab fa-facebook-square text-dark fs-4 m-2"></i>
                            <i onClick={handleGitLogin} className="fab fa-github-square text-dark fs-4 m-2"></i>
                        </div>

                        <p className="fs-6 text-white pt-3"><Link className="text-decoration-none text-primary" to="/login">Login! </Link> if have a account</p>

                    </div>

                </div>
            </div>
            <p className="pb-5 mb-3">Already have an account? <Link className="text-decoration-none text-primary" to="/login">sign in</Link></p>
        </div>


    );
};

export default Register;