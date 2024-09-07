import dwelio from "../Images/dwelio.jpg"
import ecom from "../Images/ecom.jpg"
import cart from "../Images/cart.jpg"
import tu from "../Images/tu.jpg"
import tt from "../Images/TT.jpg"
import notes from "../Images/notes.jpg"
import pg from "../Images/pg.jpg"
import geek from "../Images/geekfood.jpg"
import portfolio from "../Images/portfolio.jpg"
import "../Css/Projects.css"

export function Projects(){
    return(
        <div>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Projects & Work</h1>
            <div id="project-container">
                <div id="pro-card" class="mx-auto mt-11 transform overflow-hidden bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                    <div id="pro-img-card">
                        <img class="h-48 w-full object-center" src={dwelio} alt="Product Image" id="pro-img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
                        <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
                        <div class="flex items-center">
                        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
                        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
                        <p class="ml-auto text-base font-medium text-green-500">20% off</p>
                        </div>
                    </div>
                </div>
                <div id="pro-card" class="mx-auto mt-11 transform overflow-hidden bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                    <div id="pro-img-card">
                        <img class="h-48 w-full object-center" src={portfolio} alt="Product Image" id="pro-img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
                        <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
                        <div class="flex items-center">
                        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
                        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
                        <p class="ml-auto text-base font-medium text-green-500">20% off</p>
                        </div>
                    </div>
                </div>
                <div id="pro-card" class="mx-auto mt-11 transform overflow-hidden bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                    <div id="pro-img-card">
                        <img class="h-48 w-full object-center" src={ecom} alt="Product Image" id="pro-img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
                        <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
                        <div class="flex items-center">
                        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
                        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
                        <p class="ml-auto text-base font-medium text-green-500">20% off</p>
                        </div>
                    </div>
                </div>
                <div id="pro-card" class="mx-auto mt-11 transform overflow-hidden bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                    <div id="pro-img-card">
                        <img class="h-48 w-full object-center" src={cart} alt="Product Image" id="pro-img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
                        <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
                        <div class="flex items-center">
                        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
                        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
                        <p class="ml-auto text-base font-medium text-green-500">20% off</p>
                        </div>
                    </div>
                </div>
                <div id="pro-card" class="mx-auto mt-11 transform overflow-hidden bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                    <div id="pro-img-card">
                        <img class="h-48 w-full object-center" src={tu} alt="Product Image" id="pro-img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
                        <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
                        <div class="flex items-center">
                        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
                        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
                        <p class="ml-auto text-base font-medium text-green-500">20% off</p>
                        </div>
                    </div>
                </div>
                <div id="pro-card" class="mx-auto mt-11 transform overflow-hidden bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                    <div id="pro-img-card">
                        <img class="h-48 w-full object-center" src={tt} alt="Product Image" id="pro-img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
                        <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
                        <div class="flex items-center">
                        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
                        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
                        <p class="ml-auto text-base font-medium text-green-500">20% off</p>
                        </div>
                    </div>
                </div>
                <div id="pro-card" class="mx-auto mt-11 transform overflow-hidden bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                    <div id="pro-img-card">
                        <img class="h-48 w-full object-center" src={notes} alt="Product Image" id="pro-img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
                        <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
                        <div class="flex items-center">
                        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
                        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
                        <p class="ml-auto text-base font-medium text-green-500">20% off</p>
                        </div>
                    </div>
                </div>
                <div id="pro-card" class="mx-auto mt-11 transform overflow-hidden bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                    <div id="pro-img-card">
                        <img class="h-48 w-full object-center" src={pg} alt="Product Image" id="pro-img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
                        <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
                        <div class="flex items-center">
                        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
                        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
                        <p class="ml-auto text-base font-medium text-green-500">20% off</p>
                        </div>
                    </div>
                </div>
                <div id="pro-card" class="mx-auto mt-11 transform overflow-hidden bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                    <div id="pro-img-card">
                        <img class="h-48 w-full object-center" src={geek} alt="Product Image" id="pro-img"/>
                    </div>
                    <div class="p-4">
                        <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
                        <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
                        <div class="flex items-center">
                        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
                        <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
                        <p class="ml-auto text-base font-medium text-green-500">20% off</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}