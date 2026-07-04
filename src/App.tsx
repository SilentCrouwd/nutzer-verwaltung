import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Overview from "./routes/overview/overview";
import EditView from "./routes/editView/EditView";
import CreateView from "./routes/createView/CreateView";
import Root from "./routes/root/Root";
import { UserContext } from "./hooks/userContext";
import type { user } from "./hooks/userContext";
import { useEffect, useState } from "react";
import { useSetLocalStorage } from "./hooks/useSetLocalStorage";

function App() {
  const { handleLocalStorage } = useSetLocalStorage();
  const [userArray, setUserArray] = useState<user[]>([]);
  useEffect(() => {
    if (userArray.length > 0) {
      handleLocalStorage(userArray);
    }
  }, [userArray]);
  const addUser = (newUser: user) => {
    setUserArray((prevUsers) => [...prevUsers, newUser]);
  };
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
  return (
    <UserContext value={{ userArray, addUser }}>
      <RouterProvider router={router} />
    </UserContext>
  );
}

export default App;
