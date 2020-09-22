import {
    ACTIONS
} from '..'

const initialState = {
    user: {
        userobject: ''
    }
}

const initTodo = {
    todoobj:''
}

export const reducer =(state = initialState, {type, payload}) =>{
    switch(type){
        case ACTIONS:
            return{state}
    }
}