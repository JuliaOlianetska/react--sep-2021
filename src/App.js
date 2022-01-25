import {Routes, Route, Navigate} from "react-router-dom";

import './AppStyle.css';
import HomePage from "./pages/homePage/HomePage";
import UsersPage from "./pages/usersPage/UsersPage";
import PostsPage from "./pages/postsPage/PostsPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import Layout from "./components/layout/Layout";
import SinglePostPage from "./pages/singlePostPage/SinglePostPage";
import SingleUserPage from "./pages/singleUserPage/SingleUserPage";
import Comments from "./components/comments/Comments";
import Posts from "./components/posts/Posts";

export default function App() {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<SingleUserPage/>}>
                            <Route path={':posts'} element={<Posts/>}/>
                            <Route path={':posts/:id'} element={<Navigate to={'/posts'}/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}>
                            <Route path={':comments'} element={<Comments/>}/>
                        </Route>

                    </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>


            </Routes>


        </div>
    );
}