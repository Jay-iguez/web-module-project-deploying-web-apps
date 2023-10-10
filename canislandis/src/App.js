import React, { useState, useEffect } from 'react';
import { CSSVariablesApp, NavigationMenu } from './styled-components/App-js-styled';
import { CSSBasis } from './styled-components/App-js-styled';
import { Routes, Route, Link } from 'react-router-dom'
import { doesCSSPropExist, conditionalHamburgerLegacyLogic } from './logic/App-js-logic';
import TeamBuilder from './main-components/TeamBuilder';
import Home from './main-components/Home';

function App() {

  const [CSSConditions, setCSSConditions] = useState(false)

  useEffect(() => {
    setCSSConditions({ ...CSSBasis, cssPropExists: doesCSSPropExist() });
  }, []);

  const hamburgerOnChange = (e) => {
    setCSSConditions({ ...CSSConditions, legacyHamburgerInput: e.target.checked })
  }

  return (
    <>
      <CSSVariablesApp remSize={CSSConditions}>
        <NavigationMenu>
          <label className={CSSConditions.cssPropExists ? `hamburger-menu` : conditionalHamburgerLegacyLogic('hamburger-menu', CSSConditions)}>
            <input
              type='checkbox'
              value={CSSConditions.legacyHamburgerInput}
              onChange={hamburgerOnChange}
            />
          </label>
          <aside className={CSSConditions.cssPropExists ? 'sidebar' : conditionalHamburgerLegacyLogic('sidebar', CSSConditions)}>
            {
              !CSSConditions.cssPropExists ?
                <div className={`legacy-x`}>X</div> : null
            }
            <h3>Navigation</h3>
              <Link className={`nav-item`} to={`/`}>Home</Link>
            <h3>Project Pages</h3>
            <nav>
              <Link className={`nav-item`} to={`/teambuilder`}>Team Builder</Link>
              <Link className={`nav-item`} to={`/dogs`}>Dogs List</Link>
            </nav>
          </aside>
        </NavigationMenu>
      </CSSVariablesApp>
      <Routes>
            <Route path={`/`} element={<Home />}></Route>
            <Route path={`/teambuilder`} element={<TeamBuilder />}></Route>
      </Routes>
    </>


  );
}

export default App;
