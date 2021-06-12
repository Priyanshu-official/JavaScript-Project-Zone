 import React from 'react'
 import './style/Nav.css'
 import git from "../img/Git.png"
 import js from "../img/javascript.png"
 function Nav() {
    return (
        <header class="text-white body-font bg-gray-800">
                <div class="containerNav">
                    <a href="/" className ="brand title-font font-medium">
                        <img src={js} alt="js-img" className="w-20 h-20  p-2" />
                      <span className="ml-3 text-xl">JavaScript Project <span className="bg-yellow-300 ml-1 mr-1 pl-1 pr-1 text-black">Zone</span></span>
                    </a>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                      <a href="/" className="mr-5 hover:text-yellow-300">Home</a>
                      <a href="/" className="mr-5 hover:text-yellow-300">About</a>
                      <a href="/" className="mr-5 hover:text-yellow-300">Contact</a>
                    </nav>
                    <button class="btn-github">
                        <img src={git} alt="" className="w-10 p-2" />GitHub
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
        </header>
    )
}

export default Nav