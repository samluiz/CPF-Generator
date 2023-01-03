import { useState } from 'react'
import { MdOutlineCopyAll } from 'react-icons/md'
import { AiOutlineCheck } from 'react-icons/ai'

const CopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false)

  async function copyText(text: any) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand('copy', true, text)
    }
  }

  const handleClick = (e: any) => {
    const eventTarget = e.target as HTMLElement
    const parentElement = eventTarget.parentElement as HTMLSpanElement

    copyText(parentElement.innerText)
      .then(() => {
        if (parentElement.innerText) {
          setIsCopied(true)
        }
        setTimeout(() => {
          setIsCopied(false)
        }, 3000)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      {isCopied ? (
        <AiOutlineCheck />
      ) : (
        <MdOutlineCopyAll className='cursor-pointer' onClick={handleClick} />
      )}
    </>
  )
}

export default CopyToClipboard
