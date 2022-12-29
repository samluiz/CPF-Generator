import { useState } from 'react'
import Logo from '../Logo/Input'
import { MdOutlineCopyAll } from 'react-icons/md'

const Card = () => {
  const [isCopied, setIsCopied] = useState(false)

  async function copyText(text: any) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand('copy', true, text)
    }
  }

  const handleClick = (e: any) => {
    copyText(e.target.text.replace(' ', ''))
      .then(() => {
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 1500)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <div className=' bg-gray-400 dark:bg-sky-900 rounded-md w-[20rem] h-[10rem] grid place-items-start overflow-hidden shadow-2xl border-[1px] border-gray-500 relative'>
        <Logo
          width='250'
          height='250'
          opacity='10%'
          className=' ml-[8rem] mt-[-1rem] absolute'
        />
        <div className=' dark:text-gray-300 self-start mt-4 ml-4'>
          <span>SAMUEL L R LEAL</span>
        </div>
        <div className=' grid grid-flow-row dark:text-gray-300 self-end mb-4 ml-4 gap-2'>
          <a
            onClick={handleClick}
            className=' cursor-pointer font-semibold text-lg grid grid-flow-col place-items-center gap-2'
          >
            04050554127
            <MdOutlineCopyAll />{' '}
          </a>
          <span>04/08/2003</span>
        </div>
      </div>
    </>
  )
}

export default Card
