export const SingleArtist = ({artists, album_type, release_date, total_tracks}) => {

    const selectArtist = album_type === "single" ? artists : [];
   
    
      
    const artistNames = selectArtist.map(({name}) => name).join(", ");
    
    const artistUrl = artists[0].external_urls.spotify;

        
    return (
        <div className="singleArtist">
            <a href={artistUrl}><p>{artistNames}</p></a>
            <p>Release date: {release_date}</p>
            <p>Total tracks: {total_tracks}</p>
        </div>
    )
}


//const renderArtistNames = () => artists.map(
    //({name}) => name + ", "
    //);

    // const selectArtist = artists
    //if (album_type === "single")
