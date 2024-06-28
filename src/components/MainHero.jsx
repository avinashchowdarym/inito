import '../App.css';
import star from '../imgs/star.png'
import LargeImg from '../imgs/large-img.png'
import SmallImg from '../imgs/small_img.png'


const MainHero = () => {
    return (
        <section className="main-hero">
            <div className="container">
                <div className="tagline-text">
                    <div className="main-hero-stars flex">
                        <img className="img-star" src={star} />
                        <img className="img-star" src={star} />
                        <img className="img-star" src={star} />
                        <img className="img-star" src={star} />
                        <img className="img-star" src={star} />
                        <span className='text'>TRUSTED BY 20,000+ COUPLES</span>

                    </div>
                    <h1 className='font-bold'>Track your fertility hormones at home, in 10 minutes</h1>
                    <h6>Get accurate results of  <strong>Estrogen, LH, PdG (urine metabolite of progesterone) and FSH</strong> with
                        Inito, the all-in-one fertility monitor.</h6>
                        <div className='main-hero__button relative'>
                        <a className='button font-semi-bold tex fertility-kit slidedown' href='#only-fertility-kit'>How does Inito work?</a>
                    </div>

                </div>
                <div className='main-hero__img'>
                    <img className='large-view' src={LargeImg} />
                    <img className='small-view' src={SmallImg} />
                </div>

            </div>
            <div className='main-hero__button'>
                <a className='button font-semi-bold tex fertility-kit slidedown' href='#only-fertility-kit'>HOW DOES INITO WORK</a>
            </div>

        </section>
    )
}

export default MainHero;