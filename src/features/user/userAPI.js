const endPoint = 'http://localhost:3001/api/v1/';

export function logInUser(data) {
    const { email, password, id_token, route } = { ...data }
    return (
        fetch(`${endPoint}${route}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                id_token
            })
        })
    )
}

export function refreshTokenSetup(res) {
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

    async function refreshToken() {
        const newAuthResponse = await res.reloadAuthResponse();
        refreshTiming = (newAuthResponse.expires_in || 3600 - 5 * 60) * 1000;
        console.log('new auth resp: ', newAuthResponse);
        console.log('new auth toke: ', newAuthResponse.id_token);
        setTimeout(refreshToken, refreshTiming);
    }
    setTimeout(refreshToken, refreshTiming);
}

