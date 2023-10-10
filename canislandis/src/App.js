import React, { useState, useEffect, useContext } from 'react';
import { CSSVariablesApp, NavigationMenu } from './styled-components/App-js-styled';
import { Routes, Route, Link } from 'react-router-dom'
import { doesCSSPropExist, conditionalHamburgerLegacyLogic } from './logic/App-js-logic';
import { CSSConditionals } from './context/CSSStyles-context';
import TeamBuilder from './main-components/TeamBuilder';
import Home from './main-components/Home';

function App() {
  const [CSSConditions, setCSSConditions] = useState(useContext(CSSConditionals))
  const CSSContextState = { CSSConditions: CSSConditions, setCSSConditions: setCSSConditions }

  useEffect(() => {
    setCSSConditions({ ...CSSConditions, cssPropExists: doesCSSPropExist() });
  }, []);

  const hamburgerOnChange = () => {
    setCSSConditions({ ...CSSConditions, legacyHamburgerInput: !CSSConditions.legacyHamburgerInput })
  }

  return (
    <CSSConditionals.Provider value={CSSContextState}>
      <CSSVariablesApp remSize={CSSConditions}>
        <div className={`hamburger-overlay`} onClick={() => {
          hamburgerOnChange()
          console.log(CSSConditions)
        }}></div>
        <div className={`navigation-toggle ${CSSConditions.legacyHamburgerInput ? "active" : 'not-active'}`}>
          <NavigationMenu>
            <label className={CSSConditions.cssPropExists ? `hamburger-menu` : conditionalHamburgerLegacyLogic('hamburger-menu', CSSConditions)}>
              <input
                type='checkbox'
                checked={!CSSConditions.legacyHamburgerInput ? "" : 'checked'}
              />
            </label>
            <aside className={CSSConditions.cssPropExists ? 'sidebar' : conditionalHamburgerLegacyLogic('sidebar', CSSConditions)}>
              {
                !CSSConditions.cssPropExists ?
                  <div className={`legacy-x`}>X</div> : null
              }
              <h3>Navigation</h3>
              <nav>
                <Link className={`nav-item`} to={`/`}>Home</Link>
              </nav>
              <h3>Project Pages</h3>
              <nav>
                <Link className={`nav-item`} to={`/teambuilder`}>Team Builder</Link>
                <Link className={`nav-item`} to={`/dogs`}>Dogs List</Link>
              </nav>
            </aside>
          </NavigationMenu>
        </div>
      </CSSVariablesApp>
      <Routes>
        <Route path={`/`} element={<Home />}></Route>
        <Route path={`/teambuilder/*`} element={<TeamBuilder />}></Route>
      </Routes>
    </CSSConditionals.Provider>


  );
}

export default App;
