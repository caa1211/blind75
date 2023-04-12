const FunClass = function () {
  this.fun1 = () => {
    console.log('fun1')
  }
}

var obj = new FunClass()
obj.fun1()

class myClass {
  constructor() {
    this.name = 'myname'
    this.fun.bind(this)
  }

  fun() {
    console.log(`fun- ${this.name}`)
  }
}

var obj2 = new myClass()
obj2.fun()

var objTest = {
  name: 'objTest'
}

obj2.fun.apply(objTest)
// const fun = {
//   name: 'fun',
//   test: () => {
//     console.log(this.name)
//   }
// }

// var bar = {
//   name: 'bar'
// }

// fun.test()

// fun.test.apply(bar)
