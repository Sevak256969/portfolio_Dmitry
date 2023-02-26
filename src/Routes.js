import { useRoutes } from "react-router";
import Layout from "./Layout";
import Home from "./pages/home/index";
import TextPage from "./pages/textPage";
import WorksIndex from "./pages/works";
import SearchIndex from "./pages/searchResult";
import ProfileIndex from "./pages/profile";
import AuthIndex from "./pages/auth";
import AsideIndex from "./aside";
import AboutIndex from "./pages/aboutMe";
import Error404 from "./Error404";

export default function Router() {
  let element = useRoutes([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "websiteDevelopment", element: <TextPage /> },
        { path: "aboutMe", element: <AboutIndex /> },
        { path: "myWorks", element: <WorksIndex /> },
        { path: "searchResult", element: <SearchIndex /> },
        { path: "profile", element: <ProfileIndex /> },
        { path: "auth", element: <AuthIndex /> },
        { path: "aside", element: <AsideIndex /> },
        { path: "*", element: <Error404 /> },
      ],
    },
  ]);
  return element;
}
