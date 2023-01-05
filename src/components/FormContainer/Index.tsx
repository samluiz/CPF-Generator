import { useEffect, useState, useContext } from 'react'
import Input from '../Input/Index'
import DropdownInput from '../DropdownInput/Index'
import { useForm } from 'react-hook-form'
import Button from '../Button/Index'
import { generateCPF } from '../../utils/CPFGenerator'
import { useFormContext } from 'react-hook-form'
import { UserContext } from '../../contexts/UserContext'

const FormContainer = () => {
  const { setCpf } = useContext(UserContext)

  const {
    handleSubmit,
    register,
    resetField,
    watch,
    formState: { errors },
  } = useFormContext()

  useForm({
    defaultValues: {
      birthDate: new Date().toISOString().substring(0, 10),
    },
  })

  watch()

  const onSubmit = (data: any) => {
    const cpf = generateCPF(data.birthPlace)
    setCpf(cpf)
    resetField('birthPlace')
  }

  return (
    <div className='grid place-items-center grid-flow-col max-w-fit'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='p-2 flex flex-col gap-4 w-full'
      >
        <div className='flex flex-row gap-2 justify-between content-center flex-wrap'>
          <Input
            labelText='Nome completo'
            inputType='text'
            inputId='firstName'
            inputName='firstName'
            inputPlaceholder='Juan'
            {...register('firstName', {
              required: true,
            })}
          />
          <Input
            inputType='text'
            inputId='surname'
            inputName='surname'
            inputPlaceholder='Delacruz'
            {...register('surname', {
              required: false,
            })}
          />
        </div>
        <div className='flex flex-col justify-center align-center gap-2 flex-wrap'>
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
            {...register('birthPlace', {
              required: true,
            })}
          />
        </div>
        <Button>Gerar CPF</Button>
      </form>
    </div>
  )
}

export default FormContainer
