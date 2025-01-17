import { HoverEffect } from "../HoverEffect";

export const SingleCoverImage = ({ images, albumUrl, album_type }) => {

    const selectedSingleCover = images.filter(({ height }) => height === 300);
        //console.log("Selected Single Cover:", selectedSingleCover);

    if (album_type === "single" && selectedSingleCover.length > 0) {
        const selectedUrl = selectedSingleCover[0].url;
            //console.log("Selected URL:", selectedSingleCover[0].url);


        return (
            <div className="singlesCover">
                <a href={albumUrl}>
                    <HoverEffect /> 
                    <img src={selectedUrl} alt="Album cover" />
                </a>
            </div>
        );

    } 
};

SingleCoverImage.defaultProps = {
    //images: ["No cover image"]
};