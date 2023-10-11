import styled from "styled-components"

export const MainContentContainer = styled.div`
    --font-size: ${props => props.remSize.fontSize};
    font-size: var(--font-size);
    padding-left: 8vw;
    padding-right: 1.5vw;
`