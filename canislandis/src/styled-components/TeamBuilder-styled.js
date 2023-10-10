import styled from "styled-components";

export const TeamBuilderStyles = styled.div`
    --font-size: ${props => props.remSize.fontSize};

    max-width: 100%;
    text-align: center;
    font-family: Oxygen;

    body {
        font-size: calc(var(--font-size) - .5rem);
    }
`

export const MainContainer = styled.div`
    border: .3em solid #a66122;
    background-color: #ecdecc;
    color: #8f5f5f;
    box-shadow: -2em 1em #F5B6A8;
    border-radius: 1em;
    margin: 2em .5em;
`

export const Heading = styled.h1`
    font-size: calc(var(--font-size) + .5rem);
    border-bottom: thick double #733803;
`

export const Content = styled.div`
    
`
export const Navigation = styled.nav`
    margin: 1.5rem 0;
    display: flex;
    justify-content: space-around;
    flex-flow: row nowrap;

    a {
        text-decoration: none;
        text-align: center;
        font-size: 1.2rem;
        color: #8f5f5f;
        border: .2rem solid #a66122;
        margin: .5rem 1rem;
        padding: .2rem;
    }

    a:hover {
        font-size: calc(var(--font-size) + .1rem);
    }
`