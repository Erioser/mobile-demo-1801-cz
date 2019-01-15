import _ from 'lodash'

var compose = _.flowRight

class Xpromise {
  constructor(f) {
    this._value = f.bind(undefined, this.resolve, this.reject) // 为传入的 函数 绑定resolve & reject 方法
    this.chain = undefined // 把then传入的方法 通过compose 处理成链式调用
    this.errFunc = [] // 把catch 传入的方法
    setTimeout( () => { // 如果new 一个新的对象，传入的函数不是异步的，则chain & errFunc 拿不到就执行了。所以使用定时器延时执行。
      this.errHandle(this._value)()
    }, 0)
    this.status = 'pending' // 设置Xpromise 状态 主要作用是 确保resolve & reject只能执行其中一个
    return this
  }
  resolve = (data) => {
    if(this.status == 'pending')
      this.status = 'resolved'
    this.status == 'resolved' && this.chain && this.chain(data)
  }
  reject = (data) => {
    if(this.status == 'pending')
      this.status = 'rejected'

    this.status = 'rejected' && this.errFunc[0](data)
    // this.errFunc.forEach(fn => fn(data))
  }
  then = (f) => {
    this.chain = this.chain? compose(this.errHandle(f), this.chain): this.errHandle(f)
    return this
  }
  errHandle = (f) => {// 为每个传入的函数包裹 错误检查 代码
    return function() {
      var args = Array.prototype.slice.call(arguments, 0)
      try{
        return f.apply(f,args)
      }catch(e){
        if(this.errFunc.length !== 0)
          this.errFunc[0](e)
        else
          throw new Error(e)

        return
      }
    }
  }
  catch = (f) => {
    this.errFunc.push(f)
    return this
  }
}


// new Xpromise((resolve, reject) => {
//     setTimeout(() => {
//         if ( Math.random() > 0.5 ) return resolve();

//         reject(123)
//     }, 100)
// }).then((data) => {
//     return data*2
// }).then((data) => {
//     // 246
// }).catch((err) => {

// }).catch((err) => {
    
// })

