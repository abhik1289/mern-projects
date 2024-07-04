import Header from "../components/Header";
import SetTitle from "../components/SetTitle";
function SettingPage() {
    const chooseTopic = [
        {
            key: 1,
            name: "Tech"
        },
        {
            key: 2,
            name: "Sports"
        },
        {
            key: 3,
            name: "Gajets"
        },
        {
            key: 4,
            name: "Shop"
        }
    ];
    return (<section>
        <SetTitle />
        <Header />
        <div className="mainBx pt-32 w-[500px] mx-auto ">
            <div className="box border p-3">
                <div className="title font-main text-xl">
                    Coustomize your site
                </div>
                <div className="mainListBx">
                    <div className="listBox  py-2">
                        <div className="title_name font-secondary text-lg">
                            Choose row option
                        </div>
                        <div className="chkGroup flex list-none font-secondary">
                            <li className="mr-3"> <input type="radio" name="row" id="" /> 2 </li>
                            <li> <input type="radio" name="row" id="" /> 3 </li>
                        </div>
                    </div>
                    <div className="listBox border-t py-2">
                        <div className="title_name font-secondary text-lg flex justify-between">
                            Profile  locking
                            <input type="checkbox" name="lock" id="" />
                        </div>
                    </div>
                    <div className="listBox border-t py-2">
                        <div className="title_name font-secondary text-lg flex justify-between">
                            Notification off
                            <input type="checkbox" name="lock" id="" />
                        </div>
                    </div>
                    <div className="listBox border-t py-2">
                        <div className="title_name font-secondary text-lg flex justify-between">
                            Choose Category
                          
                        </div>
                        <div className="category flex list-none font-main text-lg">
                            {
                                chooseTopic.map((e) => {
                                    return <li className="mr-2"><input type="checkbox" name="lock" id="" /> {e.name}</li>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}

export default SettingPage;