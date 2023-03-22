import React, { useContext, useRef, useEffect } from 'react'
import { Context as ImageContext } from '../Context/ImageContext'
import "../Styles/BottomSlider.css"
import DetailBar from './DetailBar'
const path = "/demo-images/"

const BottomSlider = ({ }) => {
    const { state: { imageData, currentImageIndex }, changeCurrentImage, setImageRef } = useContext(ImageContext)
    const ref = useRef(null)

    useEffect(() => {
        setImageRef(ref)
    }, [])

    return (
        <div className='bottom-bar'>
            <DetailBar />
            <div className='slider' ref={ref}>
                {
                    imageData.map((obj, index) => {
                        return (
                            <img
                                onClick={() => {
                                    changeCurrentImage(index)
                                }}
                                src={path + obj.src}
                                key={obj.id}
                                className={obj.id === currentImageIndex ? "selected-img" : ""}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BottomSlider