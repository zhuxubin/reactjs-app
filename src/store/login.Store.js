import { makeAutoObservable } from "mobx"
import { http, setToken } from '@/utils'

class LoginStore {

  token = ''

  constructor() {
    makeAutoObservable(this)
  }

  login = async ({ mobile, code }) => {
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile,
      code
    })
    this.token = res.data.token
    setToken(this.token) // token 持久化
  }

}
export default LoginStore