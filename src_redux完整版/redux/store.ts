// 该文件专门用于暴露一个store对象,整个应用只有一个store对象
import { createStore } from 'redux'
// 引入为count服务的reducer
import countReducer from './count_reducer'
// 暴露 store
export default  createStore(countReducer)




