import React from 'react'

import { Link } from 'react-router-dom';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
        <div >
            <div
                className='h-52 md:h-72  rounded-xl relative group mx-2'
                style={{
                    backgroundImage: `url(${imgUrl})`, backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className='overlay absolute top-0 left-0 w-full h-full bg-[#181818]  rounded
                                bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-700 '>
                    <Link to={gitUrl} target='_blank'>
                        <i class="fa-solid fa-code pe-5 fs-4" title="hover text"></i>
                    </Link>
                    <Link to={previewUrl} target='_blank'>
                        <i class="fa-regular fa-eye fs-4"></i>
                    </Link>
                </div>

            </div>


            <div className='text-white   rounded-b-xl  py-6 px-2'>
                <h5 className='font-semibold text-2xl mb-3 text-orange'>{title}</h5>
                <p className='text-gray-300 w-100'>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard