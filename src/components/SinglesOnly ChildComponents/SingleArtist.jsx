export const SingleArtist = ({ artists, album_type, release_date, total_tracks }) => {
    
    const selectArtist = album_type === "single" ? artists : [];
  
    const artistLinks = selectArtist.map((artist, index) => (
        <span key={index}>
            <a href={artist.external_urls.spotify}>
                {artist.name}
            </a>
            {index < selectArtist.length - 1 && ', '}
        </span>
      ));
  
    return (
      <div className="singleArtist">
        <p>{artistLinks}</p>
        <p>Release date: {release_date}</p>
        <p>Total tracks: {total_tracks}</p>
      </div>
    );
  };
  