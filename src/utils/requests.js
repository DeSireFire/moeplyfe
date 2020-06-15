import axios from "axios";
import store from '../store/index'
// element UI 弹窗
import { Message } from 'element-ui'

// 创建对应的axios的实例
const service = axios.create({
  // baseURL:'http://192.168.1.68:5360/api/', // url = base url + request url
  baseURL:process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 10*1000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
    config => {
    // 每次发送请求之前判断vuex中是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        if (store.state.token) {
        config.headers['X-Token'] = 'test'
        }
        // 检测是否为请求github的静态资源
        if (config.url.search("githubusercontent") !== -1) {
            config.withCredentials = false
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    // 响应体
    response => {
    // 响应数据
    const res = response.data
    // 自定义状态码检测
    if (res.status !== 200 && res.message !== undefined) {
        Message({
          message: res.message || 'Error',
          type: 'error',
          duration: 5 * 1000
    })
        return Promise.reject(new Error(res.message || 'Error'))
    } else if (response.request.responseURL.search("githubusercontent") !== -1) {
        // console.log("验证获取成功！");
        // console.log(res);
        return res
    } else {
        return res
    }
    },
    error => {
        console.log('err' + error) // for debug
        Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    })
        return Promise.reject(error)
    }
)

export default service
