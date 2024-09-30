import {lazy} from "react";

const Home = lazy(() => import("./home/Home"));
const Stream = lazy(()=> import("./courses/stream/Stream"));
const Details = lazy(()=> import("./courses/details/Details"));
const Courses = lazy(() => import("./courses/courses/Courses"));
const Overview = lazy(() => import("../components/Overview/Overview"));
const Registered = lazy(() => import("./courses/registered/Registered"));
const Whitelisted = lazy(() => import("./courses/whitelisted/Whitelisted"));


export {
  Home,
  Stream,
  Courses,
  Details,
  Overview,
  Registered,
  Whitelisted,
}
