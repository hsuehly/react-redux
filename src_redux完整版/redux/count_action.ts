/***
 * 
 * 该文件专门为count组件生成action文件
 */

import { INCREMENT, DECREMENT}  from './constant' 

export const createIncrementAction = (data: number) => ({type: INCREMENT,data})

export const createDecrementAction = (data: number) => ({type: DECREMENT,data})