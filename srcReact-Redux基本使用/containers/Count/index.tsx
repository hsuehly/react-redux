// 引入count的ui组件
import CountUI from '../../components/Count'

import { createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/count_action'

// 引入connect 用于连接Ui组件与redux
import { connect } from 'react-redux'

// mapStateToProps 函数返回的是一个对象
// 返回的对象中的key就作为传递给props的key value 就作为传递给ui组件props的value   --传递状态   
// mapStateToProps 用于传递状态
const mapStateToProps = (state: number) => {
  return {count: state}
}

// mapDispatchToPrps 函数返回的是一个对象
// 返回的对象中的key就作为传递给props的key value 就作为传递给ui组件props的value   --传递状态   
// mapDispatchToPrps 用于传递操作状态的方法
const mapDispatchToPrps = (dispatch: any) => {
  return {
    jia: (num: number) => {
      dispatch(createIncrementAction(num))
    },
    jian: (num: number) => {
      dispatch(createDecrementAction(num))
    },
    jiaAsync: (num: number,time: number)=> {
     dispatch(createIncrementAsyncAction(num,time))
    }
  }
}

//创建并暴露一个count的容器组件
export default connect(mapStateToProps, mapDispatchToPrps)(CountUI)
