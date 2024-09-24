import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import Dashboard from "./_root/Pages/Dashboard/Dashboard";
import UserProfile from "./Components/UserProfile/UserProfile";
import OfficeSettings from "./_root/Pages/Attendance/OfficeSettings";
import MarkAttendance from "./_root/Pages/Attendance/MarkAttendance";
import AttendanceDashboard from "./_root/Pages/Attendance/AttendanceDashboard";
import EmployeesList from "./_root/Pages/Attendance/EmployeesList";
import ProfilePasswordUpdate from "./Components/Header/ProfileDropDown/ProfilePasswordUpdate";
import LoginForm from "./Components/Forms/LoginForm";
import SignUpForm from "./Components/Forms/SignUpForm";
import AdminRole from "./_root/Pages/AdminRole/AdminRole";
import AddEmployeeApp from "./Components/AddEmployee/AddEmployeeApp";

// Define the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />, // Public route for login
  },
  {
    path: "/signup",
    element: <SignUpForm />,
  },
  { path: "/mark-attendance", element: <MarkAttendance /> },

  {
    path: "",

    element: <RootLayout />,
    // Protected routes behind RootLayout
    children: [
      { path: "/dashboard", element: <Dashboard /> }, // Redirects here after login
      { path: "/office-setting", element: <OfficeSettings /> },
      { path: "/attendance", element: <AttendanceDashboard /> },
      // { path: "/employeeslist", element: <EmployeesList /> },
      { path: "/profilepassword", element: <ProfilePasswordUpdate /> },
      {
        path: "/admin-role",
        element: <AdminRole />,
      },
      { path: "/profile", element: <UserProfile /> },
      { path: "/add-employee", element: <AddEmployeeApp /> }, // Routing fixed to match AddEmployeeApp component
    ],
  },
]);

export default router;
