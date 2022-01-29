import "../../App.css";

export default function Photo({photo}) {
  return (
    <div className={'photosAll'}>
      <div>
          <p>Id: {photo.id}</p>
          <p>Album id: {photo.albumId}</p>
          <p>Title: {photo.title}</p>
      </div>
        <div><img src={photo.url} alt=""/></div>
    </div>
  );
}