const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (false) 
      ? setTimeout(() => resolve('Do Somthing Async'), 3000)
      : reject(new Error('Test error'))
  })
}

const something = async () => {
  const something = await doSomethingAsync()
  console.log(something);
}

console.log('Before');
// something()
console.log(('After'));

// _______Como capturar el error correctamente:
const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync()
    console.log(something);
  } catch (error) {
    console.error(error)
  }
}

console.log('Before 2');
anotherFunction()
console.log(('After 2'));