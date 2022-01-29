import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";

import {albumsService, userService} from "../../services/Services";
import Photo from "../../components/photo/Photo";

export default function Photos() {
    const {albumId} = useParams();


    const [photos, setPhotos] = useState([]);
    useEffect(()=>{
        albumsService.getPhotos(albumId).then(photos=> setPhotos([...photos]))
    },[albumId])
    return (
        <div>
            {photos.map(photo=> <Photo key={photo.id} photo={photo}/>)}

        </div>
    );
}