import Ripples from 'react-ripples';
import {Link} from 'react-router-dom';
const PostTypeTitle = (props) => {
    return (<div className="title font-main flex justify-between">
   <div className="titleTXt text-3xl">
   {
        props.title
    }
   </div>
   {
    props.showButton ?<div className="btnBx">
    <Ripples>
 <Link to={props.url}>
 <button className="bg-blue-600 text-white px-4 py-1 hover:bg-blue-500">{props.buttonText}</button>
 
 </Link>
 </Ripples>
    </div>:""
   }
   
  </div>);
}
 
export default PostTypeTitle;