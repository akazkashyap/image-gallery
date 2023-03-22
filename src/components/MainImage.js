import React, { useContext, useEffect, useState } from 'react'
import { Context as ImageContext } from '../Context/ImageContext'
import "../Styles/MainImage.css"
const path = "/demo-images/"

const MainImage = () => {
    const { state: { imageData, currentImageIndex, totalImages, seletedImageRef }, changeCurrentImage } = useContext(ImageContext)

    let imageSrc = path + imageData[currentImageIndex].src
    return (
        <div className='main'>
            <img
                src={imageSrc}
                alt={imageSrc}
            />
        </div>
    )
}

export default MainImage