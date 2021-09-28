import axios from 'axios'
import md5 from 'md5'

const time = Number(new Date())
const url = process.env.VUE_APP_API_MARVEL
const publicKey = process.env.VUE_APP_PUBLIC_KEY
const privateKey = process.env.VUE_APP_PRIVATE_KEY
const fakeLogin = process.env.VUE_APP_API_REQRES

const hash = md5(time + privateKey + publicKey)
const defaultParams = { ts: time, apikey: publicKey, hash: hash }

const axiosInstance = axios.create({ baseURL: url })

axiosInstance.interceptors.request.use(
  (config) => {
    config.params = defaultParams

    window.scrollTo({ top: 0, behavior: 'smooth' })

    return config
  },
  async ({ response }) => {
    return Promise.reject(response)
  }
)

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error.response)
  }
)

export const api = {
  get(endpoint, params) {
    return axiosInstance.get(endpoint, params)
  },

  post(endpoint, payload) {
    return axiosInstance.post(endpoint, payload)
  },

  put(endpoint, payload) {
    return axiosInstance.put(endpoint, payload)
  },

  delete(endpoint) {
    return axiosInstance.delete(endpoint)
  },

  login({ email, password }) {
    return axios.post(`${fakeLogin}/login`, { email, password })
  },
}
