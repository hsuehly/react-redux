import {ADD_PERSON} from '../constant'

//初始化状态
const initState = [{id: '001', name: 'tom', age: 18}]
export default function personReduce (preState = initState, action: any) {
  const { type, data} = action
  switch (type) {
    case ADD_PERSON:
        return [data,...preState]
    default:
        return preState
  }
}