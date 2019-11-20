import React, {useState, useContext, useEffect} from 'react';
import { MainDiv, LinkDiv, StyledLink } from '../components/Styles';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import NavBar from '../components/NavBar'
import axiosWithAuth from '../components/axiosWithAuth'
import { GuidrContext } from '../contexts/GuidrContext'
import { useHistory } from 'react-router-dom'
import { Spinner } from 'reactstrap';

const EditProfile = props => {
    const history = useHistory()
    const [profileData, setProfileData] = useState ({ title: "", tagline: "", guideSpecialty: "", age: 0, yearsExperience: 0})

    const { profile } = useContext(GuidrContext)
    const { user } = useContext(GuidrContext)
    const handleChanges = e => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value});
    };

    const submitForm = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/users/${user.userId}/profile`)
            .then(res => {
                history.push('/profile')
            })
            .finally(res => {
                setProfileData({title: "", tagline: "", guideSpecialty: "", age: 0, yearsExperience: 0})
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        console.log(profile)
        setProfileData(profile)
        console.log(profileData)
    }, [])

    if (!profileData) return <div><Spinner type="grow" color="primary" /></div>;
    
    return (
        <div>
            <NavBar />
            <MainDiv>
                <Form onSubmit={submitForm}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title" value={profileData.title} onChange={handleChanges}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="tagline">Tagline</Label>
                        <Input type="text" name="tagline" id="tagline" value={profileData.tagline} onChange={handleChanges}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="guideSpecialty">Guide Specialty</Label>
                        <Input type="text" name="guideSpecialty" id="guideSpecialty" value={profileData.guideSpecialty} onChange={handleChanges}/>
                    </FormGroup>
                 <FormGroup>
                        <Label for="age">Age</Label>
                        <Input type="number" name="age" id="age" value={profileData.age} onChange={handleChanges}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="yearsExperience">Years Experience</Label>
                        <Input type="number" name="yearsExperience" id="yearsExperience" value={profileData.yearsExperience} onChange={handleChanges}/>
                    </FormGroup>
            
                    <Button onClick={submitForm}>Submit Changes</Button>
                </Form>
            </MainDiv>
        </div>
        
    )
}

export default EditProfile;