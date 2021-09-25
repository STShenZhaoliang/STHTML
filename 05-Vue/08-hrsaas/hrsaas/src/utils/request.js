import axios from 'axios'

const service = axios.create({
  baseURL: '',
  timeout: 1000
})

service.interceptors.request.use()
service.interceptors.response.use()

export default service
