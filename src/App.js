import "./App.css";
import {Routes, Route} from "react-router-dom";

import Menu from "./components/menu/Menu";
import PostsPage from "./pages/postsPage/PostsPage";
import PostDetailsPage from "./pages/postDetailsPage/PostDetailsPage";
import HomePage from "./pages/homePage/HomePage";
import UsersPage from "./pages/usersPage/UsersPage";
import UserDetailsPage from "./pages/userDetailsPage/UserDetailsPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import Comments from "./components/comments/Comments";
import AlbumsPage from "./pages/albumsPage/AlbumsPage";
import PhotosPage from "./pages/photosPage/PhotosPage";
import PostsOfUserPage from "./pages/postsOfUserName/PostsOfUserPage";


export default function App() {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Menu/>}>

                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={':posts'} element={<PostsOfUserPage/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<AlbumsPage/>}>
                            <Route path={':albumId/photos'} element={<PhotosPage/>}/>

                        </Route>


                    </Route>


                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}>
                            <Route path={':comments'} element={<Comments/>}/>
                        </Route>
                    </Route>






                        <Route path={'*'} element={<NotFoundPage/>}/>

                </Route>
            </Routes>

        </div>
    );
}