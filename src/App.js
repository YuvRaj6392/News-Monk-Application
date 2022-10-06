import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    <Router>
 <Navbar />
 <Routes>
  <Route exact path='/' element={<News apiKey='cc1c8918058e4e4e8fec69abefb33e40' country='in' category='general' />}  />
  <Route exact path='/entertainment' element={<News apiKey='cc1c8918058e4e4e8fec69abefb33e40' country='in' category='entertainment' />}  />
  <Route exact path='/business' element={<News apiKey='cc1c8918058e4e4e8fec69abefb33e40' country='in' category='business' />}  />
  <Route exact path='/health' element={<News apiKey='cc1c8918058e4e4e8fec69abefb33e40' country='in' category='health' />}  />
  <Route exact path='/science' element={<News apiKey='cc1c8918058e4e4e8fec69abefb33e40' country='in' category='science' />}  />
  <Route exact path='/technology' element={<News apiKey='cc1c8918058e4e4e8fec69abefb33e40' country='in' category='technology' />}  />
  <Route exact path='/general' element={<News apiKey='cc1c8918058e4e4e8fec69abefb33e40' country='in' category='general' />}  />
 </Routes>
   
    </Router>
  
    
  )
}
