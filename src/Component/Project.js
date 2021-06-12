import React, {useEffect, useState} from 'react'
import './style/project.css'

function Project() {

  const [data, setData] = useState([]);

   const fetchData = async () => 
   {
     try {
      const reponse = await fetch('http://localhost:8000/project_Item');
      
       const resJson = await reponse.json()
       setData(resJson);
     }
     catch(err) {
       console.log(err);
     }
    }

   useEffect(() => { 
    
    fetchData();
  }, []);
        return (
          <div className="container px-5 mx-auto flex flex-wrap">
            { data?.map((item, idx) => (
                <div class="xl:w-1/4 md:w-1/2 p-4">
                  <div class="bg-gray-100 p-6 rounded-lg">
                  <img class="h-40 rounded w-full object-cover object-center mb-6" src={item.projectDemo} alt="content" />
                  <h2 class="text-2xl text-gray-900 font-medium title-font">{item.projectName}</h2>
                  <h3 class="text-geay-400 text-base font-medium title-font">Developer:<span class="text-black ml-2">{item.projectAuthor}</span> </h3>
                  <hr class="h-0.5 rounded bg-gray-600"></hr>
                  <p class="leading-relaxed text-base mt-2 mb-2">{item.projectAbout}</p>
                  <a href={item.projectLink} class="btn-view bg-black hover:bg-gray-900 text-white">View Project</a>
                  <a href={item.projectSource} class="btn-view ml-2 bg-yellow-300 hover:bg-yellow-200 text-black">Source Code</a>
                </div>
            </div>
            )) }
        </div>


    )
}

export default Project;

