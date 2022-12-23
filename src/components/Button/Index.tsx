import { PropsWithChildren } from 'react'

const Button = ({ children }: PropsWithChildren) => {
  return (
    <>
      <button type='submit'>{children}</button>
    </>
  )
}

export default Button
