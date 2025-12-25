import { createContext, useState } from 'react'


const userContext = createContext(null)

export default userContext


export const UserProvider = ({children}) => {
  const initUser = {
    email: ""
  }
  const [user, setUser] = useState(initUser)
  const saveUser = (data) => {
    setUser(data)
  }
  return (
    <userContext.Provider value={{user, saveUser}}>{children}</userContext.Provider>
  )
}
