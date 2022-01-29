import {useEffect, useState} from "react";
import {Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../services/Services";
import Album from "../../components/album/Album";


export default function AlbumsPage() {
    const {id} = useParams();


    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        userService.getAlbums(id).then(albums => setAlbums([...albums]))
    }, [])

    return (
        <div>
            <div>
                <h3>Albums:</h3>
                {albums.map(album => <Album key={album.id} album={album}/>)}
            </div>


            <div><Outlet/></div>
        </div>
    );
}