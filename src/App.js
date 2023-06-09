import React from 'react'
import Home from './Components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import{BrowserRouter, Routes,Route} from 'react-router-dom'
import Create from './Components/Create/Create'
import Update from './Components/Update/Update'
const App = () => {
  return (
    <>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/create' element={<Create />} />
    <Route path='/edit/:id' element={<Update />} />
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App
