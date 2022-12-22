import { useEffect, useState } from 'react'
import { useContext } from 'react'
import MainContainer from './components/MainContainer/Index'
import { ThemeContext, ThemeContextProvider } from './contexts/ThemeContext'
import ThemeSwitcher from './components/ThemeSwitcher/Index'
import TailwindUpdater from './components/TailwindUpdater/Index'

function App() {
  return (
    <>
      <ThemeContextProvider>
        <TailwindUpdater>
          <div className='w-screen relative h-screen grid place-items-center grid-flow-row dark:bg-gray-700 bg-gray-200'>
            <ThemeSwitcher />
            <MainContainer />
          </div>
        </TailwindUpdater>
      </ThemeContextProvider>
    </>
  )
}

export default App
