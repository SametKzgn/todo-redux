import styled from "styled-components";
import './App.css';
import Todo from "./components/Todo";
import {useEffect} from "react";
import todoReducers from "./reducers/todoReducers";
import {useDispatch} from "react-redux";
import {setTodos} from "./actions";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #2261cb;

`;

function App() {
    const dispatch = useDispatch();

    useEffect(() => { //sayfa yuklendıgı zaman setTodos calısıyor buda sayfada yazılı olan todoların kayıp olmamasını saglıyor
        dispatch(setTodos());
} , [])

    return (
        <Container>
            <Todo/>
        </Container>
    );
}

export default App;
