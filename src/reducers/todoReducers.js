const initialData = {
    list: []
}
//const [list,setList] = useState([]);

const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const {id,data} = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]

            }

        case 'DELETE_TODO':


            return {
                ...state,
                list: state.list.filter((el) => el.id !== action.payload)

            }
    default: return state;
    }

}

export default todoReducers;