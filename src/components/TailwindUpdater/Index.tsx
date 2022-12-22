import { useContext, PropsWithChildren } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

const TailwindUpdater = ({ children }: PropsWithChildren) => {
  const { theme }: any = useContext(ThemeContext)

  return (
    <>
      <div className={theme}>{children}</div>
    </>
  )
}

export default TailwindUpdater
