import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navigation from "./components/dashboard/navbar/navigation";
import Content from "./components/dashboard/content/content";
import FooterPage from "./components/dashboard/footer/footer";
import SignUp from "./components/signuUP/signupComponent";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <FooterPage />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Content />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/about",
    element: <div>About Page</div>,
  },
  
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
