
export const addTodo = (data) => (dispatch)=> {

    dispatch({
        type: 'ADD_TODO',
        payload : {
                id : new Date().getTime().toString(),
                data:data
        }
    })
}
export const deleteTodo = (id) => (dispatch)=>{
    dispatch ({
        type: 'DELETE_TODO',
        payload:id
    })
}
export const removeTodo = () => {
    return {
        type: 'REMOVE_TODO'
    }
}