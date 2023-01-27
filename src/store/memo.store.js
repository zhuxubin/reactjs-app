import { makeAutoObservable } from 'mobx'

class MemoStore {
  list = [
    {
      id: 1,
      title: '学习react',
      isDone: true
    },
    {
      id: 2,
      title: '搞定mobx',
      isDone: false
    }
  ]
  constructor() {
    makeAutoObservable(this)
  }

  // 进行单选修改数据的方法
  checkItem = (id) => {
    const item = this.list.find(item => item.id === id)
    item.isDone = !item.isDone
  }

  // 删除的方法
  delItem = (id) => {
    console.log(id)
    this.list = this.list.filter(item => item.id !== id)
    console.log(this.list.length)
  }

  addItem = (item) => {
    this.list.push(item)
  }

}
export default MemoStore
