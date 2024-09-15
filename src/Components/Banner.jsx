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
                <h3>&lt; Fullstack Developer &gt;</h3>
                <p>
                    Seeking an opportunity in the field of software engineering with strong knowledge of various technologies like, Javascript, React.js, Node.js, Express.js, HTML ,CSS, MongoDB, Tailwind CSS, Redux, Git.
                    Ability to implement a full software development life cycle (SDLC) and analyze the performance of programs to
                    correct deficiencies.
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