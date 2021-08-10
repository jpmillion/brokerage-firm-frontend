import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { logOut } from './userSlice';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export default function LogoutGoogle() {
    const dispatch = useDispatch();

    function onLogoutSuccess() {
        dispatch(logOut());
        alert('Successfully logged out');
    }

    function onFailure() {
        alert('log out failed');
    }

    return (
        <div>    
            <GoogleLogout
                buttonText='Log Out'
                onLogoutSuccess={onLogoutSuccess}
                onFailure={onFailure}
                clientId={clientId}
            />
        </div>
    )
}