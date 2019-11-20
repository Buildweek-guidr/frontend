import React, { useContext, useEffect } from 'react';
import { MainDiv, LinkDiv, StyledLink, ProfileDiv, BackDiv } from '../components/Styles';
import NavBar from '../components/NavBar';
import { GuidrContext } from '../contexts/GuidrContext'
import axiosWithAuth from '../components/axiosWithAuth'
import { Spinner } from 'reactstrap';

const Profile = () => {
    const {profile, setProfile} = useContext(GuidrContext)
    const {user} = useContext(GuidrContext)
    const profileObj = {title: "", tagline: "", guideSpecialty: "", age: 0, yearsExperience: 0}


    useEffect(() => {
        const getProfile = () => {
            console.log(user.userId)
            axiosWithAuth()
                .get(`/users/${user.userId}/profile`)
                .then(res => {
                    console.log(res.data)
                    setProfile({title: res.data.title, tagline: res.data.tagline, guideSpecialty: res.data.guideSpecialty, age: res.data.age, yearsExperience: res.data.yearsExperience})
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
            <BackDiv>
                <ProfileDiv>
                    <h2>Title: {profile.title}</h2>
                    <p>{profile.tagline}</p>
                    <p>Guide Specialty: {profile.guideSpecialty}</p>
                    <p>Age: {profile.age}</p>
                    <p>Years of experience: {profile.yearsExperience}</p>
                </ProfileDiv>
                <LinkDiv>
                    <StyledLink to="/editprofile">Edit your profile</StyledLink>
                    <StyledLink to="/list">Back to trips</StyledLink>
                </LinkDiv>
            </BackDiv>
        </div>
    )
}

export default Profile;