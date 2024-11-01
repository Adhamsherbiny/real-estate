import Nav from "../Nav";
import SideNavAmdin from "./aside";
export default function Admin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="admin-page">
      <Nav />
      <div className="section-layout">
        <SideNavAmdin />
        <div>{children}</div>
      </div>
    </div>
  );
}
