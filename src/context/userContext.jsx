import { createContext, useState } from 'react'
import { CheckSession } from '../services/auth'


const UserContext = createContext(null)

export default UserContext


export const UserProvider = ({children}) => {

  const initUser = null
  const [user, setUser] = useState(initUser)
  
  const checkToken = async () => {
    const userData = await CheckSession()
    setUser(userData)
}

  const saveUser = (data) => {
    setUser(data)
  }
  return (
    <UserContext.Provider value={{user, saveUser, checkToken}}>{children}</UserContext.Provider>
  )
}
