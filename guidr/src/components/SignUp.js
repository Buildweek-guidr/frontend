import React, { useState, useContext } from 'react'
import NavBar from '../components/NavBar'
import { MainDiv, LinkDiv, StyledLink } from '../components/Styles';
import { Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import axiosWithAuth from '../components/axiosWithAuth'
import { useHistory } from 'react-router-dom'
import { GuidrContext } from '../contexts/GuidrContext'
const SignUp = () => {
    const {user, setUser} = useContext(GuidrContext)
    
    const[userCredentials, setUserCredentials] = useState({username:'', password:'', title: '', tagline: '', guideSpecialty: '', age: null, yearsExperience: null})
    const history = useHistory()
    const handleChanges = e => {
        setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value});
    };

    const onSubmit = e => {
        e.preventDefault();
        if(userCredentials.password.length < 6 || userCredentials.username.length < 6) {
            alert("Username/Password is too short, must be minimum 6 characters.")
        }
        else {
        axiosWithAuth()
        .post('/accounts/register', userCredentials)
        .then(res => {
            console.log(res)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('user', JSON.stringify(res.data.user))
          setUser(JSON.parse(localStorage.getItem('user')))
          history.push('/list')
        })
        .catch(err => console.error(err))
        }
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
            <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" name="title" id="title" placeholder="Title" onChange={handleChanges} />
            </FormGroup>
            <FormGroup>
                <Label for="tagline">Tagline</Label>
                <Input type="text" name="tagline" id="tagline" placeholder="Tagline" onChange={handleChanges} />
            </FormGroup>
            <FormGroup>
                <Label for="guideSpecialty">Guide Specialty</Label>
                <Input type="text" name="guideSpecialty" id="guideSpecialty" placeholder="Guide Specialty" onChange={handleChanges} />
            </FormGroup>
            <FormGroup>
                <Label for="age">Age</Label>
                <Input type="number" name="age" id="age" placeholder="Age" onChange={handleChanges} />
            </FormGroup>
            <FormGroup>
                <Label for="yearsExperience">Years Experience</Label>
                <Input type="number" name="yearsExperience" id="yearsExperience" placeholder="Years Experience" onChange={handleChanges} />
            </FormGroup>
            <Button onClick={onSubmit}>Sign Up</Button>
            <LinkDiv>
                <StyledLink to ="/login">Already have an account? Log in</StyledLink>
            </LinkDiv>
        </Form>
        </MainDiv>
        </div>
    )
}

export default SignUp;