
import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import AddProject from './components/AddProject';

function App() {
  const [projectList, setProjectList] = useState([{}])
  const [title, setTitle] = useState('') 
  const [desc, setDesc] = useState('')

    // Read all projects
    useEffect(() => {
      axios.get('http://localhost:8000/api/projects/')
        .then(res => {
          setProjectList(res.data)
        })
    });
  
  // Post a project
  const addTodoHandler = () => {
    axios.post('http://localhost:8000/api/projects/', { 'title': title, 'description': desc })
      .then(res => console.log(res))
};
  return (
    <div className="App p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-3" >
      <div className='justify-items-center mt-0 pt-12 w-full'>
        <h1 className="mb-4 bg-gray-400 text-white pt-2 pb-2 text-bold 
        shadow-lg place-self-center mr-20 ml-20">Project Manager</h1>
        <h6 className="mb-1 text-sky-400">FASTAPI - React - MongoDB</h6>
        <AddProject />
      </div>
      <div className='justify-items-center mt-0 pt-8 w-full rounded-lg'>
      <hr />
        <h1 className="mb-4 mt-4 bg-sky-400 text-white pt-2 pb-2 text-bold 
          shadow-lg place-self-center mr-20 ml-20 rounded-full">Project List</h1>
          <hr />
          <hr />

      </div>
    </div>
  );
}

export default App;
