import SideNavAmdin from "./aside";
import "../../styles/adminDashboard.scss";
export default function Admin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="admin-page">
      <div className="section-layout">
        <SideNavAmdin />
        <div className="div">{children}</div>
      </div>
    </div>
  );
}
