
export const AlbumName = ({ name, albumUrl }) => {
    return (
        <div className="albumName">  
            <a href={albumUrl}><h2>{name}</h2></a>
        </div>
    );
};

AlbumName.defaultProps = {
    name: "No album name",
};