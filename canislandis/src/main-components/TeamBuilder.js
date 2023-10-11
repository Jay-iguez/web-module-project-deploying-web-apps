import React, { useState, useEffect, useContext } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { MainContentContainer } from "../styled-components/Component-styled"
import { TeamBuilderStyles, Container, Heading, Navigation } from '../styled-components/TeamBuilder-styled'
import HomeTeamBuilder from '../sub-components/Home-TeamBuilder'
import ApplicationTeamBuilder from '../sub-components/Application-TeamBuilder.'
import { CSSConditionals } from '../context/CSSStyles-context'

export default function TeamBuilder() {
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
        <>
            <MainContentContainer remSize={CSSConditions}>
                <TeamBuilderStyles>
                    <Container>
                        <Heading>Welcome to the Woofing Bean: {pageType}</Heading>
                        <Navigation>
                            <Link to={`home`} onClick={() => {setPageType('Home Page')}}>Home</Link>
                            <Link to={`application`}>Position Application</Link>
                            <Link to={`adminstration-login`}>Adminstration</Link>
                        </Navigation>
                    </Container>
                </TeamBuilderStyles>
                <Routes>
                <Route path={`home`} element={<HomeTeamBuilder />}></Route>
                <Route path={`application`} element={<ApplicationTeamBuilder pageState={currentPageState} />}></Route>
            </Routes>
            </MainContentContainer>
        </>
    )
}