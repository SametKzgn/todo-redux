const initialData = {
    list: [] // burada list adında bir array oluşturuyoruz bunun amacı componentlerdeki state i güncellemek
}
//const [list,setList] = useState([]);

const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const {id,data} = action.payload; // burada actiondan gelen payload ı destructuring yapıyoruz ve id ve data olarak tanımlıyoruz  bunun amacı daha sonra bu id ve data yi kullanmak  ve bunları list e eklemek için kullanacağız
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id:id, // burada id yi list e ekliyoruz
                        data:data // burada data yi list e ekliyoruz
                    }
                ]

            }
// burada reducerlara gönderilen actionları yakalıyoruz ve state değişkenine atıyoruz
// sonrasında return ile state i güncelliyoruz ve componentlerdeki state i güncelliyoruz
        case 'DELETE_TODO':


            return {
                ...state,
                list: action.payload
            }

        case 'SET_TODOS':
            return {
                ...state,
                list: action.payload
            }

    default: return state;
    }

}

export default todoReducers; // burada reducer ı export ediyoruz ve index.js de combine ediyoruz