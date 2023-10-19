import {useState} from 'react';

function Hover() {
    return (
        <span className="icon-container">
            <button className="icon heart"></button>
            <button className="icon play"></button>
            <button className="icon dots"></button>
        </span>
    );
  }


export const CoverImage = ({ images, albumUrl }) => {
    const selectedImage = images.filter(
        ({height}) => height === 300
    )
    const selectedUrl = selectedImage[0].url
    //console.log(selectedImage);

    
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
      setIsHovering(true);
    };
    const handleMouseOut = () => {
      setIsHovering(false);
    };


    return (
        <div className="albumCover" onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
            
           <a href={albumUrl}><img className="darker" src={selectedUrl} alt="Album cover"/></a>

           {isHovering && <Hover />}
        </div>
        
    );
};

CoverImage.defaultProps = {
    //images: ["No cover image"]
};

//images[1].ulr.map