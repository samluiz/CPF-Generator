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
        <div className=' grid '>
          <input
            value={value}
            onChange={onChange}
            name={inputName}
            placeholder={inputPlaceholder}
            id={inputId}
            ref={ref}
            list='states'
            className=' text-white p-2 block w-full px-0 mt-0 bg-transparent border-t-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-white focus:border-l-2 focus:border-r-2 rounded-md duration-75 border-gray-200 placeholder-gray-500 placeholder:text-center'
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
        </div>
      </>
    )
  }
)

export default DropdownInput
