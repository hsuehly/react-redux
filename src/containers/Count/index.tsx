import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  increment,
  decrement,
  incrementtAsync
} from '../../redux/actions/count'

// 引入connect 用于连接Ui组件与redux

interface IProps {
  count: number
  increment: (num: number)=> void
  decrement: (num: number)=> void
  incrementtAsync: (num: number, time: number)=>void
  persons: number
}
interface IState {}
class Count extends Component<IProps, IState> {
  private selectNumber = React.createRef<HTMLSelectElement>();
  // 检测redux状态的变化,就调用render

  increment = () => {
    const { value } = this.selectNumber.current!
  
    const num = Number(value)
    this.props.increment(num)

  }
  decrement = () => {
    const { value } = this.selectNumber.current!
   
    const num = Number(value)
    this.props.decrement(num)
 
  }
  incrementIfOdd = () => {
    // 奇数再加
    const { value } = this.selectNumber.current!
  
    const num = Number(value)
    if (this.props.count % 2 !== 0 ) {
      this.props.increment(num)
    }

  }
  incrementAsync = () => {
    const { value } = this.selectNumber.current!
 
   
    const num = Number(value)
   
    this.props.incrementtAsync(num, 1000)
  

  }
  render() {

    console.log(this.props)
    const { count } = this.props
    return (
      <div>
        <h2>我是Count组件 下方总人数为{this.props.persons}</h2>
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


//创建并暴露一个count的容器组件
export default connect(
  (state: any) => ({
    count: state.count,
    persons: state.persons.length
  }),
  {
    increment,
    decrement,
    incrementtAsync

  }
   
)(Count)
