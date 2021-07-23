import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export default function LogoutGoogle() {
    function onLogoutSuccess(res) {
        alert('Successfully logged out');
    }

    function onFailure(res) {
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