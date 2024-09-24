import {useEffect, useState} from "react";
import {endpoints} from "../../../store/endpoints.js";
import useLazyFetchData from "../../../hooks/useLazyFetchData.js";
import {Container} from "react-bootstrap";
import "./search-course.css";
import Icons from "../../../components/custom-tags/Icons/Icons.jsx";
import {NavLink} from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData.js";


const SearchCourse = () => {
  const [content, setContent] = useState([]);
  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');

  const {
    onFetchData,
    data,
    isFetching,
    isLoading,
    isSuccess
  } = useLazyFetchData();

  const {data: dat1, loading} = useFetchData(endpoints.courses.courses);

  // this useEffect is use for state management for input field
  useEffect(() => {
    // Set a timer that will trigger after 3 seconds
    const timerId = setTimeout(() => {
      if(searchTerm) {

        setDebouncedTerm(searchTerm); // Update the debounced term after 3s
      }
    }, 1000);

    // Cleanup the timeout if the user types again before 3s
    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  //this  Effect is used to trigger when the debounced term changes
  useEffect(() => {
    if(debouncedTerm) {
      // Make the API call to fetch related courses
      onFetchData(`${endpoints.courses.courses}/search/${debouncedTerm}`);
    }
  }, [debouncedTerm, onFetchData]);

  useEffect(() => {
    console.log(Array.isArray(dat1))
    console.log(dat1)
    if(Array.isArray(dat1) && !search) {
      setContent(dat1)
    }
  }, [dat1, search]);

  useEffect(() => {
    if(Array.isArray(data) && data != null) {
      setContent(data);
    }
  }, [data]);

  useEffect(() => {
    console.log(content);
  }, [content]);


  function onChangeHandler(e){
    setSearchTerm(e.target.value);
  }

  return (
    <div className={"search-container"}>
      <div className={"w-100 search-container-input-div"}>
        <input className={"bg-body-secondary p-2 w-75 mx-auto d-block text-black"}
               type="text"
               value={searchTerm}
               onChange={onChangeHandler}
               placeholder="Search for a course"
        />
      </div>
      <Container fluid className={"w-100 search-container-container overflow-y-scroll pt-2"}>
        {
          searchTerm ? isFetching || isLoading ? "It is loading Logic" :
              <>
                {Array.isArray(content) && content.length > 0 ? isLoading ? "is loading" : isSuccess &&
                    content.map((value, key) => (
                      <NavLink to={value?.courseId} className={"info-container-grid shadow text-decoration-none"} key={key}>
                        <div className={"d-none d-sm-block p-0 info-container-grid-image-div"}>
                          {/*<img src={value.thumbnail_url} alt={img}/>*/}
                        </div>
                        <div className={"info-container-grid-info-div"}>
                          <div
                            className={"info-container-grid-info-div-course-name fs-3 text-center fw-bolder"}>
                            {value.courseName}
                          </div>
                          <div className={"info-container-grid-info-div-course-description fs-5"}>{value.summary}
                          </div>
                          <div
                            className={"fs-6"}>{`Author: ${value?.authorDto?.firstName} ${value?.authorDto?.lastName}`}</div>
                        </div>
                      </NavLink>
                    ))
                  : <div className={"text-center fs-3"}>No content available with the name {searchTerm}</div>
                }
              </> :
            <div className={"text-center fs-2 fw-semibold text-black-50"}>
              Make your search <span><Icons icons={"fa-solid fa-magnifying-glass fs-3 text-black-50"}/></span>
            </div>
        }
      </Container>

    </div>
  )
};

export default SearchCourse;
