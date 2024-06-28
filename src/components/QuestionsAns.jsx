import { useState } from 'react';
import '../App.css'

const QuestionAns = () => {
    const [active1,setActive1] = useState(false);
    const [active2,setActive2] = useState(false);
    const [active3,setActive3] = useState(false);
    const [active4,setActive4] = useState(false);
    const [active5,setActive5] = useState(false);
    const [active6,setActive6] = useState(false);
    const [active7,setActive7] = useState(false);
    const [active8,setActive8] = useState(false);
    const [active9,setActive9] = useState(false);



    return (
        <section className="faqs-sec-v2 lp-faq">
            <h1 className="text-dtheme">Your top <span className="image_as_circled">questions, <br/></span>answered</h1>
            <ul className="faqs-v2" id="faqs-sec-list">
                <div className="column-1">
                    <li className={(active1) ? 'active':'' }>
                        <div className="head">
                            <h6 className="text-dtheme font-semi-bold">What results does Inito give?</h6>
                            <div className="img" onClick={()=>setActive1(!active1)}></div>
                        </div>
                        <div className="body">
                            <p className="text text-dtheme font-med">Inito gives results as: High Fertility, Peak Fertility or Ovulation Confirmed.
                                Inito also shows you the charts and actual values of all 4 hormones.</p>
                        </div>
                    </li>
                    <li className={(active2) ? 'active':'' } >
                        <div className="head">
                            <h6 className="text-dtheme font-semi-bold">How many test strips are required per cycle?</h6>
                            <div className="img" onClick={()=>setActive2(!active2)}></div>
                        </div>
                        <div className="body">
                            <p className="text text-dtheme font-med">The number of tests depends on the irregularity and length of your cycles.
                                For someone with an average cycle length of 30 days, 12-15 tests may be required to track and confirm ovulation.</p>
                        </div>
                    </li>
                    <li className={(active3) ? 'active':'' }>
                        <div className="head">
                            <h6 className="text-dtheme font-semi-bold">Where can I get more refill strips? Do I need to buy a new monitor every cycle?</h6>
                            <div className="img" onClick={()=>setActive3(!active3)}></div>
                        </div>
                        <div className="body">
                            <p className="text text-dtheme font-med">Boxes of strips are available in the ‘shop’ tab in the Inito app.
                                You don’t need to purchase the monitor again.</p>
                        </div>
                    </li>
                    <li className={(active4) ? 'active':'' }>
                        <div className="head">
                            <h6 className="text-dtheme font-semi-bold">Do I need to use a test strip for each hormone?</h6>
                            <div className="img" onClick={()=>setActive4(!active4)}></div>
                        </div>
                        <div className="body">
                            <p className="text text-dtheme font-med">No. Inito is the only fertility monitor that measures Estrogen, LH,
                                PdG (urine metabolite of progesterone) and FSH on a single test strip.</p>
                        </div>
                    </li>
                </div>
                <div className="column-2">
                    <li className={(active5) ? 'active':'' }>
                        <div className="head">
                            <h6 className="text-dtheme font-semi-bold">Will Inito work if I have PCOS?</h6>
                            <div className="img" onClick={()=>setActive5(!active5)}></div>
                        </div>
                        <div className="body">
                            <p className="text text-dtheme font-med">Every woman is unique, especially with a condition like PCOS, which can influence hormone levels.
                                Inito shows you a full picture of your cycle, which can help you identify your fertile days and confirm ovulation.</p>
                        </div>
                    </li>
                    <li className={(active6) ? 'active':'' }>
                        <div className="head">
                            <h6 className="text-dtheme font-semi-bold">Do medications affect the results?</h6>
                            <div className="img" onClick={()=>setActive6(!active6)}></div>
                        </div>
                        <div className="body">
                            <p className="text text-dtheme font-med">Fertility medications or other drugs that influence your hormones can prevent Inito from giving you accurate results.
                                You will still be able to see your hormone patterns via the App.</p>
                        </div>
                    </li>
                    <li className={(active7) ? 'active':'' }>
                        <div className="head">
                            <h6 className="text-dtheme font-semi-bold">Can I use HSA benefits to purchase Inito?</h6>
                            <div className="img" onClick={()=>setActive7(!active7)}></div>
                        </div>
                        <div className="body">
                            <p className="text text-dtheme font-med">Yes!</p>
                        </div>
                    </li>
                    <li className={(active8) ? 'active':'' }>
                        <div className="head">
                            <h6 className="text-dtheme font-semi-bold">What is Inito's regulatory status in the US?</h6>
                            <div className="img" onClick={()=>setActive8(!active8)}></div>
                        </div>
                        <div className="body">
                            <p className="text text-dtheme font-med">
                                The Inito Fertility Monitor is registered with the U.S. Food and Drug Administration (FDA) as a Class I medical device that is exempt from FDA's
                                premarket notification submission requirements. The registration status should not be misunderstood as suggesting that the Inito Fertility Monitor
                                has been reviewed, cleared or approved by FDA.
                            </p>
                        </div>
                    </li>
                    <li className={(active9) ? 'active':'' }>
                        <div className="head">
                            <h6 className="text-dtheme font-semi-bold">Are there any limits to specific hormone thresholds?</h6>
                            <div className="img" onClick={()=>setActive9(!active9)}></div>
                        </div>
                        <div className="body">
                            <p className="text text-dtheme font-med">
                                Inito is designed to read all kinds of drops and surges in hormone levels.
                                However, the set limits of measurement for E3G is 600 ng/ml, PdG is 40 ug/ml, and FSH &amp; LH is 40 mIU/ml.
                            </p>
                        </div>
                    </li>
                </div>
            </ul>
        </section>
    )
}

export default QuestionAns;