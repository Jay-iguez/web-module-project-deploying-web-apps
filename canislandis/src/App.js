import React, { useState, useEffect } from 'react';
import { CSSVariablesApp, NavigationMenu } from './styled-components/App-js-styled';
import { CSSBasis } from './styled-components/App-js-styled';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import { teamBuilderReducer } from './reducers/teamBuilderReducer';

export const REDUCERS = {
  teamBuilderReducer: 'teamBuilderReducer'
}

export const store = configureStore({
  reducer: {
    teamBuilderState: teamBuilderReducer
  },
  middleware: [...getDefaultMiddleware(), thunk]
})

function App() {

  const [CSSCondition, setCSSCondition] = useState(false)

  useEffect(() => {
    const container = document.createElement('div');

    container.style.display = 'none';
    document.body.appendChild(container);

    const result = window.getComputedStyle(container, ':has')?.getPropertyValue('content');

    document.body.removeChild(container);


    setCSSCondition({ ...CSSBasis, cssPropExists: Boolean(result) });

  }, []);


  const hamburgerOnChange = (e) => {
    setCSSCondition({ ...CSSCondition, legacyHamburgerInput: e.target.checked })
  }

  const conditionalHamburgerLegacyLogic = (className) => {

    if (CSSCondition.legacyHamburgerInput && className === 'sidebar') {
      return 'sidebar open'
    } else if (!CSSCondition.legacyHamburgerInput && className === 'sidebar') {
      return 'sidebar'
    } else if (CSSCondition.legacyHamburgerInput && className === 'hamburger-menu') {
      return 'hamburger-menu legacy open'
    } else if (!CSSCondition.legacyHamburgerInput && className === 'hamburger-menu') {
      return 'hamburger-menu legacy'
    }

  }


  return (
    <BrowserRouter>
      <CSSVariablesApp remSize={CSSCondition}>
        <NavigationMenu>
          <label className={CSSCondition.cssPropExists ? `hamburger-menu` : conditionalHamburgerLegacyLogic('hamburger-menu')}>
            <input
              type='checkbox'
              value={CSSCondition.legacyHamburgerInput}
              onChange={hamburgerOnChange}
            />
          </label>
          <aside className={CSSCondition.cssPropExists ? 'sidebar' : conditionalHamburgerLegacyLogic('sidebar')}>
            {
              !CSSCondition.cssPropExists ?
                <div className={`legacy-x`}>X</div> : null
            }
            <h3>Canis Lupus</h3>
            <nav>
              <Link className={`nav-item`} to={`/wolves`}>Wolves</Link>
              <Link className={`nav-item`} to={`/dogs`}>Dogs</Link>
              <Link className={`nav-item`} to={`/canines`}>Canines</Link>
            </nav>
            <h3>Felines</h3>
            <nav>
              <Link className={`nav-item`} to={`/cats`}>Cats</Link>
            </nav>
          </aside>
        </NavigationMenu>
        <div style={{ flex: 1 }}>
          <h1>Content I want to appear amongst NavigationMenu but not underneath</h1>
        </div>

      </CSSVariablesApp>
    </BrowserRouter>

  );
}

export default App;
