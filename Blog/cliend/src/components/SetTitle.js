import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";

function SetTitle(props) {
    const { adminTitle } = props;
    const location = useLocation();
    let getPathName;
    if (adminTitle) {
        getPathName = location.pathname.split("/")[2];
    } else {
        getPathName = location.pathname;
    }
    let getpathNameLenght = getPathName.length;
    let getMainName = adminTitle ? getPathName.slice(0, getpathNameLenght) : getPathName.slice(1, getpathNameLenght);
    let displayTitle = getMainName.charAt(0).toUpperCase() + getMainName.slice(1);
    return (<Helmet>
        <meta charSet="utf-8" />
        <title>{displayTitle} Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>);
}

export default SetTitle;