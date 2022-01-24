import {Link, Outlet, NavLink} from "react-router-dom";

import '../../AppStyle.css';


export default function Layout() {
  return (
    <div>

        <div className={'header'}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
        <div className={'outlet'}><Outlet/></div>
        <div className={'footer'}>
            @ReactRouterDom
        </div>

    </div>
  );
}