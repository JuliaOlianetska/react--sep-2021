import './App.css';

import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

export default function App() {
  return (
      <div className={'wrap'}>

        <div>
          <Users/>
        </div>
        <div className={'posts-comments'}>
          <Posts/>
          <Comments/>
        </div>
      </div>
  );
}