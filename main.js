const ansElm = document.getElementById('ans-input')
const subElm = document.getElementById('sub-input')
const firstValue = document.getElementById('first-value')
const lastValue = document.getElementById('last-value')

const rand1 = Math.ceil((Math.random() * 15) + 1) 
const rand2 = Math.ceil((Math.random() * 9) + 1) 

const mainAns = rand1 + rand2

firstValue.innerText = `${rand1} `
lastValue.innerText = `${rand2} `


subElm.addEventListener('click', () => {

    const ansValue = ansElm.value

    if(ansValue === "") {
        alert('Please Fill the input field')
        return
    }

    if(mainAns == ansValue) {
        alert('You are correct. Press Next to another')
    } else {
        alert('You are wrong')
    }


})