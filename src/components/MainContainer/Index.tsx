import Card from '../Card/Index'
import { useForm, FormProvider } from 'react-hook-form'
import FormContainer from '../FormContainer/Index'
import { IRegistryData, UserContextProvider } from '../../contexts/UserContext'
import ThemeSwitcher from '../ThemeSwitcher/Index'

const MainContainer = ({}) => {
  const methods = useForm<IRegistryData>()

  return (
    <main className=' min-h-fit rounded-2xl dark:bg-slate-900 bg-white flex flex-col p-6 shadow-2xl min-w-fit justify-center flex-wrap gap-8 duration-500'>
      <ThemeSwitcher />
      <FormProvider {...methods}>
        <UserContextProvider>
          <div className='grid w-full place-items-center'>
            <Card />
          </div>
          <FormContainer />
        </UserContextProvider>
      </FormProvider>
    </main>
  )
}

export default MainContainer
