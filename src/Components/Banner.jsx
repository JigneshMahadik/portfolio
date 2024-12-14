import "../Css/Banner.css"
import profile from "../Images/ProfilePic.png"
import github from "../Icons/github.svg"
import linkedin from "../Icons/linkedin.svg"

export function Banner(){
    return(
        <div>
            {/* <!-- Profile Section --> */}
            <div class="profile-container">
                {/* <!-- Left Side: Profile Picture --> */}
                <div class="profile-pic">
                <img src={profile} alt="Profile Picture" />
                </div>
                {/* <!-- Right Side: Profile Details --> */}
                <div class="profile-details">
                <h2>Hi, I'm Jigneshkumar Mahadik</h2>
                <h3>&lt; Software Developer &gt;</h3>
                <p>
                    "Myself Jigneshkumar Mahadik, a passionate software developer having expertise in ReactJS 
                    and full-stack development using the MERN stack. I have hands-on expertise in building 
                    scalable web applications, integrating APIs, and implementing secure authentication systems. 
                    I thrive on delivering efficient solutions, and my dedication to continuous learning helps me 
                    stay updated with the latest technologies."
                </p>
                {/* <!-- Buttons --> */}
                <div class="profile-buttons">
                    {/* <button class="btn hire-btn">Hire Me</button> */}
                    {/* <button class="btn download-btn">Download CV</button> */}
                    <a href="https://github.com/JigneshMahadik"><img src={github} className="w-12"/></a>
                    <a href="https://www.linkedin.com/in/jigneshkumar-mahadik/"><img src={linkedin} className="w-12"/></a>
                </div>
                </div>
            </div>
        </div>
    )
}
