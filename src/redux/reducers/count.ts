// import { Count } from '../types'
import { INCREMENT, DECREMENT} from '../constant'

// 初始化默认值
const initState = 0

export default function countReducer(preState = initState, action: any) {
  console.log('Count',preState, action)
  const { type, data} = action
  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data

    default:
      return preState;
  }
}