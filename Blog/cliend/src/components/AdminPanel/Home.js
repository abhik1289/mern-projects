import { BsFillFileEarmarkPostFill, BsFillPenFill } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import Box from './Box';


function AdminHome() {
    return (<section className="pt-20">
        <div className="mainBx mx-auto w-5/6">
            <div className="upperPart flex">
                <Box
                    title="total posts"
                    number="110"
                    icon={<BsFillFileEarmarkPostFill />}
                />
                <Box
                    title="total user"
                    number="110"
                    icon={<FaUserFriends />}
                />
                <Box
                    title="today posts"
                    number="110"
                    icon={<BsFillPenFill />}
                />
            </div>
            <div className="bottomPart flex">
<div className="w-6/12">
    
</div>
            </div>
        </div>
    </section>);
}

export default AdminHome;