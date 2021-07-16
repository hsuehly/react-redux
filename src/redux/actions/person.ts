

import { ADD_PERSON } from '../constant'
import { perObj } from '../../types'
//创建增加一个人的action
export const addPerson = (perObj: perObj) => ({type: ADD_PERSON, data: perObj})