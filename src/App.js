import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
export default function App() {
  const [progress,setProgress]=useState(0);
  const setProgressFunction=(value)=>{
    
    setProgress(value)
  }
  return (
    <Router>
     <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
        // onLoaderFinished={() => setProgressFunction(0)}
      />
 <Navbar />
 <Routes>
  <Route exact path='/' element={<News setProgressFunction={setProgressFunction} apiKey='cc1c8918058e4e4e8fec69abefb33e40' country='in' category='general' />}  />
  <Route exact path='/entertainment' element={<News setProgressFunction={setProgressFunction}apiKey='cc1c8918058e4e4e8fec69abefb33e40' country='in' category='entertainment' />}  />
  <Route exact path='/business' element={<News setProgressFunction={setProgressFunction}apiKey='cc1c8918058e4e4e8fec69abefb33e40' country='in' category='business' />}  />
  <Route exact path='/health' element={<News setProgressFunction={setProgressFunction}apiKey='cc1c8918058e4e4e8fec69abefb33e40' country='in' category='health' />}  />
  <Route exact path='/science' element={<News setProgressFunction={setProgressFunction}apiKey='cc1c8918058e4e4e8fec69abefb33e40' country='in' category='science' />}  />
  <Route exact path='/technology' element={<News setProgressFunction={setProgressFunction}apiKey='cc1c8918058e4e4e8fec69abefb33e40' country='in' category='technology' />}  />
  <Route exact path='/general' element={<News setProgressFunction={setProgressFunction}apiKey='cc1c8918058e4e4e8fec69abefb33e40' country='in' category='general' />}  />
 </Routes>
   
    </Router>
  
    
  )
}
