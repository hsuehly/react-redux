// 该文件专门用于暴露一个store对象,整个应用只有一个store对象
import { createStore, applyMiddleware, combineReducers } from 'redux'
// 引入为count服务的reducer
import countReducer from './reducers/count'

import personReduce from './reducers/person'
// 引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk'
// 暴露 store

// 汇总所有的reducer
const allReducer = combineReducers({
  count: countReducer,
  persons: personReduce
})
export default  createStore(allReducer,applyMiddleware(thunk))




