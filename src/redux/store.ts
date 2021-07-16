// 该文件专门用于暴露一个store对象,整个应用只有一个store对象
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'// 引入中间件 用于支持异步action
//引入汇总之后的reducer
import reducer from './reducers'
// 暴露 store

export default  createStore(reducer,applyMiddleware(thunk))




