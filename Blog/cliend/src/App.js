import {
  Routes, Route
} from "react-router-dom";
import ChangePassword from "./components/ChangePassword";
import Login from "./components/Login";
import Reset from "./components/Reset";
import Signup from "./components/Signup";
import Verify from "./components/Verify";
import PostBlog from './components/PostBlog';
import Profile from "./page/Profile-Page";
import HomePage from './page/Home-Page';
import SettingPage from "./page/Setting-Page";
import RecentPage from './page/Recent-Page';
import ReadingPage from "./page/Reading-Page";
import ErrorPage from './page/Error-Page';
import DashBoard from './page/Dashboard-Page';
import AddUserPage from './page/AddUserPage';
import BasicPage from "./page/BasicPage";
import AccountPage from './page/AccountPage';
import ReportPage from "./page/ReportPage";
function App() {
  return (<>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify/email=:email" element={<Verify />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/changePwd/email=:email/id=:id" element={<ChangePassword />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/setting" element={<SettingPage />} />
      <Route path="/recent" element={<RecentPage />} />   
      <Route path="/admin" element={<DashBoard />} />   
      <Route path="/post" element={<ReadingPage />} />
      <Route path="/admin/postBlog" element={<PostBlog />} />   
      <Route path="/admin/adduser" element={<AddUserPage />} />   
      <Route path="/admin/basic" element={<BasicPage />} />   
      <Route path="/admin/accounts" element={<AccountPage />} />   
      <Route path="/admin/report" element={<ReportPage />} />   
      <Route path="/ab" element={<ErrorPage />} />   





      <Route path="/*" element={<ErrorPage />} />   
    </Routes>
  </>);
}

export default App;