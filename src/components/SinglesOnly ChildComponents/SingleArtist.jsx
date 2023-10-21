export const SingleArtist = ({artists, release_date, total_tracks}) => {

  //const selectArtist = album_type === "single" ? artists : [];
 console.log(release_date, total_tracks)

  //const artistNames = selectArtist.map(({name}) => name).join(", ");
  
  //const artistUrl = artists[0].external_urls.spotify;


  const artistLinks = artists.map((artist, index) => (
      <span key={index}>
          <a href={artist.external_urls.spotify}>
              {artist.name}
          </a>
          {index < artists.length - 1 && ', '}
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


//const renderArtistNames = () => artists.map(
  //({name}) => name + ", "
  //);

  // const selectArtist = artists
  //if (album_type === "single")