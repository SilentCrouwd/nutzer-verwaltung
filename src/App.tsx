import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Overview from "./routes/overview/overview";
import EditView from "./routes/editView/EditView";
import CreateView from "./routes/createView/CreateView";

function App() {
  const router = createBrowserRouter([
    {
      path: "nutzer-verwaltung",
      element: <Overview />,
      children: [
        {
          path: "editView",
          element: <EditView />,
        },
        {
          path: "create",
          element: <CreateView />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
