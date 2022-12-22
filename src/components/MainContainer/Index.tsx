import React from 'react'
import Input from '../Input/Index'
import DropdownInput from '../DropdownInput/Index'

const MainContainer = () => {
  return (
    <>
      <main className=' h-[36rem] w-[72rem] grid place-items-center grid-flow-col rounded-2xl dark:bg-slate-900 bg-white'>
        <div className='h-[32rem] w-[32rem] bg-white dark:bg-slate-900'>
          <Input
            labelText='Nome'
            inputType='text'
            inputId='firstName'
            inputName='name'
            inputPlaceholder='John'
          />
          <Input
            labelText='Sobrenome'
            inputType='text'
            inputId='lastName'
            inputName='name'
            inputPlaceholder='Cena'
          />
          <Input
            labelText='Data de nascimento'
            inputType='date'
            inputId='birthDate'
            inputName='birthDate'
          />
          <DropdownInput />
        </div>
        <div className='h-[32rem] w-[26rem] bg-white dark:bg-slate-900'></div>
      </main>
    </>
  )
}

export default MainContainer
