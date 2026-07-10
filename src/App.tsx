import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Overview from "./routes/overview/overview";
import EditView from "./routes/editView/EditView";
import CreateView from "./routes/createView/CreateView";
import Root from "./routes/root/Root";
import { useState, useReducer, useEffect } from "react";
import { UserContext } from "./hooks/useContext";
import { RenderContext } from "./hooks/useRenderContext";
import { userReducer, initialUserState } from "./hooks/useReducerCrud";
import { useSetLocalStorage } from "./hooks/useLocalStorage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "overview", element: <Overview /> },
        { path: "create", element: <CreateView /> },
        { path: "edit/:id", element: <EditView /> },
      ],
    },
  ],
  { basename: "nutzer-verwaltung" },
);

function App() {
  const [render, setRender] = useState<boolean>(false);

  const [state, dispatch] = useReducer(userReducer, initialUserState);
  const { handleLocalStorage } = useSetLocalStorage();

  useEffect(() => {
    handleLocalStorage(state.users);
  }, [state.users, handleLocalStorage]);

  return (
    <UserContext value={{ state, dispatch }}>
      <RenderContext value={{ render, setRender }}>
        <RouterProvider router={router} />
      </RenderContext>
    </UserContext>
  );
}

export default App;
