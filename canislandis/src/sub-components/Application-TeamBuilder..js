import React, { useEffect } from "react";
import coffeeShop from '../data/images/coffee-shop.webp'
import { Container, HeadingImage, TextBox } from "../styled-components/TeamBuilder-styled";
import TeamMembersTeamBuilder from "./TeamMembers-TeamBuilder";
import FormTeamBuilder from "./Form-TeamBuilder";

export default function ApplicationTeamBuilder(props) {
    const { pageState } = props

    useEffect(() => {
        pageState.setPageType('Application Page')

    }, [])

    return (
        <>
            <Container>
                <HeadingImage src={coffeeShop} />
            </Container>
            <Container>
                <TextBox>
                    <h2>Want to join in on the fun?</h2>
                    <p><strong>🐶 Join The Woofing Bean! 🐾</strong></p>
                    <p><strong>Ready</strong> to ditch the old bone and fetch a new job? Come wag with us at The Woofing Bean, where coffee is our bark-tastic specialty and doggy charm is a must!</p>
                    <p>We need <strong>paw-some applicants who can brew tail-wagging coffee</strong>, serve pup-solutely delicious treats, and have a nose for customer happiness. If you're a four-legged go-getter with a talent for treat hunting, we've got a spot just for you!</p>
                    <p>Drop off your <strong>impressive</strong> resume (paw print required) at our doghouse front desk (Digitally speaking of course silly). Squirrel-chasing and mailman-alerting skills are a big plus! And remember, a shiny coat and wagging tail are essential for that all-important first impression.</p>
                    <p>So, spruce up those paws, join our pack, and <strong>let's fetch success together at The Woofing Bean!</strong> It's a woof-tastic adventure waiting to happen!</p>
                    <p>Tail wags,<br /><strong>The Woofing Bean Team 🐾</strong></p>
                </TextBox>
            </Container>
            <Container>
                <TextBox>
                    <h2>Come Meet our Team Members!</h2>
                    <p>Don't worry, none of them <strong>won't</strong> bite.</p>
                </TextBox>
            </Container>
            <TeamMembersTeamBuilder />
            <FormTeamBuilder />
        </>
    )
}