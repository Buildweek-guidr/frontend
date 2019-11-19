import React, {useState, useContext, useEffect} from 'react';
import { MainDiv, LinkDiv, StyledLink } from '../components/Styles';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import NavBar from '../components/NavBar'
import { GuidrContext } from '../contexts/GuidrContext'

const EditTrip = props => {
    const [editTrip, setEditTrip] = useState ({ title: "", description: "", isPrivate: null, isProfessional: null, duration: null, distance: null, date: "", tripType: "" })
    const {trips} = useContext(GuidrContext)
    
    const handleChanges = e => {
        setEditTrip({ ...editTrip, [e.target.name]: e.target.value});
    };
    
    // const onSubmit = e => {
    //     e.preventDefault();
    //     props.addNewProfile(trip);
    //     setTrip({ title: "", description: "", isPrivate: null, isProfessional: null, duration: null, distance: null, date: "", tripType: "" })
    // }
    let showmeWhatyougot
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
            
                    <Button>Add Changes</Button>
                </Form>
            </MainDiv>
        </div>
        
    )
}

export default EditTrip;