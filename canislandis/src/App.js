import './App.css';
import React, { useState } from 'react';
import { CSSVariablesApp, NavigationMenu } from './styled-components/App-js-styled';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'

function App() {

  const [defaultRem, setDefaultRem] = useState({ fontSize: '1.5rem', burgerWidth: '5rem', burgerHeight: '.8rem' })

  return (
    <BrowserRouter>
      <CSSVariablesApp remSize={defaultRem}>
        <NavigationMenu>
          <label className={`hamburger-menu`}>
            <input
              type='checkbox'
            />
          </label>
          <aside className={`sidebar`}>
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
      </CSSVariablesApp>
    </BrowserRouter>

  );
}

export default App;
