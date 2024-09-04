import "../Css/Banner.css"
import profile from "../Images/ProfilePic.png"

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
                <h3>Fullstack Developer</h3>
                <p>
                    Seeking an opportunity in the field of software engineering with good knowledge of various technologies.
                    Ability to implement a full software development life cycle (SDLC) and analyze the performance of programs to
                    correct deficiencies.
                </p>
                {/* <!-- Buttons --> */}
                <div class="profile-buttons">
                    <button class="btn hire-btn">Hire Me</button>
                    <button class="btn download-btn">Download CV</button>
                </div>
                </div>
            </div>
        </div>
    )
}