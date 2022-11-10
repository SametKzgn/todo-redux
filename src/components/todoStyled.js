import styled from "styled-components";

export const ItemContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 60vh;
  height: 50vh;
  overflow: auto;
`;
export const Search = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 1rem;
 @media (max-width: 768px) {
 width:100%;
   border-radius: 50%
 }
  
  
`;
export const AddButton = styled.div`
  background-color: #2c6bec;
  width: 5rem;
  height: 3rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  transition: all .2s ease-in-out;

  &:hover {

    background-color: rgb(24 61 137);

  }
`;
export const TodoContainerItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4px;
  align-items: center;
  background-color: #c5e1e5;
  width: 87%;
  border-radius: 5px;
  @media (max-width: 768px) {
    width:100%;

  }
`;
export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;
export const Icon = styled.div`
  background-color: #1d1ba3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 5px;
  transition: all .2s ease-in-out;
  
  &:hover {
  transform: scale(1.1);
    background-color: #17156c;
   
  }
`;
export const SearchInput = styled.input`
  border: 2px solid #5289cf;
  border-radius: 5px;
  width: 24.5rem;

`;