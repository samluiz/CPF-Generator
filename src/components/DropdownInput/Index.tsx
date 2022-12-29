import { useEffect, useState, forwardRef, Ref } from 'react'
import { api } from '../../api/Instance'
import { IProps } from '../Input/Index'

interface IEProps extends IProps {}

const DropdownInput = forwardRef(
  (
    { inputId, inputName, inputPlaceholder, value, onChange }: IEProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [response, setResponse] = useState<any>([])

    useEffect(() => {
      const getStates = async () => {
        await api
          .get('/localidades/estados?orderBy=nome')
          .then((response) => response)
          .then((data) => {
            setResponse(data)
          })
      }
      getStates()
    }, [])

    return (
      <>
        <input
          value={value}
          onChange={onChange}
          name={inputName}
          placeholder={inputPlaceholder}
          id={inputId}
          ref={ref}
          list='states'
          className='   text-gray-800 dark:text-white bg-gray-300 dark:bg-slate-800 w-full border-0 p-2 appearance-none outline-none focus:ring-1 dark:focus:border-b-0 rounded-md duration-75   placeholder-gray-500 placeholder:text-center'
        />
        <datalist id='states'>
          {response.data &&
            response.data.map((state: any) => {
              return (
                <option value={state.sigla} key={state.id}>
                  {state.nome}
                </option>
              )
            })}
        </datalist>
      </>
    )
  }
)

export default DropdownInput
