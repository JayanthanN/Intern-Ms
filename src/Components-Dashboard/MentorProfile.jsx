import { useState } from "react";
import { Link } from "react-router-dom";
import "./MentorProfile.css";
import ProfileImage from "../assets/dashboard/profileImage.png";
import CameraIcon from "../assets/dashboard/cameraIcon.png";
import EditIcon from "../assets/dashboard/EditPen.png";
import PersonalInfo from "../assets/Dashboard/personalinfoIcon.png";
import BioIcon from "../assets/Dashboard/bioIcon.png";
import MailProfile from "../assets/Dashboard/mailprofile.png";
import PhoneIcon from "../assets/Dashboard/profilephone.png";
import ExpertiseTagIcon from "../assets/Dashboard/expertizetagicon.png";
import RemoveIcon from "../assets/dashboard/removeIcon.png";

export const MentorProfile = () => {
  const [profileImage, setProfileImage] = useState(ProfileImage);
  const [isEditing, setIsEditing] = useState(false);
  const [newExpertise, setNewExpertise] = useState("");

  const [profileData, setProfileData] = useState({
    fullName: "Dr. Rajesh Kumar",
    department: "Engineering",
    experience: "12+ Years",
    role: "Senior Mentor",

    description:"Dedicated to guiding the next generation of engineers through practical, hands-on enterprise projects.",
    email: "rajesh.kumar@internsync.com",
   
    phone: "+1 (555) 019-2834",
    bio: "Former Principal Architect specializing in scalable distributed systems. Passionate about knowledge transfer and developing robust engineering cultures within enterprise environments. Leads the core infrastructure mentoring track.",
  
    expertise: [
      "Cloud Computing",
      "System Architecture",
      "Machine Learning",
      "Go",
      "Kubernetes",
    ],
  });

  const handleProfileChange = (event) => {
    const { name, value } = event.target;

    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditProfile = () => {
    setIsEditing((prev) => !prev);
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveExpertise = (expertiseToRemove) => {
    setProfileData((prev) => ({
      ...prev,
      expertise: prev.expertise.filter((item) => item !== expertiseToRemove),
    }));
  };

  const handleAddExpertise = () => {
    const expertise = newExpertise.trim();

    if (!expertise) return;

    if (
      profileData.expertise.some(
        (item) => item.toLowerCase() === expertise.toLowerCase(),
      )
    ) {
      return;
    }

    setProfileData((prev) => ({
      ...prev,
      expertise: [...prev.expertise, expertise],
    }));

    setNewExpertise("");
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
            <img
              src={profileImage}
              alt="Profile"
              className={
                profileImage === ProfileImage
                  ? "MentorProfileImage default"
                  : "MentorProfileImage"
              }
            />

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
              {isEditing ? (
                <input
                  type="text"
                  name="fullName"
                  value={profileData.fullName}
                  onChange={handleProfileChange}
                  className="MentorProfileEditInput name"
                />
              ) : (
                <h2>{profileData.fullName}</h2>
              )}
              <p className="ProfileActive">Active</p>
            </div>

            {isEditing ? (
              <input
                type="text"
                name="role"
                value={profileData.role}
                onChange={handleProfileChange}
                className="MentorProfileEditInput"
              />
            ) : (
              <p className="MentorProfileRole">{profileData.role}</p>
            )}

            {isEditing ? (
              <textarea
                name="description"
                value={profileData.description}
                onChange={handleProfileChange}
                className="MentorProfileEditTextarea"
              />
            ) : (
              <p className="MentorProfileDescription">
                {profileData.description}
              </p>
            )}
          </div>

          <button
            className="MentorProfileEditButton"
            onClick={handleEditProfile}
          >
            <img src={EditIcon} alt="Editicon" />
            {isEditing ? "Save Profile" : "Edit Profile"}
          </button>
          
        </div>
        <div className="MentorProfileGrid">
          <div className="MentorProfileInfoCard">
            <h3>
              <img src={PersonalInfo} alt="Personal Information" />
              Personal Information
            </h3>
            <div className="MentorProfileInfoList">
              <div className="MentorProfileInfoRow">
                <span>Full Name</span>

                {isEditing ? (
                  <input
                    type="text"
                    name="fullName"
                    value={profileData.fullName}
                    onChange={handleProfileChange}
                    className="MentorProfileEditInput"
                  />
                ) : (
                  <span>{profileData.fullName}</span>
                )}
              </div>

              <div className="MentorProfileInfoRow">
                <span>Employee ID</span>
                <span>MEN-8402</span>
              </div>

              <div className="MentorProfileInfoRow">
                <span>Department</span>

                {isEditing ? (
                  <input
                    type="text"
                    name="department"
                    value={profileData.department}
                    onChange={handleProfileChange}
                    className="MentorProfileEditInput"
                  />
                ) : (
                  <span>{profileData.department}</span>
                )}
              </div>

              <div className="MentorProfileInfoRow">
                <span>Experience</span>

                {isEditing ? (
                  <input
                    type="text"
                    name="experience"
                    value={profileData.experience}
                    onChange={handleProfileChange}
                    className="MentorProfileEditInput"
                  />
                ) : (
                  <span>{profileData.experience}</span>
                )}
              </div>
            </div>
            <div className="MentorProfileContactList">
              <div className="MentorProfileContactRow">
                <img src={MailProfile} alt="Email" />
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleProfileChange}
                    className="MentorProfileEditInput"
                  />
                ) : (
                  profileData.email
                )}
              </div>
              <div className="MentorProfileContactRow">
                <img src={PhoneIcon} alt="Phone" />
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleProfileChange}
                    className="MentorProfileEditInput"
                  />
                ) : (
                  profileData.phone
                )}
              </div>
            </div>
          </div>

          <div className="MentorProfileBioCard">
            <h3>
              <img src={BioIcon} alt="Professional Bio" />
              Professional Bio
            </h3>

            {isEditing ? (
              <textarea
                name="bio"
                value={profileData.bio}
                onChange={handleProfileChange}
                className="MentorProfileEditTextarea MentorProfileBioEdit"
              />
            ) : (
              <p className="MentorProfileBioText">{profileData.bio}</p>
            )}
            <div className="MentorProfileExpertise">
              <h4>
                <img src={ExpertiseTagIcon} alt="Areas of Expertise" />
                AREAS OF EXPERTISE
              </h4>

              <div className="MentorProfileExpertiseList">
                {profileData.expertise.map((item) => (
                  <span key={item} className="MentorProfileExpertiseTag">
                    {item}

                    {isEditing && (
                      <button
                        type="button"
                        className="MentorProfileRemoveExpertise"
                        onClick={() => handleRemoveExpertise(item)}
                      >
                        <img src={RemoveIcon} alt="remove" />
                      </button>
                    )}
                  </span>
                ))}
              </div>
              {isEditing && (
                <div className="MentorProfileAddExpertise">
                  <input
                    type="text"
                    placeholder="Add expertise"
                    value={newExpertise}
                    onChange={(event) => setNewExpertise(event.target.value)}
                  />

                  <button type="button" onClick={handleAddExpertise}>
                    Add
                  </button>
                </div>
              )}
            </div>
          </div>
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
