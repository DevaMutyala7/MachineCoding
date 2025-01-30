import styled from "styled-components";

const AuthWrapper = styled.div`
  width: 80%;
  background: black;
  height: 90%;
  display: flex;
  justify-content: space-between;
  color: white;
`;

const GreetingWrapper = styled.div`
  width: 60%;
  margin: auto;
  text-align: left;
  padding: 30px;
`;

const FormWrapper = styled.div`
  width: 40%;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const MyButton = styled.button`
  width: 70px;
  padding: 10px 15px;
  background: skyblue;
  color: white;
  font-weight: 700;
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 70px;
  right: 10px;
  border-radius: 30px;
`;

export { AuthWrapper, GreetingWrapper, FormWrapper, MyButton };
