import {Fragment, useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {routePath} from "../../utils/constants.js";
import useFetchData from "../../hooks/useFetchData.js";
import {endpoints} from "../../store/endpoints.js";
import {useMutateMutation} from "../../config/index.js";
import useMutate from "../../hooks/useMutate.js";
import useProfileUpdate from "../../hooks/useProfileUpdate.js";

const Profile = ()=>{

  const [profileDTO, setProfileDTO] = useState({
    firstName: "",
    lastName: "",
    otherName: "",
  });

  const [file, setFile] = useState({
    "multipartFile": null,
  });



  const {data} = useFetchData(endpoints.settings.profile);
  const {onSubmit} = useProfileUpdate({url: endpoints.settings.change_profile_pics})

  useEffect(() => {
    setProfileDTO(prevState => ({
      ...prevState,
      firstName: data?.firstName,
      lastName: data?.lastName,
      otherName: data?.otherName,
    }))
    // window.location.reload();
  }, [data]);

  // function to handle thumbnail changes
  const handleProfilePicsFile = (event) => {
    const file1 = event.target.files[0];

    setFile((prevState)=>({
      ...prevState,
      [event.target.name] : file1
    }))
  };

  const onSubmitHandler = (e) =>{
    e.preventDefault();
    onSubmit({fileDetails: file})
  }

  // return jsx
  return <Fragment>
    <section className="user-profile">

      <h1 className="heading">your profile</h1>

      <div className="info">

        <div className="user">
          <img src={data?.usersProfile} alt=""/>
          <h3>{`${profileDTO?.firstName} ${profileDTO?.lastName} ${profileDTO?.otherName}`}</h3>
          <p>student</p>
          <NavLink to={routePath.profile.update} className="inline-btn me-3">update your profile</NavLink>
          <form>
            <input placeholder={"update your profile picture"}
                   name="multipartFile"
                   accept="image/*"
                   type={"file"}
                   className="inline-btn"
                   onChange={handleProfilePicsFile}
            />
            <button className="inline-btn" onClick={onSubmitHandler}>Update</button>
          </form>

        </div>

        <div className="box-container">

          <div className="box">
            <div className="flex">
              <i className="fas fa-bookmark"></i>
              <div>
                <span>4</span>
                <p>saved playlist</p>
              </div>
            </div>
            <a href="#" className="inline-btn">view playlists</a>
          </div>

          <div className="box">
            <div className="flex">
              <i className="fas fa-heart"></i>
              <div>
                <span>33</span>
                <p>videos liked</p>
              </div>
            </div>
            <a href="#" className="inline-btn">view liked</a>
          </div>

          <div className="box">
            <div className="flex">
              <i className="fas fa-comment"></i>
              <div>
                <span>12</span>
                <p>videos comments</p>
              </div>
            </div>
            <a href="#" className="inline-btn">view comments</a>
          </div>

        </div>
      </div>

    </section>
  </Fragment>
}

export default Profile
