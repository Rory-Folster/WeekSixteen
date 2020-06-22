// function* genetrator(){
//     yield 'hello'
//     console.log('First log')
//     yield 'hi'
//     console.log('Second log')
//     return 'Done!'
//     }
    
//     const hello = genetrator()
//     genetrator

console.log('start')

setTimeout(() => {
console.log('Timeout')
},0)

Promise.resolve('Promise')
.then(res => console.log(res))

console.log("End")