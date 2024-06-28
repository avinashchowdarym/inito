import '../App.css';
import egg from '../imgs/an_egg.png'
import strikeThrough from '../imgs/strike_through.png'
import harmones from '../imgs/hormones_graph_mob.jpg'
import harmonesdesk from '../imgs/hormones_graph_desktop_v2.png'
const ChartCon = () => {
    return (
        <section className="chart-con">
            <div className='chart-con__text-content'>
                <h1 className="text-center text-dtheme">
                    Never miss &nbsp;
                    <span className="an-egg">
                        <img className="text-image" src={egg} />
                         a day &nbsp;
                        <img className="strike-through" src={strikeThrough}/>
                        </span>
                        <br/> again with Inito
                </h1>
                <p className="description">
                    Inito tracks up to 6 fertile days and confirms ovulation by measuring all 4 hormones
                    in just 10 minutes:
                </p>
                <div className="chart-con__text-content__about">
                    <ul>
                        <li>
                            Estrogen, which rises 3-4 days before ovulation
                        </li>
                        <li>
                            LH, which surges 24-36 hours before ovulation
                        </li>
                        <li>
                            PdG, which rises after ovulation
                        </li>
                        <li>
                            FSH, to track follicle growth
                        </li>
                    </ul>
                </div>
            </div>
            <picture>
                <source media="(max-width: 768px)" srcset={harmones} />
                <source media="(min-width: 769px)" srcset={harmonesdesk} />
                <img className="v2-homepage-chart" src={harmonesdesk} />
            </picture>        </section>
    )
}

export default ChartCon;