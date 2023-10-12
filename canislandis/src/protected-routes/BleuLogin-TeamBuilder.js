import React from "react"
import { useSelector } from "react-redux"
import { Container, TextBox } from "../styled-components/TeamBuilder-styled"

export default function BleuLoginTeamBuilder() {
    const userData = useSelector((state) => state.teamBuilderState.user)

    return (
        <>
        <Container>
            <TextBox>
                <h2>Welcome {userData.name}:</h2>
                <p>Because you're a {userData.breed}, we thought you would make a great member to our IT department. Don't tell Bleu, but since you already have an account now you're techincally hired so keep it under wraps!</p>
                <p>We'll find some work for you to do, until then - just hang around.</p>
            </TextBox>
        </Container>
        </>
    )
}