import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from './userAPI';
import { useDispatch } from 'react-redux';
import { asyncLogIn } from './userSlice';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;


export default function LoginWithGoogle() {
    const dispatch = useDispatch();

    function onSuccess(res) {
        dispatch(asyncLogIn({ id_token: res.tokenObj.id_token, route: 'auth/request'}));
        refreshTokenSetup(res);
    }

    function onFailure(res) {
        alert(res);
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


