import React from 'react';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { googleSignIn, githubSignIn, fbSignIn, getEmail, getPassword, handleLogin } = useAuth();
    return (
        <div className="d-flex justify-content-center align-content-center m-5">
            <div className="bg-danger m-5 p-5 rounded login-form">
                <h2 className="text-white text-center pb-3">Register <i className="fas fa-sign-in-alt fs-3"></i></h2>
                <form onSubmit={handleLogin}>
                    <input onBlur={getEmail} className="border-0 rounded py-1 ps-2 mb-2" type="email" name="" id="" placeholder="Your email" />
                    <br />
                    <input onBlur={getPassword} className="border-0 rounded py-1 ps-2 mt-2" type="password" name="" id="" placeholder="Your password" />
                    <br />
                    <br />
                    <button type="submit" className="w-100 btn btn-design border-0 rounded py-1">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Register;