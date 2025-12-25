import Client from "./api"

export const RegisterUser = async (data) => {
  try {
    let res = await Client.post("/auth/register", data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const LogInUser = async (data) => {
  try {
    const res = await Client.post("/auth/login", data)
    // Set the current signed in users token to localStorage
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}
