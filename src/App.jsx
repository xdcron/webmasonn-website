import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";

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
      {
        index: true,
        path: "/contact",
        element: <Contact />,
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
