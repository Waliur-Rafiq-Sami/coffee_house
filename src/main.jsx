import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Root from "./components/root";
import AddNewCoffee from "./components/AddNewCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import DetailsPage from "./components/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/Coffee"),
      },
      {
        path: "/AddNewCoffee",
        element: <AddNewCoffee></AddNewCoffee>,
      },
      {
        path: "/UpdateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Coffee/${params.id}`),
      },
      {
        path: "/DetailsPage/:id",
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Coffee/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
