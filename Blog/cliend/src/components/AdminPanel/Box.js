import CountUp from 'react-countup';

function Box(props) {
    const { title, number, icon } = props;
    return (<div className="w-4/12 px-2">
        <div className="mainBx flex justify-between p-4 border rounded-xl shadow-md bg-[#ecf0f1] ">
        <div className="text">
            <div className="number font-main text-3xl">
                <CountUp end={number} />
            </div>
            <div className="text capitalize font-secondary">
                {
                    title
                }
            </div>
        </div>
        <div className="icon bg-[#1abc9c] w-[60px] h-[60px] rounded-full text-white flex justify-center items-center text-2xl">
            {
                icon
            }
        </div>
        </div>
    </div>);
}

export default Box;