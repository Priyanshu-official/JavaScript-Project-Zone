var project = document.querySelector('.projectItem')


function ProjectContainer() {
    console.log("Running");
    var output = ""

    /* Fetch DATA */
    var fetchData = async ()=>{
        var reponse = await fetch('http://localhost:8000/project_Item');
        var todo = await reponse.json();

        todo.forEach(({projectName,projectAuthor,projectAbout,projectDemo,projectLink,projectSource}) => {
            output += `<div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img class="h-40 rounded w-full object-cover object-center mb-6" src="${projectDemo}" alt="content">
              <h2 class="text-2xl text-gray-900 font-medium title-font">${projectName}</h2>
              <h3 class="text-geay-400 text-base font-medium title-font">Developer:<span class="text-black ml-2">${projectAuthor}</span> </h3>
              <hr class="h-0.5 rounded bg-gray-600"></hr>
              <p class="leading-relaxed text-base mt-2 mb-2">${projectAbout}</p>
              <a href=${projectLink} class="inline-flex items-center bg-black border-0 py-2 px-3 focus:outline-none hover:bg-gray-900 rounded text-base text-white mt-6 md:mt-0">View Project
              </a>
              <a href=${projectSource} class="inline-flex items-center bg-yellow-300 border-0 py-2 px-3 focus:outline-none hover:bg-yellow-200 rounded text-base text-black mt-6 md:mt-0">Source Code
            </a>
            </div>
          </div>
            `
        })
        project.innerHTML = output
    }

    /* Calling API */
    window.onload = () =>{
        fetchData();
    }
}

document.addEventListener("DOMContentLoaded", ProjectContainer);