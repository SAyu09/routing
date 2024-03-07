import React from 'react'
import {Routes,Route, Form} from "react-router-dom"
import Home from "./component/Home"
import About from "./component/About"
import Signin from "./component/Signin"
import  Contact from "./component/Contact"

export default function App() {
  return (
    <div>
      <Routes>
          <Route path = "/" element={<Home/>}/>  
        <Route path = "/" element={<About/>}/>
        <Route path = "/" element={<Signin/>}/>
        <Route path = "/" element={<Contact/>}/>
        </Routes>
    </div>
  )
}
