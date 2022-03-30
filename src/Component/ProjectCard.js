import React from 'react'

var projectCard = [
    {
      projectName : "Mind Game",
      projectAuthor : "Priyanshu",
      projectAbout : "Basic JS Project Learned Data Structure and Manuplate function",
      projectDemo : "https://github.com/Priyanshu-official/JavaScript-Project-Zone/blob/main/Demo/Mind_Game.gif?raw=true",
      projectLink: "https://github.com/Priyanshu-official/JS-Project/tree/main/Mind_Game",
      projectSource : "https://github.com/Priyanshu-official/JS-Project/tree/main/Mind_Game"
  }
  ]

function ProjectCard() {
  return (
    <div className="container px-5 mx-auto flex flex-wrap">
        {
            projectCard?.map(({projectName,projectAuthor,projectAbout,projectDemo,projectLink,projectSource}) => (
                <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img className="h-40 rounded w-full object-cover object-center mb-6" src={projectDemo} alt="content" />
                  <h2 className="text-2xl text-gray-900 font-medium title-font">{projectName}</h2>
                  <h3 className="text-geay-400 text-base font-medium title-font">Developer:<span className="text-black ml-2">{projectAuthor}</span> </h3>
                  <hr className="h-0.5 rounded bg-gray-600"></hr>
                  <p className="leading-relaxed text-base mt-2 mb-2">${projectAbout}</p>
                  <a href={projectLink} className="inline-flex items-center bg-black border-0 py-2 px-3 focus:outline-none hover:bg-gray-900 rounded text-base text-white mt-6 md:mt-0">View Project
                  </a>
                  <a href={projectSource} className="inline-flex items-center bg-yellow-300 border-0 py-2 px-3 focus:outline-none hover:bg-yellow-200 rounded text-base text-black mx-2 mt-6 md:mt-0">Source Code
                </a>
                </div>
              </div>
            )
  )}
  </div>
  )}

export default ProjectCard;