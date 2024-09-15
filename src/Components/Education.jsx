import mit from "../Images/mitwpu.png"
import viv from "../Images/vivekanand.jpeg"
import "../Css/Education.css"

export function Education(){
    return(
        <div id="education-section">
            <section class="text-gray-400 bg-gray-900 body-font">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Education</h1>
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                        </div>
                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"></div>
                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div class="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                            <img src={mit} id="company"/>
                            </div>
                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0 text-left">
                                <h2 class="font-medium title-font text-white mb-1 text-xl">Master of Computer Applications - 82.70%</h2>
                                <h2 class="font-medium title-font text-white mb-1 text-xl">MIT World Peace University</h2>
                                <p class="leading-relaxed">Pune, Maharashtra</p>
                                <p class="leading-relaxed">2018-2024</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                        </div>
                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"></div>
                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div class="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                            <img src={viv} id="company"/>
                            </div>
                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0 text-left">
                                <h2 class="font-medium title-font text-white mb-1 text-xl">Bachelor of Computer Applications - 74.10%</h2>
                                <h2 class="font-medium title-font text-white mb-1 text-xl">Vivekanand College</h2>
                                <p class="leading-relaxed">Surat, Gujarat</p>
                                <p class="leading-relaxed">2015-2018</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}