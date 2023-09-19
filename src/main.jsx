import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ViewBlog from "./pages/ViewBlog.jsx";
import { Provider } from "react-redux";
import store from "./redux/app/store.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs/:blogId",
        element: <ViewBlog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.Fragment>
);
