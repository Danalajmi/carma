import Client from "./api"

export const createCar = async (data) => {
  try {
    const res = await Client.post("/cars/", data)
    return res.data
  } catch (error) {
    throw error
  }
}
