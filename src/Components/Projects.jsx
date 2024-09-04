import dwelio from "../Images/dwelio.jpg"
import fs from "../Images/fullstack.jpg"
import cloud from "../Images/cloud.jpg"


export function Projects(){
    return(
        <div>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Projects</h1>
            <div class="certificate-container">
                <div class="certificate-box">
                    <div class="certificate-image">
                    <img src={dwelio} alt="Certificate 1" id="pro-img"/>
                    </div>
                    <div class="certificate-details">
                    <h3>Full Stack Web Development Course</h3><br></br>
                        <p>Key Learning : html, css, Javasctipt, React.js, Node.js, Express.js, MongoDB, Redux, Tailwind, Git</p>
                    {/* <button class="view-certificate" onClick={()=>openPopup('certificate1.jpg')}>View Certificate</button> */}
                    </div>
                </div>

                {/* <!-- Certificate Box 2 --> */}
                <div class="certificate-box">
                    <div class="certificate-image">
                    <img src={fs} alt="Certificate 2"/>
                    </div>
                    <div class="certificate-details">
                        <h3>Introduction to Node.js : Learn to Build APIs</h3><br></br>
                        <p>Key Learning : RESTful Principles, HTTP methods, Status code, Midddleware, Authentication, Authorization, Error Handling, Routing</p>
                        {/* <button class="view-certificate" onClick={()=>openPopup('certificate2.jpg')}>View Certificate</button> */}
                    </div>
                </div>

                {/* <!-- Certificate Box 3 --> */}
                <div class="certificate-box">
                    <div class="certificate-image">
                    <img src={fs} alt="Certificate 3"/>
                    </div>
                    <div class="certificate-details">
                    <h3>Cloud Essentials</h3><br></br>
                        <p>Key Learning : Saas, Paas, Iaas, Architecture, Container, Microservices, Serverless, Public, Private, Hybrid Multi Cloud</p>
                    {/* <button class="view-certificate" onClick={()=>openPopup('certificate3.jpg')}>View Certificate</button> */}
                    </div>
                </div>
                </div>

                {/* <!-- Popup for displaying the certificate image --> */}
                <div id="certificate-popup" class="popup-overlay" onClick="closePopup()">
                <div class="popup-content" onClick="event.stopPropagation()">
                    <button class="close-btn" onClick="closePopup()">X</button>
                    <img id="popup-image" src="" alt="Certificate Image"/>
                </div>
            </div>
        </div>
    )
}