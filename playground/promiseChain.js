// createOrder, preceedToPayment, showOrderSummary, updateWallet

const createOrder = () => {
  return new Promise((resolve, reject) => {
    resolve({ order: 'done' })
  })
}

const preceedToPayment = (R) => {
  return new Promise((resolve, reject) => {
    if (R.order === 'done') {
      resolve({ ...R, payment: 'done' })
    } else {
      reject(Error('payment fail'))
    }
  })
}

const showOrderSummary = (R) => {
  return new Promise((resolve, reject) => {
    if (R.payment === 'done') {
      resolve({ ...R, showOrder: 'done' })
    } else {
      reject(Error('showOrder fail'))
    }
  })
}

const updateWallet = (R) => {
  return new Promise((resolve, reject) => {
    if (R.payment === 'done') {
      resolve({ ...R, wallet: 'done' })
    } else {
      reject(Error('wallet fail'))
    }
  })
}

createOrder()
  .then(preceedToPayment)
  .then(showOrderSummary)
  .then(updateWallet)
  .catch((e) => {})
  .then((R) => {
    console.log(R)
  })
