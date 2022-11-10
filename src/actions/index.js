export const addTodo = (data) => (dispatch) => {
    const currentTodos = JSON.parse(localStorage.getItem('todos') || '[]');  //burda var olan todoları localstorage dan çekiyoruz
    const newTodo = {id: new Date().getTime().toString(), data: data}

    localStorage.setItem('todos', JSON.stringify([...currentTodos, newTodo])) // burda yeni todoları localstorage a ekliyoruz
    dispatch({
        type: 'ADD_TODO',
        payload: newTodo
    })
}
export const deleteTodo = (id) => (dispatch) => {
    const currentTodos = JSON.parse(localStorage.getItem('todos') || '[]');  //burda var olan todoları localstorage dan çekiyoruz
    const newTodos = currentTodos.filter((todo) => todo.id !== id) // burda id ye göre todoları filtreliyoruz
    localStorage.setItem('todos', JSON.stringify(newTodos)) // burda yeni todoları localstorage a ekliyoruz

    dispatch({
        type: 'DELETE_TODO',
        payload: newTodos
    })
}

export const setTodos = () => (dispatch) => {
    const currentTodos = JSON.parse(localStorage.getItem('todos') || '[]');  //burda var olan todoları localstorage dan çekiyoruz
    dispatch({
        type: 'SET_TODOS',
        payload: currentTodos
    })
}

//burada actionları tanımlıyoruz ve dispatch ile reducerlara gönderiyoruz