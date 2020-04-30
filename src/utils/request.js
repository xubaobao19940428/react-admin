import axios from 'axios'
import Cookies from 'js-cookie'
import { message } from 'antd';
// 创建axios实例
axios.defaults.withCredentials =true
const baseURL = 'http://cad.iotn2n.com:5080/iotapi'
const service = axios.create({
  baseURL: baseURL,
  timeout: 20000
})

// request拦截器
service.interceptors.request.use(config => {
  config.headers["Content-Type"]='application/json'
  config.headers["Accept"]='application/json'
  if (Cookies.get('sessionToken')) {
    config.headers['token'] = Cookies.get('sessionToken') // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status !== 200 && response.status !== 201) {
    //if ((response.status !== 200) || (response.status !== 201)) {
        message.error({
          content: res.data,
          duration: 1 * 1000
        })
    } else {
      return response.data
    }
  },
  error => {
    console.log(error)// for debug
    if (error.response.status === 504) {
      message({
        content: '请求超时',
        duration: 2 * 1000
      })
    } else if(error.response.status===401){
      message.error({
        content:'您权限过期,请重新登录',
        duration: 2 * 1000
      })
     sessionStorage.removeItem('roles')
     sessionStorage.removeItem('username')
     sessionStorage.removeItem('token')
     Cookies.set('username',''-1)
    Cookies.set('sessionToken',''-1)
     localStorage.removeItem('list')
    //  location.href = '/#/login'
    }
    else if(error.response.status===403){
      message.error({
        content: '没有操作权限',
        duration: 2 * 1000
      })
    }
    else{
      return Promise.reject(error.response.data)
    }
  }
)

export default service
