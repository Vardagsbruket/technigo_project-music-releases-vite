export const AlbumsName = ({name, album_type, albumUrl}) => {
    const selectAlbum = name
    if (album_type === "album")
        
    return (
        <div className="albumName">
            <a href={albumUrl}><p>{selectAlbum}</p></a>
        </div>
    )
}