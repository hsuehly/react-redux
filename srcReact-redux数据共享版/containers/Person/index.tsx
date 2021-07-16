import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'
interface perObj {
  id: string
  name: string
  age: number
}
interface IProps {
  persons: perObj[]
  addPeo: (perObj: perObj)=> void
  count: number
} 
 class Person extends Component<IProps,any>{
  nameRef = React.createRef<HTMLInputElement>()
  ageRef = React.createRef<HTMLInputElement>()

  addPerson = () => {
    const name = this.nameRef.current!.value
    const age1 = this.ageRef.current!.value
    const age = Number(age1)
    const perObj: perObj = {
      id: nanoid(),
      name,
      age
    }
    this.props.addPeo(perObj)
    this.nameRef.current!.value = ''
    this.ageRef.current!.value = ''
  }
  render() {
    return (
      <div>
        <h2>我是Person组件 上方组件和为{this.props.count}</h2>
          <input type="text" ref={this.nameRef} placeholder="输入名字"/>
          <input type="number" ref={this.ageRef} placeholder="输入年龄"/>
          <button onClick={this.addPerson}>添加</button>

          <ul>
            {
              this.props.persons.map(item=> {
                return (<li key={item.id}>{item.name}--{item.age}</li>)
              })
            }
          </ul>
      </div>
    )
  }
}

export default connect(
  (state: any) => ({persons: state.persons,count: state.count}),//映射状态
  { // 映射操作的方法
    addPeo: createAddPersonAction
  }
)(Person)
