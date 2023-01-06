import { ChangeEventHandler, forwardRef, Ref } from 'react'
import { useFormContext } from 'react-hook-form'

export interface IProps {
  labelText?: string
  inputType?: string
  inputId: string
  inputName?: string
  inputPlaceholder?: string
  list?: string
  value?: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Input = forwardRef(
  (
    {
      labelText,
      inputType,
      inputId,
      inputName,
      inputPlaceholder,
      value,
      onChange,
    }: IProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <>
        <div className=' grid w-full'>
          <label
            className=' dark:text-white font-light max-w-fit'
            htmlFor={inputId}
          >
            {labelText}
          </label>
          <input
            autoCapitalize='characters'
            autoComplete='off'
            value={value}
            onChange={onChange}
            type={inputType}
            name={inputName}
            placeholder={inputPlaceholder}
            id={inputId}
            ref={ref}
            className=' text-gray-800 dark:text-white bg-gray-300 dark:bg-slate-800 min-w-full border-0 p-2 appearance-none outline-none focus:ring-1 dark:focus:border-b-0 rounded-md duration-200 shadow-xl placeholder-gray-500 placeholder:text-center'
          />
        </div>
      </>
    )
  }
)

export default Input
