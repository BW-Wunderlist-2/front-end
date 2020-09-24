import {
    FETCH_TODOS,
    FETCH_TODOS_ERROR,
    FETCH_TODOS_SUCCESS
} from '../actions'

const initialState = {
    tasks: [],
    loadingTasks: true,
    errorMessage: ""
}



export default(state = initialState, action) =>{
    switch(action.type){
        case FETCH_TODOS:
            return{...state,
            loadingTasks: true
        };
        case FETCH_TODOS_ERROR:
            return{
                ...state,
                loadingTasks: false,
                errorMessage: action.payload.message
            };
        case FETCH_TODOS_SUCCESS:
            return{
                ...state,
                tasks: action.payload,
                loadingTasks: false
            };
        default:
            return state;
    }
}
