import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import { Input } from 'reactstrap';

export const GlobalStyle = createGlobalStyle`
  html, body, p {
    font-family: 'Ubuntu', sans-serif;
    color: #23293B;
  }

  h1, h2 {
      font-family: 'rockwell', sans-serif;
      color: #23293B;
  }
`

export const MainDiv = styled.div`
    margin: auto;
    height: auto;
    width: 40%;
`
export const LinkDiv = styled.div`
    text-align: center;
    margin-top: 15px;
`
export const StyledLink = styled(Link)`
    color: #23293B;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #23293B;
    }
`

export const ProfileDiv = styled.div`
    margin: auto;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    margin-bottom: 5%;
    background-color: #20B2AA;
    padding-left: 10%;
    padding-right: 10%;
    border: solid 2px #20B2AA;
    border-radius: 5px;
    padding-top: 10%;
    padding-bottom: 10%;
`

export const BackDiv = styled.div`
    background-color: #23293B;
`

export const FancyButton = styled.button`
    background-color: #197328;
    padding: 15px;
    color: %DAE8EA;
    border: 1px solid #197328;
    border-radius: 10px;
`

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const TripCardDiv = styled.div`

`