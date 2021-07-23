import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from './userAPI';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export default function LoginWithGoogle() {
    function onSuccess(res) {
        alert('Successfully Logged In With Google');
        refreshTokenSetup(res);
    }

    function onFailure(res) {
        alert('Failed To Log In With Google');
    }


    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText='Log In'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}


