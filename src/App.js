import './App.css';
import { Route, Routes } from "react-router-dom";
import SidebarNavLink from './Components/Sidebar/SidebarNavLink/SidebarNavLink';
import SidebarMenu from './Components/Sidebar/SidebarMenu/SidebarMenu';
import Suggestions from './Pages/suggestions/Suggetions';
import ProfileSettings from './Pages/Profile-Settings/profile-settings';
import SignIn from './Pages/Signin/signin';
import Dashboard from './Pages/Dashboard/Dashboard';
import Peoples from './Pages/People/People';
import CustomCard from './Components/CustomCard/CustomCard';

function App() {
  return (
    <Routes>
      <Route strict exact path="/" element={<SignIn />} />
      <Route strict exact path="/dashboard" element={<Dashboard />} />
      <Route strict exact path="/profile" element={<ProfileSettings />} />
      <Route strict exact path="/people" element={<Peoples />} />
      <Route strict exact path="/sidebar" element={<SidebarMenu />} />
      <Route strict exact path="/userrole" element={<SidebarNavLink />} />
      <Route strict exact path="/suggestion" element={<Suggestions />} />
    </Routes>);
}

export default App;
