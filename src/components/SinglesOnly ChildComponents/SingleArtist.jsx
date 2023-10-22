export const SingleArtist = ({ artists, album_type, release_date, total_tracks }) => {
    
  const selectArtist = album_type === "single" ? artists : [];

  const artistLinks = selectArtist.map((artist, index) => (
      <a key={index} href={artist.external_urls.spotify}>
        {artist.name}
        {index < selectArtist.length - 1 && ', '}
      </a>
    ));

  return (
    <div className="singleArtist">
      <p>{artistLinks}</p>
      <p>Release date: {release_date}</p>
      <p>Total tracks: {total_tracks}</p>
    </div>
  );
};
