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
    const [inputData, setInputData] = useState("");
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();
    return (
        <ItemContainer>
            <Search>
                <SearchInput type="search"
                             placeholder="✍ Add Item.."
                             value={inputData}
                             onChange={(event) => setInputData(event.target.value)}
                />
                <AddButton onClick={() => {
                    dispatch(addTodo(inputData))
                    setInputData('')
                }}>Add</AddButton>
            </Search>

            <TodoContainer>
                {list.map((elem) => {
                    return (
                        <TodoContainerItem key={elem.id}>
                            <h3>{elem.data}</h3>
                            <Icon><FaTrashAlt onClick={() => dispatch(deleteTodo(elem.id))}/> </Icon>
                        </TodoContainerItem>

                    )
                })
                }
            </TodoContainer>

        </ItemContainer>
    );
}

export default Todo;