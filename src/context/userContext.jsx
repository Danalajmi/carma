import { createContext, useState } from 'react'


const UserContext = createContext(null)

export default UserContext


export const UserProvider = ({children}) => {
  

  const [user, setUser] = useState('')
  const saveUser = (data) => {
    setUser(data)
  }
  return (
    <UserContext.Provider value={{user, saveUser}}>{children}</UserContext.Provider>
  )
}
