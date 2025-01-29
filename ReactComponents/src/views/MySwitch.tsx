import CustomSwitch from "components/SwitchComponent";

function CustomComponent({
  value,
  children,
}: {
  value: number | Function;
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

function DefaultCase({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default function MySwitch() {
  return (
    <CustomSwitch value={20}>
      <CustomComponent value={(e: number) => e < 30}>
        <div>Hii 20</div>
      </CustomComponent>
      <CustomComponent value={20}>
        <div>Hii 20 again</div>
      </CustomComponent>
      <CustomComponent value={40}>Hii 40</CustomComponent>
      <DefaultCase>Default</DefaultCase>
    </CustomSwitch>
  );
}
