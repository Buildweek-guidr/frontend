import React, { useEffect, useState, useContext } from 'react'
import NavBar from '../components/NavBar'
import axiosWithAuth from '../components/axiosWithAuth'
import { GuidrContext } from '../contexts/GuidrContext'
import TripCard from '../components/TripCard';
import AddTrip from '../components/AddTrip'
import { Link } from 'react-router-dom';

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
            {/* {console.log(user)} */}
            <NavBar />
            <h1>Hello {user.username}!</h1>
            <Link to ="/addtrip" >Add new trip</Link>
            <Link to ="/profile"> View profile</Link>
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
            <h3>{user.userId}</h3>

            <form>

            </form>
        </div>
    )

}

export default List
