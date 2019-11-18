import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { MainDiv, LinkDiv, StyledLink } from '../components/Styles';
import { Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

import axiosWithAuth from '../components/axiosWithAuth'

const Login = props => {
    const[userCredentials, setUserCredentials] = useState({username:'', password:''})
    
    const handleChanges = e => {
        setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value});
    };

    const onSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/accounts/login', userCredentials)
        .then(res => {
            console.log(res)
          localStorage.setItem('token', res.data.token)
          props.history.push('/list')
        })
        .catch(err => console.error(err))
      }

    return (
        <div>
        <NavBar />
        <MainDiv>
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label for="username">Username</Label>
                <Input type="text" name="username" id="username" placeholder="Username" onChange={handleChanges} />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="Password" onChange={handleChanges} />
            </FormGroup>
            <Button onClick={onSubmit}>Log In</Button>
            <LinkDiv>
                <StyledLink to ="/">New User? Sign up</StyledLink>
            </LinkDiv>
        </Form>
        </MainDiv>
        </div>
        
    )

}

export default Login;