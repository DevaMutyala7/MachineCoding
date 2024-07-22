import styled from "styled-components";

type WrapperProps = {
  width?: string;
  height?: number;
  display?: string;
  flexflow?: string;
  flexgap?: string;
  margin?: string;
  justifycontent?: string;
  alignitems?: string;
  gap?: string;
  position?: string;
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
      "position",
    ].includes(prop),
})<WrapperProps>`
  ${({
    width,
    height,
    display,
    flexflow,
    flexgap,
    gap,
    alignitems = "center",
    justifycontent = "center",
    margin = "auto",
    position = "static",
  }) => `
    width: ${width || "auto"};
    height: ${height ? `${height}px` : "auto"};
    display: ${display || "block"};
    flex-flow: ${flexflow || "row nowrap"};
    gap: ${flexgap || "0"};
    justify-content: ${justifycontent};
    margin: ${margin};
    align-items:${alignitems};
    gap:${gap};
    position:${position};
  `}
`;

export { Wrapper };
