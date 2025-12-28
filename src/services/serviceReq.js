import Client from "./api"

export const sendRequest = async (title , data) => {
  let res = await Client.post(`/cars/${title}/request`, data)
  return res.data
}
