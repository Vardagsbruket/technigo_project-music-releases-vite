export const ArtistName = ({ artists, artistUrl }) => {
    
    const renderArtistNames = () => artists.map(
      ({name}) => name + ", "
    );
    
    /*const renderArtistUrl = artists.external_urls.filter(
        ({ArtistUrl}) => spotify === true
    )
    const selectedUrl = selectedImage[0].url
    //console.log(selectedImage);*/
  


    

    const artistNames = renderArtistNames();
  //artistUrl har ännu inte fått sin URL, därför funkar den inte

    return (
        <div>
            {artists.m}
            <a href={artistUrl}>
                <p className="artistName">
                    {artistNames}
                </p>
            </a> 
        </div>
    );
};



ArtistName.defaultProps = {
    artists: "No artist name",
};