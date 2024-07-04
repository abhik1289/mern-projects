import AdminHome from "../components/AdminPanel/Home";
import SetTitle from "../components/SetTitle";
import AdminHeader from './../components/AdminPanel/AdminHeader';

function DashBoard() {
    return (<>
    <SetTitle/>
    <AdminHeader/>
    <AdminHome/>
    </>);
}

export default DashBoard;