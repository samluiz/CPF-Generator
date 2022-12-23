import React from 'react'
import Input from '../Input/Index'
import DropdownInput from '../DropdownInput/Index'
import { useForm } from 'react-hook-form'
import Button from '../Button'

const MainContainer = ({}) => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => console.log(data)
  return (
    <>
      <main className='h-[36rem] w-[72rem] rounded-2xl dark:bg-slate-900 bg-white grid grid-flow-row'>
        <h1 className=' text-4xl text-center text-white m-6'>CPF GENERATOR</h1>
        <div className='  grid place-items-center grid-flow-col '>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='p-2 flex flex-col gap-8'
          >
            <div className='flex flex-row gap-2 justify-between content-center '>
              <Input
                labelText='Nome'
                inputType='text'
                inputId='firstName'
                inputName='firstName'
                inputPlaceholder='Primeiro Nome'
                {...register('firstName', { required: true })}
              />
              <Input
                inputType='text'
                inputId='surname'
                inputName='surname'
                inputPlaceholder='Sobrenome'
                {...register('surname', { required: true })}
              />
            </div>
            <div className='flex flex-row gap-2 justify-between content-center '>
              <Input
                labelText='Data de nascimento'
                inputType='date'
                inputId='birthDate'
                inputName='birthDate'
                {...register('birthDate')}
              />
              <DropdownInput
                inputId='birthPlace'
                inputName='birthPlace'
                inputPlaceholder='Digite seu estado...'
                {...register('birthPlace', { required: true })}
              />
            </div>
            <Button>Hey</Button>
          </form>
        </div>
      </main>
    </>
  )
}

export default MainContainer
