import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: ${({ theme }) => theme.colors.header};
  padding: 10px;
  display: flex;
  grid-area: head;
`;

export const MainContainer = styled.div`
  grid-area: main;
  text-align: center;
  margin: auto;
`;

export const SiderContainer = styled.div`
  grid-area: nav;
  background: ${({ theme }) => theme.colors.secondary};
  height: 100%;
  align-content: center;
  transition: transform 0.3s ease;

  @media (max-width: 767px) {
    display: block;
    position: fixed;
    top: 70px;
    left: 0;
    width: 200px;

    z-index: 1;

    &.visible {
      transform: translateX(0);
    }

    &.invisible {
      transform: translateX(-100%);
    }
  }
`;

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 70px 1fr;
  grid-template-columns: 250px 1fr;
  grid-template-areas:
    "head head"
    "nav main";
  height: 100vh;
  min-width: 500px;

  @media (max-width: 768px) {
    grid-template-rows: 70px 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      "head head"
      "main main";
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-left: 50px;
`;

export const MobileSiderWrapper = styled.div`
  z-index: 99;
  background: red;
  width: 250px;
  height: 100%;
  position: absolute;
`;
