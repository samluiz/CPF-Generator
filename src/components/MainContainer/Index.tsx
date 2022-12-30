import Card from '../Card/Index'
import { useForm, FormProvider } from 'react-hook-form'
import FormContainer from '../FormContainer/Index'
import { IRegistryData, UserContextProvider } from '../../contexts/UserContext'

const MainContainer = ({}) => {
  const methods = useForm<IRegistryData>()

  return (
    <main className=' h-[36rem] rounded-2xl dark:bg-slate-900 bg-white flex flex-col px-6 min-h-[42rem] shadow-2xl min-w-fit justify-center flex-wrap gap-8'>
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
