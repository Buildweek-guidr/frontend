import React, { useState, createContext } from 'react';

export const guidrContext = createContext();

export const guidrProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token')? true: false);
    const [trips, setTrips] = useState([]);  // useState changed from {} to []
    const [guides, setGuides] = useState([])

    return(
        <guidrContext.Provider value={{trips, setTrips, isLoggedIn, setIsLoggedIn, guides, setGuides}}>
            {props.children}
        </guidrContext.Provider>
    )
}

export default guidrContext;