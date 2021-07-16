import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction } from '../../redux/actions/count'
interface IProps {
  he: number
  add: (num: number)=> void
  jian: (num: number)=> void
}
interface IState {}
 class Count extends Component<IProps, IState> {
   add = () => {
     this.props.add(1)
   }
   jian = () => {
     this.props.jian(1)
   }
  render() {
    return (
      <div>
        <h2>当前求和为: {this.props.he}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.jian}>点我-1</button>
      </div>
    )
  }
}


export default connect(
  //映射状态
  (state: number) =>({he: state}),
  //映射操作状态的方法
  {
    add: createIncrementAction,
    jian: createDecrementAction
  }
)(Count)