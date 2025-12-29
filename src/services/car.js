import Client from "./api"

export const createCar = async (data) => {
  try {
    const res = await Client.post("/cars/", data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getCars = async () => {
  try {
    const res = await Client.get("/cars/myCars")
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateCar = async () => {
  try {
    const res = await Client.put(`/garages/${data._id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
