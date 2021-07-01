import React, { useState, useEffect } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import WeddingsPic1 from '../images/weddings-1.webp'
import WeddingsPic2 from '../images/weddings-2.webp'
import WeddingsPic3 from '../images/weddings-3.webp'
const WeddingsCarousel = function (props) {
    const [pause, setPause] = React.useState(false)
    const timer = React.useRef()
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        duration: 3000,
        dragStart: () => {
            setPause(true)
        },
        dragEnd: () => {
            setPause(false)
        },
    });
    const pics = [
        WeddingsPic1,
        WeddingsPic2,
        WeddingsPic3
    ]
    useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
            setPause(true)
        })
        sliderRef.current.addEventListener("mouseout", () => {
            setPause(false)
        })
    }, [sliderRef])

    useEffect(() => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.next()
            }
        }, 5000)
        return () => {
            clearInterval(timer.current)
        }
    }, [pause, slider])

    return (<div className={'weddings__photobook'}>
        <div className="weddings__photobook-frame">
            <div ref={sliderRef} className={'keen-slider'}>
                <div className="keen-slider__slide" style={{ backgroundImage: `url(${WeddingsPic1})` }}>
                </div>
                <div className="keen-slider__slide" style={{ backgroundImage: `url(${WeddingsPic2})` }}>
                </div>
                <div className="keen-slider__slide" style={{ backgroundImage: `url(${WeddingsPic3})` }}>
                </div>
            </div>
        </div>
    </div>)

}


export default WeddingsCarousel

