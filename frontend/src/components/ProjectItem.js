import axios from 'axios'
import React from 'react'

function ProjectItem(props) {
    const deleteProjectHandler = (title) => {
    axios.delete(`http://localhost:8000/api/projects/${title}`)
        .then(res => console.log(res.data)) }
    return (
    <>
        <button className="w-full p-3 grid grid-cols-4 gap-2 rounded-lg text-gray-700
            overflow-hidden shadow-lg bg-gray-200 ">
            <div className="col-start-1 mb-4 mt-4 place-self-center">
                <div className="font-bold text-xl pt-3">
                    {props.project.title}
                    </div>
            </div>
            <div className="col-start-2 mb-4 mt-4 col-span-2">
                <div className=" text-sm pt-3 place-self-center">
                    {props.project.description} 
                </div>
            </div>
            <button onClick={() => deleteProjectHandler(props.project.title)} 
                className="grow h-8 w-8 mt-4 ml-14 mb-4 bg-red-400 rounded-lg font-semibold text-center
                col-start-4 text-gray-100 col-start-3 hover:h-10 hover:w-10 transition-all 
                duration-250 ease-in-out place-self-center" >X</button>

        </button>
    </>
    )
}

export default ProjectItem;