import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./Home/Home";
import About from "./About/About";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/home"} />,
      },
      {
        index: true,
        path: "/home",
        element: <Home />,
      },
      {
        index: true,
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
