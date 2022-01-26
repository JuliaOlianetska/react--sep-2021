import "./App.css";
import {Routes, Route} from "react-router-dom";

import Menu from "./components/menu/Menu";
import PostsPage from "./pages/postsPage/PostsPage";
import PostDetailsPage from "./pages/postDetailsPage/PostDetailsPage";
import HomePage from "./pages/homePage/HomePage";
import UsersPage from "./pages/usersPage/UsersPage";
import UserDetailsPage from "./pages/userDetailsPage/UserDetailsPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";


export default function App() {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Menu/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}/>
                    </Route>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}/>
                    </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>

            </Routes>

        </div>
    );
}