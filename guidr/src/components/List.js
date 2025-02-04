import React, { useEffect, useState, useContext } from 'react'
import NavBar from '../components/NavBar'
import axiosWithAuth from '../components/axiosWithAuth'
import { GuidrContext } from '../contexts/GuidrContext'
import TripCard from '../components/TripCard';
import AddTrip from '../components/AddTrip'
import { Link } from 'react-router-dom';
import { ListDiv, BackDiv, StyledLink, IntroDiv } from '../components/Styles';
 
const List = (props) => {
    const {trips, setTrips} = useContext(GuidrContext)
    const { user } = useContext(GuidrContext)
    const addTrip = (newTrip) => {
       setTrips(...trips, newTrip)
    } 
    useEffect(() => {
        const getTrips = () => {
            axiosWithAuth()
                .get(`/users/${user.userId}/trips`)
                .then(response => {
                    const newtrips = response.data;
                    setTrips(newtrips)
                })
        }
        getTrips();
    })

    return (
        <div>
            <NavBar />

            <IntroDiv>
                <h4>Hello {user.username}!</h4>
                <StyledLink to ="/addtrip"> Add new trip </StyledLink>
                <StyledLink to ="/profile"> View profile </StyledLink>
            </IntroDiv>
                <BackDiv>
                <ListDiv>
                    {trips.map(x => (
                        <TripCard 
                        id={x.id}
                        title={x.title}
                        description={x.description}
                        distance={x.distance}
                        date={x.date}
                        tripType={x.tripType}
                        isPrivate={x.isPrivate}
                        isProfessional={x.isProfessional}
                    
                        />
                    ))}
                </ListDiv>
                </BackDiv>
        </div>
    )

}

export default List
