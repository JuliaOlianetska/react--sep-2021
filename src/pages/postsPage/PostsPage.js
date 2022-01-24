import {useEffect, useState} from "react";
import {Outlet, useSearchParams} from "react-router-dom";

import Post from "../../components/post/Post";
import {postService} from "../../services/Services";

export default function PostsPage() {

    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useSearchParams();
    useEffect(() => {
        postService.getAll().then(value => {
            const name = query.get('name');
            let filter = [...value]
if (name) {
    filter =value.filter(post => post.title.includes(name))
}
            setPosts(filter)
        })
    }, [query])

    const submit = (e) => {
        e.preventDefault();
        setQuery({name: e.target.search.value})

    }
    return (
        <div>
            <form onSubmit={submit}><input type="search" name={'search'}/>
                <button>Search</button>
            </form>

            {posts.map(post => <Post key={post.id} post={post}/>)}
            <div><Outlet/></div>
        </div>
    );
}