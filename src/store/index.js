import React from "react"
import LoginStore from './login.Store'
import MemoStore from "./memo.store"

class RootStore {
  constructor() {
    this.loginStore = new LoginStore() // 登录模块
    this.memoStore = new MemoStore() // memo 模块
  }
}

// 导入useStore方法供组件使用数据
const StoresContext = React.createContext(new RootStore())
export const useStore = () => React.useContext(StoresContext)