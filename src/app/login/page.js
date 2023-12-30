'use client'
import PocketBase from 'pocketbase';
import { useState , useEffect } from 'react';



export default function Home() {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [login1, setlogin]=useState("");

    const login = async () => {

        try{
            console.log(pb.authStore.isValid);
            const authData = await pb.collection('customer').authWithPassword(
                email,
                password,
            );
            
            
    
        }catch(error){}
        //console.log('Error 404 Not Found', error);
        }

        useEffect(() =>
        {
            setlogin(pb.authStore.isValid);
        },[])
        // after the above you can also access the auth data from the authStor
 
        
        // "logout" the last authenticated account
        //pb.authStore.clear();

    return (
        
        
        <div class=" bg-black h-screen">
            <nav class="bg-black">
                <div class="w-full px-4 sm:px-6 lg:px-8">
                    <div class="flex h-16 items-center ">
                        <div>
                        <a href="/" >
                        {/* <span class="text-green-600 text-3xl font-mono font-bold"> EV</span>
                        <span class="text-white text-2xl font-mono font-bold">BOOK</span> */}
                        <img class="h-32 w-32 inline" src="/LOGO3.png" alt="Your Company"></img>
                        </a>
                        </div>
                        <div class="flex justify-start">
                            <div class="hidden md:block">
                                <div class="ml-72 flex items-baseline space-x-4 ">
                                <a href="#" class="bg-gray-900 text-white hover:text-green-600 rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Charge Your EV Now</a>
                                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-green-600 rounded-md px-3 py-2 text-sm font-medium">How It Works</a>
                                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-green-600 rounded-md px-3 py-2 text-sm font-medium">Services</a>
                                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-green-600 rounded-md px-3 py-2 text-sm font-medium">Become EV Provider</a>
                                <a href="/contact" class="text-gray-300 hover:bg-gray-700 hover:text-green-600 rounded-md px-3 py-2 text-sm font-medium">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        </nav>
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <div class="flex justify-center">
                <a href="/" >
                <img class="h-72 w-72 inline" src="/LOGO3.png" alt="Your Company"></img>
                </a>
            </div>
            <h2 class=" text-center text-2xl font-bold leading-9 tracking-tight text-green-600">Sign in to your account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
                    <div class="mt-2">
                    <input onChange={ (e) => setEmail(e.target.value)} id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-white">Password</label>
                            <div class="text-sm">
                                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                    </div>
                    <div class="mt-2">
                        <input  onChange={ (e) => setPassword(e.target.value)} id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                    </div>
                </div>

                <div>
                    <a >
                    <button onClick={ login } type="button" class="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-grey-800 shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </a>
                </div>
            </form>

                <p class="mt-10 text-center text-sm text-white">Dont Have Account?
                    <a href="/register" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register Now</a>
                </p>
        </div>
    </div>
    )
}