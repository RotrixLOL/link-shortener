import React, { ChangeEvent, useState } from 'react'
import axios from 'axios'
import CopyToClipboard from 'react-copy-to-clipboard'
import { FaCopy } from 'react-icons/fa'

export const Form = () => {
  const [link, setLink] = useState('')
  const [shortenedLink, setShortenedLink] = useState('')
  
  const handleChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value)
  }
  
  const fetchData = async () => {
    try {
      const response = await axios(
        `https://shrinkme.io/api?api=868801afa525dc0e11eab1b6d8f209992932056e&url=${link}`
      );
      setShortenedLink(response.data.shortenedUrl)
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div className='py-3 mx-[20%] rounded'>
      <input
      className="border-2 border-blue-400 bg-transparent p-2 md:w-64 w-[100%] text-white placeholder-slate-300 rounded"
      type="text"
      placeholder="Enter link to short"
      onChange={(event) => handleChanges(event)}
      value={link}
      required />

      <button
        className="bg-blue-500 hover:bg-blue-600 hover:transition hover:animate-fade active:translate-y-1 hover:transition hover:animate-fade text-white md:px-8 px-[30%] md:py-3 py-2 lg:ml-4 md:ml-2 mt-3 rounded-md"
        onClick={async () => {
          await fetchData()
        }}
        type="submit"
      >
        Submit URL
      </button>

      <div className="mt-3 rounded">
        <a href={shortenedLink} className="cursor-default hover:underline decoration-blue-500 decoration-2 md:text-sm text-xs" target="_blank">{link}</a>
        <CopyToClipboard text={shortenedLink}>
          <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:transition hover:animate-fade font-medium px-5 py-2 ml-4 rounded-md">
            <FaCopy />
          </button>
        </CopyToClipboard>
      </div>
    </div>
  )
}