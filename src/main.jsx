import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import Courses from './components/Courses.jsx'
import Module from './components/Module.jsx'
import Profile from './components/Profile.jsx'
import Discussion from './components/Discussion.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Login /> */}
    {/* <Home/> */}
    {/* <Courses/> */}
    {/* <Module/> */}
    {/* <Profile/> */}
    <Discussion/>
  </StrictMode>,
)
