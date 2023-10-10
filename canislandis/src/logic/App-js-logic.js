
export const doesCSSPropExist = () => {
    const container = document.createElement('div');
    container.style.display = 'none';
    document.body.appendChild(container);
    const result = window.getComputedStyle(container, ':has')?.getPropertyValue('content');
    document.body.removeChild(container);

    return Boolean(result)
}

export const conditionalHamburgerLegacyLogic = (className, state) => {

    if (state.legacyHamburgerInput && className === 'sidebar') {
      return 'sidebar open'
    } else if (!state.legacyHamburgerInput && className === 'sidebar') {
      return 'sidebar'
    } else if (state.legacyHamburgerInput && className === 'hamburger-menu') {
      return 'hamburger-menu legacy open'
    } else if (!state.legacyHamburgerInput && className === 'hamburger-menu') {
      return 'hamburger-menu legacy'
    }

  }
