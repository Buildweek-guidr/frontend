import React from 'react';
import { MainDiv, LinkDiv, StyledLink } from '../components/Styles';
import NavBar from '../components/NavBar';

const Profile = props => {
    return (
        <div>
            <NavBar />
            <div className="Profile">
                <h2 className="fullName">{this.props.fullName}</h2>
                <p className="title">{this.props.title}</p>
                <p className="tagline">{this.props.tagline}</p>
                <p className="guideSpecialty">{this.props.guideSpecialty}</p>
                <p className="age">{this.props.age}</p>
                <p className="yearsExperience">{this.props.yearsExperience}</p>
            </div>
            <LinkDiv>
                <StyledLink to="/editprofile">Edit your profile</StyledLink>
                <StyledLink to="/list">Back to trips</StyledLink>
            </LinkDiv>
        </div>
    )
}

export default Profile;