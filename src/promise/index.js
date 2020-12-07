const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? resolve('Hey, todo bien!')
      : reject('Whoooops!')
  })
}
somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.error(err))



// _________:

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('Trueeee')
      }, 3000)
    } else {
      const error = new Error('Whoooops!')
      reject(error)
    }
  })
}
somethingWillHappen2()
  .then(response => console.log(response))
  .then(() => console.log('Hola bebeto'))
  .catch(err => console.error(err))


Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => {
    console.log('Array of results:', response);
  })
  .catch(err => {
    console.error(err);
  })