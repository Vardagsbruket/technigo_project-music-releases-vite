export const ArtistName = ({ artists, artistUrl }) => {
    
    const renderArtistNames = () => artists.map(
      ({name}) => name + ", "
    );

    const artistNames = renderArtistNames();

    /*const artistUrls = artists.map(
        artist => artist.external_urls.spotify
    );

    console.log(artistUrls);*/

    const artistList = artists.map((artist, index) => (
        <span key={index}>
            <a href={artist.external_urls.spotify}> 
                <p className="artistName">{artist.name}</p>
            </a>
        </span>
      ));
   
    //const selectedUrl = selectedImage[0].url
    //console.log(selectedImage);

    return (
        artistList
    );
};

ArtistName.defaultProps = {
    artists: "No artist name",
};