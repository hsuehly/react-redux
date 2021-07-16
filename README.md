1. 去除Count组件的自身状态

2. .src下建立:

   1. -redux

      ​	-store.js

      ​	-count_reducer.js

3. .store.js:

   1. 引入redux中的createStore和那护士,创建一个store
   2. createStore调用时传入一个为其服务的render
   3. 记得暴露store对象

4. .count_reducer.js

   1. .reducer的本质是一个函数,接受:preState,action, 返回加工状态
   2. .reducer有两个作用: 初始化状态,加工状态
   3. .reducer被第一次调用时,是store自动触发的,传递preState是unefined

5. 在index.js中检测store中的状态改变,一旦发生改变重新渲染<App/>

   备注: redux  只负责管理状态,至于状态的改变驱动页面的展示,要靠我们自己

6. 完整版

   1. 新增文件
      1. count_action.js 专门用于创建action对象
      2. constan.js 放置由于编码疏忽写错action的type

7. redux 异步action 

   1. 明确: 延迟的动作不想交给组件自身,想交给action
   2. 何时:需要异步antion: 想要对状态进行操作,但是具体的数据靠异步任务返回
   3. 具体编码: 
      1. 安装中间件yarn add redux-thunk, 并配置在store中
      2. 创建action的函数不再返回一般对象,而是一个函数,该函数中写异步任务
      3. 异步任务有结果后,分发一个同步的action去执行操作数据
   4. 备注: 异步action不是必须要写的,完全可以自己等待异步任务的结果了再去分发同步action





react-reudx 的基本使用

 1. 明确面个概念:

     	1. UI组件库: 不能使用任何redux的api,只负责也民的呈现,交互等
     	2. 容器组件: 负责和redux通信,将结果交给ui组件

	2. 如何创建俺一个容器组件 -- 靠react-redux 的connect函数

    	1. connet(mapStateToProps,mapDispatchToProps)(UI组件)

        - -mapStateToProps: 映射状态,返回值是一个对象
        - -mapDispatchToProps: 映射操作状态的方法,返回值是一个对象

        备注: 容器组件中的store是靠props传进去的,而不是容器组件直接引入

        备注2: mapDispatchToProps 也可以是一个对象

react-redux 优化

1. 容器组件和ui组件整合一个文件

2. 无需自己传递store,给<App/>包裹了一个<Provider store={store} 即可

3. 使用了react-redux后也不用在自己检测redux的状态改变了,容器组件可以自动完成这个工作

4. mapDispatchToProps也可以简写成一个对象

5. 一个组件要和redux打交道要经过那几步?

   1. 定义一个ui组件---暴露

   2. 引入connect生成一个容器组件,并暴露,写法如下:

      ````jsx
      connect(
      	state => ({key: value}),// 映射状态
          {
          key: XXXXXAction // 映射操作状态的方法
          }
      )(UI组件)
      ````

   3. 在ui组件中通过this.props.xxxx读取和操作状态

react-redux 数据共享版

 	1. 定义一个person组件, 和count组件通过redix共享数据
 	2. 为person组件编写: reducer, action 配置constant常量
 	3. 重点: person的reducr和count的reducer要使用combineReducers进行合并,合并后的状态是一个对象
 	4. 交给store的是总reducer,最后注意在组件中取出状态的时候记得取到位

react-redux 最终版

 	1. 所有的变量名要规范,尽早触发对象的简写形式
 	2. reducers文件夹中,编写一个index.js 专门用于汇总并暴露reducer