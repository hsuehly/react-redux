// import { Count } from '../types'
/*


*/ 

// 初始化默认值
const initState = 0

export default function countReducer(preState: any = initState, action: any) {
  console.log('Count',preState, action)
  const { type, data} = action
  switch (type) {
    case "increment":
      return preState + data
    case "decrement":
      return preState - data

    default:
      return preState;
  }
}