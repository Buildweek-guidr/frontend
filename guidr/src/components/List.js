import React, { useEffect, useState, useContext } from 'react'
import NavBar from '../components/NavBar'
import axiosWithAuth from '../components/axiosWithAuth'
import { GuidrContext } from '../contexts/GuidrContext'
import TripCard from '../components/TripCard';

const List = () => {
    const [trips, setTrips] = useState([])
    const { user } = useContext(GuidrContext)
   
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
            <h1>hello {user.username}</h1>
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
        </div>
    )

}

export default List
