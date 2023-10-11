import React, { useContext } from "react"
import { CSSConditionals } from "../context/CSSStyles-context"
import { MainContentContainer } from "../styled-components/Component-styled"

export default function Home () {
  const {CSSConditions, setCSSConditions} = useContext(CSSConditionals)
  
    return (
        <MainContentContainer remSize={CSSConditions}>
          <div>
            <h1>Welcome to my test-demo React-powered website!</h1>
          </div>
          <div>
            <h2>What you can do:</h2>
            <p>You can use the navigation bar at your left to visit some projects I've completed and have been tinkering with at my time here with BloomTech and learning Web Development.</p>
            <br></br>
            <p>Feel free to mess around and have fun. Hope you enjoy :D</p>
          </div>
        </MainContentContainer>
    )
}