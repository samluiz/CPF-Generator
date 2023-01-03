import { useState, useEffect, useContext } from 'react'
import Logo from '../Logo/Input'
import CopyToClipboard from '../CopyToClipboard/Index'
import { useFormContext } from 'react-hook-form'
import { UserContext } from '../../contexts/UserContext'
import { formatDate } from '../../utils/dateFormatter'

const Card = () => {
  const { getValues } = useFormContext()

  const { cpf } = useContext(UserContext)

  console.log(cpf)

  const firstName = getValues('firstName')
  const surname = getValues('surname')
  const birthDate = formatDate(getValues('birthDate'))

  return (
    <div className=' bg-gray-400 dark:bg-sky-900 rounded-md w-[20rem] h-[10rem] grid place-items-start overflow-hidden shadow-2xl border-[1px] border-gray-500 relative'>
      <Logo
        width='250'
        height='250'
        opacity='10%'
        className=' ml-[8rem] mt-[-1rem] absolute'
      />
      <div className='text-gray-800 dark:text-gray-300 self-start mt-4 ml-4'>
        <span>{firstName && firstName.concat(' ', surname)}</span>
      </div>
      <div className=' grid grid-flow-row text-gray-800 dark:text-gray-300 self-end mb-4 ml-4 gap-2'>
        {cpf && (
          <div className='grid place-items-center grid-flow-col gap-2'>
            <span className=' font-semibold grid grid-flow-col place-items-center gap-2'>
              {cpf}
              <CopyToClipboard />
            </span>
          </div>
        )}
        <span>{birthDate && birthDate}</span>
      </div>
    </div>
  )
}

export default Card
