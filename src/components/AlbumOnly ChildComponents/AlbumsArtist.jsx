export const AlbumsArtist = ({ artists, album_type, release_date, total_tracks }) => {
    
    const selectArtist = album_type === "album" ? artists : [];
  
    const artistLinks = selectArtist.map((artist, index) => (
        <span key={index}>
            <a href={artist.external_urls.spotify}>
                {artist.name}
            </a>
            {index < selectArtist.length - 1 && ', '}
        </span>
      ));
  
    return (
      <div className="albumArtist">
        <p>{artistLinks}</p>
        <p>Release date: {release_date}</p>
        <p>Total tracks: {total_tracks}</p>
      </div>
    );
  };
  
