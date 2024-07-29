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
  background?: string;
  top?: string;
  left?: string;
  padding?: string;
  borderRadius?: string;
  flexDirection?: string;
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
      "background",
      "top",
      "left",
      "padding",
      "flexDirection",
      "borderRadius",
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
    top,
    left,
    padding,
    borderRadius,
    flexDirection,
    background,
  }) =>
    `
    width: ${width || "auto"};
    height: ${height ? `${height}px` : "auto"};
    display: ${display || "block"};
    flex-flow: ${flexflow || "row nowrap"};
    gap: ${flexgap || "0px"};
    justify-content: ${justifycontent};
    align-items:${alignitems};
    flex-direction:${flexDirection};
    margin: ${margin};
    gap:${gap};
    position:${position};
    background:${background};
    top:${top};
    left:${left};
    padding:${padding};
    border-radius:${borderRadius};
  `}
`;

export { Wrapper };
