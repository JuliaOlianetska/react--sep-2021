import {Link} from "react-router-dom";

export default function Album({album}) {

    return (
    <div>
        <Link to={`${album.id.toString()}` + '/photos'} state={album}>
            <h4>Album id: {album.id} --    Album title: {album.title}</h4>
        </Link>
    </div>
  );
}