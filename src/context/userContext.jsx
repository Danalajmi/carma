import { createContext, useState } from 'react'


const UserContext = createContext(null)

export default UserContext


export const UserProvider = ({children}) => {
  const initUser = null
  const [user, setUser] = useState(initUser)
  const saveUser = (data) => {
    setUser(data)
  }
  return (
    <UserContext.Provider value={{user, saveUser}}>{children}</UserContext.Provider>
  )
}
