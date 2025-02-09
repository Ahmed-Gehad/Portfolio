import React from 'react'

import { Link } from 'react-router-dom';

const ProjectCard = (project) => {
    return (
        <div >
            <div className='group' >
                <img src={project.imgUrl} alt={project.title} className='rounded-4 w-100'   />
                <div className='overlay'>
                    <Link to={project.gitUrl} target='_blank'>
                    <i class="fa-solid fa-code pe-5 fs-4" title="hover text"></i>
                    </Link>
                    <Link to={project.previewUrl} target='_blank'>
                    <i class="fa-regular fa-eye fs-4"></i>
                    </Link>
                </div>
            </div>
            <div className='text-white  mt-3'>
                <h5 className='fw-bold fs-3 mb-3 text-orange'>{project.title}</h5>
                <p className='lead w-100'>{project.description}</p>
            </div>
        </div>
    )
}

export default ProjectCard