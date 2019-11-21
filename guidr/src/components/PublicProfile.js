import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { BackDiv, ProfileDiv } from '../components/Styles'
import NavBar from '../components/NavBar'

import { GuidrContext } from '../contexts/GuidrContext'
const PublicProfile = () => {
    const [publicProfileData, setpublicProfileData] = useState({})
    const { user } = useContext(GuidrContext)

    useEffect(() => {
        const getProfile = () => {
            axios
                .get(`https://guidr-backend-api.herokuapp.com/api/users/${user.userId}/profile/public`)
                .then(res => {
                    setpublicProfileData(res.data)
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        getProfile();
    })

    return (
        <div>
            <NavBar />
            <BackDiv>
                <ProfileDiv>
                    <h2>Title: {publicProfileData.title}</h2>
                    <p>{publicProfileData.tagline}</p>
                    <p>Guide Specialty: {publicProfileData.guideSpecialty}</p>
                    <p>Age: {publicProfileData.age}</p>
                    <p>Years of experience: {publicProfileData.yearsExperience}</p>
                </ProfileDiv>
            </BackDiv>
        </div>
    )
}

export default PublicProfile