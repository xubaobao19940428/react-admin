import request from '../utils/request'


export default function userLogin(username,password){
    return request({
        url: '/login',
        method: 'get',
        params:{
            username:username,
            password:password
        }
    })
}