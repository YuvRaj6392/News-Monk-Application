import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export default function App() {
  return (
    <div>
   <Navbar />
   <News apiKey='ApiKey' country='in' category='sports' />
    </div>
  )
}
