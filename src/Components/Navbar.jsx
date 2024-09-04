import { useEffect } from 'react';
import "../Css/Navbar.css";

export function Navbar() {

    // Function to handle scrolling to a specific section
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        }
    }

    function toggleMenu() {
        const menu = document.querySelector('.navbar-menu');
        menu.classList.toggle('active');
    }

    // Change navbar background on scroll
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 0) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id='about-section'>
            <header className="navbar">
                <div className="navbar-container">
                    {/* Logo */}
                    <div className="logo">Mj.</div>
                    {/* Menu items */}
                    <nav className="navbar-menu">
                        <ul className="menu">
                        <li onClick={() => scrollToSection("about-section")}>About</li>
                        <li onClick={() => scrollToSection("education-section")}>Education</li>
                        <li onClick={() => scrollToSection("skills-section")}>Skills</li>
                        <li onClick={() => scrollToSection("work-experience-section")}>Work Experience</li>
                        <li onClick={() => scrollToSection("certifications-section")}>Certifications</li>
                        <li onClick={() => scrollToSection("projects-section")}>Projects</li>
                        <li onClick={() => scrollToSection("achievements-section")}>Achievements</li>
                            {/* <li>Publications</li> */}
                            {/* <li>Languages Known</li> */}
                            {/* <li>Personal Interest</li> */}
                            {/* <li>Contact</li> */}
                            {/* <button id="cv">Download CV</button> */}
                        </ul>
                    </nav>
                    {/* Hamburger Menu for Mobile */}
                    <div className="hamburger" onClick={toggleMenu}>☰</div>
                </div>
            </header>
        </div>
    );
}
