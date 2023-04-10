import { createStore } from 'redux';

function reducer(state = {
    data: [{ title: "Learn HTML", isDone: false }]
}, action) {
    let newArray = [...state.data];
    switch (action.type) {
        case 'addTodo':
            newArray = state.data.concat(action.payload);
            return { data: newArray };
        case 'handleChecked':
            newArray[action.payload.index].isComplete = !action.payload.value;
            return { data: newArray };
        case 'deleteTodo':
            newArray.splice(action.payload, 1)
            return { data: newArray };
        default:
            return state;
    }
}

let store = createStore(reducer);

export default store;