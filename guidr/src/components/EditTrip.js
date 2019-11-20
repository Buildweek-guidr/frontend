import React, {useState, useContext, useEffect} from 'react';
import { MainDiv, LinkDiv, StyledLink } from '../components/Styles';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import NavBar from '../components/NavBar'
import { GuidrContext } from '../contexts/GuidrContext'
import axiosWithAuth from './axiosWithAuth';
import {useHistory} from 'react-router-dom'
const EditTrip = props => {
    const [editTrip, setEditTrip] = useState ({ title: "", description: "", isPrivate: null, isProfessional: null, duration: null, distance: null, date: "", tripType: "" })
    const {trips} = useContext(GuidrContext)
    const history = useHistory()
    const handleChanges = e => {
        setEditTrip({ ...editTrip, [e.target.name]: e.target.value});
    };
    
    const onSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/trips/${editTrip.id}`)
            .then(res => {
                history.push('/list')
            })
    }
    
    useEffect(() => {
        console.log(trips)
        setEditTrip(trips.filter(trip => 
            trip.id == props.match.params.id
        )[0])
    }, [])

    return (
        <div>
            {console.log(editTrip)}
            <NavBar />
            <MainDiv>
                <Form>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title" value={editTrip.title} onChange={handleChanges}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description" value={editTrip.description} onChange={handleChanges} />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" value={editTrip.isPrivate} onChange={handleChanges}/>{' '}Check for private trip.
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" value={editTrip.isProfessional} onChange={handleChanges}/>{' '}Check for professinal trip.
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="duration">Duration</Label>
                        <Input type="number" name="duration" id="duration" placeholder="# of days" value={editTrip.duration} onChange={handleChanges}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="distance">Distance</Label>
                        <Input type="number" name="distance" id="distance" placeholder="Distance in miles" value={editTrip.distance} onChange={handleChanges}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="date">Date</Label>
                        <Input type="date" name="date" id="date" value={editTrip.date} onChange={handleChanges}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="tripType">Trip Type</Label>
                        <Input type="text" name="tripType" id="tripType" />
                    </FormGroup>
            
                    <Button onClick={onSubmit}>Add Changes</Button>
                </Form>
            </MainDiv>
        </div>
        
    )
}

export default EditTrip;