import {Link} from "react-router-dom";
import {Outlet} from "react-router-dom";
import "../../App.css";

export default function Menu() {
    return (

        <div >
            <div className={'header'}>
                <Link to={'/cars'}>Cars</Link>
                <Link to={'/users'}>Users</Link>
                <Link to={'/posts'}>Posts</Link>
                <Link to={'/comments'}>Comments</Link>
            </div>
            <div><Outlet/></div>
        </div>
    );
}