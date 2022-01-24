import {Routes, Route, Link} from "react-router-dom";

import './AppStyle.css';
import HomePage from "./pages/homePage/HomePage";
import UsersPage from "./pages/usersPage/UsersPage";
import PostsPage from "./pages/postsPage/PostsPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import Layout from "./components/layout/Layout";
import SinglePostPage from "./pages/singlePostPage/SinglePostPage";

export default function App() {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}/>
                    </Route>
                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>


            </Routes>


        </div>
    );
}