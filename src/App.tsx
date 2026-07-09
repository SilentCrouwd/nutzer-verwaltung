import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Overview from "./routes/overview/overview";
import EditView from "./routes/editView/EditView";
import CreateView from "./routes/createView/CreateView";
import Root from "./routes/root/Root";
import { UserContext } from "./hooks/userContext";
import type { user } from "./hooks/userContext";
import { useEffect, useReducer, useState } from "react";
import {
  useGetLocalStorage,
  useSetLocalStorage,
} from "./hooks/useLocalStorage";

import { RenderContext } from "./hooks/useRenderContext";
import { formInputReducer, initialState } from "./hooks/useFormInputReducer";
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
          path: "edit/:id",
          element: <EditView />,
        },
      ],
    },
  ],
  {
    basename: "nutzer-verwaltung",
  },
);
function App() {
  const [render, setRender] = useState<boolean>(false);
  const { handleLocalStorage } = useSetLocalStorage();
  const [userArray, setUserArray] = useState<user[]>([]);
  const { handleGetLocalStorage } = useGetLocalStorage();

  useEffect(() => {
    const storedUser = handleGetLocalStorage();
    if (storedUser && storedUser.length > 0) {
      setUserArray(storedUser);
    }
  }, [render]);

  useEffect(() => {
    handleLocalStorage(userArray);
  }, [userArray]);

  const addUser = (newUser: user) => {
    setUserArray((prevUsers) => [...prevUsers, { ...newUser, id: Date.now() }]);
  };
  return (
    <RenderContext value={{ render, setRender }}>
      <UserContext value={{ userArray, addUser }}>
        <RouterProvider router={router} />
      </UserContext>
    </RenderContext>
  );
}

export default App;
