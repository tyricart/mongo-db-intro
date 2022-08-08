const tyScript = () => {
    console.log('here is Tys script')
    // console.log('module from myscript', module)
}

//module.export will only expore the last function
//arrow function
const secondFunction = () => {
    console.log('here is my second function')
}

const car = {
    make: 'Ford', 
    color: 'Gold', 
    year: 2015, 
    engine: 4.0, 
    gasHogger: false
}

const thirdFunction = () => {
    console.log('third function')
}

exports.thirdFunction = thirdFunction


module.exports = { tyScript, secondFunction}