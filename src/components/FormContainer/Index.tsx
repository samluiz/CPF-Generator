import React, { useEffect, useState } from 'react'
import Input from '../Input/Index'
import DropdownInput from '../DropdownInput/Index'
import { useForm } from 'react-hook-form'
import Button from '../Button/Index'

const FormContainer = () => {
  const [user, setUser] = useState<Array<any>>([])
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = (data: any) => {
    console.log(data)
    setUser([data])
    reset()
  }

  useEffect(() => {
    console.log(user)
  }, [])

  return (
    <>
      <div className='  grid place-items-center grid-flow-col '>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='p-2 flex flex-col gap-4'
        >
          <div className='flex flex-row gap-2 justify-between content-center '>
            <Input
              labelText='Nome'
              inputType='text'
              inputId='firstName'
              inputName='firstName'
              inputPlaceholder='Juan'
              {...register('firstName', { required: true })}
            />
            <Input
              labelText='Sobrenome'
              inputType='text'
              inputId='surname'
              inputName='surname'
              inputPlaceholder='Delacruz'
              {...register('surname', { required: true })}
            />
          </div>
          <div className='flex flex-col justify-between gap-2'>
            <Input
              labelText='Dados de nascimento'
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
          <Button>Gerar CPF</Button>
          {user &&
            user.map((user, key) => {
              return (
                <ul key={key}>
                  <li>{user.firstName}</li>
                  <li>{user.surname}</li>
                  <li>{user.birthDate}</li>
                  <li>{user.birthPlace}</li>
                </ul>
              )
            })}
        </form>
      </div>
    </>
  )
}

export default FormContainer
