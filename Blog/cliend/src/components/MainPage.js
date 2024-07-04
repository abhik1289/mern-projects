import Header from "./Header";
import {Helmet} from "react-helmet";

function MainPage() {
    return (<>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <Header/>
    </>);
}

export default MainPage;