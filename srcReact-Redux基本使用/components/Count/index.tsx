import React, { Component } from 'react'
// 引入store 用于获取redux中保存的状态
import store from '../../redux/store'
// 引入actionCreator ,专门用于创建action对象
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction}  from '../../redux/count_action'

interface IProps {
  store: any
  count: number
  jia: (num: number)=> void
  jian: (num: number)=> void
  jiaAsync: (num: number, time: number)=>void
}
interface IState {
  count: number
}
export default class Count extends Component<IProps, IState> {
  private selectNumber = React.createRef<HTMLSelectElement>();
  // 检测redux状态的变化,就调用render

  increment = () => {
    const { value } = this.selectNumber.current!
  
    const num = Number(value)
    this.props.jia(num)

  }
  decrement = () => {
    const { value } = this.selectNumber.current!
   
    const num = Number(value)
    this.props.jian(num)
 
  }
  incrementIfOdd = () => {
    // 奇数再加
    const { value } = this.selectNumber.current!
  
    const num = Number(value)
    if (this.props.count % 2 !== 0 ) {
      this.props.jia(num)
    }

  }
  incrementAsync = () => {
    const { value } = this.selectNumber.current!
 
   
    const num = Number(value)
   
    this.props.jiaAsync(num, 1000)
  

  }
  render() {

    console.log(this.props)
    const { count } = this.props
    return (
      <div>
        <h1>当前求和: {count}</h1>
        <select ref={this.selectNumber}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;&nbsp;
      </div>
    )
  }
}
