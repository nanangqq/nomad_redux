import {createStore} from 'redux'

const add = document.getElementById('add')
const minus = document.getElementById('minus')
const number = document.querySelector('span')

//actions
const ADD = 'ADD'
const MINUS = 'MINUS'

const countModifier = (state=0, action)=>{
    console.log(state, action)
    switch (action.type) {
        case ADD:
            return state + 1
        case MINUS:
            return state - 1
        default:
            return state
    }
}

const countStore = createStore(countModifier)

// countStore.dispatch({type:'ADD'})
// countStore.dispatch({type:'ADD'})
// countStore.dispatch({type:'ADD'})
// countStore.dispatch({type:'MINUS'})

// console.log(countStore.getState())

const updateNumber = (count)=>{
    number.innerText = count
}

const onChange = ()=>{
    console.log(countStore.getState())
    updateNumber(countStore.getState())
}

countStore.subscribe(onChange)

// let count = 0


const handleAdd = ()=>{
    countStore.dispatch({type: ADD})
}

const handleMinus = ()=>{
    countStore.dispatch({type: MINUS})
}


add.addEventListener('click', handleAdd)
minus.addEventListener('click', handleMinus)

// console.log(number)
updateNumber(countStore.getState())