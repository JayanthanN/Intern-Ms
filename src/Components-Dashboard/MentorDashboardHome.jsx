import { useState } from "react";
import "./MentorDashboardHome.css";
import { MentorDashboard } from "./MentorDashboard";
import MentorProfileArrowIcon from "../assets/dashboard/downarrow.png";
import MentorHamburgerIcon from "../assets/dashboard/hamburgericon.png";
import MentorHomeIcon from "../assets/dashboard/home-icon.png";
import MentorClockIcon from "../assets/dashboard/clock.png";
import MentorInternUsersIcon from "../assets/dashboard/intern-users.png";
import MentorReportsIcon from "../assets/dashboard/performance.png";
import MentorResourceIcon from "../assets/dashboard/resource.png";
import MentorSettingsIcon from "../assets/dashboard/settings.png";
import MentorTaskIcon from "../assets/dashboard/task.png";
import MentorInternProfileIcon from "../assets/dashboard/ProfileIcon.png";
import MentorProjectIcon from "../assets/dashboard/project.png";
import MentorProfileIcon from "../assets/dashboard/mentoruser.png";
import MentorMessageIcon from "../assets/dashboard/communicate.png";
import MentorNotificationIcon from "../assets/dashboard/notification.png";
import MentorSearchIcon from "../assets/dashboard/search-icon.png";


export const MentorDashboardHome = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const NAV_ITEMS = [
    {
      label: "Dashboard",
      icon: MentorHomeIcon,
      alt: "Home",
    },

    {
      label: "My Profile",
      icon: MentorInternProfileIcon,
      alt: "profile",
    },
    {
      label: "Interns",
      icon: MentorInternUsersIcon,
      alt: "intern-user",
    },
    {
      label: "Tasks & Approvals",
      icon: MentorTaskIcon,
      alt: "task",
    },
    {
      label: "Schedule",
      icon: MentorClockIcon,
      alt: "schedule",
    },

    {
      label: "Reports & Analytics",
      icon: MentorReportsIcon,
      alt: "reports",
    },
    {
      label: "Projects",
      icon: MentorProjectIcon,
      alt: "projects",
    },
    {
      label: "Communication",
      icon: MentorMessageIcon,
      alt: "communicateicon",
    },

    {
      label: "Resources",
      icon: MentorResourceIcon,
      alt: "resourceicon",
    },

    { label: "Settings", 
      icon: MentorSettingsIcon, 
      alt: "settings" },
  ];

  function NavItem({ label, icon, alt, isActive, onClick }) {
    return (
      <div
        onClick={onClick}
        className={
          isActive ? "MentorDashboardNavItem active" : "MentorDashboardNavItem"
        }
      >
        <img
          className="MentorDashboardNavIcon"
          src={icon}
          alt={alt}
          width={20}
          height={20}
        />

        <h4>{label}</h4>
      </div>
    );
  }

  return (
    <div className="MentorDashboardContainer">
      <div
        className={
          isSidebarOpen
            ? "MentorDashboardSidebar"
            : "MentorDashboardSidebar MentorDashboardSidebarClosed"
        }
      >
        <div className="MentorDashboardSidebarNav">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.label}
              {...item}
              isActive={activeMenu === item.label}
              onClick={() => setActiveMenu(item.label)}
            />
          ))}
        </div>
      </div>

      <div className="MentorDashboardMain">
        <div className="MentorDashboardNavbar">
          <div className="MentorDashboardNavbarLeft">
            <img
              src={MentorHamburgerIcon}
              className="MentorDashboardHamburger"
              alt="HamburgerIcon"
              width={22}
              height={22}
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              role="button"
              tabIndex={0}
            />

            <div className="MentorDashboardWelcomeSection">
              <h4>Welcome back, Mentor</h4>
              <p>Welcome back, John Mentor!</p>
            </div>
          </div>

          <div className="MentorDashboardNavbarCenter">
            <div className="MentorDashboardSearchBox">
              <img
                src={MentorSearchIcon}
                className="MentorDashboardSearchIcon"
                alt="search"
                width={18}
                height={18}
              />
              <input type="text" placeholder="Search anything......" />
            </div>
          </div>

          <div className="MentorDashboardNavbarRight">
            <div className="MentorDashboardNotificationSection">
              <img
                src={MentorNotificationIcon}
                className="MentorDashboardNotificationIcon"
                alt="NotificationIcon"
                width={20}
                height={20}
              />
              <span className="MentorDashboardNotificationBadge"></span>
            </div>

            <div className="MentorDashboardProfileCircle">
              <img
                src={MentorProfileIcon}
                className="MentorDashboardProfileImage"
                alt="mentor-icon"
                width={38}
                height={38}
              />
            </div>

            <div className="MentorDashboardProfileDetails">
              <h4>Mentor</h4>
              <p>Mentor Dashboard</p>
            </div>

            <img
              src={MentorProfileArrowIcon}
              className="MentorDashboardProfileArrow"
              alt="arrow"
              width={11}
              height={11}
            />
          </div>
        </div>
        <div className="MentorDashboardContent">
          {activeMenu === "Dashboard" && <MentorDashboard />}

          {activeMenu === "My Profile" && <h2>My Profile</h2>}

          {activeMenu === "Interns" && <h2>Interns</h2>}

          {activeMenu === "Tasks & Approvals" && <h2>Tasks & Approvals</h2>}

          {activeMenu === "Schedule" && <h2>Schedule</h2>}

          {activeMenu === "Reports & Analytics" && <h2>Reports & Analytics</h2>}

          {activeMenu === "Projects" && <h2>Projects</h2>}

          {activeMenu === "Communication" && <h2>Communication</h2>}

          {activeMenu === "Resources" && <h2>Resources</h2>}

          {activeMenu === "Settings" && <h2>Settings</h2>}
        </div>
      </div>
    </div>
  );
};
