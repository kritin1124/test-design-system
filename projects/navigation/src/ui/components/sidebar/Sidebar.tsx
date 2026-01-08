type SidebarProps = {
  children?: React.ReactNode;
};
export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div
      style={{
        color: "salmon",
        backgroundColor: "green",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <li>{children}</li>
      <li>Test2</li>
      <li>Test3 </li>
    </div>
  );
};
