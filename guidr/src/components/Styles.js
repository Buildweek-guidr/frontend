import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    color: black;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    }
`