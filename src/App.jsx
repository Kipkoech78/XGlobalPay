import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './index.css'
import { Route, Routes } from 'react-router-dom'
import CheckAuth from './common/CheckAuth'
import AuthLayout from './components/auth/AuthLayout'
import AuthLogin from './pages/auth/AuthLogin'
import AuthRegister from './pages/auth/AuthRegister'
import AdminLayout from './components/admin-view/AdminLayout'
import AdminHome from './pages/admin-view/AdminHome'
import GlobalHome from './components/home-view/GlobalHome'
import HomeLayout from './components/home-view/HomeLayout'
import DashBoardLayout from './components/home-view/DashBoardLayout'
function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(true);
  const [isLoading, setIsLoading] = useState(false)
  const user ={
    role:'user',
    userName:"Linus "
  }
  return (
    <div className=' flex flex-col overflow-hidden bg-white'>
    <Routes>
      <Route 
      path='/'
      element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user} />
      }
       />
       <Route
       path='auth'
       element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user} >
          <AuthLayout />
        </CheckAuth>
       }
       >
       <Route path='login' element={<AuthLogin />} />
       <Route path='register' element={<AuthRegister />} />
       </Route>
       <Route
          path="/globalpay"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
               <HomeLayout /> 
            </CheckAuth>
          }
        >
        <Route path="home" element={<GlobalHome />} />
        <Route path="dashboard" element={<DashBoardLayout />} />

        </Route>
        <Route
          path="/xpay"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
               <DashBoardLayout /> 
            </CheckAuth>
          }
        >
      
        <Route path="dashboard" element={<p>Hello World</p>} />

        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminHome />} />
        </Route>
    </Routes>
    </div>
  )
}

export default App
