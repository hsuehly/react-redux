import React, { Component } from 'react'

interface IProps {}
interface IState {
  count: number
}
export default class Count extends Component<IProps, IState> {
  private selectNumber = React.createRef<HTMLSelectElement>();
  state = {
    count: 0
  }
  increment = () => {
    const { value } = this.selectNumber.current!
    const { count } = this.state
    const num = Number(value)
    this.setState({
      count: count + num
    })
  }
  decrement = () => {
    const { value } = this.selectNumber.current!
    const { count } = this.state
    const num = Number(value)
    this.setState({
      count: count - num
    })
  }
  incrementIfOdd = () => {
    // 奇数再加
    const { value } = this.selectNumber.current!
    const { count } = this.state
    const num = Number(value)
    if(count %2 !==0) {
      this.setState({
        count: count + num
      })
    }
  
  }
  incrementAsync = () => {
    const { value } = this.selectNumber.current!
    const { count } = this.state
    const num = Number(value)
   setTimeout(() => {
    this.setState({
      count: count + num
    })
   }, 500);

  }
  render() {
    return (
      <div>
        <h1>当前求和: {this.state.count}</h1>
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
