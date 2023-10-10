import React, { useState, useEffect, useContext } from 'react' 
import {Link, Routes, Route} from 'react-router-dom'
import { MainContentContainer } from "../styled-components/Component-styled"
import { TeamBuilderStyles, MainContainer, Heading, Content, Navigation } from '../styled-components/TeamBuilder-styled'
import { CSSConditionals } from '../context/CSSStyles-context'

export default function TeamBuilder(props) {
    const [pageType, setPageType] = useState('Home Page')
    const [token, setToken] = useState(false)
    const currentPageState = { pageType: pageType, setPageType: setPageType }
    const tokenState = { token: token, setToken: setToken }
    const { CSSConditions, setCSSConditions } = useContext(CSSConditionals)

    useEffect(() => {
        const mainBody = document.querySelector("body")
        mainBody.style.background = "#fdeed3"

        return () => {
            mainBody.style.background = "#ECDEDD"
        }
    })

    return (
        <MainContentContainer>
            <TeamBuilderStyles remSize={CSSConditions}>
                <MainContainer>
                    <Heading>Welcome to the Woofing Bean: {pageType}</Heading>
                    <Navigation>
                        <Link to={`home`}>Home</Link>
                        <Link to={`application`}>Position Application</Link>
                        <Link to={`adminstration-login`}>Adminstration</Link>
                    </Navigation>
                </MainContainer>
            </TeamBuilderStyles>
        </MainContentContainer>
    )
}