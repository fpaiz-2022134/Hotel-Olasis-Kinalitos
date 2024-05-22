import { Register } from "../../components/User/Register.jsx"
import { Login } from "../../components/User/Login.jsx"
import { useState } from "react"
import { Toaster } from "react-hot-toast"
import './User.css'

export const User = () => {
  const [isLogin, setIsLogin] = useState(false)
  const handleUserPage = () => {
    setIsLogin(prev => !prev)
  }

  return (
    <>
      <div className="user-container">
        {
          isLogin ? (
            <Login switchUserhHandler={handleUserPage}></Login>
          ) : (
            <Register switchUserhHandler={handleUserPage}></Register>
          )
        }
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </>
  )
}