import {Fragment, useEffect, useState} from "react";
import useFetchData from "../../../hooks/useFetchData.js";
import {endpoints} from "../../../store/endpoints.js";
import useFieldChange from "../../../hooks/input-hook/useFieldChange.js";
import useProfileUpdate from "../../../hooks/useProfileUpdate.js";

const Profile_Update = () => {
  const {data} = useFetchData(endpoints.settings.profile);

  const [profileUpdate, setProfileUpdate] = useState({
    email: data?.email || "",
    lastName: data?.lastName || "",
    firstName: data?.firstName || "",
    otherName: data?.otherName || "",
    phoneNumber: data?.phoneNumber || "",
    // usersProfile: null,
  });

  const {onSubmit} = useProfileUpdate({url: endpoints.settings["update-profile"]});

  useEffect(() => {
    if(data) {
      setProfileUpdate(prevState => ({
        ...prevState,
        firstName: data.firstName,
        otherName: data.otherName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber
      }))
    }
  }, [data]);

  const {onFieldChange} = useFieldChange();

  const fieldChange = (e) => {

    onFieldChange(e.target.name, setProfileUpdate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    })))

  }


  const submitHandler = async(e) => {
    e.preventDefault();
    // Assuming your form submission logic here


    await onSubmit({fileDetails: profileUpdate})

  };

  // return jsx
  return <Fragment>
    <section className="form-container">

      <form onSubmit={submitHandler}>
        <h3>update profile</h3>
        <p>update firstname</p>
        <input
          type="text"
          name="firstName"
          value={profileUpdate.firstName}
          maxLength="50"
          className="box"
          onChange={fieldChange}
        />

        <p>update lastname</p>
        <input
          type="text"
          name="lastName"
          value={profileUpdate.lastName}
          maxLength="50"
          className="box"
          onChange={fieldChange}
        />

        <p>update othername</p>
        <input
          type="text"
          name="otherName"
          value={profileUpdate.otherName}
          maxLength="50"
          className="box"
          onChange={fieldChange}
        />

        <p>update email</p>
        <input
          type="email"
          name="email"
          value={profileUpdate.email}
          maxLength="50"
          className="box"
          onChange={fieldChange}
        />
        <p>update phonenumber</p>
        <input
          type="text"
          name="phoneNumber"
          value={profileUpdate.phoneNumber}
          maxLength="50"
          className="box"
          onChange={fieldChange}
        />

        {/*<p>update pic</p>*/}
        {/*<input*/}
        {/*  type="file"*/}
        {/*  name="usersProfile"*/}
        {/*  accept="image/*"*/}
        {/*  className="box"*/}
        {/*  onChange={handleProfilePicsFile}*/}
        {/*/>*/}
        <input type="submit" value="update profile" name="submit" className="btn"/>
      </form>

    </section>
  </Fragment>
}
export default Profile_Update
