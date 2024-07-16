import { MainContainer } from "../styles/LayoutStyles";

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainContainer>{children}</MainContainer>;
}
