/**
 *该文件用于汇总所有reducers
 */
//引入combineReducers 用与汇总多个reducer
import { combineReducers } from 'redux'
// 引入为count服务的reducer
import count from './count'
// 引入为Person组件服务的的reducer
import persons from './person'
// 汇总所有的reducer变为一个总的reducer
export default combineReducers({
  count,
  persons
})


