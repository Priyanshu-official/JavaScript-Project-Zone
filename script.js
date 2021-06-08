var project = document.querySelector('.projectItem')

var projectItems = [
    {
        Name:"Mind Game",
        Author:"Priyanshu",
        About: "Basic Java Script Project. Learned about function and Manupulate data usinf JS",
        link:"#",
        Source:"https://github.com/Priyanshu-official/JavaScript-Project/tree/main/Mind_Game",
        Demo:"./Demo/Mind_Game.gif"
    },
    {
        Name:"Courses in Order",
        Author:"Priyanshu",
        About: "Basic Java Script Project. implemented Loginc and arrange in order",
        link:"#",
        Source:"https://github.com/Priyanshu-official/JavaScript-Project/tree/main/Genrating_Cart_List",
        Demo:"./Demo/Course_Cart.gif"
    },
    {
        Name:"Loding Number",
        Author:"Priyanshu",
        About: "Basic Java Script Project. Followers lodind Script",
        link:"#",
        Source:"https://github.com/Priyanshu-official/JavaScript-Project/tree/main/Number_loding",
        Demo:"./Demo/Loding_Number.gif"
    },
]


function ProjectContainer() {
    console.log("Running");
    var output = ""

    projectItems.forEach(({Name,Author,link,Source,About,Demo}) => {
        output += `<div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="${Demo}" alt="content">
          <h2 class="text-2xl text-gray-900 font-medium title-font">${Name}</h2>
          <h3 class="text-geay-400 text-base font-medium title-font">Developer:<span class="text-black ml-2">${Author}</span> </h3>
          <hr class="h-0.5 rounded bg-gray-600"></hr>
          <p class="leading-relaxed text-base mt-2 mb-2">${About}</p>
          <a herf=${link} class="inline-flex items-center bg-black border-0 py-2 px-3 focus:outline-none hover:bg-gray-900 rounded text-base text-white mt-6 md:mt-0">View Project
          </a>
          <a href=${Source} class="inline-flex items-center bg-yellow-300 border-0 py-2 px-3 focus:outline-none hover:bg-yellow-200 rounded text-base text-black mt-6 md:mt-0">Source Code
        </a>
        </div>
      </div>
        `
    })
    project.innerHTML = output
}

document.addEventListener("DOMContentLoaded", ProjectContainer);