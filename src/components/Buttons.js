import React, { useContext, useEffect, useState } from 'react'
import { Context as ImageContext } from '../Context/ImageContext'
import "../Styles/Buttons.css"

const Buttons = () => {

    const [visiblity, setVisiblity] = useState(false)
    const [count, setCount] = useState(0)
    const toggleVisiblity = () => { visiblity ? setVisiblity(false) : setVisiblity(true) }
    const { state: { currentImageIndex, seletedImageRef, totalImages }, changeCurrentImage } = useContext(ImageContext)

    const skipImage = (value) => {
        //checks if selected images is last and increasing
        if (currentImageIndex + 1 === totalImages && value === 1) {
            setVisiblity(false)
            return
        }
        //first image and not decreasing
        if (currentImageIndex === 0 && value === -1) return
        //else 
        changeCurrentImage(currentImageIndex + value)
        seletedImageRef.current.scrollLeft += value * 200
    }

    useEffect(() => {
        if (!visiblity) return

        const interval = setInterval(() => {
            setCount(pv => pv + 1)
            skipImage(1)
        }, 2000)

        return () => {
            clearInterval(interval)
        }

    }, [visiblity, count])

    return (
        <div className='btn'>
            <img src='left-arrow.png'
                alt='previous button'
                title="previous image"
                onClick={() => skipImage(-1)}
            />

            <img
                src="pause.png"
                title='pause button'
                className={!visiblity ? 'hide-btn' : ""}
                onClick={toggleVisiblity}
            />

            <img
                src='play.png'
                title='play button'
                className={visiblity ? 'hide-btn' : ""}
                onClick={toggleVisiblity}
            />

            <img src='next.png'
                title='next button'
                onClick={() => skipImage(1)}
            />

        </div>
    )
}

export default Buttons