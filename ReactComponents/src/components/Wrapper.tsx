import styled from "styled-components";

type WrapperProps = {
  width?: string;
  height?: number;
  display?: string;
  flexflow?: string;
  flexgap?: string;
  margin?: string;
  justifycontent?: string;
};

const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "width",
      "height",
      "display",
      "flexflow",
      "flexGap",
      "justifyContent",
      "margin",
    ].includes(prop),
})<WrapperProps>`
  ${({
    width,
    height,
    display,
    flexflow,
    flexgap,
    justifycontent = "center",
    margin = "auto",
  }) => `
    width: ${width || "auto"};
    height: ${height ? `${height}px` : "auto"};
    display: ${display || "block"};
    flex-flow: ${flexflow || "row nowrap"};
    gap: ${flexgap || "0"};
    justify-content: ${justifycontent};
    margin: ${margin};
    align-items:center;
  `}
`;

export { Wrapper };
