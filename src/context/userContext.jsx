import { createContext, useState, useEffect } from 'react'
import { CheckSession } from '../services/auth'


const UserContext = createContext(null)

export default UserContext


export const UserProvider = ({children}) => {

  useEffect(() => {
  const token = localStorage.getItem('token')
  const checkToken = async () => {
    const userData = await CheckSession()
    setUser(userData)
}
  if(token){
    checkToken()
  }
  })
  const initUser = null
  const [user, setUser] = useState(initUser)

  const saveUser = (data) => {
    setUser(data)
  }
  return (
    <UserContext.Provider value={{user, saveUser}}>{children}</UserContext.Provider>
  )
}
