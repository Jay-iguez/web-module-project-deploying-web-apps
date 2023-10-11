import styled from "styled-components";

export const TeamBuilderStyles = styled.div`
    --animation-testing: 200ms ease-in-out;
    font-size: var(--font-size);
    max-width: 100%;
    text-align: center;
    font-family: Oxygen;
`

export const Container = styled.div`
    border: .3em solid #a66122;
    background-color: #ecdecc;
    color: #8f5f5f;
    box-shadow: -2em 1em #F5B6A8;
    border-radius: 1em;
    margin: 2em .5em;

`

export const DogContainer = styled(Container)`
    max-width: 25em;
    min-width: 25em;
    max-height: 25em;
    overflow: auto;
    margin: .5em 2em;

    &:hover {
            transition: box-shadow var(--animation-testing);
            box-shadow: -2em 1em #ed7c63;
        }

    &:not(hover){
            transition: box-shadow var(--animation-testing);
            box-shadow: -2em 1em #F5B6A8;
    }
`

export const DogContainersStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`

export const Form = styled.form`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    padding-bottom: 1em;
    input, label {
        text-align: left;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-right: 2em;
    }
    label {
        margin: 1em 20%;
        border-bottom: .2em solid #a66122;
    }
    input {
        border-radius: .5em;
        border: .1em solid #a66122;
        background-color: #d6cbbe;
        color: #8f5f5f;
    }
    button {
        border: .2em solid #a66122;
        border-radius: 1em;
        color: #8f5f5f;
    }
    button:hover {
        transition: transform var(--animation-testing), background-color var(--animation-testing), var(--animation-testing);
        background-color: wheat;
        border-bottom: .5em solid #92551e;
        transform: translateY(-.2em);
        margin-bottom: -.5em;
    }

    button:not(:hover) {
        transition: transform var(--animation-testing);
        transform: translateY(.2em);
    }
    button:disabled {
        opacity: 50%;
        transition: transform var(--animation-testing), background-color var(--animation-testing), var(--animation-testing);
        background-color: grey;
        border-bottom: .5em solid #92551e;
        transform: translateY(-.2em);
        margin-bottom: -.5em;
    }
`

export const Heading = styled.h1`
    font-size: calc(var(--font-size) + .5rem);
    border-bottom: thick double #733803;
`

export const Navigation = styled.nav`
    margin: 1.5rem 0;
    display: flex;
    justify-content: space-around;
    flex-flow: row nowrap;

    a {
        text-decoration: none;
        text-align: center;
        color: #8f5f5f;
        border: .2em solid #a66122;
        margin: .5em 1em;
        padding: .5em;
        border-radius: 1em;
    }

    a:hover {
        transition: transform var(--animation-testing), background-color var(--animation-testing), var(--animation-testing);
        background-color: wheat;
        border-bottom: .5em solid #92551e;
        transform: translateY(-.2em);
        margin-bottom: -.5em;
    }

    a:not(:hover) {
        transition: transform var(--animation-testing);
        transform: translateY(.2em);
    }
`

export const TextBox = styled.div`
    padding-top: .5em;
    padding-right: .5em;

    h2 {
        text-align: left;
        padding-left: 1em;
        font-style: italic;
    }

    p {
        text-align: left;
        padding-left: 10vw;
        font-size: calc(var(--font-size) + .1em);
        margin: 1em 0;
    }

    ul {
        text-decoration: none;
        padding-left: 10vw;
    }

    @media screen and (max-width: 620px) {
        img {
        width: 20em;
        height: 20em;
        padding-right: 12vw;
        }

        p {
        text-align: left;
        padding-left: 5em;
        font-size: calc(var(--font-size) + .2em);
    }
    }
`

export const FormErrors = styled.div`
    width: 50%;
    padding-left: 25%;
    p {
        border-bottom: .3em solid #c84d2f;
        font-size: calc(var(--font-size) + .1em);
    }
`

export const ProfileImage = styled.img`
    width: 20em;
    height: 20em;
    padding-right: 70vw;

`

export const HeadingImage = styled.img`
    width: 100%;
    border-radius: .5em;
`
