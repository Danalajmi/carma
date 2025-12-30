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

export const updateCar = async (id, data) => {
  try {
    const res = await Client.put(`/cars/myCars/${id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteCar = async (id) => {
  try {
    const res = await Client.delete(`/cars/myCars/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
