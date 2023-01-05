import { useContext } from 'react'
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
          className='grid place-items-center w-fit h-fit rounded-xl bg-transparent'
          onClick={SwitchThemeHandler}
        >
          {theme == 'dark' ? (
            <MdOutlineLightMode size='30px' color='white' />
          ) : (
            <MdOutlineDarkMode size='30px' />
          )}
        </button>
      </ThemeContextProvider>
    </>
  )
}

export default ThemeSwitcher
