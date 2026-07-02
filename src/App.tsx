import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Overview from "./routes/overview/overview";
import EditView from "./routes/editView/EditView";
import CreateView from "./routes/createView/CreateView";
import Root from "./routes/root/Root";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Root />,
        children: [
          {
            path: "overview",
            element: <Overview />,
          },
          {
            path: "create",
            element: <CreateView />,
          },
          {
            path: "edit",
            element: <EditView />,
          },
        ],
      },
    ],
    {
      basename: "nutzer-verwaltung",
    },
  );
  return <RouterProvider router={router} />;
}

export default App;
