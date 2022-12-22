import React, { useEffect, useState } from 'react'
import Input from '../Input/Index'
import { api } from '../../api/Instance'
import Select from 'react-select'

const DropdownInput = () => {
  const [response, setResponse] = useState<any>([])

  const getStates = () => {
    api
      .get('/localidades/estados?orderBy=nome')
      .then((response) => {
        setResponse(response.data)
        console.log(response.data)
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    getStates()
  }, [])

  const getOptions = () =>
    response.map((state: any) => {
      return {
        value: state.sigla,
        label: state.nome,
      }
    })

  return (
    <>
      <Select options={getOptions()} />
    </>
  )
}

export default DropdownInput
