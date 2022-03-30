import React from 'react';


function AddProject() {
  return (
    <div className="grid grid-cols-6 gap-3 bg-gray-200 m-2 rounded-lg p-3 mt-10 pb-6 ml-8 mr-8 pr-6" >
        <h5 className="mt-2 block text-gray-700 text-sm font-bold col-start-2 mb-4 col-span-4">Add Your Project</h5>

        <label 
            className="mt-2 self-center block text-gray-700 text-sm font-bold col-start-1 col-span-2"
            for="title"
         > Title </label>

        <input 
            className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-bold col-start-3 col-span-4" 
            placeholder='Title'/>

        <label 
            className="mt-2 self-center block text-gray-700 text-sm font-bold col-start-1 col-span-2"
            for="title"
        > Description </label>
        <textarea  
            className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 h-24 
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-bold col-start-3 col-span-4" 
            placeholder='Description'>
        </textarea> 

        <button 
            className="grow h-8 w-30 mt-3 bg-sky-400 text-primary font-semibold text-center rounded-full
            col-start-5 col-span-2 text-gray-700 hover:bg-sky-300" >
            Add Project
            </button>

    </div>
  );
}

export default AddProject;
