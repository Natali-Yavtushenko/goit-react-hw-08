import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppBar } from "./AppBar/AppBar";
import { Suspense } from "react";

export const Layout = () => {
  return (
    <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 15px" }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 1500,
        }}
        reverseOrder={false}
      />
    </div>
  );
};
