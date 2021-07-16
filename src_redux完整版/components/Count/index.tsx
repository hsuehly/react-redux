import React, { Component } from 'react'
// 引入store 用于获取redux中保存的状态
import store from '../../redux/store'
// 引入actionCreator ,专门用于创建action对象
import { createDecrementAction, createIncrementAction}  from '../../redux/count_action'

interface IProps {}
interface IState {
  count: number
}
export default class Count extends Component<IProps, IState> {
  private selectNumber = React.createRef<HTMLSelectElement>();
  // 检测redux状态的变化,就调用render
  componentDidMount () {
    store.subscribe(()=> {
      this.setState({})
    })
  }
  increment = () => {
    const { value } = this.selectNumber.current!
    // const { count } = this.state
    const num = Number(value)
    // this.setState({
    //   count: count + num
    // })
    store.dispatch(createIncrementAction(num))
  }
  decrement = () => {
    const { value } = this.selectNumber.current!
    // const { count } = this.state
    const num = Number(value)
    // this.setState({
    //   count: count - num
    // })
    store.dispatch(createDecrementAction(num))
  }
  incrementIfOdd = () => {
    // 奇数再加
    const { value } = this.selectNumber.current!
    // const { count } = this.state
    const count = store.getState()
    const num = Number(value)
    if(count %2 !==0) {
      store.dispatch(createIncrementAction(num))
    }
  
  }
  incrementAsync = () => {
    const { value } = this.selectNumber.current!
    // const { count } = this.state
   
    const num = Number(value)
   setTimeout(() => {
    store.dispatch(createIncrementAction(num))
   }, 500);

  }
  render() {
    return (
      <div>
        <h1>当前求和: {store.getState()}</h1>
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
