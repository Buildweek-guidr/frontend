import React, { useState, createContext } from 'react';

export const GuidrContext = createContext();

export const GuidrProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token')? true: false);
    const [trips, setTrips] = useState([]);  // useState changed from {} to []
    const [guides, setGuides] = useState([])

    return(
        <GuidrContext.Provider value={{trips, setTrips, isLoggedIn, setIsLoggedIn, guides, setGuides}}>
            {props.children}
        </GuidrContext.Provider>
    )
}

export default GuidrContext;