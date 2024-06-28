import { useEffect, useRef, useState } from 'react';
import '../App.css'
 


const delay = 2500;
const wd = screen.width;

const reviews = [{
    id: 1,
    description: ' I purchased this monitor to figure out my ovulation patterns after 2 failed IUIs. I discovered that my LH surge is a gradual onset and that we inseminated far too early. Now that we know which day I actually ovulate as it confirms my fertile window, I am hoping to be more succesful on my next IUI.Highly recommend this if you are looking for guaranteed results!',
    name: 'NANCY'
},
{
    id: 2,
    description: 
    " I wish I had used this sooner. Dont waste your money on other OPK tests.This system is more accurate and monitors 4 key hormones that effect ovulation. The other cheaper brands can not do this. It gives you a better insight on your  bodys hormone fluctuations during a cycle and where any possible problems with conception could be coming from. It is worth the investment and can save you time on identifying fertility issues and help you get pregnant faster. "
    , name: 'Gonzales'
}, {
    id: 3,
    description: 'My husband and I were TTC for 3 months and we got pregnant the first month of using Inito! I started with the cheap LH/ovulation strips but my progression seemed to be off at times with that.     I loved how Inito gives you the exact values so that you’re able to tell when your peak is more accurately. Also loves that it measures PdG because I never really was able to get real spikes to confirm ovulation   when I would take my basal body temp, but Inito was able to confirm by measuring my PdG.',
    name: 'MJ'
}, {
    id: 4,
    description: 'I have PCOS and have been on letrozole and using LH tests to time intercourse. I was hesitant to buy this because there are so many different things but I liked the added hormones it tracks. I just used it with my last cycle and it was so great! Showed me my estrogen rising so I knew I was in my fertile window two days before my LH rise. I just got the “confirmed ovulation” because my PdG increased. It’s so great to have a little more insight into what is going on!  ',
    name: 'Ashley'
}
    , {
    id: 5,
    description: 'This product is worth every penny!! I was using only LH strips to track my ovulation and we would “baby make” on each peak day and did not get pregnant. After receiving this device and trying it since it says it tests for estrogen and progesterone to CONFIRM ovulation - we got pregnant  the first month trying! Apparently I was peaking a day before what the LH strips did not pick up and this device did because it saw my estrogen rise and my LH START to rise and said that was my peak.',
    name: 'Golang'
}
]
const Review = () => {
    const[width,setWidth] = useState(0);
    
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        setWidth(screen.width);
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [width,index]);
    let wd = 0;
    if(width > 770) {
        wd = 1064;
    }
    else{
        wd = 0.867*width;
    }
    console.log(wd);

    return (
        <section className="user-reviews" id="user-reviews-carousal">
            <div className="review-container slick-initialized slick-slider slick-dotted">

                <div className="slick-list draggable">
                    <div className="slick-track" style={{ opacity: '1', width: `${wd*11}px`, transform: `translate3d(${(-wd * index)}px,0px,0px)` }}>
                        {
                            reviews.map((review, id) => (
                                <div className={id === index ? 'user-review slick-slide slick-current slick-active' : "user-review slick-slide "} role="tabpanel" aria-describedby="slick-slide-control04" style={{ width: `${wd-40}px` }}>
                                    <div className="user-review__card">
                                        <div className="user-review__rating">
                                            <img className="user-rating" src="https://cdn.inito.com/inito_website/star.png" />
                                            <img className="user-rating" src="https://cdn.inito.com/inito_website/star.png" />
                                            <img className="user-rating" src="https://cdn.inito.com/inito_website/star.png" />
                                            <img className="user-rating" src="https://cdn.inito.com/inito_website/star.png" />
                                            <img className="user-rating" src="https://cdn.inito.com/inito_website/star.png" />
                                        </div>
                                        <div className="user-review__data">
                                            <p className="text font-reg">
                                                {review.description}
                                            </p>
                                            <div className="card-username">
                                                {review.name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="data-username">
                                        {review.name}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <ul className="g-gallery-pagination" style={{ display: 'flex' }} role="tablist">
                    {
                        reviews.map((review, id) => (
                            <li className={id === index ? 'slick-active' : ''} role="presentation">
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Review;