import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  React.useEffect(() => {
    console.log("location changed");
  }, [location]);

  return (
    <div>
      <h1>Heading</h1>
      <Link to="/play">Play</Link>
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
}
