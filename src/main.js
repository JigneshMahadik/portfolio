import { Achievements } from "./Components/Achievements";
import { Banner } from "./Components/Banner";
import { Certifications } from "./Components/Certifications";
import { Education } from "./Components/Education";
import { Experience } from "./Components/Experience";
import { Interest } from "./Components/Interest";
import { Lang } from "./Components/Lang";
import { Navbar } from "./Components/Navbar";
import { Projects } from "./Components/Projects";
import { Publications } from "./Components/Publications";
import { Skills } from "./Components/Skills";
import './index.css';

export function Main(){
    return(
        <div>
            <Navbar/>
            <Banner/>
            <Education/>
            <Skills/>
            <Experience/>
            <Certifications/>
            <Projects/>
            <Achievements/>
            <Publications/>
            <Lang/>
            <Interest/>
        </div>
    )
}