const cart = ['shoes', 'pants']

const validCart = (cart) => {
  return false
}

const createOrder = (cart) => {
  const pr = new Promise((resolve, reject) => {
    // create order
    if (!validCart(cart)) {
      reject(Error('cart is invalid'))
    } else {
      setTimeout(() => {
        const orders = cart.map((c) => `order_${c}`)
        resolve({ orders })
      }, 2000)
    }
  })
  return pr
}

const processToPayment = (orders) => {
  return new Promise((resolve, reject) => {
    resolve('payment successful')
  })
}

const promise = createOrder(cart)
promise
  .then((R) => {
    // process to payment
    console.log(R)
    return R
  })
  .then((R) => {
    return processToPayment(R)
  })
  .then((R) => {
    console.log('--R--', R)
  })
  .catch((e) => {
    console.log(e.message)
  })
