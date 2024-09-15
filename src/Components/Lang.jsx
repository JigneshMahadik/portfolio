import "../Css/Lang.css"

export function Lang(){
    return(
        <div id="lang">
            <div className="activity-flex">
                <h1 className="mt-9">Languages Known</h1>
                <div className="activity-item">
                    <div className="icon-container">
                    {/* <img src={ractjs} alt="Developing" className="icon" /> */}
                    </div>
                    <p>English</p>
                </div>
                <div className="activity-item">
                    <div className="icon-container">
                    {/* <img src={js} alt="Mac OS" className="icon" /> */}
                    </div>
                    <p>Hindi</p>
                </div>
                <div className="activity-item">
                    <div className="icon-container">
                    {/* <img src={html} alt="Cinema" className="icon" /> */}
                    </div>
                    <p>Marathi</p>
                </div>
                <div className="activity-item">
                    <div className="icon-container">
                    {/* <img src={css} alt="Coffee" className="icon" /> */}
                    </div>
                    <p>Gujarati</p>
                </div>
            </div>
        </div>
    )
}