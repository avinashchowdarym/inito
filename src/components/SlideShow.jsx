import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import '../App.css'
import ovulationConfirmed from '../imgs/ovulation_confirmed.png'
import harmonchart from '../imgs/hormone_chart.png'
import cycleday from '../imgs/cycle_day_view.png'


const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const imgs = [ovulationConfirmed, harmonchart, cycleday];
const delay = 2500;

const SlideShow = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow inline-flex items-center">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(0, 0, 0)` }}
            >
                {imgs.map((im, id) => (
                    <img src={im} className="slick-slide" key={id} style= {id===index ? {display:''}:{display:'none'}}/>
                ))}
            </div>
        </div>
    );
}

export default SlideShow;