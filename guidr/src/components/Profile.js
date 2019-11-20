import React, { useContext } from 'react';
import { MainDiv, LinkDiv, StyledLink } from '../components/Styles';
import NavBar from '../components/NavBar';
import { GuidrContext } from '../contexts/GuidrContext'

const Profile = props => {
    const {user} = useContext(GuidrContext)
    return (
        <div>
            <NavBar />
            <div className="Profile">
                <h2 className="title">Title: {user.title}</h2>
                <p className="tagline">{user.tagline}</p>
                <p className="guideSpecialty">Guide Specialty: {user.guideSpecialty}</p>
                <p className="age">Age: {user.age}</p>
                <p className="yearsExperience">Years of experience: {user.yearsExperience}</p>
            </div>
            <LinkDiv>
                <StyledLink to="/editprofile">Edit your profile</StyledLink>
                <StyledLink to="/list">Back to trips</StyledLink>
            </LinkDiv>
        </div>
    )
}

export default Profile;