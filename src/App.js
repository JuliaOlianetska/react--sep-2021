import {Routes, Route} from "react-router-dom";

import Cars from "./components/cars/Cars";
import Menu from "./components/menu/Menu";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

export default function App() {

    return (
        <div>
            <Routes>
<Route path={'/'} element={<Menu/>}>
    <Route path={'cars'} element={<Cars/>}/>
    <Route path={'users'} element={<Users/>}/>
    <Route path={'posts'} element={<Posts/>}/>
    <Route path={'comments'} element={<Comments/>}/>
</Route>
            </Routes>
        </div>
    );
}