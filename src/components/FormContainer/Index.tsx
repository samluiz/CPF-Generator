import React, { useEffect, useState, useContext } from 'react'
import Input from '../Input/Index'
import DropdownInput from '../DropdownInput/Index'
import { useForm } from 'react-hook-form'
import Button from '../Button/Index'
import { generateCPF } from '../../utils/CPFGenerator'
import { useFormContext } from 'react-hook-form'
import { UserContext } from '../../contexts/UserContext'

const FormContainer = () => {
  const { registryData, setRegistryData, setCpf, cpf } = useContext(UserContext)

  const { handleSubmit, register, reset, watch } = useFormContext()

  const watchAll = watch()

  const onSubmit = (data: any) => {
    const cpf = generateCPF(data.birthPlace)
    setCpf(cpf)
  }

  return (
    <div className='grid place-items-center grid-flow-col'>
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
            {...register('firstName', {
              required: true,
            })}
          />
          <Input
            labelText='Sobrenome'
            inputType='text'
            inputId='surname'
            inputName='surname'
            inputPlaceholder='Delacruz'
            {...register('surname', {
              required: true,
            })}
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
