import React, {useState} from 'react';
import { MainDiv, LinkDiv, StyledLink, BigInput } from '../components/Styles';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import NavBar from '../components/NavBar'

const AddTrip = props => {
    const [trip, setTrip] = useState ({ title: "", description: "", isPrivate: null, isProfessional: null, duration: null, distance: null, date: "", tripType: "" })

    // const handleChanges = e => {
    //     setUser({ ...user, [e.target.username]: e.target.value});
    // };

    const submitForm = e => {
        e.preventDefault();
        props.addNewProfile(trip);
        setTrip({ title: "", description: "", isPrivate: null, isProfessional: null, duration: null, distance: null, date: "", tripType: "" })
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
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description" />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}Check for private trip.
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}Check for professinal trip.
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="duration">Duration</Label>
                        <Input type="number" name="duration" id="duration" placeholder="# of days"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="distance">Distance</Label>
                        <Input type="number" name="distance" id="distance" placeholder="Distance in miles"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="date">Date</Label>
                        <Input type="date" name="date" id="date" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="tripType">Trip Type</Label>
                        <Input type="text" name="tripType" id="tripType" />
                    </FormGroup>
            
                    <Button>Add Trip</Button>
                </Form>
            </MainDiv>
        </div>
        
    )
}

export default AddTrip;