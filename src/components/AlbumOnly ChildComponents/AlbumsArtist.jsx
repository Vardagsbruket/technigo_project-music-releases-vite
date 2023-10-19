export const AlbumsArtist = ({artists, album_type}) => {

    const selectArtist = album_type === "album" ? artists : [];
   
    
      
    const artistNames = selectArtist.map(({name}) => name).join(", ");
    
    const artistUrl = artists[0].external_urls.spotify;
   
    
        
    return (
        <div className="albumArtist">
            <a href={artistUrl}><p>{artistNames}</p></a>
        </div>
    )
}
