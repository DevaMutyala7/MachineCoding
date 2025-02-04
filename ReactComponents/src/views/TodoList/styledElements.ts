import styled from "styled-components";

const TodosWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
`;

const MyInput = styled.input`
  padding: 5px 10px;
`;

const TodoDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
  font-size: 1.5rem;
`;

const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { MyInput, TodosWrapper, TodoDiv, TodoWrapper };
