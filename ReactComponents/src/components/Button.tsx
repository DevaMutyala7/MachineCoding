import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 16px;
  border: 1px solid rgba(191, 191, 191, 1);
  border-radius: 6px;
  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(171, 183, 183, 1);

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
