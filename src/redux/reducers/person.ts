import {ADD_PERSON} from '../constant'

//初始化状态
const initState = [{id: '001', name: 'tom', age: 18}]
export default function personReduce (preState = initState, action: any) {
  const { type, data} = action
  switch (type) {
    case ADD_PERSON:
        return [data,...preState] // 不能使用数组的方法(unshift,push等) 这样会导致prestate被改写了 prestae就不是纯函数 不能让redux识别做出改变
    default:
        return preState
  }
}