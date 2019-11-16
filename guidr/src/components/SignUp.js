import React, { useState } from 'react'

const SignUp = props => {
    const [user, setUser] = useState ({username: "", passsword: ""});

    const handleChanges = e => {
        setUser({ ...user, [e.target.username]: e.target.value});
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewUser(user);
        setUser({username: "", password: ""})
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="username">Username</label>
            <input
                id="username"
                type="text"
                name="username"
                onChange={handleChanges}
                value={user.username}
            />
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="text"
                name="password"
                onChange={handleChanges}
                value={user.password}
            />
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignUp;