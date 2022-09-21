import React, { ChangeEvent, useState } from 'react'
import axios from 'axios'
import CopyToClipboard from 'react-copy-to-clipboard'

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
      console.log(shortenedLink)
      console.log(link)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className='py-3 mx-[20%] rounded'>
          <input
          className="border-2 border-blue-400 bg-transparent p-2 md:w-64 w-48 text-white placeholder-slate-300 rounded"
          type="text"
          placeholder="Enter or copy a link to short."
          onChange={(event) => {
            handleChanges(event)
          }}
          value={link} />

          <button
            className="bg-gradient-to-tr from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 active:translate-y-1 text-white px-8 py-3 md:ml-4 mt-3 rounded-md"
            onClick={fetchData}
          >
            Submit URL
          </button>

          <div className=" mt-5">
            {shortenedLink}
            <CopyToClipboard text={shortenedLink}>
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:transition hover:animate-fade font-medium px-5 py-2 ml-4 rounded-md">
                Copy to Clipboard
              </button>
            </CopyToClipboard>
          </div>

      </div>
    </>
  )
}