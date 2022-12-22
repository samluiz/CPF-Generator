import { createContext, useEffect, useState, PropsWithChildren } from 'react'

export const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    setTheme(localStorage.getItem('theme') || 'dark')
    console.log(localStorage.getItem('theme'))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
