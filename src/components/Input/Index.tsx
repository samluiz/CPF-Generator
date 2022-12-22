import React from 'react'

interface IProps {
  labelText?: string
  inputType?: string
  inputId: string
  inputName?: string
  onChange?: string
  inputPlaceholder?: string
  list?: string
}

const Input = ({
  labelText,
  inputType,
  inputId,
  inputName,
  inputPlaceholder,
}: IProps) => {
  return (
    <>
      <div className=' grid '>
        <label className=' text-white' htmlFor={inputId}>
          {labelText}
        </label>
        <input
          type={inputType}
          name={inputName}
          placeholder={inputPlaceholder}
          id={inputId}
        />
      </div>
    </>
  )
}

export default Input
