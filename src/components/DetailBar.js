import React, { useContext } from 'react'
import { Context as ImageContext } from '../Context/ImageContext'
import "../Styles/DetailBar.css"
import Buttons from './Buttons'

const DetailBar = () => {
    const { state: { currentImageIndex, totalImages } } = useContext(ImageContext)

    return (
        <div className='detail-bar'>
            <div className='details'>
                <p>Files : {currentImageIndex + 1}/{totalImages}</p>

                <select className='filter'>
                    <option>No Filter</option>
                    <option>--</option>
                    <option>--</option>
                </select>
                <select>
                    <option>All</option>
                    <option>--</option>
                    <option>--</option>
                </select>
            </div>
            <Buttons />

        </div>
    )
}

export default DetailBar