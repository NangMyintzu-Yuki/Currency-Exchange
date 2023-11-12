import axios from 'axios';

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: new Headers({
    "Accept": "application/json",
    "Content-Type": "application/json"
  }),
})

export const get = async (url, headers = {}) => {
  headers = { ...headers };
  try {
    const response = await apiClient.get(url, { headers })
    return response;
  } catch (err) {
    console.log(err)
  }
}



