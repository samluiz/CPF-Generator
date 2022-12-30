import {
  PropsWithChildren,
  MouseEventHandler,
  ComponentPropsWithoutRef,
} from 'react'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: string
}

const Button = ({ children }: ButtonProps) => {
  return (
    <>
      <button
        className=' dark:text-white border-gray-900 hover:bg-gray-100 dark:border-blue-900 border-opacity-20 border-[1px] duration-200 dark:hover:bg-blue-900 dark:hover:bg-opacity-20 hover:w-[10rem] rounded-lg py-2 w-32 self-center mt-6'
        type='submit'
      >
        {children}
      </button>
    </>
  )
}

export default Button
