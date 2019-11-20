import React, {useState, useContext} from 'react';
import { MainDiv, LinkDiv, StyledLink, BigInput } from '../components/Styles';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import NavBar from '../components/NavBar'
import { GuidrContext } from '../contexts/GuidrContext'
import axiosWithAuth from '../components/axiosWithAuth'
import { useHistory } from 'react-router-dom'
const AddTrip = props => {
    const [trip, setTrip] = useState ({ title: "", description: "", isPrivate: false, isProfessional: false, duration: 0, distance: null, date: null, tripType: "" })
    const { trips } = useContext(GuidrContext)
    const { user } = useContext(GuidrContext)
    const history = useHistory()
    const handleChanges = e => {
        setTrip({ ...trip, [e.target.name]: e.target.value});
    };

    const submitForm = e => {
        e.preventDefault();
        const DeezNutz = {...trip, user_id: user.userId}
        console.log(DeezNutz)
        axiosWithAuth()
        .post(`/trips`, {...trip, user_id: user.userId})
        .then(res => {
            setTrip({ title: "", description: "", isPrivate: false, isProfessional: false, duration: 0, distance: null, date: null, tripType: "" })
        })
        .finally( res => {
            history.push('/list')
        })
        

    }
// DONt FUcking forget momement.js
    return (
        <div>
            <NavBar />
            <MainDiv>
                <Form onSubmit={submitForm}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title" onChange={handleChanges} value={trip.title} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description" onChange={handleChanges} value={trip.description}/>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" onChange={handleChanges} value={trip.isPrivate}/>{' '}Check for private trip.
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" onChange={handleChanges} value={trip.isProfessional}/>{' '}Check for professinal trip.
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="duration">Duration</Label>
                        <Input type="number" name="duration" id="duration" placeholder="# of days" onChange={handleChanges} value={trip.duration}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="distance">Distance</Label>
                        <Input type="number" name="distance" id="distance" placeholder="Distance in miles" onChange={handleChanges} value={trip.distance}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="date">Date</Label>
                        <Input type="date" name="date" id="date" onChange={handleChanges} value={trip.date} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="tripType">Trip Type</Label>
                        <Input type="text" name="tripType" id="tripType" onChange={handleChanges} value={trip.tripType} />
                    </FormGroup>
            
                    <Button>Add Trip</Button>
                </Form>
            </MainDiv>
        </div>
        
    )
}

export default AddTrip;