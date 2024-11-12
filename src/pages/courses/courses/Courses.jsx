import {endpoints} from "../../../store/endpoints.js";
import useFetchData from "../../../hooks/useFetchData.js";
import {Fragment, useEffect, useState} from "react";
import useLazyFetchData from "../../../hooks/useLazyFetchData.js";

// const Courses = () => {
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
//     isSuccess
//   } = useLazyFetchData();
//
//   useEffect(() => {
//     // Set the courses to the data from useFetchData initially
//     if (data) {
//       setCourses(data);
//     }
//   }, [data]);
//
//   useEffect(() => {
//     if (lazydata && isSuccess) {
//       setCourses(lazydata);
//     }
//   }, [lazydata, isSuccess]);
//
//   // Debounce the search input by 1 second
//   useEffect(() => {
//     const timerId = setTimeout(() => {
//       setDebouncedTerm(searchTerm.trim());
//     }, 1000);
//
//     return () => {
//       clearTimeout(timerId);
//     };
//   }, [searchTerm]);
//
//   // Fetch data when debouncedTerm changes
//   useEffect(() => {
//     if (debouncedTerm) {
//       onFetchData(`${endpoints.courses.courses}/search/${debouncedTerm}`);
//     } else {
//       // Reset to original data when the search term is empty
//       if (data) {
//         setCourses(data);
//       }
//     }
//   }, [debouncedTerm, data, onFetchData]);
//
//   function onChangeHandler(e) {
//     setSearchTerm(e.target.value);
//   }
//
//   return (
//     <>
//       <div className={"w-100 search-container-input-div"}>
//         <input
//           className={"bg-body-secondary p-2 mx-auto d-block text-black rounded-2"}
//           style={{width: '90%'}}
//           type="text"
//           value={searchTerm}
//           onChange={onChangeHandler}
//           placeholder="Search for a course"
//         />
//       </div>
//       <ViewCourses
//         data={courses}
//         loading={loading || isFetching}
//         to={`/${routePath.course.courses}/view/`}
//         buttonText={"View Course"}
//       />
//     </>
//   );
// };

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

  return <Fragment>
    <section className="courses">

      <h1 className="heading">our courses</h1>

      <div className="box-container">

        <div className="box">
          <div className="tutor">
            <img src="images/pic-2.jpg" alt=""/>
            <div className="info">
              <h3>john deo</h3>
              <span>21-10-2022</span>
            </div>
          </div>
          <div className="thumb">
            <img src="images/thumb-1.png" alt=""/>
            <span>10 videos</span>
          </div>
          <h3 className="title">complete HTML tutorial</h3>
          <a href="playlist.html" className="inline-btn">view playlist</a>
        </div>

        <div className="box">
          <div className="tutor">
            <img src="images/pic-3.jpg" alt=""/>
            <div className="info">
              <h3>john deo</h3>
              <span>21-10-2022</span>
            </div>
          </div>
          <div className="thumb">
            <img src="images/thumb-2.png" alt=""/>
            <span>10 videos</span>
          </div>
          <h3 className="title">complete CSS tutorial</h3>
          <a href="playlist.html" className="inline-btn">view playlist</a>
        </div>

        <div className="box">
          <div className="tutor">
            <img src="images/pic-4.jpg" alt=""/>
            <div className="info">
              <h3>john deo</h3>
              <span>21-10-2022</span>
            </div>
          </div>
          <div className="thumb">
            <img src="images/thumb-3.png" alt=""/>
            <span>10 videos</span>
          </div>
          <h3 className="title">complete JS tutorial</h3>
          <a href="playlist.html" className="inline-btn">view playlist</a>
        </div>

        <div className="box">
          <div className="tutor">
            <img src="images/pic-5.jpg" alt=""/>
            <div className="info">
              <h3>john deo</h3>
              <span>21-10-2022</span>
            </div>
          </div>
          <div className="thumb">
            <img src="images/thumb-4.png" alt=""/>
            <span>10 videos</span>
          </div>
          <h3 className="title">complete Boostrap tutorial</h3>
          <a href="playlist.html" className="inline-btn">view playlist</a>
        </div>

        <div className="box">
          <div className="tutor">
            <img src="images/pic-6.jpg" alt=""/>
            <div className="info">
              <h3>john deo</h3>
              <span>21-10-2022</span>
            </div>
          </div>
          <div className="thumb">
            <img src="images/thumb-5.png" alt=""/>
            <span>10 videos</span>
          </div>
          <h3 className="title">complete JQuery tutorial</h3>
          <a href="playlist.html" className="inline-btn">view playlist</a>
        </div>

        <div className="box">
          <div className="tutor">
            <img src="images/pic-7.jpg" alt=""/>
            <div className="info">
              <h3>john deo</h3>
              <span>21-10-2022</span>
            </div>
          </div>
          <div className="thumb">
            <img src="images/thumb-6.png" alt=""/>
            <span>10 videos</span>
          </div>
          <h3 className="title">complete SASS tutorial</h3>
          <a href="playlist.html" className="inline-btn">view playlist</a>
        </div>

        <div className="box">
          <div className="tutor">
            <img src="images/pic-8.jpg" alt=""/>
            <div className="info">
              <h3>john deo</h3>
              <span>21-10-2022</span>
            </div>
          </div>
          <div className="thumb">
            <img src="images/thumb-7.png" alt=""/>
            <span>10 videos</span>
          </div>
          <h3 className="title">complete PHP tutorial</h3>
          <a href="playlist.html" className="inline-btn">view playlist</a>
        </div>

        <div className="box">
          <div className="tutor">
            <img src="images/pic-9.jpg" alt=""/>
            <div className="info">
              <h3>john deo</h3>
              <span>21-10-2022</span>
            </div>
          </div>
          <div className="thumb">
            <img src="images/thumb-8.png" alt=""/>
            <span>10 videos</span>
          </div>
          <h3 className="title">complete MySQL tutorial</h3>
          <a href="playlist.html" className="inline-btn">view playlist</a>
        </div>

        <div className="box">
          <div className="tutor">
            <img src="images/pic-1.jpg" alt=""/>
            <div className="info">
              <h3>john deo</h3>
              <span>21-10-2022</span>
            </div>
          </div>
          <div className="thumb">
            <img src="images/thumb-9.png" alt=""/>
            <span>10 videos</span>
          </div>
          <h3 className="title">complete react tutorial</h3>
          <a href="playlist.html" className="inline-btn">view playlist</a>
        </div>

      </div>

    </section>
  </Fragment>
};

export default Courses;
