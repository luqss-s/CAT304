
    export default function Home() {
        return (
    
        <div class="min-h-full">
            <nav class="bg-black">
            <div class="w-screen px-4 sm:px-6 lg:px-8">
                
                <div class="flex h-16 items-center ">
                <div>
                    <a href="/home" >
                    {/* <span class="text-green-600 text-3xl font-mono font-bold"> EV</span>
                    <span class="text-white text-2xl font-mono font-bold">BOOK</span> */}
                    <img class="h-32 w-32 inline" src="/LOGO3.png" alt="Your Company"></img>
                    </a>
                </div>
                <div class="flex items-center">
                    <div class="flex-shrink-0"></div>
                    <div class="hidden md:block">
                    <div class="ml-72 flex items-baseline space-x-4">
                        <a href="#" class="bg-gray-900 text-white hover:text-green-600 rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Charge Your EV Now</a>
                        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-green-600 rounded-md px-3 py-2 text-sm font-medium">How It Works</a>
                        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-green-600 rounded-md px-3 py-2 text-sm font-medium">Services</a>
                        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-green-600 rounded-md px-3 py-2 text-sm font-medium">Become EV Provider</a>
                        <a href="/contact" class="text-gray-300 hover:bg-gray-700 hover:text-green-600 rounded-md px-3 py-2 text-sm font-medium">Contact Us</a>
                    </div>
                    </div>
                </div>

                <div class="-mr-2 flex md:hidden">
                
                    <button type="button" class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="absolute -inset-0.5"></span>
                    <span class="sr-only">Open main menu</span>
                    
                    <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    
                    <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                </div>
            </div>
    
            
            {/* <div class="md:hidden" id="mobile-menu">
                <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                
                <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Reports</a>
                </div>
                <div class="border-t border-gray-700 pb-3 pt-4">
                <div class="flex items-center px-5">
                    <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
                    </div>
                    <div class="ml-3">
                    <div class="text-base font-medium leading-none text-white">Tom Cook</div>
                    <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                    </div>
                    <button type="button" class="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span class="absolute -inset-1.5"></span>
                    <span class="sr-only">View notifications</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                    </button>
                </div>
                <div class="mt-3 space-y-1 px-2">
                    <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your Profile</a>
                    <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>
                    <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign out</a>
                </div>
                </div>
            </div> */}
            </nav>
            <div class= "ml-10 ">
            <div class="absolute w-1/2 pt-20 ">
                <span class="text-6xl font-thin tracking-tight text-white">Welcome</span><br></br>
                <p class="text-white font-thin pt-10 text-2xl mt-4">
                EV Book enables you to go further, by providing reservation on available chargers, and services while charging.
                </p>
            </div>
            </div>
            
    
            <main>
            <div class=" w-screen h-screen bg-gray-700  overflow-hidden">
                <div class="opacity-40 w-max h-max ">
                <video class=" w-screen h-max bg-cover " autoplay="autoplay" loop muted >
                    <source src="vid2.mp4" type="video/mp4" ></source>
                </video>
                </div>
            </div>
                
            </main>
        </div>
        
    
        )
        
    }
    
    
    