import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from 'styled-components';

const MainDiv = styled.div`
    margin: auto;
    height: auto;
    width: 40%;
`
const LinkDiv = styled.div`
    text-align: center;
    margin-top: 15px;
`
const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    }
`

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
        <div>
            <NavBar />
            <MainDiv>
        <Form onSubmit={submitForm}>
            <FormGroup>
                <Label for="username">Username</Label>
                <Input type="username" name="username" id="username" placeholder="Username" />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="Password" />
            </FormGroup>
            {/* <label htmlFor="username">Username</label>
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
            /> */}
            <Button>Sign Up</Button>
            <LinkDiv>
                <StyledLink to ="/login">Already have an account? Log in</StyledLink>
            </LinkDiv>
        </Form>
        </MainDiv>
        </div>
    )
}

export default SignUp;