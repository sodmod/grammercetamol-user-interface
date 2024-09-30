import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/registration/Register";
import CourseRoot from "../pages/courses/CourseRoot";
import {Courses, Details, Home, Overview, Registered, Stream, Whitelisted} from "../pages/index";

import {routePath} from "../utils/constants.js";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        index: true,
        Component: Overview
      },
      {
        path: "course",
        Component: CourseRoot,
        children: [
          {
            index: true,
            Component: Courses
          },
          {
            path: routePath.course["your-course"],
            Component: Registered,
          },
          {
            path: routePath.course["whitelisted-course"],
            Component: Whitelisted
          },
          {
            path: `${routePath.course.view}:courseId`,
            Component: Details,

          },
          {
            path: `${routePath.course["stream"]}:courseId`,
            Component: Stream,
          }
        ]
      }
    ]
  },
  {
    path: "/login",
    Component: Login
  },
  {
    path: "/signup",
    Component: Register
  }
]);
