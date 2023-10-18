
export const AlbumName = ({ name, albumUrl }) => {
    return (
        <div className="albumName">  
            <a href={albumUrl}><p>{name}</p></a>
        </div>
    );
};

AlbumName.defaultProps = {
    name: "No album name",
};