import "./todoStyled"
import {FaTrashAlt} from "react-icons/fa";
import {addTodo, deleteTodo, removeTodo} from "../actions/index";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {
    ItemContainer,
    SearchInput,
    Icon,
    Search,
    TodoContainerItem,
    TodoContainer
    , AddButton
} from "./todoStyled";


function Todo() {
    const [inputData, setInputData] = useState(""); //burada inputa girilen veriyi tutuyoruz ve useState ile bunu set ediyoruz ve inputa girilen veriyi inputData değişkenine atıyoruz ve setInputData ile bunu set ediyoruz
    const list = useSelector((state) => state.todoReducers.list); // burada listi alıyoruz ve listi ekrana yazdırıyoruz ve listi siliyoruz yani state i değiştiriyoruz ve bunu ekrana yazdırıyoruz
    const dispatch = useDispatch(); //burası redux ile bağlantıyı sağlıyor

    return (
        <ItemContainer>
            <Search>
                <SearchInput type="search"
                             placeholder="✍ Add Item.."
                             value={inputData}
                             onChange={(event) => setInputData(event.target.value)} //burada inputa girilen değeri alıyoruz ve setInputData ile state değişkenimize atıyoruz ve bu sayede inputa girilen değer state değişkenimize atılıyor

                />
                <AddButton onClick={() => {
                    dispatch(addTodo(inputData)) //burada ise inputa girilen değeri dispatch ile addTodo actionuna gönderiyoruz ve bu sayede redux store da list değişkenine atılıyor ve ekranda gösteriliyor..
                    setInputData('') //burada ise inputa girilen değeri sıfırlıyoruz
                }}>Add</AddButton>
            </Search>

            <TodoContainer>
                {list.map((elem) => { //burada ise redux store da list değişkenindeki değerleri map ile dönüyoruz ve ekranda gösteriyoruz
                    return (
                        <TodoContainerItem  onClick={() => dispatch(deleteTodo(elem.id))} key={elem.id}>
                            {/*//burada ise her bir item a tıklandığında dispatch ile deleteTodo actionuna elem.id yi gönderiyoruz ve bu sayede redux store da list değişkeninden elem.id ye eşit olan değeri siliyoruz ve ekranda göstermiyoruz*/}
                            <h3>{elem.data}</h3>
                            {/*//burada ise redux store da list değişkenindeki değerleri ekranda gösteriyoruz*/}
                            <Icon><FaTrashAlt/> </Icon>
                        </TodoContainerItem>

                    )
                })
                }
            </TodoContainer>

        </ItemContainer>
    );
}

export default Todo;