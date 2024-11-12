import {lazy} from "react";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Profile = lazy(()=> import("./profile/Profile"));
const Stream = lazy(()=> import("./courses/stream/Stream"));
const Details = lazy(()=> import("./courses/details/Details"));
const Courses = lazy(() => import("./courses/courses/Courses"));
const Overview = lazy(() => import("../components/overview/Overview"));
const Registered = lazy(() => import("./courses/registered/Registered"));
const Whitelisted = lazy(() => import("./courses/whitelisted/Whitelisted"));
const CoursePayment = lazy(()=> import("./courses/payment/CoursePayment"));
const About_Us = lazy(() => import("./about-us/About_Us"));
const Contact_Us = lazy(()=> import("./contact-us/Contact_Us"));
const Profile_Update = lazy(()=> import("./profile/update/Profile_Update"));


export {
  Profile,
  Stream,
  Courses,
  Details,
  About_Us,
  Overview,
  Dashboard,
  Contact_Us,
  Registered,
  Whitelisted,
  CoursePayment,
  Profile_Update,
}
