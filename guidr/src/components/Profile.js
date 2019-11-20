import React, { useContext, useEffect } from 'react';
import { MainDiv, LinkDiv, StyledLink } from '../components/Styles';
import NavBar from '../components/NavBar';
import { GuidrContext } from '../contexts/GuidrContext'
import axiosWithAuth from '../components/axiosWithAuth'
import { Spinner } from 'reactstrap';

const Profile = () => {
    const {profile, setProfile} = useContext(GuidrContext)
    const {user} = useContext(GuidrContext)



    useEffect(() => {
        const getProfile = () => {
            console.log(user.userId)
            axiosWithAuth()
                
                .get(`/users/${user.userId}/profile`)
                .then(res => {
                    console.log(res.data)
                    setProfile(res.data)
                    // localStorage.setItem('profile', JSON.stringify(res.data))
                    // setProfile(JSON.parse(localStorage.getItem('profile')))
                    console.log(profile, 'profile data')
            })
            .catch(error => {
                console.log(error, 'error')
            })
        }
        getProfile();
    },[])
    if (!profile) return <div><Spinner type="grow" color="primary" /></div>;
    return (
        <div>
            <NavBar />
                <div className="Profile">
                    <p className="title">Title: {profile.title}</p>
                    <p className="tagline">{profile.tagline}</p>
                    <p className="guideSpecialty">Guide Specialty: {profile.guideSpecialty}</p>
                    <p className="age">Age: {profile.age}</p>
                    <p className="yearsExperience">Years of experience: {profile.yearsExperience}</p>
                </div>
                <LinkDiv>
                    <StyledLink to="/editprofile">Edit your profile</StyledLink>
                    <StyledLink to="/list">Back to trips</StyledLink>
                </LinkDiv>
        </div>
    )
}

export default Profile;