import {routePath} from "../../../utils/constants.js";
import {endpoints} from "../../../store/endpoints.js";
import ViewCourses from "../../../components/course/view/ViewCourses.jsx";
import useFetchData from "../../../hooks/useFetchData.js";
import {useEffect, useState} from "react";
import useLazyFetchData from "../../../hooks/useLazyFetchData.js";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');

  const {data, loading} = useFetchData(endpoints.courses.courses);

  const {
    onFetchData,
    data: lazydata,
    isFetching,
    isSuccess
  } = useLazyFetchData();

  useEffect(() => {
    // Set the courses to the data from useFetchData initially
    if (data) {
      setCourses(data);
    }
  }, [data]);

  useEffect(() => {
    if (lazydata && isSuccess) {
      setCourses(lazydata);
    }
  }, [lazydata, isSuccess]);

  // Debounce the search input by 1 second
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(searchTerm.trim());
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  // Fetch data when debouncedTerm changes
  useEffect(() => {
    if (debouncedTerm) {
      onFetchData(`${endpoints.courses.courses}/search/${debouncedTerm}`);
    } else {
      // Reset to original data when the search term is empty
      if (data) {
        setCourses(data);
      }
    }
  }, [debouncedTerm, data, onFetchData]);

  function onChangeHandler(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <div className={"w-100 search-container-input-div"}>
        <input
          className={"bg-body-secondary p-2 w-75 mx-auto d-block text-black"}
          type="text"
          value={searchTerm}
          onChange={onChangeHandler}
          placeholder="Search for a course"
        />
      </div>
      <ViewCourses
        data={courses}
        loading={loading || isFetching}
        to={`/${routePath.course.courses}/view/`}
        buttonText={"View Course"}
      />
    </>
  );
};

export default Courses;





// import {routePath} from "../../../utils/constants.js";
// import {endpoints} from "../../../store/endpoints.js";
// import ViewCourses from "../../../components/course/view/ViewCourses.jsx";
// import useFetchData from "../../../hooks/useFetchData.js";
// import {useEffect, useState} from "react";
// import useLazyFetchData from "../../../hooks/useLazyFetchData.js";
//
//
// const Courses = () => {
//
//   const [courses, setCourses] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [debouncedTerm, setDebouncedTerm] = useState('');
//
//   const {data, loading} = useFetchData(endpoints.courses.courses);
//
//   const {
//     onFetchData,
//     data: lazydata,
//     isFetching,
//     isLoading,
//     isSuccess
//   } = useLazyFetchData();
//
//
//   useEffect(() => {
//     if(lazydata){
//       setCourses(lazydata);
//     }else{
//       setCourses(data);
//     }
//   }, [data, lazydata]);
//
//   // this useEffect is use for state management for input field
//   useEffect(() => {
//     // Set a timer that will trigger after 3 seconds
//     const timerId = setTimeout(() => {
//       if(searchTerm) {
//         setDebouncedTerm(searchTerm); // Update the debounced term after 3s
//       }
//     }, 1000);
//     // Cleanup the timeout if the user types again before 3s
//     return () => {
//       clearTimeout(timerId);
//     };
//   }, [searchTerm]);
//
//   //this  Effect is used to trigger when the debounced term changes
//   useEffect(() => {
//     if(debouncedTerm) {
//       // Make the API call to fetch related courses
//       onFetchData(`${endpoints.courses.courses}/search/${debouncedTerm}`);
//     } else{
//       setCourses(data);
//     }
//   }, [data, debouncedTerm, onFetchData]);
//
//   function onChangeHandler(e){
//     setSearchTerm(e.target.value);
//   }
//   return (
//     <>
//       <div className={"w-100 search-container-input-div"}>
//         <input className={"bg-body-secondary p-2 w-75 mx-auto d-block text-black"}
//                type="text"
//                value={searchTerm}
//                onChange={onChangeHandler}
//                placeholder="Search for a course"
//         />
//       </div>
//       <ViewCourses data={courses} loading={loading} to={`/${routePath.course.courses}/view/`} buttonText={"View" +
//         " Course"}/>
//     </>
//   )
// }
//
// export default Courses;
