import gd from "../Images/gd.png"
import "../Css/Experience.css"

export function Experience(){
    return(
        <div id="work-experience-section">
            <section class="text-gray-400 bg-gray-900 body-font pt-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Work Experience</h1>
                <div class="container px-5 pb-24 mx-auto flex flex-wrap pt-14">
                    <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"></div>
                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div class="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                        <img src={gd} id="company"/>
                        </div>
                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0 text-left">
                            <h2 class="font-medium title-font text-white mb-1 text-xl">Giesecke & Devrient MS India Pvt Ltd</h2>
                            <h2 class="font-medium title-font text-white mb-1 text-xl">Intern</h2>
                            <p class="leading-relaxed">Implemented various functionalities to manage card personalization inventory, including tracking personalized cards,
                                card details, and success/failure history for various clients.
                                Resolved over 1,000 bugs in the codebase, with 10% classified as Blocker, 50% Critical, 20% Major and 20% Minor,
                                leading to significant improvements in performance and code quality, also documented application flow and modules
                                in Confluence for future guidence.
                            </p>
                        </div>
                    </div>
                    </div>
                    {/* <div class="flex relative pb-20 md:w-2/3 mx-auto">
                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"></div>
                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div class="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                        </div>
                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0 text-left">
                        <h2 class="font-medium title-font text-white mb-1 text-xl">The Catalyzer</h2>
                        <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                        </div>
                    </div>
                    </div> */}
                </div>
            </section>
        </div>
    )
}