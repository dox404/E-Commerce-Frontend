import axios from "axios"


const service =axios.create({
    baseURL:process.env.REACT_APP_BASE_URL,
    timeout: 5000,
})

service.interceptors.request.use(
    config=>{
        
        const token = localStorage.getItem('token')
        if(token) {
            config.headers['Authorization'] = 'Bearer ' + token
        }
        config.headers['content-type']='application/json'
        return config
    },
    error=>{
        Promise.reject(error)
    }
)
service.interceptors.response.use(
    response=>{
        return response
    }
)
export default service