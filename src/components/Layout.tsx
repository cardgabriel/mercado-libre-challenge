import { Outlet } from "react-router-dom";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="app">
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}; 