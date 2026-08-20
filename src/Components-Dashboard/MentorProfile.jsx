import { useState } from "react";
import { Link } from "react-router-dom";
import "./MentorProfile.css";
import ProfileImage from "../assets/dashboard/profileImage.png";
import CameraIcon from "../assets/dashboard/cameraIcon.png";
import EditIcon from "../assets/dashboard/EditPen.png";

export const MentorProfile = () => {
  const [profileImage, setProfileImage] = useState(ProfileImage);
  

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="MentorProfilePage">
        <div className="MentorProfileHeader">
          <h1>Mentor Profile</h1>

          <p>Manage your professional details and intern assignments.</p>
        </div>

        <div className="MentorProfileMainCard">
          <div className="MentorProfileImageContainer">
            <img src={profileImage} alt="Profile" />

            <label className="MentorProfileCameraButton">
              <img src={CameraIcon} alt="Change Profile" />

              <input
                type="file"
                accept="image/*"
                onChange={handleProfileImageChange}
              />
            </label>
          </div>

          <div className="MentorProfileDetails">
            <div className="MentorProfileName">
              <h2>Dr. Rajesh Kumar</h2>
              <p className="ProfileActive">Active</p>
            </div>

            <p className="MentorProfileRole">Senior Mentor</p>

            <p className="MentorProfileDescription">
              Dedicated to guiding the next generation of engineers through
              practical, hands-on enterprise projects.
            </p>
          </div>

          <button className="MentorProfileEditButton">
            <img src={EditIcon} alt="Editicon" />
            Edit Profile
          </button>
        </div>
      </div>
      <footer className="MentorProfileFooter">
        <p>&copy; 2024 Corporate Systems Inc. All rights reserved.</p>

        <div className="MentorProfileFooterLinks">
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Service</Link>
          <Link to="#">Help Center</Link>
        </div>
      </footer>
    </>
  );
};
