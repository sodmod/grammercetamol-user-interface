/**
 * What will this page do
 * 1. This page will accept search parameter from the parent and be display data
 * onto the screen,
 * 2. This page will be updated as the input search parameter updated
 * 3. This page will be above all page, i.e, I can be in about page and click the search field
 * and input data, automatically take me to search page to display the result.
 * 4. Upon going back, return it to the initial page it was before going to search page
 **/

import {useEffect} from "react";
import {endpoints} from "../../store/endpoints.js";
import useLazyFetchData from "../../hooks/useLazyFetchData.js";
import PropTypes from "prop-types";
import EachCourse from "../course/each/EachCourse.jsx";

const Search = ({searchTerm}) => {

  const {
    onFetchData, data: lazydata, isFetching, isSuccess
  } = useLazyFetchData();

  // useEffect(() => {
  //   if(lazydata && isSuccess) {
  //     setCourses(lazydata);
  //   }
  // }, [lazydata, isSuccess]);

  // Debounce the search input by 1 second
  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     setDebouncedTerm(searchTerm.trim());
  //   }, 1000);
  //
  //   return () => {
  //     clearTimeout(timerId);
  //   };
  // }, [searchTerm]);

  // Fetch data when debouncedTerm changes
  useEffect(() => {
    if(searchTerm) {
      onFetchData(`${endpoints.courses.courses}/search/${searchTerm}`);
    }
  }, [onFetchData, searchTerm]);

  console.log(lazydata);

  // todo: implement loading

  return (
    <section className="courses">
      <h1 className="heading">Result of {searchTerm}</h1>
      <div className="box-container">
        {!isFetching && isSuccess && Array.isArray(lazydata) ?
          lazydata.map((data, index) => (<EachCourse key={index} data={data} to={""}/>
        )) : "Populating" +
          " data"}
      </div>

    </section>)


};

export default Search


Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
}
