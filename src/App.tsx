import MainContainer from './components/MainContainer/Index'
import { ThemeContextProvider } from './contexts/ThemeContext'
import TailwindUpdater from './components/TailwindUpdater/Index'

function App() {
  return (
    <>
      <ThemeContextProvider>
        <TailwindUpdater>
          <div className="w-screen relative h-screen grid place-items-center grid-flow-row dark:bg-gray-700 bg-gray-200 duration-500 overflow-y-scroll overflow-x-hidden">
            <MainContainer />
          </div>
        </TailwindUpdater>
      </ThemeContextProvider>
    </>
  )
}

export default App
