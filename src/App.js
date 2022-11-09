import styled from "styled-components";
import './App.css';
import Todo from "./components/Todo";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #2261cb;

`;

function App() {
    return (
        <Container>
            <Todo/>
        </Container>
    );
}

export default App;
