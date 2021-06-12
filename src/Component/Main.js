import React from 'react'
import './style/main.css'

import bmc from '../img/bmc.png'
import git from '../img/Git.png'
import team from '../img/Team.svg'


 function Main() {
    return (
        <div className="text-gray-600 body-font mx-16">
                <div className="containerBox">
                <div className="containerContent">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Awsome JavaScript Project
                </h1>
                <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air 
                    plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot
                        chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                <div className="flex justify-center">
                    <button className="btnBMC">
                        <img src={bmc} alt="" class="w-10 p-2" />  
                        Buy me a coffie</button>
                    <button className="btnGit">
                    <img src={git} alt="" class="w-10 p-2" />  
                        Contribute</button>
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2">
                <img className="object-cover object-center" alt="hero" src={team}/>
                </div>
            </div>           
        </div>
    )
}

export default Main