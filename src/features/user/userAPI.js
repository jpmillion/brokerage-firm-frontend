export function logInUser(data) {
    const { email, password } = { ...data }
    return (
        fetch(`http://localhost:3001/api/v1/sessions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
    )
}
