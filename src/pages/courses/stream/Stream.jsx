import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import {endpoints} from "../../../store/endpoints.js";
import {Spinner} from "../../../components/spinner/Spinner.jsx";

const CourseContent = () => {
  const {courseId} = useParams();
  // Fetch the course data
  const {data, loading, error} = useFetchData(`${endpoints.courses.courses}/${courseId}`); // Replace with your actual API endpoint

  // State to store the selected URL
  const [selectedUrl, setSelectedUrl] = useState("");

  // Update the selected URL when data is fetched for the first time
  useEffect(() => {
    if(data && data.videoIds && data.videoIds.length > 0) {
      setSelectedUrl(data.videoIds[0].url); // Set the first URL as the initial selected URL
    }
  }, [data]);

  // Handle loading state
  if(loading) {
    return <Spinner/>
  }

  // Handle error state
  if(error) {
    return <div>Error fetching course details.</div>;
  }

  // When no data is available
  if(!data) {
    return <div>No course details available.</div>;
  }

  // Function to render the content based on the selected URL
  return (
    <div style={{display: "flex", backgroundColor: "green"}}>
      {/*The content screen*/}
      <div style={{width: "70%", height: "390px", border: "1px solid #ccc"}}>
        {renderContent(selectedUrl)}
      </div>

      {/*Content list*/}
      <div style={{width: "30%", padding: "0.5rem"}}>
        <h3 className={"fs-5 text-black fw-bold"}>Course Videos and Files</h3>
        <ul style={{listStyle: "none", paddingLeft: 0}}>
          {data.videoIds.map((videoUrl, index) => (
            <li key={index} style={{marginBottom: "10px", backgroundColor: "yellow"}}>
              <a
                // href="#"
                onClick={() => setSelectedUrl(videoUrl.url)}
                style={{
                  textDecoration: "none",
                  color: selectedUrl === videoUrl.url ? "blue" : "black",
                  backgroundColor: "aqua"
                }}
              >
                {videoUrl.subTopic}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseContent;


// Rendering course content on the screen dynamically
const renderContent = (selectedUrl) => {
  if(!selectedUrl) return <div>Please select a video/document/image to view</div>;

  // gets the file extension type
  const fileExtension = selectedUrl.split(".").pop().toLowerCase();

  // determining the file extension to be rendered
  switch(fileExtension) {
    case "mp4":
    case "webm":
    case "ogg":
      return (
        <video width="100%" height="100%" controls className={""}>
          <source src={selectedUrl} type={`video/${fileExtension}`}/>
          Your browser does not support the video tag.
        </video>
      );
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
      return <img src={selectedUrl} alt="Course Content" style={{maxWidth: "100%", height: "auto"}}/>;
    case "pdf":
      return (
        <iframe
          src={selectedUrl}
          title="PDF Content"
          style={{width: "100%", height: "600px", border: "none"}}
        />
      );
    case "doc":
    case "docx":
      return (
        <iframe
          src={`https://docs.google.com/gview?url=${selectedUrl}&embedded=true`}
          title="Document Content"
          style={{width: "100%", height: "600px", border: "none"}}
        />
      );
    default:
      return <div>Unsupported file format</div>;
  }
};
