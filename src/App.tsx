import { useState } from 'react'
import './App.css'
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import reactLogo from './assets/react.svg'
import tsLogo from './assets/ts.svg'
import viteLogo from './assets/vite.svg'
import linariaLogo from './assets/linaria.svg'

// Components in a styled way

const Logos = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;

  &:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
  }
  &.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
  }
  &.logo.linaria:hover {
  filter: drop-shadow(0 0 2em #ffffffaa);
  }
  &.logo.ts:hover {
  filter: drop-shadow(0 0 2em #ffffffaa);
  }
`;

// Just the css

const title = css`
  font-size: 24px;
  font-weight: bold;
`;

const card = css`
  font-size: 24px;
  font-weight: bold;
`;


function App() {
  const [count, setCount] = useState(3)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <Logos src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <Logos src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://github.com/callstack/linaria" target="_blank">
          <Logos src={linariaLogo} className="logo linaria" alt="Linaria logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <Logos src={tsLogo} className="logo ts" alt="Typescript logo" />
        </a>
      </div>
      <h1>Vite + React + Linaria</h1>
      <div className={card}>
        <button onClick={() => setCount((count) => count + 1)}>
          {count} cheers for VRLT stack! 🎉
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
