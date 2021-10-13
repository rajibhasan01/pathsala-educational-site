import useAuth from '../../hooks/useAuth';
import './Login.css';
import React from 'react';


const Login = () => {
    const { googleSignIn, githubSignIn, fbSignIn } = useAuth();

    return (
        <div className="d-flex justify-content-center align-content-center m-5">
            <div className="bg-danger m-5 p-5 rounded login-form">
                <h2 className="text-white text-center pb-3">Login <i className="fas fa-sign-in-alt fs-3"></i></h2>
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

                    <i onClick={googleSignIn} className="fab fa-google  text-light fs-5 icon-login"></i>
                    <i onClick={fbSignIn} className="fab fa-facebook-square  text-light fs-4 icon-login"></i>
                    <i onClick={githubSignIn} className="fab fa-github-square text-light fs-4 icon-login"></i>
                </div>

            </div>
        </div>
    );
};

export default Login;