import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DogContainer, DogContainersStyled} from '../styled-components/TeamBuilder-styled'

export default function TeamMembersTeamBuilder() {
    const dispatch = useDispatch()
    const teamMembers = useSelector((state) => state.teamBuilderState.teamMembers)

    return (
        <DogContainersStyled>
            {
                teamMembers.map(member => {
                    return (
                        <DogContainer>
                            {
                                Object.keys(member).map(dog => {
                                    if (dog !== 'chew') {
                                        return (
                                        <>
                                            <h2>{dog.charAt(0).toUpperCase() + dog.substring(1)}</h2>
                                            <p>{member[dog]}</p>
                                        </>
                                    )
                                    }
                                })
                            }
                        </DogContainer>
                    )
                })
            }
        </DogContainersStyled>
    )
}