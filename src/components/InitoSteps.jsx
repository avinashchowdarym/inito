import '../App.css'


const InitoSteps = () => {

    return (
        <section className="inito-steps">
            <div className="content">
                <h1 className="text-dtheme text-center">A <span className="image_as_underline">fertility lab</span> at your fingertips</h1>
                <p className="description">
                    Easy-to-read fertility diagnostic results directly on your iPhone*, in just 10 minutes.
                </p>
                <div className="visible-in-large">
                    <a className="button" href="/buy-now">Get the Inito kit</a>
                    <div className="inito-monitor-support">
                        * The Inito Fertility Monitor currently supports iPhone 7 and up. Android phones are not supported at the moment.
                    </div>
                    <div className="download-on-app-store">
                        <a target="_blank" href="https://apps.apple.com/us/app/inito-fertility-ovulation/id1183799668">
                            <img src="https://cdn.inito.com/inito_website/download_on_app_store.png"/>
                        </a>      </div>
                </div>
            </div>
            <div className="inito-steps-con">
                <div className="inito-step">
                    <div className="video-con">
                        <span className="num" style={{background:'#BDE0E6'}}>1</span>
                        <video autoPlay="autoplay" loop="loop" muted="muted" onContextMenu="return false" alt="Video: Dip test strip in urine" playsInline={true} src="https://cdn.inito.com/inito_website/step1.mp4"></video>
                    </div>
                    <div className="data-con">
                        <span className="data text-dtheme font-med"><span className="num">1</span>Dip the test strip in urine for 15 seconds.</span>
                    </div>
                </div>
                <div className="inito-step">
                    <div className="video-con">
                        <span className="num" style={{background:'#96CDD7'}}>2</span>
                        <video autoPlay="autoplay" loop="loop" muted="muted" onContextMenu="return false" alt="Video: Insert strip into the monitor" playsInline={true} src="https://cdn.inito.com/inito_website/step2.mp4"></video>
                    </div>
                    <div className="data-con">
                        <span className="data text-dtheme font-med"><span className="num">2</span>Attach the Inito Fertility Monitor to your iPhone*.</span>
                    </div>
                </div>
                <div className="inito-monitor-support">
                    * The Inito Fertility Monitor currently supports iPhone 7 and up. Android phones are not supported at the moment.
                </div>

                <div className="inito-step">
                    <div className="video-con">
                        <span className="num" style={{background:'#64B4C3'}} >3</span>
                        <video autoPlay="autoplay" loop="loop" muted="muted" onContextMenu="return false" alt="Video: Identify up to 6 fertile days" playsInline={true} src="https://cdn.inito.com/inito_website/step3.mp4"></video>
                    </div>
                    <div className="data-con">
                        <span className="data text-dtheme font-med"><span className="num">3</span>Insert the test strip into the Inito Fertility Monitor.</span>
                    </div>
                </div>
                <div className="inito-step">
                    <div className="video-con">
                        <span className="num">4</span>
                        <video autoPlay="autoplay" loop="loop" muted="muted" onContextMenu="return false" alt="Video: Identify up to 6 fertile days" playsInline={true} src="https://cdn.inito.com/inito_website/step4.mp4"></video>
                    </div>
                    <div className="data-con">
                        <span className="data text-dtheme font-med"><span className="num">4</span>Get personalized results on our App in 10 minutes.</span>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default InitoSteps;

