import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import img from '../imgs/backImg.jpg';

export const GlobalStyle = createGlobalStyle`
  html, body, p {
    font-family: 'Ubuntu', sans-serif;
    color: #23293B;
  }
  h1, h2 {
      font-family: 'rockwell', sans-serif;
      color: #23293B;
  }
  html, body {
      background-color: #DAE8EA;
  }
`

export const MainDiv = styled.div`
    margin: auto;
    height: auto;
    width: 40%;
    background-color: #DAE8EA;
`
export const LinkDiv = styled.div`
    text-align: center;
    margin-top: 15px;
`
export const StyledLink = styled(Link)`
    color: #23293B;
    text-decoration: none;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
        color: #23293B;
    }
    &:hover {
        text-decoration: underline;
        color: #23293B;
    }
`

export const ProfileDiv = styled.div`
    margin: auto;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    margin-bottom: 5%;
    padding-left: 10%;
    padding-right: 10%;
    border: solid 2px #20B2AA;
    border-radius: 5px;
    padding-top: 10%;
    padding-bottom: 10%;
    background-color: #20B2AA;
    text-align: center;
`

export const BackDiv = styled.div`
    background-color: #DAE8EA;
`

export const FancyButton = styled.button`
    background-color: #197328;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    color: #DAE8EA;
    border: 1px solid #197328;
    border-radius: 10px;
    margin-left: 10px;
    margin-right: 10px;
    &:hover {
        background-color: darkgreen;
    }
`

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 4%;
`

export const TripCardDiv = styled.div`
    background-color: #20B2AA;
    border: 1px solid #20B2AA;
    max-height:
    width: auto;
    min-width: 40%;
    max-width: 40%;
    text-align: center;
    margin-top: 3%;
    margin-bottom: 3%;
    padding: 2%;
    border-radius: 15px;
`

export const ListDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;

`

export const IntroDiv = styled.div`
    margin-top: 2%;
    width: 100%;
    display: flex;
    justify-content: space-around;
`

export const ImageBack = styled.div`
    background-image: url(${img});
    object-fit: contain;
`