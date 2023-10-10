import styled from "styled-components";

// State CSS variables

export const CSSBasis = {
    cssPropExists: false,
    fontSize: '1.5rem',
    burgerWidth: '5rem',
    burgerHeight: '.8rem',
    legacyHamburgerInput: false
}

export const CSSVariablesApp = styled.div`
  *, *::after, *::before {
    box-sizing: border-box;
  }

    --font-size: ${props => props.remSize.fontSize};
    --bar-width: ${props => props.remSize.burgerWidth};
    --bar-height: ${props => props.remSize.burgerHeight};
    --hamburger-gap: .2em;
    --foreground: #333;
    --background: white;
    --hamburger-margin: 1rem;
    --animation-timing: 200ms ease-in-out;
    --hamburger-height: calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2);

    body {
        margin: 0;
        font-size: var(--font-size);
    }

    .hamburger-overlay {
    position: absolute;
    z-index: 999;
    width: calc(var(--bar-width) + 1rem);
    height: calc(var(--bar-height) + 3.5rem);
    background-color: transparent;
    }

    .navigation-toggle.active {
        pointer-events: auto;
    }

    .navigation-toggle.not-active {
        pointer-events: none;
    }
    
    display: flex;
`;

// Navigation Styles

export const NavigationMenu = styled.div`
font-size: var(--font-size);
position: fixed;



//
.hamburger-menu {
    --x-width: calc(var(--hamburger-height) * 1.41421356237);
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: var(--hamburger-gap);
    font-size: var(--font-size);
    width: max-content;
    position: absolute;
    top: var(--hamburger-margin);
    left: var(--hamburger-margin);
    z-index: 2;
    cursor: pointer;
}

.legacy-x {
    text-align: center;
    position: fixed;
    font-size: calc(var(--font-size) * 3);
    top: -.5rem;
    background-color: #333;
    border: none;
    color: white;
    font-weight: bold;
    pointer-events: none;
}
//

.hamburger-menu:has(input:checked) {
    --foreground: white;
    --background: #333;
}

.hamburger-menu:has(input:focus-visible)::before,
.hamburger-menu:has(input:focus-visible)::after,
.hamburger-menu input:focus-visible {
    border: 1rem solid var(--background);
    box-shadow: 0 0 0 1rem var(--foreground);
}

.hamburger-menu::before,
.hamburger-menu::after,
.hamburger-menu input {
    content: "";
    width: var(--bar-width);
    height: var(--bar-height);
    background-color: var(--foreground);
    border-radius: 5em;
    transform-origin: left center;
    transition: opacity var(--animation-timing), width var(--animation-timing), rotate var(--animation-timing), translate var(--animation-timing);
  }

.hamburger-menu input {
    appearance: none;
    padding: 0;
    margin: 0;
    outline: none;
}

//
.hamburger-menu:has(input:checked)::before {
    rotate: 45deg;
    width: var(--x-width);
    translate: 0 calc(var(--bar-height) / -2);
}

.hamburger-menu:has(input:checked)::after {
    rotate: -45deg;
    width: var(--x-width);
    translate: 0 calc(var(--bar-height) / 2)
}

.hamburger-menu input:checked {
    opacity: 0;
    width: 0;
    pointer-events: none;
}

.hamburger-menu.legacy.open::before {
    rotate: 45deg;
    width: var(--x-width);
    translate: 0 calc(var(--bar-height) / -2);
}

.hamburger-menu.legacy.open::after {
    rotate: -45deg;
    width: var(--x-width);
    translate: 0 calc(var(--bar-height) / 2)
}

.hamburger-menu.legacy.open {
    opacity: 0;
    width: 0;
}

//

// Sidebar Styles

.sidebar {
    transition: translate var(--animation-timing);
    padding: 0.5rem 1rem;
    translate: -110%;
    padding-top: calc(var(--hamburger-height) + var(--hamburger-margin) + 1rem);
    background-color: var(--foreground);
    color: var(--background);
    max-width: 20vw;
    min-height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;
}

//
.hamburger-menu:has(input:checked) + .sidebar {
    translate: 0;
} 
.hamburger-menu.legacy.open + .sidebar {
    translate: 0;
}
//
aside {
    gap: 1rem;
}

nav {
    display: flex;
    flex-flow: column nowrap;
    min-width: max-content;
}

.nav-item {
    text-decoration: none;
    color: white;
    padding: .5rem 1rem;
    margin: .5rem 0;
    text-align: left;
}

.nav-item:hover {
    color: black;
    border-right: .5rem solid black;
    background-color: #6F7378;
    transition: translate var(--animation-timing);
    translate: 10%;
    text-shadow: black;
}

.nav-item:not(:hover){
    transition: translate var(--animation-timing);
    border-left: .5rem solid grey;
}

nav:hover {
    box-shadow: 10px 10px 5px #A8A59D;
}

nav:not(:hover) {
    transition: box-shadow var(--animation-timing);
    box-shadow: 5px 5px 2px #676767;
}

@media screen and (max-width: 620px) {
    .sidebar {
        max-width: 40vw;
    }
}
`;


