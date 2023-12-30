'use client'
import { useState , useEffect } from 'react';

import PocketBase from 'pocketbase';
//import pb from "../lib/pocketbase";

export default function Home() {
    const register = async () => {
    try{
        const pb = new PocketBase('http://127.0.0.1:8090');
        console.log(email);
        console.log(password);
        const data = {
            "email": email,
            "password": password,
            "passwordConfirm": passwordConfirm,
            
        };
        const record = await pb.collection('customer').create(data);
        console.log('User record created:', record);

    }catch(error){}
    //console.log('Error 404 Not Found', error);
    }
    


    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [passwordConfirm, setPasswordConfirm ]=useState("");

    return (
        <section class="bg-black dark:bg-black">
            <nav class="bg-black">
                <div class="w-full px-4 sm:px-6 lg:px-8">
                    <div class="flex h-16 items-center ">
                        <div>
                            <a href="/" >
                                {/* <span class="text-green-600 text-3xl font-mono font-bold"> SOLAR</span>
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
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"></a>
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-black dark:border-green-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div class="flex justify-center ">
                                <a href="/" >
                                <img class="h-44 w-48 " src="/LOGO3.png" alt="Your Company"></img>
                                </a>
                            </div>
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center dark:text-white">
                                Create account
                            </h1>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input onChange={ (e) => setEmail(e.target.value)} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@mail.com" required=""></input>

                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input onChange={ (e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                                </div>
                                <div>
                                    <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input onChange={ (e) => setPasswordConfirm(e.target.value)} type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                                </div>
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></input>
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <a href="/login">
                                <button onClick={ register} type="button" class="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                </a>
                                <p class="text-sm font-light text-center text-gray-500 dark:text-gray-400">
                                    Already have an account? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-blue-500">Login here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>





    )
}