import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from '../Container/Home'
import { useSelector } from "react-redux";

const Router = () => {
  const state = useSelector((state) => state.card);
   console.log(state);
   

  return (
    <BrowserRouter>
       <Routes>
          <Route path="*" element={<Home />}/>
       </Routes> 
    </BrowserRouter>
  )
}
export default Router
