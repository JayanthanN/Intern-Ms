import active from "../assets/dashboard/active.png";
import mentorarrow from "../assets/dashboard/arrow.png";
import attendance from "../assets/dashboard/attendance.png";
import calendar from "../assets/dashboard/calendar.png";
import clipboard from "../assets/dashboard/clipboard.png";
import clock from "../assets/dashboard/clock.png";
import downarrow from "../assets/dashboard/downarrow.png";
import downarrow1 from "../assets/dashboard/downarrow1.png";
import guidelines from "../assets/dashboard/guidelines.png";
import hamburgericon from "../assets/dashboard/hamburgericon.png";
import homeicon from "../assets/dashboard/home-icon.png";
import internusers from "../assets/dashboard/intern-users.png";
import interncount from "../assets/dashboard/interncount.png";
import mentoruser from "../assets/dashboard/mentoruser.png";
import message from "../assets/dashboard/message.png";
import notification from "../assets/dashboard//notification.png";
import performance from "../assets/dashboard/performance.png";
import reports from "../assets/dashboard/reports.png";
import resource from "../assets/dashboard/resource.png";
import reviews from "../assets/dashboard/reviews.png";
import searchicon from "../assets/dashboard/search-icon.png";
import settings from "../assets/dashboard/settings.png";
import speaker from "../assets/dashboard/speaker.png";
import star from "../assets/dashboard/star.png";
import submit from "../assets/dashboard/submit.png";
import task from "../assets/dashboard/task.png";
import taskreport from "../assets/dashboard/taskreport.png";
import topintern1 from "../assets/dashboard/top-intern1.png";
import topintern2 from "../assets/dashboard/top-intern2.png";
import topintern3 from "../assets/dashboard/top-intern3.png";
import topintern4 from "../assets/dashboard/top-intern4.png";
import { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import "./MentorDashboard.css";

function MentorDashboard() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const performanceData = [
    { week: "Week 1", averageScore: 21, taskCompletion: 0 },
    { week: "Week 2", averageScore: 24, taskCompletion: 3 },
    { week: "Week 3", averageScore: 41, taskCompletion: 17 },
    { week: "Week 4", averageScore: 41, taskCompletion: 19 },
    { week: "Week 5", averageScore: 50, taskCompletion: 16 },
  ];

  const internStatus = [
    { name: "Active", value: 8, color: "#1BBC58" },
    { name: "On Leave", value: 2, color: "#F0D941" },
    { name: "Completed", value: 2, color: "#E33C3F" },
  ];

  const deadlines = [
    {
      month: "MAY",
      date: "22",
      title: "Project Report",
      name: "Aryan Verma",
      due: "Due in 2 days",
      color: "red",
    },
    {
      month: "MAY",
      date: "24",
      title: "UI/UX Case Study",
      name: "Neha Singh",
      due: "Due in 4 days",
      color: "yellow",
    },
    {
      month: "MAY",
      date: "27",
      title: "Final Presentation",
      name: "Rahul Mehta",
      due: "Due in 7 days",
      color: "iceblue",
    },
  ];

  const recentActivities = [
    {
      icon: submit,
      bgColor: "activity-green",
      title: 'Aryan Verma submitted the task "Landing Page Design"',
      time: "2 Hours ago",
    },
    {
      icon: taskreport,
      bgColor: "activity-blue",
      title: 'You reviewed Neha Singh\'s task "User Research Report"',
      time: "5 Hours ago",
    },
    {
      icon: attendance,
      bgColor: "activity-yellow",
      title: "Rahul Mehta marked attendance for today",
      time: "1 Day ago",
    },
    {
      icon: guidelines,
      bgColor: "activity-pink",
      title: 'New resources "Design System Guidelines" shared',
      time: "2 Days ago",
    },
  ];

  const topInterns = [
    {
      image: topintern1,
      name: "Aryan Verma",
      progress: 90,
    },
    {
      image: topintern2,
      name: "Neha Singh",
      progress: 88,
    },
    {
      image: topintern3,
      name: "Rahul Mehta",
      progress: 85,
    },
    {
      image: topintern4,
      name: "Priya Sharma",
      progress: 82,
    },
  ];

  const schedules = [
    {
      time: "10:00 AM",
      title: "1:1 Meeting with Neha Singh",
      subTitle: "Mentorship Discussion",
      color: "schedule-purple",
    },
    {
      time: "2:00 PM",
      title: "Project Review - Team Alpha",
      subTitle: "Review & Feedback",
      color: "schedule-yellow",
    },
    {
      time: "4:00 PM",
      title: "Weekly Mentor Sync",
      subTitle: "Team Meeting",
      color: "schedule-cyan",
    },
  ];
  return (
    <div className="mentor-dashboardpage">
      <div className="mentor-sidebar">
        <div className="sidebar-logo">
          <h2>InternMS</h2>

          <p>Internship Management System</p>
        </div>

        <div
          className={
            activeMenu === "Dashboard" ? "menu-items active" : "menu-items"
          }
          onClick={() => setActiveMenu("Dashboard")}
        >
          <img src={homeicon} className="menu-icon" alt="Home" />
          <h4>Dashboard</h4>
        </div>

        <div
          className={
            activeMenu === "My Interns" ? "menu-items active" : "menu-items"
          }
          onClick={() => setActiveMenu("My Interns")}
        >
          <img src={internusers} className="menu-icon" alt="intern-user" />
          <h4>My Interns</h4>
        </div>

        <div
          className={
            activeMenu === "Tasks & Reviews"
              ? "menu-items active"
              : "menu-items"
          }
          onClick={() => setActiveMenu("Tasks & Reviews")}
        >
          <img src={task} className="menu-icon" alt="task" />

          <h4>Tasks & Reviews</h4>
        </div>

        <div
          className={
            activeMenu === "Attendance" ? "menu-items active" : "menu-items"
          }
          onClick={() => setActiveMenu("Attendance")}
        >
          <img src={clock} className="menu-icon" alt="clock" />

          <h4>Attendance</h4>
        </div>

        <div
          className={
            activeMenu === "Performance" ? "menu-items active" : "menu-items"
          }
          onClick={() => setActiveMenu("Performance")}
        >
          <img src={performance} className="menu-icon" alt="performicon" />

          <h4>Performance</h4>
        </div>

        <div
          className={
            activeMenu === "Messages" ? "menu-items active" : "menu-items"
          }
          onClick={() => setActiveMenu("Messages")}
        >
          <img src={message} className="menu-icon" alt="message" />

          <h4>Messages</h4>
        </div>

        <div
          className={
            activeMenu === "Resources" ? "menu-items active" : "menu-items"
          }
          onClick={() => setActiveMenu("Resources")}
        >
          <img src={resource} className="menu-icon" alt="resourceicon" />

          <h4>Resources</h4>
        </div>

        <div
          className={
            activeMenu === "Announcements" ? "menu-items active" : "menu-items"
          }
          onClick={() => setActiveMenu("Announcements")}
        >
          <img src={speaker} className="menu-icon" alt="speaker" />

          <h4>Announcements</h4>
        </div>

        <div
          className={
            activeMenu === "Reports" ? "menu-items active" : "menu-items"
          }
          onClick={() => setActiveMenu("Reports")}
        >
          <img src={reports} className="menu-icon" alt="report" />

          <h4>Reports</h4>
        </div>
        <div
          className={
            activeMenu === "Calendar" ? "menu-items active" : "menu-items"
          }
          onClick={() => setActiveMenu("Calendar")}
        >
          <img src={calendar} className="menu-icon" alt="calendar" />

          <h4>Calendar</h4>
        </div>
        <div
          className={
            activeMenu === "Settings" ? "menu-items active" : "menu-items"
          }
          onClick={() => setActiveMenu("Settings")}
        >
          <img src={settings} className="menu-icon" alt="settings" />

          <h4>Settings</h4>
        </div>
      </div>

      <div className="dashboard-navbar">
        <div className="mentor-navbar">
          <div className="navbar-left">
            <img src={hamburgericon} className="hamburger" alt="hamburger" />

            <div className="welcome-text">
              <h4>Welcome back, Mentor</h4>

              <p>Welcome back, John Mentor!</p>
            </div>
          </div>

          <div className="navbar-center">
            <div className="search-box">
              <img src={searchicon} className="search" alt="search" />

              <input type="text" placeholder="Search anything......" />
            </div>
          </div>

          <div className="navbar-right">
            <div className="bell">
              <img src={notification} className="notify" alt="notify" />
              <span className="notification-dot"></span>
            </div>

            <div className="profile-circle">
              <img src={mentoruser} className="mentor-user" alt="mentor-icon" />
            </div>

            <div className="mentor-detail">
              <h4>Mentor</h4>
              <p>Mentor Dashboard</p>
            </div>

            <img src={downarrow} className="downarrow" alt="arrow" />
          </div>
        </div>

        <div className="dashboard-main">
          <div className="mentor-stats">
            <div className="mentor-stat">
              <div className="intern-bgcolor">
                <img
                  src={interncount}
                  className="interncount"
                  alt="interncount"
                />
              </div>

              <div className="content-stat">
                <h2>12</h2>

                <p>Total Interns</p>
                <p>under your guidance</p>
              </div>
            </div>

            <div className="mentor-stat">
              <div className="active-bgcolor">
                <img src={active} className="active" alt="active" />
              </div>

              <div className="content-stat">
                <h2>8</h2>

                <p>Active Interns</p>
                <p>Currently Active</p>
              </div>
            </div>

            <div className="mentor-stat">
              <div className="clipboard-bgcolor">
                <img src={clipboard} className="clipboard" alt="clipboard" />
              </div>

              <div className="content-stat">
                <h2>16</h2>
                <p>Task Assigned</p>
                <p>This Month</p>
              </div>
            </div>

            <div className="mentor-stat">
              <div className="reviews-bgcolor">
                <img src={reviews} className="reviews" alt="reviews" />
              </div>
              <div className="content-stat">
                <h2>6</h2>

                <p>Pending Reviews</p>

                <p>Needs your Feedback</p>
              </div>
            </div>

            <div className="mentor-stat">
              <div className="star-bgcolor">
                <img src={star} className="star" alt="star" />
              </div>

              <div className="content-stat">
                <h2>4.7</h2>

                <p>Average Performance</p>

                <p>Out of 5</p>
              </div>
            </div>
          </div>

          <div className="mentor-dashboard-row">
            <div className="performance-card">
              <div className="performance-header">
                <h3>Intern Performance Overview</h3>
                <span className="month-text">
                  This Month
                  <img src={downarrow1} className="month-arrow" alt="arrow" />
                </span>
              </div>

              <ResponsiveContainer width="100%" height={250}>
                <LineChart
                  data={performanceData}
                  margin={{
                    top: 10,
                    right: 20,
                    left: 20,
                    bottom: 10,
                  }}
                >
                  <CartesianGrid
                    vertical={false}
                    stroke="#EEF1F6"
                    strokeDasharray="3 3"
                  />
                  <XAxis
                    dataKey="week"
                    axisLine={false}
                    tickLine={false}
                    padding={{ left: 20, right: 20 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 60]}
                    ticks={[0, 20, 40, 60]}
                  />
                  <Tooltip />

                  <Line
                    type="natural"
                    dataKey="averageScore"
                    stroke="#296CF6"
                    strokeWidth={3}
                    dot={{ r: 6, fill: "#296CF6", strokeWidth: 0 }}
                  />

                  <Line
                    type="natural"
                    dataKey="taskCompletion"
                    stroke="#27C090"
                    strokeWidth={3}
                    dot={{ r: 6, fill: "#27C090", strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="chart-points">
                <span>
                  <span className="points-dot blue"></span>
                  Average Score
                </span>

                <span>
                  <span className="points-dot green"></span>
                  Task Completion (%)
                </span>
              </div>
            </div>

            <div className="status-card">
              <h3>Intern By Status</h3>
              <div className="status-content">
                <div className="donut-wrapper">
                  <ResponsiveContainer width={220} height={220}>
                    <PieChart>
                      <Pie
                        data={internStatus}
                        dataKey="value"
                        innerRadius={58}
                        outerRadius={82}
                        paddingAngle={2}
                        startAngle={90}
                        endAngle={-270}
                      >
                        {internStatus.map((item, index) => (
                          <Cell key={index} fill={item.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="donut-center">
                    <h2>12</h2>
                    <p>Total</p>
                  </div>
                </div>

                <div className="status-points">
                  <div>
                    <span className="point green"></span>
                    <p> Active 8(66.7%)</p>
                  </div>

                  <div>
                    <span className="point yellow"></span>
                    <p>On leave 2(16.7%)</p>
                  </div>

                  <div>
                    <span className="point red"></span>
                    <p> Completed 2(16.7%)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="deadline-card">
              <h3>Upcoming Deadlines</h3>

              {deadlines.map((item, index) => (
                <div className="deadline-item" key={index}>
                  <div className="deadline-date">
                    <span>{item.month}</span>
                    <h4>{item.date}</h4>
                  </div>

                  <div className="deadline-content">
                    <div className="deadline-header">
                      <h4>{item.title}</h4>

                      <span className={`due-text ${item.color}`}>
                        {item.due}
                      </span>
                    </div>
                    <p>{item.name}</p>
                  </div>
                </div>
              ))}

              <span className="view-deadline">
                View All Deadlines{" "}
                <img src={mentorarrow} className="mentorarrow" alt="arrow" />
              </span>
            </div>
          </div>

          <div className="mentor-dashboard-bottom">
            <div className="recent-card">
              <h3>Recent Activities</h3>

              {recentActivities.map((item, index) => (
                <div className="activity-item" key={index}>
                  <div className={`activity-icon ${item.bgColor}`}>
                    <img src={item.icon} alt="activity" />
                  </div>

                  <div className="activity-content">
                    <h4>{item.title}</h4>
                    <p>{item.time}</p>
                  </div>
                </div>
              ))}

              <div className="activity-footer">
                <span>View all activities</span>
                <img src={mentorarrow} className="mentorarrow" alt="arrow" />
              </div>
            </div>
            <div className="top-performing-card">
              <div className="top-performing-header">
                <h3>Top Performing Interns</h3>
                <span>View all</span>
              </div>

              {topInterns.map((item, index) => (
                <div className="top-item" key={index}>
                  <img src={item.image} className="top-user" alt="intern" />

                  <div className="progress-section">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <h4>{item.progress}%</h4>
                </div>
              ))}
            </div>

            <div className="schedule-card">
              <div className="schedule-header">
                <h3>My Schedule</h3>
                <span>View Calendar</span>
              </div>

              {schedules.map((item, index) => (
                <div className="schedule-item" key={index}>
                  <div className={`schedule-time ${item.color}`}>
                    {item.time}
                  </div>

                  <div className="schedule-content">
                    <h4>{item.title}</h4>

                    <p>
                      <span className="schedule-dot"></span>
                      {item.subTitle}
                    </p>
                  </div>
                </div>
              ))}

              <div className="schedule-footer">
                <span>View full Schedule</span>
                <img src={mentorarrow} className="mentorarrow" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentorDashboard;
