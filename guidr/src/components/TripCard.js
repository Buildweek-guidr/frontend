import React from "react";
import axiosWithAuth from '../components/axiosWithAuth'
import {useHistory} from 'react-router-dom'
import { MainDiv, LinkDiv, StyledLink, TripCardDiv, BackDiv, ButtonDiv, FancyButton } from '../components/Styles';

const TripCard = x => {
    const { id, title, description, isPrivate, isProfessional, duration, distance, date, tripType } = x;
    const history = useHistory()
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
                <p>{description}</p>
                <p>{duration} hours</p>
                <p>{distance} mi</p>
                <p>{date}</p>
                <p>{tripType}</p>
                <p>Private trip? {isPrivate}</p>
                <p>Professional trip? {isProfessional}</p>
                <p>Trip ID: {id}</p>
                <ButtonDiv>
                    <FancyButton onClick={()=>{editTrip({id})}}>Edit</FancyButton>
                    <FancyButton onClick={()=>{deleteTrip({id})}}> Delete</FancyButton>
                </ButtonDiv>
        </TripCardDiv>
    )
}

export default TripCard;