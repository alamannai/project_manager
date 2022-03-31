
import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import AddProject from './components/AddProject';
import ProjectList from './components/ProjectList';

function App() {
  const [projectList, setProjectList] = useState([{}])


    // Read all projects
    useEffect(() => {
      axios.get('http://localhost:8000/api/projects/')
        .then(res => {
          setProjectList(res.data)
        })
    });
  

  return (
    <div className="App p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 
        xl:grid-cols-2 gap-3" >
      <div className='justify-items-center mt-0 pt-12 w-full'>
        <h1 className="mb-4 bg-gray-400 text-white pt-2 pb-2 text-bold 
        shadow-lg place-self-center mr-20 ml-20">Project Manager</h1>
        <h6 className="mb-1 text-sky-400">FASTAPI - React - MongoDB</h6>
       <AddProject />
      </div>
      <div className='justify-items-center mt-0 pt-8 w-full rounded-lg'>
      <hr />
        <h1 className="mb-4 mt-4 bg-sky-400 text-white pt-2 pb-2 text-bold 
          shadow-lg place-self-center mr-20 ml-20 rounded-full">Projects List</h1>
          <hr />
          {projectList.length > 0 ? <ProjectList projectList={projectList} />
          : 
          <h1 className ="mt-6 text-bold text-gray-700 place-self-center">No Project for now !</h1> 
          }
          

      </div>
    </div>
  );
}

export default App;
