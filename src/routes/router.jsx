import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home/Home";
import NotFound from "../pages/Error/NotFound";
import AllCropsPage from "../pages/AllCrops/AllCropsPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Profiler } from "react";
import AddCrop from "../pages/AddCrop/AddCrop";
import MyPosts from "../pages/MyPosts/MyPosts";
import MyInterests from "../pages/MyInterests/MyInterests";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Profile from "../pages/Profile/Profile";




const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-crops",
        element: <AllCropsPage />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-crop",
        element: (
          <PrivateRoute>
            <AddCrop />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-posts",
        element: (
          <PrivateRoute>
            <MyPosts />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-interests",
        element: (
          <PrivateRoute>
            <MyInterests />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/*",
    element: <NotFound />,
  },
]);

    export default router;



