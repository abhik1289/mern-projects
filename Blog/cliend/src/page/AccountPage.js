import Accounts from "../components/AdminPanel/Accounts";
import AdminHeader from "../components/AdminPanel/AdminHeader";

function AccountPage() {
    return (<section className="bg-[#dcdde1] w-screen h-screen">
        <AdminHeader/>
        <Accounts/>
    </section>);
}

export default AccountPage;