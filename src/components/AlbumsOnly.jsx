import { AlbumsArtist } from "./AlbumOnly ChildComponents/AlbumsArtist";
import { AlbumsCoverImage } from "./AlbumOnly ChildComponents/AlbumsCoverImage";

import { AlbumsName } from "./AlbumOnly ChildComponents/AlbumsName";


export const AlbumsOnly = ({name, album_type, albumUrl, images, artists, id, release_date, total_tracks}) => {
    
    return (
        <div className="albumsOnly">
            <AlbumsCoverImage  images={images} albumUrl={albumUrl} album_type={album_type}/>
            <AlbumsName name={name} album_type={album_type} albumUrl={albumUrl}/>
            <AlbumsArtist artists={artists} album_type={album_type} id={id} release_date={release_date} total_tracks={total_tracks}/>
            
        </div>
       
    );
};

AlbumsOnly.defaultProps = {
    name: "Album is missing",
    artists: "Artist is missing",
    images: "Cover image is missing",
};