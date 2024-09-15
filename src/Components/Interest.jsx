import "../Css/Interest.css"
import crick from "../Icons/crick.png"
import kab from "../Icons/kab.png"
import travel from "../Icons/travel.png"
import trek from "../Icons/trek.png"

export function Interest(){
    return(
        <div>
            <div className="activity-flex">
                <h1 className="mt-9">Languages Known</h1>
                <div className="activity-item">
                    <div className="icon-container">
                    <img src={crick} alt="Developing" className="icon" />
                    </div>
                    <p>Cricket</p>
                </div>
                <div className="activity-item">
                    <div className="icon-container">
                    <img src={kab} alt="Mac OS" className="icon" />
                    </div>
                    <p>Kabaddi</p>
                </div>
                <div className="activity-item">
                    <div className="icon-container">
                    <img src={travel} alt="Cinema" className="icon" />
                    </div>
                    <p>Travelling</p>
                </div>
                <div className="activity-item">
                    <div className="icon-container">
                    <img src={trek} alt="Coffee" className="icon" />
                    </div>
                    <p>Trekking</p>
                </div>
            </div>
        </div>
    )
}