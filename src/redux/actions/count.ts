/***
 * 
 * 该文件专门为count组件生成action文件
 */

import { INCREMENT, DECREMENT}  from '../constant'
// 同步action 就是指action 为对象
export const increment = (data: number) => ({type: INCREMENT,data})

export const decrement = (data: number) => ({type: DECREMENT,data})

// 异步action 就是指action 为函数 异步action 中都会调用同步的action  异步action 不是必须要用的
export const incrementtAsync = (data: number, time: number) => {
   return (dispatch: (arg0: { type: string; data: number }) => void)=> {
    setTimeout(() => {
      dispatch(increment(data))
    }, time);
   }
}