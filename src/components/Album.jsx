import { AlbumName } from "./child components/AlbumName";
import { ArtistName } from "./child components/ArtistName";
import { CoverImage } from "./child components/CoverImage";


export const Album = ({name, artists, images, albumUrl}) => {
    
    return (
        <div className="album">
            <CoverImage images={images} albumUrl={albumUrl} /> 
            <AlbumName name={name} />
            <ArtistName artists={artists} /> 
             
        </div>
        //<div className="singles">

        //</div>
    );
};

Album.defaultProps = {
    name: "Album is missing",
    artists: "Artist is missing",
    images: "Cover image is missing",
};