// 引入axios以及element ui中的loading和message组件
import axios from 'axios'
import router from '../router/index'
import {
  Loading,
  Message
} from 'element-ui'

// http请求拦截器
let loadinginstace
axios.interceptors.request.use(
  config => {
    config.headers = {
      UserId: localStorage.getItem('username'),
      Authorization: localStorage.getItem('token')
    }
    // element ui Loading方法
    loadinginstace = Loading.service({
      fullscreen: true,
      background: 'rgba(0, 0, 0, 0)'
    })
    return config
  },
  error => {
    loadinginstace.close()
    Message.error({
      message: '加载超时'
    })
    return Promise.reject(error)
  }
)
// http响应拦截器
axios.interceptors.response.use(
  data => {
    // 响应成功关闭loading
    if (data.data.StatusCode == 401) {
      // token 失效跳转到登陆页面
      router.push({
        path: '/login'
      })
      loadinginstace.close()
      return data
    } else {
      loadinginstace.close()
      return data
    }
  },
  error => {
    loadinginstace.close()
    return Promise.reject(error)
  }
)

export {
  axios
}