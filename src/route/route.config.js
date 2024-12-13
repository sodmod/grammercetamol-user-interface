import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/registration/Register";
import {
  About_Us,
  Contact_Us,
  CoursePayment,
  Courses,
  Dashboard, Details,
  Profile,
  Profile_Update,
  Registered, Whitelisted
} from "../pages/index";
import Wrapper from "../components/wrapper/Wrapper"
import {routePath} from "../utils/constants.js";
import CourseRoot from "../pages/courses/CourseRoot";
import ProfileRoot from "../pages/profile/ProfileRoot";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Wrapper,
    children: [
      {
        path: routePath.dashboard,
        Component: Dashboard,
      },
      {
        path: routePath["about-us"],
        Component: About_Us
      },
      {
        path: routePath["contact-us"],
        Component: Contact_Us
      },
      {
        path: routePath.profile.index,
        Component: ProfileRoot,
        children: [
          {
            index: true,
            Component: Profile,
          },
          {
            path: routePath.profile.update,
            Component: Profile_Update,
          }
        ]
      },
      {
        path: routePath.course.courses,
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
            Component: Whitelisted,
          },
          {
            path: `${routePath.course.view}:courseId`,
            Component: Details,
          }
        ]
      },

      // {
      //   index: true, 
      //   Component: Overview
      // },
      // {
      //   path: "course",
      //   Component: CourseRoot,
      //   children: [
      //     {
      //       index: true,
      //       Component: Courses
      //     },
      //     {
      //       path: routePath.course["your-course"],
      //       Component: Registered,
      //     },
      //     {
      //       path: routePath.course["whitelisted-course"],
      //       Component: Whitelisted
      //     },
      //     {
      //       path: `${routePath.course.view}:courseId`,
      //       Component: Details,
      //
      //     },
      //     {
      //       path: `${routePath.course["stream"]}:courseId`,
      //       Component: Stream,
      //     }
      //   ]
      // }
    ]
  },
  {
    path: "/pay/:courseId",
    Component: CoursePayment
  },
  {
    path: routePath.auth.login,
    Component: Login
  },
  {
    path: routePath.auth.register,
    Component: Register
  },
]);
