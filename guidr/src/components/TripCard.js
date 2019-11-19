import React from "react";
import axiosWithAuth from '../components/axiosWithAuth'

const TripCard = x => {
    const { id, title, description, isPrivate, isProfessional, duration, distance, date, tripType } = x;
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
    return (
        <div className="tripCard">
            <h2>{title}</h2>
                <p>{description}</p>
                <p>{duration} hours</p>
                <p>{distance} mi</p>
                <p>{date}</p>
                <p>{tripType}</p>
                <p>Private trip? {isPrivate}</p>
                <p>Professional trip? {isProfessional}</p>
                <p>{id}</p>
                <button>Edit</button>
                <button onClick={()=>{deleteTrip({id})}}> Delete</button>
        </div>
    )
}

export default TripCard;