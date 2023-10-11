import { createContext } from "react";

const CSSBasis = {
    cssPropExists: false,
    fontSize: '1rem',
    burgerWidth: '4rem',
    burgerHeight: '.6rem',
    legacyHamburgerInput: false
}

export const CSSConditionals = createContext(CSSBasis)