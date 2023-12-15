import React from 'react';

const ImageComponent = ({ imageBytes, imageClass }) => {
    const imageUrl = `data:image/png;base64,${imageBytes}`

    return (
        <>
            <img className={imageClass} src={imageUrl} alt="Image" />
        </>
    );
};

export default ImageComponent;