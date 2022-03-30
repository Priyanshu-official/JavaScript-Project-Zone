import React from 'react'
import Project from './Project'
import ProjectCard from './ProjectCard'

 function ShowProject() {
    return (
        <div className="text-gray-600 body-font">
            <div className="container px-5 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Basic JavaScript Project</h1>
                <div className="h-1 w-20 bg-yellow-400 rounded"></div>
            </div>
            </div>
        </div>
        <ProjectCard/>
        <Project />
        </div>
    )
}

export default ShowProject