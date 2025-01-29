import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 90%;
  padding: 8px;
  border-radius: 7px;
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
`;

export default function Input({
  ...args
}: InputHTMLAttributes<HTMLInputElement>) {
  return <StyledInput {...args} />;
}
