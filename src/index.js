import {createStore} from 'redux'

const form = document.querySelector('form')
const input = document.querySelector('input')
// const button = document.getElementById('todo')
const ul = document.querySelector('ul')

const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'

const reducer = (state=[], action) => {
    // const toDo = input.value
    // input.value = ''
    switch (action.type) {
        case ADD_TODO:
            const newToDo = {
                text: action.toDo,
                id: Date.now()
            }
            return [...state, newToDo]
        case DELETE_TODO:
            return state.filter(e=>e.id !== action.id)
        default:
            return state
    }
}

const store = createStore(reducer)


const onSubmit = e=>{
    e.preventDefault()
    const toDo = input.value
    input.value = ''
    store.dispatch({type: ADD_TODO, toDo})
    console.log(store.getState())
}

const updateToDoList = ()=>{
    // console.log(ul.childNodes)
    // ul.childNodes.forEach(element => {
    //     console.log(element)
    //     ul.removeChild(element)
    // })
    ul.innerHTML = ''
    const newToDo = store.getState()
    newToDo.forEach(e=>{
        const li = document.createElement('li')
        li.textContent = e.text
        li.id = e.id

        const btn = document.createElement('button')
        btn.innerText = 'del'
        btn.addEventListener('click', ()=>store.dispatch({type: DELETE_TODO, id: parseInt(e.id)}))

        li.appendChild(btn)
        ul.appendChild(li)
    })
}

store.subscribe(updateToDoList)

form.addEventListener('submit', onSubmit)