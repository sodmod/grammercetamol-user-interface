import {lazy} from "react";

const Home = lazy(() => import("./home/Home"));
const Courses = lazy(() => import("./courses/courses/Courses"));
const Details = lazy(() => import("./courses/details/Details"));
const Overview = lazy(() => import("../components/Overview/Overview"));
const Registered = lazy(() => import("./courses/registered/Registered"));
const Whitelisted = lazy(() => import("./courses/whitelisted/Whitelisted"));

export {
  Home,
  Overview,
  Courses,
  Registered,
  Whitelisted,
  Details,
}
