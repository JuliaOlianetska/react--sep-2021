import {NavLink, Outlet} from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <div className={'header'}>
        <NavLink to={'/users'}>Users</NavLink>
        <NavLink to={'/posts'}>Posts</NavLink>
      </div>
      <div className={'outlet'}><Outlet/></div>
    </div>
  );
}