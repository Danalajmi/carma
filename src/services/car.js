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

export const updateCar = async (data) => {
  try {
    const res = await Client.put(`/cars/myCars/${data.title}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteCar = async (title) => {
  try {
    const res = await Client.delete(`/cars/myCars/${data._id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
