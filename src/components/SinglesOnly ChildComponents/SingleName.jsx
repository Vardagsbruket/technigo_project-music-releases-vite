export const SingleName = ({ name, album_type, albumUrl }) => {
    const selectSingle = name;
  
    if (album_type === "single") 
      return (
        <div className="singleName">
          <a href={albumUrl}>
            <p>{selectSingle}</p>
          </a>
        </div>
      );
    
  };
  