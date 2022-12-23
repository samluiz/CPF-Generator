import React, { ChangeEventHandler, forwardRef, Ref } from 'react'

export interface IProps {
  labelText?: string
  inputType?: string
  inputId: string
  inputName?: string
  inputPlaceholder?: string
  list?: string
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
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
          <label className=' dark:text-white' htmlFor={inputId}>
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
            className=' dark:text-white p-2 block w-full px-0 mt-0 bg-transparent border-t-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-white focus:border-l-2 focus:border-r-2 rounded-md duration-75 border-gray-200 placeholder-gray-500 placeholder:text-center'
          />
        </div>
      </>
    )
  }
)

export default Input
