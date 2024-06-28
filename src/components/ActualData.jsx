
import '../App.css'
import ovulationConfirmed from '../imgs/ovulation_confirmed.png'
import harmonchart from '../imgs/hormone_chart.png'
import cycleday from '../imgs/cycle_day_view.png'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import SlideShow from './SlideShow';

const imgArr = [ovulationConfirmed, harmonchart, cycleday];
const delay = 2500;
const ActualData = () => {
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
                    prevIndex === imgArr.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);
    return (
        <section className="predict-with-actual-data">
            <div className='content'>
                <h1>Predict and confirm your ovulation with <span className="image_as_underline">actual</span> data</h1>
                <p className="description">
                    Unlike most ovulation tests that only give you "yes/no" results, Inito provides <strong>real numerical values</strong> of your
                    fertility hormones.<br /><br />
                    If you have irregular cycles, actual data is necessary to know <em>exactly</em> when you ovulate, and when is the best time to try to conceive.
                </p>
                <a className="button" href="/buy-now">
                    <span className="button__small-view">
                        GET THE INITO KIT
                    </span>
                    <span className="button__large-view">
                        Get the Inito Kit
                    </span>
                </a>
            </div>
            <div className='iphone slick-initialized slick-slider'>
                <div className='slick-list draggable'>
                    <SlideShow/>
                </div>

            </div>

        </section>


    )
}
export default ActualData;