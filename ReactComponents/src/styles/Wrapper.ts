import styled from "styled-components";

type WrapperProps = {
  width: number;
  height?: number;
  display?: string;
  flexflow?: string;
};

const Wrapper = styled.div<WrapperProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  display: ${({ display }) => display};
  flex-flow: ${({ flexflow }) => flexflow};
  margin: auto;
`;

export { Wrapper };
