import { ChangeEventHandler, forwardRef, Ref } from 'react'

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
        <div className=' grid '>
          <label className=' dark:text-white font-light' htmlFor={inputId}>
            {labelText}
          </label>
          <input
            value={value}
            onChange={onChange}
            type={inputType}
            name={inputName}
            placeholder={inputPlaceholder}
            id={inputId}
            ref={ref}
            className=' text-gray-800 dark:text-white bg-gray-300 dark:bg-slate-800 w-full border-0 p-2 appearance-none outline-none focus:ring-1 dark:focus:border-b-0 rounded-md duration-75   placeholder-gray-500 placeholder:text-center'
          />
        </div>
      </>
    )
  }
)

export default Input
