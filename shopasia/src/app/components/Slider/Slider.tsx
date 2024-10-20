"use client";
import "./slider.css";
import { useState } from "react";

const images = [
    "/images/TopBanner.jpg",
    "/images/purple.jpg",
    "/images/TopBanner.jpg",
    "/images/TopBanner.jpg",
    "/images/TopBanner.jpg"
]
export default function Slider() {
    const [currentInd, setCurrentInd] = useState(0);
    const [direction, setDirection] = useState('');

    const next = () => {
        setDirection('left');
        // setCurrentInd((prevInd) => (prevInd +1) % images.length);
        setCurrentInd((prevInd) => {
            if (prevInd === images.length - 1) {
                return 0;
            } else {
                return prevInd + 1;
            }
        })
    }

    const prev = () => {
        setDirection('right');
        // setCurrentInd((prevInd) => (prevInd - 1 + images.length) % images.length);
        setCurrentInd((prevInd) => {
            if (prevInd === 0) {
                return images.length - 1;
            } else {
                return prevInd - 1;
            }
        });
    };

    const wrappedSlice = <T,>(arr: T[], start: number, end: number): T[] => {
        const len = arr.length;
        const result: T[] = [];

        for (let i = start; i < start + len; i++) {
            const ind = i % len;
            result.push(arr[ind]);

            if (ind == end) break;
        }
        return result;
    }

    // const displayedImages = images.slice(currentInd, currentInd + 3).concat(images.slice(0, Math.max(0, (currentInd + 3) % images.length)));

    return (
        <div className = "slider_container">
            <button className="prevButton" onClick = {prev}>
                 <img src="/images/TopBanner.png" alt="Previous" /> 
            </button>
            <div className = "image_container"style={{
                transform: 'translateX(-${(currentInd * 100) / 3}%)'
            // transform: `translateX(${direction === 'left' ? '-' : ''}${(currentInd * 100) / 3}%)`
        }}>
                {/* review */}
                {/* {images.slice(currentInd, currentInd+3).map((image, index) => ( */}
                {/* {displayedImages.map((image, index) => (  */}
                {wrappedSlice(images, currentInd, currentInd+2).map((image, index) => ( 
                
                    <img key={index} src={image} className="image" alt={`Slide ${currentInd + index + 1}`} />
                ))}
                {/* <img src={images[currentInd]} className ="image" alt={'Slide ${currentInd + 1}'} /> */}
            </div>
            <button className="nextButton" onClick = {next}> next </button>
        </div>

    )
}