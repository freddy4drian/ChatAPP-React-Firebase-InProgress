import React from 'react'
import { MessagesContainer } from '../ui/messages/MessagesContainer'
import { Navbar } from '../ui/Navbar'
import { Sidebar } from '../ui/Sidebar'
import { TextBottomBar } from '../ui/TextBottomBar'

export const ChatApp = () => {
  return (
    <div className='container-bg css-selector col-center'>
      <div className='container bg-white-a relative flex'>
         <Sidebar/>
         <div className='message-container flex flex-col justify-between'>
            <Navbar/>
            <MessagesContainer/>
            <TextBottomBar/>
         </div>
      </div>
    </div>
  )
}
