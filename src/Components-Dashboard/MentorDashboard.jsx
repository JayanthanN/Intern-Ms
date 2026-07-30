import { useState } from "react";
import "./MentorDashboard.css";
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,Tooltip,CartesianGrid,PieChart,Pie,Cell,} from "recharts";
import Present from "../assets/dashboard/active.png";
import MentorArrow from "../assets/dashboard/arrow.png";
import Attendance from "../assets/dashboard/attendance.png";
import Calendar from "../assets/dashboard/calendar.png";
import Clipboard from "../assets/dashboard/clipboard.png";
import Clock from "../assets/dashboard/clock.png";
import ProfileArrow from "../assets/dashboard/downarrow.png";
import MonthArrow from "../assets/dashboard/downarrow1.png";
import Guidelines from "../assets/dashboard/guidelines.png";
import Hamburger from "../assets/dashboard/hamburgericon.png";
import Home from "../assets/dashboard/home-icon.png";
import InternUsers from "../assets/dashboard/intern-users.png";
import InternCount from "../assets/dashboard/interncount.png";
import MentorUser from "../assets/dashboard/mentoruser.png";
import Message from "../assets/dashboard/message.png";
import Notification from "../assets/dashboard/notification.png";
import Performance from "../assets/dashboard/performance.png";
import Reports from "../assets/dashboard/reports.png";
import Resource from "../assets/dashboard/resource.png";
import Reviews from "../assets/dashboard/reviews.png";
import Search from "../assets/dashboard/search-icon.png";
import Settings from "../assets/dashboard/settings.png";
import Speaker from "../assets/dashboard/speaker.png";
import Star from "../assets/dashboard/star.png";
import Submit from "../assets/dashboard/submit.png";
import Task from "../assets/dashboard/task.png";
import TaskReport from "../assets/dashboard/taskreport.png";
import TopInternOne from "../assets/dashboard/top-intern1.png";
import TopInternTwo from "../assets/dashboard/top-intern2.png";
import TopInternThree from "../assets/dashboard/top-intern3.png";
import TopInternFour from "../assets/dashboard/top-intern4.png";

