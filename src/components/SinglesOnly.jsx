import { SingleArtist } from "./SinglesOnly ChildComponents/SingleArtist";
import { SingleCoverImage } from "./SinglesOnly ChildComponents/SingleCoverImage";
import { SingleName } from "./SinglesOnly ChildComponents/SingleName";


export const SinglesOnly = ({name, album_type, albumUrl, images, artists, release_date, total_tracks}) => {
    console.log("Only", release_date, total_tracks)
    return (
        <div className="singlesOnly">
            <SingleCoverImage  images={images} albumUrl={albumUrl} album_type={album_type}/>
            <SingleName name={name} album_type={album_type} albumUrl={albumUrl}/>
            <SingleArtist artists={artists} album_type={album_type} release_date={release_date} total_tracks={total_tracks}/>
             
        </div>
       
    );
};

SinglesOnly.defaultProps = {
    name: "Album is missing",
    artists: "Artist is missing",
    images: "Cover image is missing",
};

