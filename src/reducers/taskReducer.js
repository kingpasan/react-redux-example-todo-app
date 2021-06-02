const initialData = {
    taskitems: []
}

function taskReducer(state = initialData, action) {

    switch (action.type) {
        case 'ADD_NEW_TASK':
            return {
                ...state,
                taskitems: [...state.taskitems, action.payload]
            }

        default:
            return state;
    }

}

export default taskReducer;