import React, { useState } from "react";
import axiosWithAuth from '../components/axiosWithAuth'
import {useHistory} from 'react-router-dom'
import { MainDiv, LinkDiv, StyledLink, TripCardDiv, BackDiv, ButtonDiv, FancyButton } from '../components/Styles';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const TripCard = x => {
    const { id, title, description, isPrivate, isProfessional, duration, distance, date, tripType } = x;
    const history = useHistory()
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const deleteTrip = ({id}) => {
        axiosWithAuth()
            .delete(`/trips/${id}`)
            .then( res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })     
    }
    const editTrip = ({id}) => {
        history.push(`EditTrip/${id}`)
    }
    return (
        <TripCardDiv>
            <h2>{title}</h2>
            
            <Collapse isOpen={isOpen}>
                <div>
                    <p>{description}</p>
                    <p>{duration} hours</p>
                    <p>{distance} mi</p>
                    <p>{date}</p>
                    <p>{tripType}</p>
                    <p>Private trip? {isPrivate}</p>
                    <p>Professional trip? {isProfessional}</p>
                    <p>Trip ID: {id}</p>
                    <FancyButton onClick={()=>{editTrip({id})}}>Edit</FancyButton>
                    <FancyButton onClick={()=>{deleteTrip({id})}}> Delete</FancyButton>
                </div>
            </Collapse>
                
                <ButtonDiv>
                    <FancyButton onClick={toggle}>{(isOpen) ? 'See less' : 'See more'}</FancyButton>
                </ButtonDiv>
        </TripCardDiv>
    )
}

export default TripCard;