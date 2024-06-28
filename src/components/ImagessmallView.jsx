import '../App.css';

import  imgsmall  from '../imgs/imgsmallview.svg'
import  imgsml2  from '../imgs/imgsml2.svg'

const ImagesmallView = () => {
    return (
        <div className="images-in-small-view">
            <div className="content">
                <img src={imgsmall} />
                <span className="img-text">TRUSTED BY 20,000+ COUPLES</span>
            </div>
            <div className="content">
                <img src={imgsml2} />
                <span className="img-text">HSA/FSA ELIGIBLE</span>
            </div>

        </div>
    )
}

export default ImagesmallView;