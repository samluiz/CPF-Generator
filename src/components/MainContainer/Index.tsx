import Card from '../Card/Index'
import FormContainer from '../FormContainer/Index'

const MainContainer = ({}) => {
  return (
    <>
      <main className=' h-[36rem] rounded-2xl dark:bg-slate-900 bg-white flex flex-col px-6 min-h-[42rem]  min-w-fit justify-center flex-wrap gap-8'>
        <div className='grid w-full place-items-center'>
          <Card />
        </div>
        <FormContainer />
      </main>
    </>
  )
}

export default MainContainer
