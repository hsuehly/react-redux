

import { ADD_PERSON } from '../constant'
//创建增加一个人的action
export const createAddPersonAction = (perObj: any) => ({type: ADD_PERSON, data: perObj})