const add = document.getElementById('add')
const minus = document.getElementById('minus')
let count = 0

const updateNumber = ()=>{
    number.innerText = count
}

const handleAdd = ()=>{
    count += 1
    updateNumber()
}

const handleMinus = ()=>{
    count -= 1
    updateNumber()
}

const number = document.querySelector('span')

add.addEventListener('click', handleAdd)
minus.addEventListener('click', handleMinus)

// console.log(number)
updateNumber()