import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const TextBottomBar = () => {

  const [msg, setMsg] = useState(true)

  return (
   <div className='text-input-bar bg-grey'>
    <div className='area-box py-1 px-2 flex items-center'>
      <div className=' input-box relative'>
        <textarea className='text-lg py-1 px-2 bg-white' rows={1} placeholder='Escribe un mensaje...'></textarea>
        {
          !msg ? 
          (
            <div className='send-msg absolute'>
              <Link to='#'>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" transform="rotate(90, 13, 13)"></path>
              </svg>
              </Link>
            </div>
          ) :
          (
            <div className='voice-msg absolute'>
              <Link to='#'>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                </svg>
              </Link>
            </div>
          )
        }
      </div>
      <div className='t-actions flex justify-between svg-grey'>
        <div className='emojis mx-3'>
          <Link to='#'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </Link>
        </div>
        <div className='attach'>
          <Link to='#'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
          </Link>
        </div>
      </div>
    </div>
   </div>
  )
}
