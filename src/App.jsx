import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router'
import Body from './components/Body'
import Login from './components/Login'
import Signup from './components/Signup'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Feed from './components/Feed'
import Profile from './components/Profile.jsx'
import Connections from './components/Connections.jsx'
import Request from './components/Request.jsx'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename='/'>

    <Routes>

      <Route path='/' element={<Body/>}>
      <Route path='/login' element={<Login/>}/>
      {/* <Route path='/signup' element={<Signup/>}/> */}
      <Route path='/' element={<Feed/>}/>
      <Route path='/profile' element={<Profile/>} />
      <Route path='/connections' element={<Connections />} />
      <Route path='/requests' element={<Request />} />





      </Route>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>

    </BrowserRouter>

    </Provider>
     


    </>
  )
}

export default App
