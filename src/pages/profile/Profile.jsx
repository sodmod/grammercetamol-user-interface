import {Fragment} from "react";
import {NavLink} from "react-router-dom";
import {routePath} from "../../utils/constants.js";

const Profile = ()=>{
  return <Fragment>
    <section className="user-profile">

      <h1 className="heading">your profile</h1>

      <div className="info">

        <div className="user">
          <img src="images/pic-1.jpg" alt=""/>
          <h3>shaikh anas</h3>
          <p>student</p>
          <NavLink to={routePath.profile.update} className="inline-btn">update profile</NavLink>
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
