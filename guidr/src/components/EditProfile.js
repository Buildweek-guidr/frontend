import React, {useState} from 'react';
import { MainDiv, LinkDiv, StyledLink } from '../components/Styles';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import NavBar from '../components/NavBar'

const EditProfile = props => {
    const [profile, setProfile] = useState ({ title: "", tagline: "", guideSpecialty: "", age: null, yearsExperience: null})

    // const handleChanges = e => {
    //     setUser({ ...user, [e.target.username]: e.target.value});
    // };

    const submitForm = e => {
        e.preventDefault();
        props.addNewProfile(profile);
        setProfile({title: "", tagline: "", guideSpecialty: "", age: null, yearsExperience: null})
    }

    return (
        <div>
            <NavBar />
            <MainDiv>
                <Form onSubmit={submitForm}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="tagline">Tagline</Label>
                        <Input type="text" name="tagline" id="tagline" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="guideSpecialty">Guide Specialty</Label>
                        <Input type="text" name="guideSpecialty" id="guideSpecialty" />
                    </FormGroup>
                 <FormGroup>
                        <Label for="age">Age</Label>
                        <Input type="number" name="age" id="age" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="yearsExperience">Years Experience</Label>
                        <Input type="number" name="yearsExperience" id="yearsExperience" />
                    </FormGroup>
            
                    <Button>Submit Changes</Button>
                </Form>
            </MainDiv>
        </div>
        
    )
}

export default EditProfile;