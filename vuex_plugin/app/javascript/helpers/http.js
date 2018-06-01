import axios from 'axios'

const http = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
})

http.interceptors.request.use(function (config) {
  config.headers['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  return config
}, function (error) {
  return Promise.reject(error.response)
})

export default http