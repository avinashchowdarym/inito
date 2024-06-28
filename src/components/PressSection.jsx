import '../App.css';
import Blomberg2x from '../imgs/Logo_Bloomberg@2x.png'
import Blomberg1x from '../imgs/Logo_Bloomberg@1x.png'
import Enterpreneur2x from '../imgs/Logo_Enterpreneur@2x.png'
import Enterpreneur1x from '../imgs/Logo_Enterpreneur@1x.png'
import Forbes2x from '../imgs/Logo_Forbes_India@2x.png'
import Forbes1x from '../imgs/Logo_Forbes_India@1x.png'
import Week2x from '../imgs/Logo_The_Week@2x.png'
import Washington2x from '../imgs/Logo_Washington@2x.png'
import Washington1x from '../imgs/Logo_Washington@1x.png'



 

const PressSection = () =>{
    return(
        <main>
            <section className='press-section'>
                <span className='text'>AS SEEN ON</span>
                <div className='press-section__logo-container'>
                    <div className='press-section__logo-container__img'>
                        <img className='press-logo' srcSet={Blomberg2x} src={Blomberg1x} />
                        
                    </div>
                    <div className='press-section__logo-container__img'>
                        <img className='press-logo' srcSet={Forbes2x} src={Forbes1x} />
                        
                    </div><div className='press-section__logo-container__img'>
                        <img className='press-logo' srcSet={Week2x} src={Week2x} />
                        
                    </div><div className='press-section__logo-container__img'>
                        <img className='press-logo' srcSet={Washington2x} src={Washington1x} />
                        
                    </div><div className='press-section__logo-container__img'>
                        <img className='press-logo' srcSet={Enterpreneur2x} src={Enterpreneur1x} />
                        
                    </div>
                </div>
            </section>
        </main>
    )

}

export default PressSection;