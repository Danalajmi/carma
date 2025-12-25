import Client from "./api"

export const createGarage = async (data) => {
  try {
    const res = await Client.post("/garages/", data)
    return res.data
  } catch (error) {
    throw error
  }
}
