import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home/Home";
import NotFound from "../pages/Error/NotFound";
import AllCropsPage from "../pages/AllCrops/AllCropsPage";




const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "all-crops",
        element: <AllCropsPage />
      },
      
    ],
  },

  {
    path: "/*",
    element: <NotFound />,
  },
]);

    export default router;



