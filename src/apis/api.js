import axios from 'axios'

export default axios.create({
    baseURL: 'http://192.168.8.109:8000/api',
    timeout: 10000,
})