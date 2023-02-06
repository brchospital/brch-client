import { createBrowserRouter } from "react-router-dom";
import {
  AboutPage,
//   DashboardPage,
  DepartmentPage,
  DepartmentsPage,
//   DoctorPage,
//   DoctorsPage,
  HomePage,
  LoginPage,
  PostPage,
  PostsPage,
//   VacancyPage,
  VacanciesPage,
} from "../pages";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "posts",
    element: <PostsPage />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "/posts/:postsId",
    //     errorElement: <ErrorPage />,
    //   },
    // ],
  },

  {
    path: "/posts/:id",
    element: <PostPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "departments",
    element: <DepartmentsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/departments/:id",
    element: <DepartmentPage />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/doctors",
  //   element: <DoctorPage />,
  //   errorElement: <ErrorPage />
  // },
  {
    path: "vacancies",
    element: <VacanciesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "cms",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
