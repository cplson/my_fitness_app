import React from "react";
import LandingPage from "./components/landingPage/LandingPage";
import {
  RouterProvider,
  createBrowserRouter,
} from "../node_modules/react-router-dom/dist/index";
import CredentialPage from "./components/credentialPage/CredentialPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <CredentialPage />,
    },
    {
      path: "/user",
      element: <h1>user</h1>,
    },
  ]);

  return (
    <div className="bg-stone-200 h-screen w-full">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
