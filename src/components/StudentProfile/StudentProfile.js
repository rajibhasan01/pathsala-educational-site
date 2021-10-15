import React from 'react';
import useAuth from '../../hooks/useAuth';

const StudentProfile = () => {
    const { user } = useAuth();
    return (
        <div className="d-flex justify-content-center align-item-center my-5">
            <div>
                This is student profile.
                <h1>Name: {user.displayName}</h1>
                <h1>email: {user.email}</h1>
                <img src={user.photoURL} alt="" />
            </div>
        </div>
    );
};

export default StudentProfile;