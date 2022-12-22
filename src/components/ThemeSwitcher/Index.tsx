import React, { useContext } from 'react'
import { ThemeContext, ThemeContextProvider } from '../../contexts/ThemeContext'
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'

const ThemeSwitcher = () => {
  const { theme, setTheme }: any = useContext(ThemeContext)

  const SwitchThemeHandler = () => {
    if (theme == 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <>
      <ThemeContextProvider>
        <button
          className=' bg-gray-200 grid place-items-center h-16 w-16 rounded-xl dark:bg-gray-700 absolute top-0'
          onClick={SwitchThemeHandler}
        >
          {theme == 'dark' ? (
            <MdOutlineLightMode size='40px' color='white' />
          ) : (
            <MdOutlineDarkMode size='40px' />
          )}
        </button>
      </ThemeContextProvider>
    </>
  )
}

export default ThemeSwitcher
