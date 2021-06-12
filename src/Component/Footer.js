import React from 'react'

import js from '../img/javascript.png'
import github from '../img/github.svg'
import twitter from '../img/twitter.svg'
import linkedin from '../img/linkedin.svg'

export default function Footer() {
    return (
      <div className="text-white body-font bg-gray-800"> 
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                  <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <img src={js} alt="js" className="w-10 h-10 text-white"  viewBox="0 0 24 24">
                    </img>
                    <span className="ml-3 text-xl">JS Project</span>
                  </a>
                  <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Code By —
                    <a href="https://priyanshu-official.netlify.app/" className="text-yellow-300 ml-1 text-base" rel="noopener noreferrer" target="_blank">@Priyanshu</a>
                  </p>
                  <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href="https://github.com/Priyanshu-official" className="text-gray-500">
                      <img src={github} alt="github" className="w-10 h-10  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
                       " viewBox="0 0 24 24">
                      </img>
                    </a>
                    <a href="https://twitter.com/_priyanshu_1" class="text-gray-500">
                      <img src={twitter} alt="twitter" className="w-10 h-10 ml-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                       viewBox="0 0 24 24">
                      </img>
                    </a>
                    <a href="https://www.linkedin.com/in/priyanshuofficial/" class="text-gray-500">
                        <img src={linkedin} alt="linkdin" className="w-10 h-10 ml-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                         viewBox="0 0 24 24">
                        </img>
                      </a>
                  </span>
                </div>
        </div>
    )
}
