import request from '../utils/request'
export function Register(url,payload){
    // console.log(payload)
    return request({
        url,
        method:'POST',
        data:payload
    })
}

export function login(url,payload){
    // console.log(payload)
    return request({
        url,
        method:'POST',
        data:payload
    })
}

export function AddProduct(url,payload){
    // console.log(payload)
    return request({
        url,
        method:'POST',
        data:payload
    })
}


