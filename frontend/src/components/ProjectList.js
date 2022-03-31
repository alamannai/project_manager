import ProjectItem from './ProjectItem'

function ProjectList(props) {
    return (
        <div>
            <ul className='mb-6'>
                {props.projectList.map(project =>
                    <li className='m-4'> <ProjectItem project={project} /></li>
                    
                     )}
            </ul>
        </div>
    )
}

export default ProjectList;