export const MentorDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const PerformanceData = [
    { week: "Week 1", averageScore: 21, taskCompletion: 0 },
    { week: "Week 2", averageScore: 24, taskCompletion: 3 },
    { week: "Week 3", averageScore: 41, taskCompletion: 17 },
    { week: "Week 4", averageScore: 41, taskCompletion: 19 },
    { week: "Week 5", averageScore: 50, taskCompletion: 16 },
  ];

  const InternStatusData = [
    { name: "Active", value: 8, color: "#1BBC58" },
    { name: "On Leave", value: 2, color: "#F0D941" },
    { name: "Completed", value: 2, color: "#E33C3F" },
  ];

  const DeadlineData = [
    {
      month: "MAY",
      date: "22",
      title: "Project Report",
      name: "Aryan Verma",
      due: "Due in 2 days",
      color: "Red",
    },
    {
      month: "MAY",
      date: "24",
      title: "UI/UX Case Study",
      name: "Neha Singh",
      due: "Due in 4 days",
      color: "Yellow",
    },
    {
      month: "MAY",
      date: "27",
      title: "Final Presentation",
      name: "Rahul Mehta",
      due: "Due in 7 days",
      color: "IceBlue",
    },
  ];

  const RecentActivityData = [
    {
      icon: Submit,
      bgColor: "ActivityIconContainerGreen",
      title: 'Aryan Verma submitted the task "Landing Page Design"',
      time: "2 Hours ago",
    },
    {
      icon: TaskReport,
      bgColor: "ActivityIconContainerBlue",
      title: 'You reviewed Neha Singh\'s task "User Research Report"',
      time: "5 Hours ago",
    },
    {
      icon: Attendance,
      bgColor: "ActivityIconContainerYellow",
      title: "Rahul Mehta marked attendance for today",
      time: "1 Day ago",
    },
    {
      icon: Guidelines,
      bgColor: "ActivityIconContainerPink",
      title: 'New resources "Design System Guidelines" shared',
      time: "2 Days ago",
    },
  ];

  const TopInternData = [
    {
      image: TopInternOne,
      name: "Aryan Verma",
      progress: 90,
    },
    {
      image: TopInternTwo,
      name: "Neha Singh",
      progress: 88,
    },
    {
      image: TopInternThree,
      name: "Rahul Mehta",
      progress: 85,
    },
    {
      image: TopInternFour,
      name: "Priya Sharma",
      progress: 82,
    },
  ];

  const ScheduleData = [
    {
      time: "10:00 AM",
      title: "1:1 Meeting with Neha Singh",
      subTitle: "Mentorship Discussion",
      color: "SchedulePurple",
    },
    {
      time: "2:00 PM",
      title: "Project Review - Team Alpha",
      subTitle: "Review & Feedback",
      color: "ScheduleYellow",
    },
    {
      time: "4:00 PM",
      title: "Weekly Mentor Sync",
      subTitle: "Team Meeting",
      color: "ScheduleCyan",
    },
  ];
  return (
    <div className="MentorDashboardContainer">
      <div className="MentorSidebar">
        <div className="MentorLogoSection">
          <h2>InternMS</h2>

          <p>Internship Management System</p>
        </div>
        <div className="MentorSidebarNav">
          <div
            className={
              activeMenu === "Dashboard"
                ? "MentorNavItem active"
                : "MentorNavItem"
            }
            onClick={() => setActiveMenu("Dashboard")}
          >
            <img src={Home} className="MentorNavIcon" alt="Home" />
            <h4>Dashboard</h4>
          </div>

          <div
            className={
              activeMenu === "My Interns"
                ? "MentorNavItem active"
                : "MentorNavItem"
            }
            onClick={() => setActiveMenu("My Interns")}
          >
            <img
              src={InternUsers}
              className="MentorNavIcon"
              alt="intern-user"
            />
            <h4>My Interns</h4>
          </div>

          <div
            className={
              activeMenu === "Tasks & Reviews"
                ? "MentorNavItem active"
                : "MentorNavItem"
            }
            onClick={() => setActiveMenu("Tasks & Reviews")}
          >
            <img src={Task} className="MentorNavIcon" alt="task" />

            <h4>Tasks & Reviews</h4>
          </div>

          <div
            className={
              activeMenu === "Attendance"
                ? "MentorNavItem active"
                : "MentorNavItem"
            }
            onClick={() => setActiveMenu("Attendance")}
          >
            <img src={Clock} className="MentorNavIcon" alt="clock" />

            <h4>Attendance</h4>
          </div>

          <div
            className={
              activeMenu === "Performance"
                ? "MentorNavItem active"
                : "MentorNavItem"
            }
            onClick={() => setActiveMenu("Performance")}
          >
            <img
              src={Performance}
              className="MentorNavIcon"
              alt="performicon"
            />

            <h4>Performance</h4>
          </div>

          <div
            className={
              activeMenu === "Messages"
                ? "MentorNavItem active"
                : "MentorNavItem"
            }
            onClick={() => setActiveMenu("Messages")}
          >
            <img src={Message} className="MentorNavIcon" alt="message" />

            <h4>Messages</h4>
          </div>

          <div
            className={
              activeMenu === "Resources"
                ? "MentorNavItem active"
                : "MentorNavItem"
            }
            onClick={() => setActiveMenu("Resources")}
          >
            <img src={Resource} className="MentorNavIcon" alt="resourceicon" />

            <h4>Resources</h4>
          </div>

          <div
            className={
              activeMenu === "Announcements"
                ? "MentorNavItem active"
                : "MentorNavItem"
            }
            onClick={() => setActiveMenu("Announcements")}
          >
            <img src={Speaker} className="MentorNavIcon" alt="speaker" />

            <h4>Announcements</h4>
          </div>

          <div
            className={
              activeMenu === "Reports"
                ? "MentorNavItem active"
                : "MentorNavItem"
            }
            onClick={() => setActiveMenu("Reports")}
          >
            <img src={Reports} className="MentorNavIcon" alt="report" />

            <h4>Reports</h4>
          </div>
          <div
            className={
              activeMenu === "Calendar"
                ? "MentorNavItem active"
                : "MentorNavItem"
            }
            onClick={() => setActiveMenu("Calendar")}
          >
            <img src={Calendar} className="MentorNavIcon" alt="calendar" />

            <h4>Calendar</h4>
          </div>
          <div
            className={
              activeMenu === "Settings"
                ? "MentorNavItem active"
                : "MentorNavItem"
            }
            onClick={() => setActiveMenu("Settings")}
          >
            <img src={Settings} className="MentorNavIcon" alt="settings" />

            <h4>Settings</h4>
          </div>
        </div>
      </div>

      <div className="MentorMainContainer">
        <div className="MentorNavbar">
          <div className="MentorNavbarLeft">
            <img src={Hamburger} className="Hamburger" alt="HamburgerIcon" />

            <div className="MentorWelcomeSection">
              <h4>Welcome back, Mentor</h4>

              <p>Welcome back, John Mentor!</p>
            </div>
          </div>

          <div className="MentorNavbarCenter">
            <div className="MentorSearchBox">
              <img src={Search} className="SearchIcon" alt="search" />

              <input type="text" placeholder="Search anything......" />
            </div>
          </div>

          <div className="MentorNavbarRight">
            <div className="NotificationSection">
              <img
                src={Notification}
                className="NotificationIcon"
                alt="NotificationIcon"
              />
              <span className="NotificationBadge"></span>
            </div>

            <div className="MentorProfileCircle">
              <img
                src={MentorUser}
                className="MentorProfileImage"
                alt="mentor-icon"
              />
            </div>

            <div className="MentorDetails">
              <h4>Mentor</h4>
              <p>Mentor Dashboard</p>
            </div>

            <img src={ProfileArrow} className="ProfileArrow" alt="arrow" />
          </div>
        </div>

        <div className="MentorDashboardContent">
          <div className="MentorStatsContainer">
            <div className="MentorStatCard">
              <div className="InternIconContainer">
                <img
                  src={InternCount}
                  className="InternCount"
                  alt="interncount"
                />
              </div>

              <div className="MentorStatContent">
                <h2>12</h2>

                <p>Total Interns</p>
                <p>under your guidance</p>
              </div>
            </div>

            <div className="MentorStatCard">
              <div className="ActiveInternIconContainer">
                <img src={Present} className="PresentIcon" alt="active" />
              </div>

              <div className="MentorStatContent">
                <h2>8</h2>

                <p>Active Interns</p>
                <p>Currently Active</p>
              </div>
            </div>

            <div className="MentorStatCard">
              <div className="TaskIconContainer">
                <img src={Clipboard} className="Clipboard" alt="clipboard" />
              </div>

              <div className="MentorStatContent">
                <h2>16</h2>
                <p>Task Assigned</p>
                <p>This Month</p>
              </div>
            </div>

            <div className="MentorStatCard">
              <div className="ReviewIconContainer">
                <img src={Reviews} className="Reviews" alt="reviews" />
              </div>
              <div className="MentorStatContent">
                <h2>6</h2>

                <p>Pending Reviews</p>

                <p>Needs your Feedback</p>
              </div>
            </div>

            <div className="MentorStatCard">
              <div className="StarIconContainer">
                <img src={Star} className="Star" alt="star" />
              </div>

              <div className="MentorStatContent">
                <h2>4.7</h2>

                <p>Average Performance</p>

                <p>Out of 5</p>
              </div>
            </div>
          </div>

          <div className="MentorAnalyticsSection">
            <div className="PerformanceCard">
              <div className="PerformanceCardHeader">
                <h3>Intern Performance Overview</h3>
                <span className="SelectedMonth">
                  This Month
                  <img
                    src={MonthArrow}
                    className="MonthArrowIcon"
                    alt="arrow"
                  />
                </span>
              </div>

              <ResponsiveContainer width="100%" height={250}>
                <LineChart
                  data={PerformanceData}
                  margin={{
                    top: 10,
                    right: 20,
                    left: 5,
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
                    width={40}
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
              <div className="ChartPoint">
                <span>
                  <span className="PointDot Blue"></span>
                  Average Score
                </span>

                <span>
                  <span className="PointDot Green"></span>
                  Task Completion (%)
                </span>
              </div>
            </div>

            <div className="InternStatusCard">
              <h3>Intern By Status</h3>
              <div className="InternStatusContent">
                <div className="DonutChartContainer">
                  <ResponsiveContainer width={220} height={220}>
                    <PieChart>
                      <Pie
                        data={InternStatusData}
                        dataKey="value"
                        innerRadius={58}
                        outerRadius={82}
                        paddingAngle={2}
                        startAngle={90}
                        endAngle={-270}
                      >
                        {InternStatusData.map((item, index) => (
                          <Cell key={index} fill={item.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>

                  <div className="DonutChartCenter">
                    <h2>12</h2>
                    <p>Total</p>
                  </div>
                </div>

                <div className="StatusPoint">
                  <div>
                    <span className="StatusDot Green"></span>
                    <p> Active 8(66.7%)</p>
                  </div>

                  <div>
                    <span className="StatusDot Yellow"></span>
                    <p>On leave 2(16.7%)</p>
                  </div>

                  <div>
                    <span className="StatusDot Red"></span>
                    <p> Completed 2(16.7%)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="DeadlineCard">
              <h3>Upcoming Deadlines</h3>

              {DeadlineData.map((item, index) => (
                <div className="DeadlineItem" key={index}>
                  <div className="DeadlineDateBox">
                    <span>{item.month}</span>
                    <h4>{item.date}</h4>
                  </div>

                  <div className="DeadlineContent">
                    <div className="DeadlineHeader">
                      <h4>{item.title}</h4>

                      <span className={`DeadlineStatus ${item.color}`}>
                        {item.due}
                      </span>
                    </div>
                    <p>{item.name}</p>
                  </div>
                </div>
              ))}

              <span className="ViewAllDeadlines">
                View All Deadlines{" "}
                <img src={MentorArrow} className="MentorArrow" alt="arrow" />
              </span>
            </div>
          </div>

          <div className="MentorBottomSection">
            <div className="RecentActivityCard">
              <h3>Recent Activities</h3>

              {RecentActivityData.map((item, index) => (
                <div className="ActivityItem" key={index}>
                  <div className={`ActivityIconContainer ${item.bgColor}`}>
                    <img src={item.icon} alt="activity" />
                  </div>

                  <div className="ActivityContent">
                    <h4>{item.title}</h4>
                    <p>{item.time}</p>
                  </div>
                </div>
              ))}

              <div className="ActivityFooter">
                <span>View all activities</span>
                <img src={MentorArrow} className="MentorArrow" alt="arrow" />
              </div>
            </div>
            <div className="TopInternCard">
              <div className="TopInternHeader">
                <h3>Top Performing Interns</h3>
                <span>View all</span>
              </div>

              {TopInternData.map((item, index) => (
                <div className="TopInternItem" key={index}>
                  <img
                    src={item.image}
                    className="TopInternImage"
                    alt="intern"
                  />

                  <div className="ProgressSection">
                    <div className="ProgressBar">
                      <div
                        className="ProgressFill"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <h4>{item.progress}%</h4>
                </div>
              ))}
            </div>

            <div className="ScheduleCard">
              <div className="ScheduleHeader">
                <h3>My Schedule</h3>
                <span>View Calendar</span>
              </div>

              {ScheduleData.map((item, index) => (
                <div className="ScheduleItem" key={index}>
                  <div className={`ScheduleTime ${item.color}`}>
                    {item.time}
                  </div>

                  <div className="ScheduleContent">
                    <h4>{item.title}</h4>

                    <p>
                      <span className="ScheduleDot"></span>
                      {item.subTitle}
                    </p>
                  </div>
                </div>
              ))}

              <div className="ScheduleFooter">
                <span>View full Schedule</span>
                <img src={MentorArrow} className="MentorArrow" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
